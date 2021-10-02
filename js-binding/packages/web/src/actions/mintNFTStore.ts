import { Connection, Keypair, TransactionInstruction } from '@solana/web3.js';
import { MintLayout } from '@solana/spl-token';

import {
  actions,
  StringPublicKey,
  WalletSigner,
  sendTransactionWithRetry,
  toPublicKey,
  MintNFTArgs,
  createSPLTokenKeypair,
} from '@oyster/common';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { createMint } from '@oyster/common';

const { mintNFT } = actions;

// This command makes an Lottery
export async function mintNFTStore(
  connection: Connection,
  wallet: WalletSigner,
  storeid: StringPublicKey,
  lotteryId: StringPublicKey,
  mintNFTSetting: MintNFTArgs,
): Promise<{
  txid: string;
  slot: number;
  mint: string;
}> {
  if (!wallet.publicKey) throw new WalletNotConnectedError();
  // const storeKey = (
  //   await findProgramAddress(
  //     [
  //       Buffer.from(STORE_PREFIX),
  //       toPublicKey(PROGRAM_IDS.store).toBuffer(),
  //       toPublicKey(storeid).toBuffer(),
  //     ],
  //     toPublicKey(PROGRAM_IDS.store),
  //   )
  // )[0];
  const instructions: TransactionInstruction[] = [];
  const signers: Keypair[] = [];

  const mintRentExempt = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span,
  );

  // const _token = Token.createMint(
  //   connection,
  //   _wallet,
  //   toPublicKey(storeid),
  //   null,
  //   0,
  //   toPublicKey(PROGRAM_IDS.store),
  // );

  // console.log(toPublicKey(storeid));
  // const account = (await _token).createAccount(toPublicKey(storeid));

  // (await _token).mintTo(toPublicKey(storeid), toPublicKey(storeid), signers, 1);

  // (await _token).setAuthority(
  //   await account,
  //   toPublicKey(storeid),
  //   'MintTokens',
  //   toPublicKey(storeid),
  //   signers,
  // );

  const account = await createMint(
    instructions,
    wallet.publicKey,
    mintRentExempt,
    0,
    toPublicKey(storeid),
    toPublicKey(storeid),
    signers,
  );

  const tokenPoolAccount = await createSPLTokenKeypair(
    instructions,
    connection,
    wallet.publicKey,
    toPublicKey(lotteryId),
    account,
  );

  const keypair = new Keypair();

  signers.push(tokenPoolAccount);
  signers.push(keypair);

  const fullSettings = new MintNFTArgs({
    ...mintNFTSetting,
  });

  await mintNFT(
    fullSettings,
    wallet.publicKey.toBase58(),
    keypair.publicKey.toBase58(),
    storeid,
    storeid,
    account.toBase58(),
    tokenPoolAccount.publicKey.toBase58(),
    instructions,
  );

  const { txid, slot } = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
    'single',
  );

  return { txid, slot, mint: keypair.publicKey.toBase58() };
}
