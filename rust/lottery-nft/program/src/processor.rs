use crate::errors::LotteryError;
use arrayref::array_ref;
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::AccountInfo, borsh::try_from_slice_unchecked, clock::UnixTimestamp,
    entrypoint::ProgramResult, hash::Hash, msg, program_error::ProgramError, pubkey::Pubkey,
};
use std::{cell::Ref, cmp, mem};

// Declare submodules, each contains a single handler for each instruction variant in the program.
pub mod claim_nft;
pub mod claim_token;
pub mod create_lottery;
pub mod end_lottery;
pub mod get_ticket;
pub mod set_authority;
pub mod start_lottery;

// Re-export submodules handlers + associated types for other programs to consume.
pub use claim_nft::*;
pub use claim_token::*;
pub use create_lottery::*;
pub use end_lottery::*;
pub use get_ticket::*;
pub use set_authority::*;
pub use start_lottery::*;

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    input: &[u8],
) -> ProgramResult {
    use crate::instruction::LotteryInstruction;
    match LotteryInstruction::try_from_slice(input)? {
        LotteryInstruction::ClaimBid(args) => claim_nft(program_id, accounts, args),
        LotteryInstruction::ClaimToken(args) => claim_token(program_id, accounts, args),
        LotteryInstruction::CreateLottery(args) => create_lottery(program_id, accounts, args),
        LotteryInstruction::EndLottery(args) => end_lottery(program_id, accounts, args),
        LotteryInstruction::GetTicket(args) => get_ticket(program_id, accounts, args),
        LotteryInstruction::SetAuthority => set_authority(program_id, accounts),
        LotteryInstruction::StartLottery(args) => start_lottery(program_id, accounts, args),
    }
}

/// Structure with pricing floor data.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum PriceFloor {
    /// Due to borsh on the front end disallowing different arguments in enums, we have to make sure data is
    /// same size across all three
    /// No price floor, any bid is valid.
    None([u8; 32]),
    /// Explicit minimum price, any bid below this is rejected.
    MinimumPrice([u64; 4]),
    /// Hidden minimum price, revealed at the end of the lottery.
    BlindedPrice(Hash),
}

// The two extra 8's are present, one 8 is for the Vec's amount of elements and one is for the max
// usize in bid state.
// NOTE: New research suggests u32s are used for vecs in borsh, not u64s, so the first extra 8 should be a 4
// but for legacy reasons we leave it behind.
pub const BASE_AUCTION_DATA_SIZE: usize = 32 + 32 + 9 + 9 + 9 + 9 + 1 + 32 + 1 + 8 + 8 + 8;
pub const BID_LENGTH: usize = 32 + 8;
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct LotteryData {
    /// Pubkey of the authority with permission to modify this lottery.
    pub authority: Pubkey,
    /// Pubkey of the resource being bid on.
    /// TODO try to bring this back some day. Had to remove this due to a stack access violation bug
    /// interactin that happens in metaplex during redemptions due to some low level rust error
    /// that happens when LotteryData has too many fields. This field was the least used.
    ///pub resource: Pubkey,
    /// Token mint for the SPL token being used to bid
    pub token_mint: Pubkey,
    /// The time the last bid was placed, used to keep track of lottery timing.
    pub last_bid: Option<UnixTimestamp>,
    /// Slot time the lottery was officially ended by.
    pub ended_at: Option<UnixTimestamp>,
    /// End time is the cut-off point that the lottery is forced to end by.
    pub end_lottery_at: Option<UnixTimestamp>,
    /// Gap time is the amount of time in slots after the previous bid at which the lottery ends.
    pub end_lottery_gap: Option<UnixTimestamp>,
    /// Minimum price for any bid to meet.
    pub price_floor: PriceFloor,
    /// The state the lottery is in, whether it has started or ended.
    pub state: LotteryState,
    /// Lottery Bids, each user may have one bid open at a time.
    pub bid_state: BidState,
}

pub const MAX_AUCTION_DATA_EXTENDED_SIZE: usize = 8 + 9 + 2 + 200;
// Further storage for more fields. Would like to store more on the main data but due
// to a borsh issue that causes more added fields to inflict "Access violation" errors
// during redemption in main Metaplex app for no reason, we had to add this nasty PDA.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct LotteryDataExtended {
    /// Total uncancelled bids
    pub total_uncancelled_bids: u64,
    // Unimplemented fields
    /// Tick size
    pub tick_size: Option<u64>,
    /// gap_tick_size_percentage - two decimal points
    pub gap_tick_size_percentage: Option<u8>,
}

impl LotteryDataExtended {
    pub fn from_account_info(a: &AccountInfo) -> Result<LotteryDataExtended, ProgramError> {
        if a.data_len() != MAX_AUCTION_DATA_EXTENDED_SIZE {
            return Err(LotteryError::DataTypeMismatch.into());
        }

        let lottery_extended: LotteryDataExtended = try_from_slice_unchecked(&a.data.borrow_mut())?;

        Ok(lottery_extended)
    }
}

impl LotteryData {
    // Cheap methods to get at LotteryData without supremely expensive borsh deserialization calls.

    
}

/// Define valid lottery state transitions.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum LotteryState {
    Created,
    Started,
    Ended,
}

impl LotteryState {
    pub fn create() -> Self {
        LotteryState::Created
    }

    #[inline(always)]
    pub fn start(self) -> Result<Self, ProgramError> {
        match self {
            LotteryState::Created => Ok(LotteryState::Started),
            _ => Err(LotteryError::LotteryTransitionInvalid.into()),
        }
    }

    #[inline(always)]
    pub fn end(self) -> Result<Self, ProgramError> {
        match self {
            LotteryState::Started => Ok(LotteryState::Ended),
            LotteryState::Created => Ok(LotteryState::Ended),
            _ => Err(LotteryError::LotteryTransitionInvalid.into()),
        }
    }
}

/// Bids associate a bidding key with an amount bid.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct Bid(pub Pubkey, pub u64);

/// BidState tracks the running state of an lottery, each variant represents a different kind of
/// lottery being run.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum BidState {
    EnglishLottery { bids: Vec<Bid>, max: usize },
    OpenEdition { bids: Vec<Bid>, max: usize },
}

/// Bidding Implementations.
///
/// English Lottery: this stores only the current winning bids in the lottery, pruning cancelled
/// and lost bids over time.
///
/// Open Edition: All bids are accepted, cancellations return money to the bidder and always
/// succeed.
impl BidState {
    pub fn new_english(n: usize) -> Self {
        BidState::EnglishLottery {
            bids: vec![],
            max: n,
        }
    }

    pub fn new_open_edition() -> Self {
        BidState::OpenEdition {
            bids: vec![],
            max: 0,
        }
    }

    pub fn max_array_size_for(n: usize) -> usize {
        let mut real_max = n;
        if real_max < 8 {
            real_max = 8;
        } else {
            real_max = 2 * real_max
        }
        real_max
    }

    fn assert_valid_tick_size_bid(bid: &Bid, tick_size: Option<u64>) -> ProgramResult {
        if let Some(tick) = tick_size {
            if bid.1.checked_rem(tick) != Some(0) {
                msg!(
                    "This bid {:?} is not a multiple of tick size {:?}, throw it out.",
                    bid.1,
                    tick_size
                );
                return Err(LotteryError::BidMustBeMultipleOfTickSize.into());
            }
        } else {
            msg!("No tick size on this lottery")
        }

        Ok(())
    }

    fn assert_valid_gap_insertion(
        gap_tick: u8,
        beaten_bid: &Bid,
        beating_bid: &Bid,
    ) -> ProgramResult {
        // Use u128 to avoid potential overflow due to temporary mult of 100x since
        // we haven't divided yet.
        let mut minimum_bid_amount: u128 = (beaten_bid.1 as u128)
            .checked_mul((100 + gap_tick) as u128)
            .ok_or(LotteryError::NumericalOverflowError)?;
        minimum_bid_amount = minimum_bid_amount
            .checked_div(100u128)
            .ok_or(LotteryError::NumericalOverflowError)?;

        if minimum_bid_amount > beating_bid.1 as u128 {
            msg!("Rejecting inserting this bid due to gap tick size of {:?} which causes min bid of {:?} from {:?} which is the bid it is trying to beat", gap_tick, minimum_bid_amount.to_string(), beaten_bid.1);
            return Err(LotteryError::GapBetweenBidsTooSmall.into());
        }

        Ok(())
    }

    /// Push a new bid into the state, this succeeds only if the bid is larger than the current top
    /// winner stored. Crappy list information to start with.
    pub fn get_ticket(
        &mut self,
        bid: Bid,
        tick_size: Option<u64>,
        gap_tick_size_percentage: Option<u8>,
        minimum: u64,
    ) -> Result<(), ProgramError> {
        msg!("Placing bid {:?}", &bid.1.to_string());
        BidState::assert_valid_tick_size_bid(&bid, tick_size)?;
        if bid.1 < minimum {
            return Err(LotteryError::BidTooSmall.into());
        }

        match self {
            // In a capped lottery, track the limited number of winners.
            BidState::EnglishLottery { ref mut bids, max } => {
                match bids.last() {
                    Some(top) => {
                        msg!("Looking to go over the loop, but check tick size first");

                        for i in (0..bids.len()).rev() {
                            msg!("Comparison of {:?} and {:?} for {:?}", bids[i].1, bid.1, i);
                            if bids[i].1 < bid.1 {
                                if let Some(gap_tick) = gap_tick_size_percentage {
                                    BidState::assert_valid_gap_insertion(gap_tick, &bids[i], &bid)?
                                }

                                msg!("Ok we can do an insert");
                                if i + 1 < bids.len() {
                                    msg!("Doing a normal insert");
                                    bids.insert(i + 1, bid);
                                } else {
                                    msg!("Doing an on the end insert");
                                    bids.push(bid)
                                }
                                break;
                            } else if bids[i].1 == bid.1 {
                                if let Some(gap_tick) = gap_tick_size_percentage {
                                    if gap_tick > 0 {
                                        msg!("Rejecting same-bid insert due to gap tick size of {:?}", gap_tick);
                                        return Err(LotteryError::GapBetweenBidsTooSmall.into());
                                    }
                                }

                                msg!("Ok we can do an equivalent insert");
                                if i == 0 {
                                    msg!("Doing a normal insert");
                                    bids.insert(0, bid);
                                    break;
                                } else {
                                    if bids[i - 1].1 != bids[i].1 {
                                        msg!("Doing an insert just before");
                                        bids.insert(i, bid);
                                        break;
                                    }
                                    msg!("More duplicates ahead...")
                                }
                            } else if i == 0 {
                                msg!("Inserting at 0");
                                bids.insert(0, bid);
                                break;
                            }
                        }
                        let max_size = BidState::max_array_size_for(*max);

                        if bids.len() > max_size {
                            bids.remove(0);
                        }
                        Ok(())
                    }
                    _ => {
                        msg!("Pushing bid onto stack");
                        bids.push(bid);
                        Ok(())
                    }
                }
            }

            // In an open lottery, bidding simply succeeds.
            BidState::OpenEdition { bids, max } => Ok(()),
        }
    }

    /// Claim his deposited token, if the bid was a winning bid it is removed, if the bid is invalid the
    /// function simple no-ops.
    pub fn claim_token(&mut self, key: Pubkey) -> Result<(), ProgramError> {
        match self {
            BidState::EnglishLottery { ref mut bids, max } => {
                bids.retain(|b| b.0 != key);
                Ok(())
            }

            // In an open lottery, cancelling simply succeeds. It's up to the manager of an lottery
            // to decide what to do with open edition bids.
            BidState::OpenEdition { bids, max } => Ok(()),
        }
    }

    pub fn amount(&self, index: usize) -> u64 {
        match self {
            BidState::EnglishLottery { bids, max } => {
                if index >= 0 as usize && index < bids.len() {
                    return bids[bids.len() - index - 1].1;
                } else {
                    return 0;
                }
            }
            BidState::OpenEdition { bids, max } => 0,
        }
    }

    /// Check if a pubkey is currently a winner and return winner #1 as index 0 to outside world.
    pub fn is_winner(&self, key: &Pubkey, min: u64) -> Option<usize> {
        // NOTE if changing this, change in lottery.ts on front end as well where logic duplicates.

        match self {
            // Presense in the winner list is enough to check win state.
            BidState::EnglishLottery { bids, max } => {
                match bids.iter().position(|bid| &bid.0 == key && bid.1 >= min) {
                    Some(val) => {
                        let zero_based_index = bids.len() - val - 1;
                        if zero_based_index < *max {
                            Some(zero_based_index)
                        } else {
                            None
                        }
                    }
                    None => None,
                }
            }
            // There are no winners in an open edition, it is up to the lottery manager to decide
            // what to do with open edition bids.
            BidState::OpenEdition { bids, max } => None,
        }
    }

    pub fn num_winners(&self) -> u64 {
        match self {
            BidState::EnglishLottery { bids, max } => cmp::min(bids.len(), *max) as u64,
            BidState::OpenEdition { bids, max } => 0,
        }
    }

    pub fn num_possible_winners(&self) -> u64 {
        match self {
            BidState::EnglishLottery { bids, max } => *max as u64,
            BidState::OpenEdition { bids, max } => 0,
        }
    }

    /// Idea is to present #1 winner as index 0 to outside world with this method
    pub fn winner_at(&self, index: usize) -> Option<Pubkey> {
        match self {
            BidState::EnglishLottery { bids, max } => {
                if index < *max && index < bids.len() {
                    let bid = &bids[bids.len() - index - 1];
                    Some(bids[bids.len() - index - 1].0)
                } else {
                    None
                }
            }
            BidState::OpenEdition { bids, max } => None,
        }
    }
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum WinnerLimit {
    Unlimited(usize),
    Capped(usize),
}

pub const BIDDER_METADATA_LEN: usize = 32 + 32 + 8 + 8 + 1;
/// Models a set of metadata for a bidder, meant to be stored in a PDA. This allows looking up
/// information about a bidder regardless of if they have won, lost or cancelled.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct BidderMetadata {
    // Relationship with the bidder who's metadata this covers.
    pub bidder_pubkey: Pubkey,
    // Relationship with the lottery this bid was placed on.
    pub lottery_pubkey: Pubkey,
    // Amount that the user bid.
    pub last_bid: u64,
    // Tracks the last time this user bid.
    pub last_bid_timestamp: UnixTimestamp,
    // Whether the last bid the user made was cancelled. This should also be enough to know if the
    // user is a winner, as if cancelled it implies previous bids were also cancelled.
    pub cancelled: bool,
}

impl BidderMetadata {
    pub fn from_account_info(a: &AccountInfo) -> Result<BidderMetadata, ProgramError> {
        if a.data_len() != BIDDER_METADATA_LEN {
            return Err(LotteryError::DataTypeMismatch.into());
        }

        let bidder_meta: BidderMetadata = try_from_slice_unchecked(&a.data.borrow_mut())?;

        Ok(bidder_meta)
    }
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub struct BidderPot {
    /// Points at actual pot that is a token account
    pub bidder_pot: Pubkey,
    /// Originating bidder account
    pub bidder_act: Pubkey,
    /// Lottery account
    pub lottery_act: Pubkey,
    /// emptied or not
    pub emptied: bool,
}

impl BidderPot {
    pub fn from_account_info(a: &AccountInfo) -> Result<BidderPot, ProgramError> {
        if a.data_len() != mem::size_of::<BidderPot>() {
            return Err(LotteryError::DataTypeMismatch.into());
        }

        let bidder_pot: BidderPot = try_from_slice_unchecked(&a.data.borrow_mut())?;

        Ok(bidder_pot)
    }
}
