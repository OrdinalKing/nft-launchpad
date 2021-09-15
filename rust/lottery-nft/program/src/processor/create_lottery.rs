use mem::size_of;

use crate::{
    errors::LotteryError,
    processor::{
        LotteryData, LotteryDataExtended, LotteryState, Bid, BidState, PriceFloor, WinnerLimit,
        BASE_AUCTION_DATA_SIZE, MAX_AUCTION_DATA_EXTENDED_SIZE,
    },
    utils::{assert_derivation, assert_owned_by, create_or_allocate_account_raw},
    EXTENDED, PREFIX,
};

use {
    borsh::{BorshDeserialize, BorshSerialize},
    solana_program::{
        account_info::{next_account_info, AccountInfo},
        clock::UnixTimestamp,
        entrypoint::ProgramResult,
        msg,
        program_error::ProgramError,
        pubkey::Pubkey,
    },
    std::mem,
};

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub struct CreateLotteryArgs {
    /// How many winners are allowed for this lottery. See LotteryData.
    pub winners: WinnerLimit,
    /// End time is the cut-off point that the lottery is forced to end by. See LotteryData.
    pub end_lottery_at: Option<UnixTimestamp>,
    /// Gap time is how much time after the previous bid where the lottery ends. See LotteryData.
    pub end_lottery_gap: Option<UnixTimestamp>,
    /// Token mint for the SPL token used for bidding.
    pub token_mint: Pubkey,
    /// Authority
    pub authority: Pubkey,
    /// The resource being lotteryed. See LotteryData.
    pub resource: Pubkey,
    /// Set a price floor.
    pub price_floor: PriceFloor,
    /// Add a tick size increment
    pub tick_size: Option<u64>,
    /// Add a minimum percentage increase each bid must meet.
    pub gap_tick_size_percentage: Option<u8>,
}

struct Accounts<'a, 'b: 'a> {
    lottery: &'a AccountInfo<'b>,
    lottery_extended: &'a AccountInfo<'b>,
    payer: &'a AccountInfo<'b>,
    rent: &'a AccountInfo<'b>,
    system: &'a AccountInfo<'b>,
}

fn parse_accounts<'a, 'b: 'a>(
    program_id: &Pubkey,
    accounts: &'a [AccountInfo<'b>],
) -> Result<Accounts<'a, 'b>, ProgramError> {
    let account_iter = &mut accounts.iter();
    let accounts = Accounts {
        payer: next_account_info(account_iter)?,
        lottery: next_account_info(account_iter)?,
        lottery_extended: next_account_info(account_iter)?,
        rent: next_account_info(account_iter)?,
        system: next_account_info(account_iter)?,
    };
    Ok(accounts)
}

pub fn create_lottery(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    args: CreateLotteryArgs,
) -> ProgramResult {
    msg!("+ Processing CreateLottery");
    let accounts = parse_accounts(program_id, accounts)?;

    
    Ok(())
}
