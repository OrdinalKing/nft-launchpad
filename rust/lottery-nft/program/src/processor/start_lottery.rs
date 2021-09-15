use crate::{
    errors::LotteryError,
    processor::{LotteryData, LotteryState, Bid, BidState, WinnerLimit},
    utils::{assert_derivation, assert_owned_by, assert_signer, create_or_allocate_account_raw},
    PREFIX,
};

use {
    borsh::{BorshDeserialize, BorshSerialize},
    solana_program::{
        account_info::{next_account_info, AccountInfo},
        clock::Clock,
        entrypoint::ProgramResult,
        msg,
        program_error::ProgramError,
        pubkey::Pubkey,
        sysvar::Sysvar,
    },
    std::mem,
};

struct Accounts<'a, 'b: 'a> {
    authority: &'a AccountInfo<'b>,
    lottery: &'a AccountInfo<'b>,
    clock_sysvar: &'a AccountInfo<'b>,
}

fn parse_accounts<'a, 'b: 'a>(
    program_id: &Pubkey,
    accounts: &'a [AccountInfo<'b>],
) -> Result<Accounts<'a, 'b>, ProgramError> {
    let account_iter = &mut accounts.iter();
    let accounts = Accounts {
        authority: next_account_info(account_iter)?,
        lottery: next_account_info(account_iter)?,
        clock_sysvar: next_account_info(account_iter)?,
    };
    assert_owned_by(accounts.lottery, program_id)?;
    assert_signer(accounts.authority)?;
    Ok(accounts)
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub struct StartLotteryArgs {
    /// The resource being lotteryed. See LotteryData.
    pub resource: Pubkey,
}

pub fn start_lottery<'a, 'b: 'a>(
    program_id: &Pubkey,
    accounts: &'a [AccountInfo<'b>],
    args: StartLotteryArgs,
) -> ProgramResult {
    msg!("+ Processing StartLottery");
    let accounts = parse_accounts(program_id, accounts)?;
    let clock = Clock::from_account_info(accounts.clock_sysvar)?;

    
    Ok(())
}
