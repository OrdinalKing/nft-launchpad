use mem::size_of;

use crate::{
    errors::StoreError,
    processor::{
        StoreData, StoreState, 
        BASE_STORE_DATA_SIZE
    },
    utils::{assert_derivation, assert_owned_by, create_or_allocate_account_raw, spl_token_create_account,TokenCreateAccount},
    PREFIX,
    
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
pub struct CreateStoreArgs {
    /// End time is the cut-off point that the lottery is forced to end by. See StoreData.
    pub end_lottery_at: u64,
}

struct Accounts<'a, 'b: 'a> {
    payer: &'a AccountInfo<'b>,
    lottery: &'a AccountInfo<'b>,
    token_mint: &'a AccountInfo<'b>,
    token_pool: &'a AccountInfo<'b>,
    authority: &'a AccountInfo<'b>,
    token_program: &'a AccountInfo<'b>,
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
        token_mint: next_account_info(account_iter)?,
        token_pool: next_account_info(account_iter)?,
        authority: next_account_info(account_iter)?,
        token_program: next_account_info(account_iter)?,
        rent: next_account_info(account_iter)?,
        system: next_account_info(account_iter)?,
    };
    Ok(accounts)
}
pub fn create_store(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    args: CreateStoreArgs,
) -> ProgramResult {
    msg!("+ Processing CreateStore");
    let accounts = parse_accounts(program_id, accounts)?;

    let lottery_seeds = [
        PREFIX.as_bytes(),
        program_id.as_ref(),
        &(*accounts.lottery_store.key).to_bytes(),
    ];

    // Derive the address we'll store the lottery in, and confirm it matches what we expected the
    // user to provide.
    let (lottery_key, bump) = Pubkey::find_program_address(&lottery_seeds, program_id);
    if lottery_key != *accounts.lottery.key {
        return Err(StoreError::InvalidStoreAccount.into());
    }
    msg!("+ 1");
    
    // The data must be large enough to hold at least the number of winners.
    let store_size = BASE_STORE_DATA_SIZE;

    // Create lottery account with enough space for a tickets tracking.
    create_or_allocate_account_raw(
        *program_id,
        accounts.lottery,
        accounts.rent,
        accounts.system,
        accounts.payer,
        store_size,
        &[
            PREFIX.as_bytes(),
            program_id.as_ref(),
            &(*accounts.lottery_store.key).to_bytes(),
            &[bump],
        ],
    )?;
    msg!("+ 3");
    let token_pool_seeds = [
        PREFIX.as_bytes(),
        (*accounts.token_program.key).as_ref(),
        &(*accounts.lottery.key).to_bytes(),
    ];
    let (token_pool_key, token_pool_bump) = Pubkey::find_program_address(&token_pool_seeds, accounts.token_program.key);
    
    if token_pool_key != *accounts.token_pool.key {
        return Err(StoreError::InvalidTokenPool.into());
    }
    spl_token_create_account(TokenCreateAccount{
        payer:accounts.payer.clone(),
        mint:accounts.token_mint.clone(),
        account:accounts.token_pool.clone(),
        authority:accounts.lottery.clone(),
        authority_seeds:&[
            PREFIX.as_bytes(),
            (*accounts.token_program.key).as_ref(),
            &(*accounts.lottery.key).to_bytes(),
            &[token_pool_bump],
        ],
        token_program:accounts.token_program.clone(),
        rent:accounts.rent.clone()
    })?;
    msg!("+ 2");
    // Configure Store.
    StoreData {
        authority: *accounts.authority.key,
        token_mint: *accounts.token_mint.key,
        token_pool: *accounts.token_pool.key,
        ended_at: 0,
        end_lottery_at: args.end_lottery_at,
        state: StoreState::create(),
    }
    .serialize(&mut *accounts.lottery.data.borrow_mut())?;
    
    Ok(())
}
