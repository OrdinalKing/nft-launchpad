import { Connection, Keypair, TransactionInstruction } from '@solana/web3.js';
import {
  utils,
  actions,
  findProgramAddress,
  CreateLotteryArgs,
  StringPublicKey,
  toPublicKey,
  WalletSigner,
  sendTransactionWithRetry,
} from '@oyster/common';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';

const { LOTTERY_PREFIX, createLottery } = actions;

// This command makes an Lottery
export async function makeLottery(
  connection: Connection,
  wallet: WalletSigner,
  lotteryStore: StringPublicKey,
  tokenMint: StringPublicKey,
  LotterySettings: CreateLotteryArgs,
): Promise<{
  txid: string;
  slot: number;
  lottery: string;
}> {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const PROGRAM_IDS = utils.programIds();
  const tokenPool = new Keypair();

  const signers: Keypair[] = [];
  const instructions: TransactionInstruction[] = [];
  const lotteryKey = (
    await findProgramAddress(
      [
        Buffer.from(LOTTERY_PREFIX),
        toPublicKey(PROGRAM_IDS.lottery).toBuffer(),
        toPublicKey(lotteryStore).toBuffer(),
      ],
      toPublicKey(PROGRAM_IDS.lottery),
    )
  )[0];

  const fullSettings = new CreateLotteryArgs({
    ...LotterySettings,
  });

  createLottery(
    fullSettings,
    wallet.publicKey.toBase58(),
    lotteryStore,
    tokenMint,
    tokenPool.publicKey.toBase58(),
    lotteryKey,
    instructions,
  );

  const { txid, slot } = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
  );

  return { txid, slot, lottery: lotteryKey };
}
