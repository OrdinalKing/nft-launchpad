import { Connection, Keypair, TransactionInstruction } from '@solana/web3.js';
import {
  actions,
  StringPublicKey,
  WalletSigner,
  sendTransactionWithRetry,
  utils,
  LotteryData,
} from '@oyster/common';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { closeAccount } from '@project-serum/serum/lib/token-instructions';
import { AccountLayout } from '@solana/spl-token';

const { claimToken } = actions;
const { createTokenAccountIfNotExist } = utils;

// This command makes an Lottery
export async function claimDepositedToken(
  connection: Connection,
  wallet: WalletSigner,
  lottery: StringPublicKey,
  ticket: StringPublicKey,
  lotteryData: LotteryData,
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

  const userWsolAccount = await createTokenAccountIfNotExist(
    connection,
    null,
    wallet.publicKey,
    utils.WRAPPED_SOL_MINT.toBase58(),
    lotteryData.ticketPrice.toNumber() + accountRentExempt,
    instructions,
    signers,
  );

  await claimToken(
    lottery,
    wallet.publicKey.toBase58(),
    ticket,
    lotteryData.tokenPool,
    userWsolAccount.toBase58(),
    instructions,
  );
  instructions.push(
    closeAccount({
      source: userWsolAccount,
      destination: wallet,
      owner: wallet,
    }),
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
