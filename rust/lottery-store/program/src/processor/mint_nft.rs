use mem::size_of;

use crate::{
    errors::StoreError,
    processor::{
        NFTMeta, StoreData
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


struct Accounts<'a, 'b: 'a> {
  payer: &'a AccountInfo<'b>,
  nftmeta: &'a AccountInfo<'b>,
  authority: &'a AccountInfo<'b>,
  store_id: &'a AccountInfo<'b>,
  token_mint: &'a AccountInfo<'b>,
  token_pool: &'a AccountInfo<'b>,
  token_program: &'a AccountInfo<'b>,
  rent: &'a AccountInfo<'b>,
  system: &'a AccountInfo<'b>,
}


#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub struct MintNFTArgs {
  /// The name of the asset
  pub name: String,
  /// The symbol for the asset
  pub symbol: String,
  /// URI pointing to JSON representing the asset
  pub uri: String,
  /// Pubkey for mint address
  /// 
  pub bump: u8,
}

fn parse_accounts<'a, 'b: 'a>(
  program_id: &Pubkey,
  accounts: &'a [AccountInfo<'b>],
) -> Result<Accounts<'a, 'b>, ProgramError> {
  let account_iter = &mut accounts.iter();
  let accounts = Accounts {
      payer: next_account_info(account_iter)?,
      nftmeta: next_account_info(account_iter)?,
      authority: next_account_info(account_iter)?,
      store_id: next_account_info(account_iter)?,
      token_mint: next_account_info(account_iter)?,
      token_pool: next_account_info(account_iter)?,
      token_program: next_account_info(account_iter)?,
      rent: next_account_info(account_iter)?,
      system: next_account_info(account_iter)?,
  };
  Ok(accounts)
}

pub fn mint_nft(
  program_id: &Pubkey,
  accounts: &[AccountInfo],
  args: MintNFTArgs,
) -> ProgramResult {
  let accounts = parse_accounts(program_id, accounts)?;


  create_or_allocate_account_raw(
    *program_id,
    accounts.nftmeta,
    accounts.rent,
    accounts.system,
    accounts.payer,
    std::mem::size_of::<NFTMeta>() ,
    &[
        &(*accounts.nftmeta).as_bytes(),
        &[args.bump],
    ],
  )?;

  // Load the store and verify this bid is valid.
  let mut store = StoreData::from_account_info(accounts.store_id)?;

  // spl_token_mint_to(
  //   TokenMintToParams {
  //     mint: accounts.token_mint.clone(),
  //     destination: accounts.token_pool.clone(),
  //     amount: 1,
  //     authority: accounts.store_id.clone(),
  //     authority_signer_seeds: &[
  //       &(*accounts.store_id).as_bytes(),
  //       &[store.bump],
  //     ],
  //     token_program: accounts.token_program.clone(),
  //   }
  // )?;

  store.nft_amount += 1;

  // Configure Store.
  NFTMeta {
    store_id: *accounts.store_id.key,
    name: args.name,
    symbol: args.symbol,
    uri: args.uri,
    mint: *accounts.token_mint.key,
    token_pool: *accounts.token_pool.key,
    authority: *accounts.authority.key,
    exist_nft: 1,
    bump: args.bump,
  }
  .serialize(&mut * accounts.nftmeta.data.borrow_mut())?;

  Ok(())
)?;

}