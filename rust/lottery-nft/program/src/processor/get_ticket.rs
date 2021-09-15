//! Places a bid on a running lottery, the logic here implements a standard English lottery
//! mechanism, once the lottery starts, new bids can be made until 10 minutes has passed with no
//! new bid. At this point the lottery ends.
//!
//! Possible Attacks to Consider:
//!
//! 1) A user bids many many small bids to fill up the buffer, so that his max bid wins.
//! 2) A user bids a large amount repeatedly to indefinitely delay the lottery finishing.
//!
//! A few solutions come to mind: don't allow cancelling bids, and simply prune all bids that
//! are not winning bids from the state.

use borsh::try_to_vec_with_schema;

use crate::{
    errors::LotteryError,
    processor::{
        LotteryData, LotteryDataExtended, LotteryState, Bid, BidderMetadata, BidderPot, PriceFloor,
    },
    utils::{
        assert_derivation, assert_initialized, assert_owned_by, assert_signer,
        assert_token_program_matches_package, create_or_allocate_account_raw, spl_token_transfer,
        TokenTransferParams,
    },
    EXTENDED, PREFIX,
};

use super::BIDDER_METADATA_LEN;

use {
    borsh::{BorshDeserialize, BorshSerialize},
    solana_program::{
        account_info::{next_account_info, AccountInfo},
        entrypoint::ProgramResult,
        msg,
        program::{invoke, invoke_signed},
        program_error::ProgramError,
        program_option::COption,
        program_pack::Pack,
        pubkey::Pubkey,
        rent::Rent,
        system_instruction,
        system_instruction::create_account,
        sysvar::{clock::Clock, Sysvar},
    },
    spl_token::state::Account,
    std::mem,
};

/// Arguments for the GetTicket instruction discriminant .
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub struct GetTicketArgs {
    /// Size of the bid being placed. The user must have enough SOL to satisfy this amount.
    pub amount: u64,
    /// Resource being bid on.
    pub resource: Pubkey,
}

struct Accounts<'a, 'b: 'a> {
    lottery: &'a AccountInfo<'b>,
    lottery_extended: &'a AccountInfo<'b>,
    bidder_meta: &'a AccountInfo<'b>,
    bidder_pot: &'a AccountInfo<'b>,
    bidder_pot_token: &'a AccountInfo<'b>,
    bidder: &'a AccountInfo<'b>,
    bidder_token: &'a AccountInfo<'b>,
    clock_sysvar: &'a AccountInfo<'b>,
    mint: &'a AccountInfo<'b>,
    payer: &'a AccountInfo<'b>,
    rent: &'a AccountInfo<'b>,
    system: &'a AccountInfo<'b>,
    token_program: &'a AccountInfo<'b>,
    transfer_authority: &'a AccountInfo<'b>,
}

fn parse_accounts<'a, 'b: 'a>(
    program_id: &Pubkey,
    accounts: &'a [AccountInfo<'b>],
) -> Result<Accounts<'a, 'b>, ProgramError> {
    let account_iter = &mut accounts.iter();
    let accounts = Accounts {
        bidder: next_account_info(account_iter)?,
        bidder_token: next_account_info(account_iter)?,
        bidder_pot: next_account_info(account_iter)?,
        bidder_pot_token: next_account_info(account_iter)?,
        bidder_meta: next_account_info(account_iter)?,
        lottery: next_account_info(account_iter)?,
        lottery_extended: next_account_info(account_iter)?,
        mint: next_account_info(account_iter)?,
        transfer_authority: next_account_info(account_iter)?,
        payer: next_account_info(account_iter)?,
        clock_sysvar: next_account_info(account_iter)?,
        rent: next_account_info(account_iter)?,
        system: next_account_info(account_iter)?,
        token_program: next_account_info(account_iter)?,
    };

    assert_owned_by(accounts.lottery, program_id)?;
    assert_owned_by(accounts.lottery_extended, program_id)?;
    assert_owned_by(accounts.bidder_token, &spl_token::id())?;

    if !accounts.bidder_pot.data_is_empty() {
        assert_owned_by(accounts.bidder_pot, program_id)?;
    }
    if !accounts.bidder_meta.data_is_empty() {
        assert_owned_by(accounts.bidder_meta, program_id)?;
    }

    assert_owned_by(accounts.mint, &spl_token::id())?;
    assert_owned_by(accounts.bidder_pot_token, &spl_token::id())?;
    assert_signer(accounts.bidder)?;
    assert_signer(accounts.payer)?;
    assert_signer(accounts.transfer_authority)?;
    assert_token_program_matches_package(accounts.token_program)?;

    if *accounts.token_program.key != spl_token::id() {
        return Err(LotteryError::InvalidTokenProgram.into());
    }

    Ok(accounts)
}

#[allow(clippy::absurd_extreme_comparisons)]
pub fn get_ticket<'r, 'b: 'r>(
    program_id: &Pubkey,
    accounts: &'r [AccountInfo<'b>],
    args: GetTicketArgs,
) -> ProgramResult {
    msg!("+ Processing GetTicket");
    let accounts = parse_accounts(program_id, accounts)?;

    
    Ok(())
}
