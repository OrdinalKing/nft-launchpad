import { Connection, Keypair, TransactionInstruction } from '@solana/web3.js';
import {
  utils,
  actions,
  findProgramAddress,
  CreateStoreArgs,
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
  const storeKey = (
    await findProgramAddress(
      [Buffer.from(STORE_PREFIX), toPublicKey(PROGRAM_IDS.store).toBuffer()],
      toPublicKey(PROGRAM_IDS.store),
    )
  )[0];

  const fullSettings = new CreateStoreArgs({
    ...StoreSettings,
  });

  createStore(
    fullSettings,
    wallet.publicKey.toBase58(),
    storeKey,
    instructions,
  );

  const { txid, slot } = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
  );

  return { txid, slot, store: storeKey };
}
