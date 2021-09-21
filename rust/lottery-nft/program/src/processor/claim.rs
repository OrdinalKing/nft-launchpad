//! Claim bid winnings into a target SPL account, only the authorised key can do this, though the
//! target can be any SPL account.

use crate::{
    errors::LotteryError,
    processor::{LotteryData},
    utils::{
        assert_derivation, assert_initialized, assert_owned_by, assert_signer,
        assert_token_program_matches_package, create_or_allocate_account_raw, spl_token_transfer,
        TokenTransferParams,
    },
    PREFIX,
};

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

struct Accounts<'a, 'b: 'a> {
    destination: &'a AccountInfo<'b>,
    bidder_pot_token: &'a AccountInfo<'b>,
    bidder_pot: &'a AccountInfo<'b>,
    authority: &'a AccountInfo<'b>,
    lottery: &'a AccountInfo<'b>,
    bidder: &'a AccountInfo<'b>,
    mint: &'a AccountInfo<'b>,
    clock_sysvar: &'a AccountInfo<'b>,
    token_program: &'a AccountInfo<'b>,
}

fn parse_accounts<'a, 'b: 'a>(
    program_id: &Pubkey,
    accounts: &'a [AccountInfo<'b>],
) -> Result<Accounts<'a, 'b>, ProgramError> {
    let account_iter = &mut accounts.iter();
    let accounts = Accounts {
        destination: next_account_info(account_iter)?,
        bidder_pot_token: next_account_info(account_iter)?,
        bidder_pot: next_account_info(account_iter)?,
        authority: next_account_info(account_iter)?,
        lottery: next_account_info(account_iter)?,
        bidder: next_account_info(account_iter)?,
        mint: next_account_info(account_iter)?,
        clock_sysvar: next_account_info(account_iter)?,
        token_program: next_account_info(account_iter)?,
    };

    assert_owned_by(accounts.lottery, program_id)?;
    assert_owned_by(accounts.mint, &spl_token::id())?;
    assert_owned_by(accounts.destination, &spl_token::id())?;
    assert_owned_by(accounts.bidder_pot_token, &spl_token::id())?;
    assert_owned_by(accounts.bidder_pot, program_id)?;
    assert_signer(accounts.authority)?;
    assert_token_program_matches_package(accounts.token_program)?;

    if *accounts.token_program.key != spl_token::id() {
        return Err(LotteryError::InvalidTokenProgram.into());
    }

    Ok(accounts)
}

pub fn claim(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
) -> ProgramResult {
    msg!("+ Processing Claim");
    let accounts = parse_accounts(program_id, accounts)?;
    let clock = Clock::from_account_info(accounts.clock_sysvar)?;
    
    Ok(())
}
