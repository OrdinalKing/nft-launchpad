import {
  AccountInfo,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';
import { programIds } from '../utils/programIds';
import { deserializeUnchecked, serialize } from 'borsh';
import BN from 'bn.js';
import { AccountParser } from '../contexts';
import { findProgramAddress, StringPublicKey, toPublicKey } from '../utils';
// import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

export const STORE_PREFIX = 'store';

export const StoreParser: AccountParser = (
  pubkey: StringPublicKey,
  account: AccountInfo<Buffer>,
) => ({
  pubkey,
  account,
  info: decodeStore(account.data),
});

export const decodeStore = (buffer: Buffer) => {
  return deserializeUnchecked(STORE_SCHEMA, StoreData, buffer) as StoreData;
};

export class StoreData {
  /// Pubkey of the authority with permission to modify this store.
  authority: StringPublicKey;
  /// Token mint for the SPL token being used to bid
  nftAmount: BN;
  /// Token pool account to store deposited token amount
  bump: number;

  constructor(args: {
    authority: StringPublicKey;
    nftAmount: BN;
    bump: number;
  }) {
    this.authority = args.authority;
    this.nftAmount = args.nftAmount;
    this.bump = args.bump;
  }
}

export class NFTMeta {
  /// Pubkey of the authority with permission to modify this store.
  storeId: StringPublicKey;
  /// The name of the asset
  name: string;
  /// The symbol for the asset
  symbol: string;
  /// URI pointing to JSON representing the asset
  uri: string;
  /// Pubkey for mint address
  mint: StringPublicKey;
  /// token pool to store current nft
  token_pool: StringPublicKey;
  /// Pubkey of the authority with permission to modify this store.
  authority: StringPublicKey;
  /// flag of current nft is sold or not
  existNft: number;
  bump: number;

  constructor(args: {
    storeId: StringPublicKey;
    name: string;
    symbol: string;
    uri: string;
    mint: StringPublicKey;
    token_pool: StringPublicKey;
    authority: StringPublicKey;
    existNft: number;
    bump: number;
  }) {
    this.storeId = args.storeId;
    this.name = args.name;
    this.symbol = args.symbol;
    this.uri = args.uri;
    this.mint = args.mint;
    this.token_pool = args.token_pool;
    this.authority = args.authority;
    this.existNft = args.existNft;
    this.bump = args.bump;
  }
}

export class CreateStoreArgs {
  instruction: number = 0;
  bump: number;
  /// End time is the cut-off point that the store is forced to end by. See StoreData.

  constructor(args: { bump: number }) {
    this.bump = args.bump;
  }
}

export class MintNFTArgs {
  instruction: number = 1;
  name: string;
  symbol: string;
  uri: string;
  bump: number;
  /// End time is the cut-off point that the store is forced to end by. See StoreData.

  constructor(args: {
    name: string;
    symbol: string;
    uri: string;
    bump: number;
  }) {
    this.name = args.name;
    this.symbol = args.symbol;
    this.uri = args.uri;
    this.bump = args.bump;
  }
}

export const STORE_SCHEMA = new Map<any, any>([
  [
    CreateStoreArgs,
    {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
        ['bump', 'u8'],
      ],
    },
  ],
  [
    StoreData,
    {
      kind: 'struct',
      fields: [
        ['authority', 'pubkeyAsString'],
        ['nftAmount', 'u64'],
        ['bump', 'u8'],
      ],
    },
  ],
]);

export const MINT_NFT_SCHEMA = new Map<any, any>([
  [
    MintNFTArgs,
    {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
        ['name', 'string'],
        ['symbol', 'string'],
        ['uri', 'string'],
        ['bump', 'u8'],
      ],
    },
  ],
  [
    StoreData,
    {
      kind: 'struct',
      fields: [
        ['storeId', 'pubkeyAsString'],
        ['name', 'string'],
        ['symbol', 'string'],
        ['uri', 'string'],
        ['mint', 'pubkeyAsString'],
        ['tokenPool', 'pubkeyAsString'],
        ['authority', 'pubkeyAsString'],
        ['existNft', 'u8'],
        ['bump', 'u8'],
      ],
    },
  ],
]);

export const decodeStoreData = (buffer: Buffer) => {
  return deserializeUnchecked(STORE_SCHEMA, StoreData, buffer) as StoreData;
};

export async function createStore(
  settings: CreateStoreArgs,
  creator: StringPublicKey,
  authority: StringPublicKey,
  instructions: TransactionInstruction[],
) {
  const storeProgramId = programIds().store;

  const data = Buffer.from(serialize(STORE_SCHEMA, settings));

  const storeKey: StringPublicKey = (
    await findProgramAddress(
      [Buffer.from(STORE_PREFIX), toPublicKey(storeProgramId).toBuffer()],
      toPublicKey(storeProgramId),
    )
  )[0];

  const keys = [
    {
      pubkey: toPublicKey(creator),
      isSigner: true,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(storeKey),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(authority),
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SystemProgram.programId,
      isSigner: false,
      isWritable: false,
    },
  ];

  instructions.push(
    new TransactionInstruction({
      keys,
      programId: toPublicKey(storeProgramId),
      data: data,
    }),
  );
}

export async function mintNFT(
  settings: MintNFTArgs,
  creator: StringPublicKey,
  nftmeta: StringPublicKey,
  authority: StringPublicKey,
  storeid: StringPublicKey,
  tokenMint: StringPublicKey,
  tokenPoolKey: StringPublicKey,
  instructions: TransactionInstruction[],
) {
  const storeProgramId = programIds().store;
  const tokenProgramId = programIds().token;

  const data = Buffer.from(serialize(MINT_NFT_SCHEMA, settings));

  const keys = [
    {
      pubkey: toPublicKey(creator),
      isSigner: true,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(nftmeta),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(authority),
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: toPublicKey(storeid),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(tokenMint),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(tokenPoolKey),
      isSigner: true,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(tokenProgramId),
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SYSVAR_RENT_PUBKEY,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SystemProgram.programId,
      isSigner: false,
      isWritable: false,
    },
  ];

  instructions.push(
    new TransactionInstruction({
      keys,
      programId: toPublicKey(storeProgramId),
      data: data,
    }),
  );
}
