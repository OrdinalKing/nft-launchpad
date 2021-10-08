import {
  Connection,
  Keypair,
  SystemProgram,
  TransactionInstruction,
} from '@solana/web3.js';
import { AccountLayout, MintLayout, Token } from '@solana/spl-token';

import {
  actions,
  StringPublicKey,
  WalletSigner,
  sendTransactionWithRetry,
  toPublicKey,
  MintNFTArgs,
  programIds,
} from '@oyster/common';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';

const { mintNFT } = actions;

// This command makes an Lottery
export async function mintNFTStore(
  connection: Connection,
  wallet: WalletSigner,
  storeid: StringPublicKey,
  lotteryId: StringPublicKey,
  mintNFTSetting: MintNFTArgs,
  files: File[],
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
  console.log(files);
  // Allocate memory for the account
  const mintRent = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span,
  );
  const accountRent = await connection.getMinimumBalanceForRentExemption(
    AccountLayout.span,
  );
  const mintAccount = new Keypair();
  const tokenAccount = new Keypair();

  instructions.push(
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: mintAccount.publicKey,
      lamports: mintRent,
      space: MintLayout.span,
      programId: programIds().token,
    }),
  );

  instructions.push(
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: tokenAccount.publicKey,
      lamports: accountRent,
      space: AccountLayout.span,
      programId: programIds().token,
    }),
  );

  instructions.push(
    Token.createInitMintInstruction(
      programIds().token,
      mintAccount.publicKey,
      0,
      wallet.publicKey,
      wallet.publicKey,
    ),
  );
  instructions.push(
    Token.createInitAccountInstruction(
      programIds().token,
      mintAccount.publicKey,
      tokenAccount.publicKey,
      toPublicKey(lotteryId),
    ),
  );
  instructions.push(
    Token.createMintToInstruction(
      programIds().token,
      mintAccount.publicKey,
      tokenAccount.publicKey,
      wallet.publicKey,
      [],
      1,
    ),
  );
  instructions.push(
    Token.createSetAuthorityInstruction(
      programIds().token,
      mintAccount.publicKey,
      null,
      'MintTokens',
      wallet.publicKey,
      [],
    ),
  );

  const nftMetaKeypair = new Keypair();

  signers.push(mintAccount);
  signers.push(tokenAccount);
  signers.push(nftMetaKeypair);

  const fullSettings = new MintNFTArgs({
    ...mintNFTSetting,
  });

  await mintNFT(
    fullSettings,
    wallet.publicKey.toBase58(),
    nftMetaKeypair.publicKey.toBase58(),
    storeid,
    storeid,
    mintAccount.publicKey.toBase58(),
    tokenAccount.publicKey.toBase58(),
    instructions,
  );

  const { txid, slot } = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
    'single',
  );

  return { txid, slot, mint: nftMetaKeypair.publicKey.toBase58() };
}
