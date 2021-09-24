//! A Token Metadata program for the Solana blockchain.

pub mod entrypoint;
pub mod errors;
pub mod instruction;
pub mod processor;
pub mod utils;
// Export current sdk types for downstream users building with a different sdk version
pub use solana_program;

pub const PREFIX: &str = "store";

solana_program::declare_id!("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
