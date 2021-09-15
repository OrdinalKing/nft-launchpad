use crate::{
    errors::LotteryError,
    processor::{LotteryData, LotteryState, Bid, BidState, PriceFloor, WinnerLimit},
    utils::{assert_derivation, assert_owned_by, assert_signer, create_or_allocate_account_raw},
    PREFIX,
};

use {
    borsh::{BorshDeserialize, BorshSerialize},
    solana_program::{
        account_info::{next_account_info, AccountInfo},
        clock::Clock,
        entrypoint::ProgramResult,
        hash, msg,
        program_error::ProgramError,
        pubkey::Pubkey,
        sysvar::Sysvar,
    },
    std::mem,
};

type Price = u64;
type Salt = u64;
type Revealer = (Price, Salt);

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub struct EndLotteryArgs {
    /// The resource being lotteryed. See LotteryData.
    pub resource: Pubkey,
    /// If the lottery was blinded, a revealing price must be specified to release the lottery
    /// winnings.
    pub reveal: Option<Revealer>,
}

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

fn reveal(price_floor: PriceFloor, revealer: Option<Revealer>) -> Result<PriceFloor, ProgramError> {
    // If the price floor was blinded, we update it.
    if let PriceFloor::BlindedPrice(blinded) = price_floor {
        // If the hash matches, update the price to the actual minimum.
        if let Some(reveal) = revealer {
            let reveal_hash = hash::hashv(&[&reveal.0.to_be_bytes(), &reveal.1.to_be_bytes()]);
            if reveal_hash != blinded {
                return Err(LotteryError::InvalidReveal.into());
            }
            Ok(PriceFloor::MinimumPrice([reveal.0, 0, 0, 0]))
        } else {
            return Err(LotteryError::MustReveal.into());
        }
    } else {
        // No change needed in the else case.
        Ok(price_floor)
    }
}

pub fn end_lottery<'a, 'b: 'a>(
    program_id: &Pubkey,
    accounts: &'a [AccountInfo<'b>],
    args: EndLotteryArgs,
) -> ProgramResult {
    msg!("+ Processing EndLottery");
    let accounts = parse_accounts(program_id, accounts)?;
    let clock = Clock::from_account_info(accounts.clock_sysvar)?;

    
    Ok(())
}
