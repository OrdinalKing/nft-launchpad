use crate::{
    errors::LotteryError,
    processor::{LotteryData, LotteryState, Ticket, TicketState},
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


pub fn start_lottery<'a, 'b: 'a>(
    program_id: &Pubkey,
    accounts: &'a [AccountInfo<'b>],
) -> ProgramResult {
    msg!("+ Starting Lottery");
    let accounts = parse_accounts(program_id, accounts)?;
    let clock = Clock::from_account_info(accounts.clock_sysvar)?;

    // Initialise a new lottery. The end time is calculated relative to now.
    let mut lottery = LotteryData::from_account_info(accounts.lottery)?;

    // Derive lottery address so we can make the modifications necessary to start it.
    assert_derivation(
        program_id,
        accounts.lottery,
        &[
            PREFIX.as_bytes(),
            program_id.as_ref(),
            lottery.lottery_store_id.as_ref(),
        ],
    )?;

    // Check authority is correct.
    if lottery.authority != *accounts.authority.key {
        return Err(LotteryError::InvalidAuthority.into());
    }

    let cur_timestamp = clock.unix_timestamp as u64;
    if cur_timestamp > lottery.end_lottery_at {
        return Err(LotteryError::AlreadyOverEndDate.into());
    }

    LotteryData {
        state: lottery.state.start()?,
        ..lottery
    }
    .serialize(&mut *accounts.lottery.data.borrow_mut())?;

    Ok(())
}
