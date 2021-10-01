use {
    borsh::{BorshDeserialize, BorshSerialize},
};

pub use crate::processor::{
    mint_nft::MintNFTArgs,
    create_store::CreateStoreArgs,
};

/// Instructions supported by the Metadata program.
#[derive(BorshSerialize, BorshDeserialize, Clone)]
pub enum StoreInstruction {
    /// Create a new store account bound to a resource, initially in a pending state.
    ///   0. `[signer]` The account creating the store, which is authorised to make changes.
    ///   1. `[writable]` Uninitialized store account.
    ///   2. `[]` Rent sysvar
    ///   3. `[]` System account
    CreateStore(CreateStoreArgs),
    /// Mint new NFT.
    ///   0. `[signer]` The account creating the store, which is authorised to make changes.
    ///   1. `[writable]` Uninitialized store account.
    ///   2. `[]` Rent sysvar
    ///   3. `[]` System account
    MintNFT(MintNFTArgs),
    /// Move NFT from winning bid to the destination account.
    ///   0. `[writable]` The destination account
    ///   1. `[writable]` The bidder pot token account
    ///   2. `[]` The bidder pot pda account [seed of ['lottery', program_id, lottery key, bidder key]]
    ///   3. `[signer]` The authority on the lottery
    ///   4. `[]` The lottery
    ///   5. `[]` The bidder wallet
    ///   6. `[]` Token mint of the lottery
    ///   7. `[]` Clock sysvar
    ///   8. `[]` Token program
    ClaimNFT,
}

