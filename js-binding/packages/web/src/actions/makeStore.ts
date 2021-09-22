import { Connection, Keypair, TransactionInstruction } from '@solana/web3.js';
import {
  utils,
  actions,
  findProgramAddress,
  CreateStoreArgs,
  StringPublicKey,
  toPublicKey,
  STORE_PREFIX,
  WalletSigner,
  sendTransactionWithRetry,
} from '@oyster/common';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';

const { createStore } = actions;

// This command makes an Lottery
export async function makeStore(
  connection: Connection,
  wallet: WalletSigner,
  tokenMint: StringPublicKey,
  StoreSettings: CreateStoreArgs,
): Promise<{
  txid: string;
  slot: number;
  store: string;
}> {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const PROGRAM_IDS = utils.programIds();

  const signers: Keypair[] = [];
  const instructions: TransactionInstruction[] = [];
  const lotteryKey = (
    await findProgramAddress(
      [Buffer.from(STORE_PREFIX), toPublicKey(PROGRAM_IDS.lottery).toBuffer()],
      toPublicKey(PROGRAM_IDS.lottery),
    )
  )[0];

  const fullSettings = new CreateStoreArgs({
    ...StoreSettings,
  });

  createStore(
    fullSettings,
    wallet.publicKey.toBase58(),
    tokenMint,
    lotteryKey,
    instructions,
  );

  const { txid, slot } = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
  );

  return { txid, slot, store: lotteryKey };
}
