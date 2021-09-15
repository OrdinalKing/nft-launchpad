//! Cancels an existing bid. This only works in two cases:
//!
//! 1) The lottery is still going on, in which case it is possible to cancel a bid at any time.
//! 2) The lottery has finished, but the bid did not win. This allows users to claim back their
//!    funds from bid accounts.

use crate::{
    errors::LotteryError,
    processor::{LotteryData, LotteryDataExtended, BidderMetadata, BidderPot},
    utils::{
        assert_derivation, assert_initialized, assert_owned_by, assert_signer,
        assert_token_program_matches_package, create_or_allocate_account_raw, spl_token_transfer,
        TokenTransferParams,
    },
    EXTENDED, PREFIX,
};

use super::LotteryState;

use {
    borsh::{BorshDeserialize, BorshSerialize},
    solana_program::{
        account_info::{next_account_info, AccountInfo},
        entrypoint::ProgramResult,
        msg,
        program::invoke_signed,
        program_error::ProgramError,
        program_pack::Pack,
        pubkey::Pubkey,
        system_instruction,
        sysvar::{clock::Clock, Sysvar},
    },
    spl_token::state::Account,
};

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub struct ClaimTokenArgs {
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
    rent: &'a AccountInfo<'b>,
    system: &'a AccountInfo<'b>,
    token_program: &'a AccountInfo<'b>,
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
        clock_sysvar: next_account_info(account_iter)?,
        rent: next_account_info(account_iter)?,
        system: next_account_info(account_iter)?,
        token_program: next_account_info(account_iter)?,
    };

    assert_owned_by(accounts.lottery, program_id)?;
    assert_owned_by(accounts.lottery_extended, program_id)?;
    assert_owned_by(accounts.bidder_meta, program_id)?;
    assert_owned_by(accounts.mint, &spl_token::id())?;
    assert_owned_by(accounts.bidder_pot, program_id)?;
    assert_owned_by(accounts.bidder_pot_token, &spl_token::id())?;
    assert_signer(accounts.bidder)?;
    assert_token_program_matches_package(accounts.token_program)?;

    if *accounts.token_program.key != spl_token::id() {
        return Err(LotteryError::InvalidTokenProgram.into());
    }

    Ok(accounts)
}

pub fn claim_token(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    args: ClaimTokenArgs,
) -> ProgramResult {
    msg!("+ Processing Cancelbid");
    let accounts = parse_accounts(program_id, accounts)?;

    
    Ok(())
}
