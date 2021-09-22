use crate::errors::StoreError;
use arrayref::array_ref;
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::AccountInfo, borsh::try_from_slice_unchecked, clock::UnixTimestamp,
    entrypoint::ProgramResult, hash::Hash, msg, program_error::ProgramError, pubkey::Pubkey,
};
use std::{cell::Ref, cmp, mem};

// Declare submodules, each contains a single handler for each instruction variant in the program.
pub mod create_store;

// Re-export submodules handlers + associated types for other programs to consume.
pub use create_store::*;

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    input: &[u8],
) -> ProgramResult {
    use crate::instruction::StoreInstruction;
    match 
        StoreInstruction::CreateStore(args) => create_store(program_id, accounts, args),
    }
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct StoreData {
    /// Pubkey of the authority with permission to modify this store.
    pub authority: Pubkey,
    /// Token mint for the SPL token being used to bid
    pub token_mint: Pubkey,
    /// Token account to store all bids
    pub token_pool: Pubkey,
    /// Slot time the store was officially ended by.
    pub ended_at: u64,
    /// End time is the cut-off point that the store is forced to end by.
    pub end_store_at: u64,
    /// The state the store is in, whether it has started or ended.
    pub state: StoreState,
}
pub const BASE_STORE_DATA_SIZE: usize = 32 + 32 + 32 + 8 + 8 + 1;

impl StoreData {
    pub fn from_account_info(a: &AccountInfo) -> Result<StoreData, ProgramError> {
        if (a.data_len() - BASE_STORE_DATA_SIZE) != 0 {
            return Err(StoreError::DataTypeMismatch.into());
        }

        let store: StoreData = try_from_slice_unchecked(&a.data.borrow_mut())?;

        Ok(store)
    }
}

/// Define valid store state transitions.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum StoreState {
    Created,
    Started,
    Ended,
}

impl StoreState {
    pub fn create() -> Self {
        StoreState::Created
    }

    #[inline(always)]
    pub fn start(self) -> Result<Self, ProgramError> {
        match self {
            StoreState::Created => Ok(StoreState::Started),
            _ => Err(StoreError::StoreTransitionInvalid.into()),
        }
    }

    #[inline(always)]
    pub fn end(self) -> Result<Self, ProgramError> {
        match self {
            StoreState::Started => Ok(StoreState::Ended),
            StoreState::Created => Ok(StoreState::Ended),
            _ => Err(StoreError::StoreTransitionInvalid.into()),
        }
    }
}
