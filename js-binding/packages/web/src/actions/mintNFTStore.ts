import { Connection, Keypair, TransactionInstruction } from '@solana/web3.js';
// import { MintLayout } from '@solana/spl-token';

import {
  actions,
  StringPublicKey,
  WalletSigner,
  sendTransactionWithRetry,
  toPublicKey,
  utils,
  MintNFTArgs,
} from '@oyster/common';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { Token } from '@solana/spl-token';
// import { createMintAndAccountWithOne } from './createMintAndAccountWithOne';
// import { sign } from 'crypto';

const { mintNFT } = actions;

// This command makes an Lottery
export async function mintNFTStore(
  connection: Connection,
  wallet: WalletSigner,
  storeid: StringPublicKey,
  mintNFTSetting: MintNFTArgs,
): Promise<{
  txid: string;
  slot: number;
  store: string;
}> {
  if (!wallet.publicKey) throw new WalletNotConnectedError();
  const _wallet: any = wallet;

  const PROGRAM_IDS = utils.programIds();
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

  // const mintRentExempt = await connection.getMinimumBalanceForRentExemption(
  //   MintLayout.span,
  // );

  const _token = Token.createMint(
    connection,
    _wallet,
    toPublicKey(storeid),
    null,
    0,
    toPublicKey(PROGRAM_IDS.store),
  );

  const account = (await _token).createAccount(toPublicKey(storeid));

  (await _token).mintTo(toPublicKey(storeid), toPublicKey(storeid), signers, 1);

  (await _token).setAuthority(
    await account,
    toPublicKey(storeid),
    'MintTokens',
    toPublicKey(storeid),
    signers,
  );

  // const { mint, account} = await createMintAndAccountWithOne(
  //   wallet.publicKey,
  //   storeid,
  //   mintRentExempt,
  //   instructions,
  //   signers,
  // );

  // const tokenPoolAccount = await createSPLTokenKeypair(
  //   instructions,
  //   connection,
  //   wallet.publicKey,
  //   toPublicKey(storeid),
  //   mintToken,
  // );

  // signers.push(tokenPoolAccount);

  const fullSettings = new MintNFTArgs({
    ...mintNFTSetting,
  });

  await mintNFT(
    fullSettings,
    wallet.publicKey.toBase58(),
    storeid,
    (await _token).publicKey.toBase58(),
    (await account).toBase58(),
    instructions,
  );

  const { txid, slot } = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
    'single',
  );

  return { txid, slot, store: storeid };
}
