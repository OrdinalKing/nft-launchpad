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
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

export const STORE_PREFIX = 'store';

export enum StoreState {
  Created = 0,
  Started,
  Ended,
}

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

export const BASE_STORE_DATA_SIZE = 32 + 32 + 32 + 8 + 8 + 1;

export interface StoreCountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export class StoreData {
  /// Pubkey of the authority with permission to modify this store.
  authority: StringPublicKey;
  /// Token mint for the SPL token being used to bid
  tokenMint: StringPublicKey;
  /// Token pool account to store deposited token amount
  tokenPool: StringPublicKey;
  /// End time is the cut-off point that the store is forced to end by.
  endStoreAt: BN;
  /// The state the store is in, whether it has started or ended.
  state: StoreState;

  constructor(args: {
    authority: StringPublicKey;
    tokenMint: StringPublicKey;
    tokenPool: StringPublicKey;
    endStoreAt: BN;
    state: StoreState;
  }) {
    this.authority = args.authority;
    this.tokenMint = args.tokenMint;
    this.tokenPool = args.tokenPool;
    this.endStoreAt = args.endStoreAt;
    this.state = args.state;
  }
}

export class CreateStoreArgs {
  instruction: number = 0;
  /// End time is the cut-off point that the store is forced to end by. See StoreData.

  constructor() {}
}

export const STORE_SCHEMA = new Map<any, any>([
  [
    CreateStoreArgs,
    {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
        ['endStoreAt', 'u64'],
      ],
    },
  ],
  [
    StoreData,
    {
      kind: 'struct',
      fields: [
        ['authority', 'pubkeyAsString'],
        ['tokenMint', 'pubkeyAsString'],
        ['tokenPool', 'pubkeyAsString'],
        ['endedAt', 'u64'],
        ['endStoreAt', 'u64'],
        ['state', 'u8'],
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
  tokenMint: StringPublicKey,
  tokenPool: StringPublicKey,
  authority: StringPublicKey,
  instructions: TransactionInstruction[],
) {
  const lotteryProgramId = programIds().lottery;

  const data = Buffer.from(serialize(STORE_SCHEMA, settings));

  const storeKey: StringPublicKey = (
    await findProgramAddress(
      [Buffer.from(STORE_PREFIX), toPublicKey(lotteryProgramId).toBuffer()],
      toPublicKey(lotteryProgramId),
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
      pubkey: toPublicKey(tokenMint),
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: toPublicKey(tokenPool),
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: toPublicKey(authority),
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: toPublicKey(TOKEN_PROGRAM_ID),
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
      programId: toPublicKey(lotteryProgramId),
      data: data,
    }),
  );
}
