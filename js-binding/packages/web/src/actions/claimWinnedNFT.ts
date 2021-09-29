import { Connection, Keypair, TransactionInstruction } from '@solana/web3.js';
import {
  actions,
  StringPublicKey,
  WalletSigner,
  sendTransactionWithRetry,
  utils,
  NFTMeta,
} from '@oyster/common';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { AccountLayout } from '@solana/spl-token';

const { claimNFT } = actions;
const { createTokenAccountIfNotExist } = utils;

// This command makes an Lottery
export async function claimWinnedNFT(
  connection: Connection,
  wallet: WalletSigner,
  lottery: StringPublicKey,
  lotteryStore: StringPublicKey,
  ticket: StringPublicKey,
  nftMetaAccount: StringPublicKey,
  nftMetaData: NFTMeta,
): Promise<{
  txid: string;
  slot: number;
}> {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const instructions: TransactionInstruction[] = [];

  const signers: Keypair[] = [];

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(
    AccountLayout.span,
  );

  const userNFTAccount = await createTokenAccountIfNotExist(
    connection,
    null,
    wallet.publicKey,
    nftMetaData.mint,
    accountRentExempt,
    instructions,
    signers,
  );

  await claimNFT(
    lottery,
    lotteryStore,
    wallet.publicKey.toBase58(),
    ticket,
    nftMetaAccount,
    nftMetaData.mint,
    nftMetaData.token_pool,
    userNFTAccount.toBase58(),
    instructions,
  );
  const { txid, slot } = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
    'single',
  );

  return { txid, slot };
}
