import {
  AccountInfo,
  SystemProgram,
  SYSVAR_CLOCK_PUBKEY,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';
import { programIds } from '../utils/programIds';
import { deserializeUnchecked, serialize } from 'borsh';
import BN from 'bn.js';
import { AccountParser } from '../contexts';
import moment from 'moment';
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

export const BASE_STORE_DATA_SIZE = 32 + 32 + 32 + 32 + 8 + 8 + 1 + 8 + 8 + 8;

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
  /// Slot time the store was officially ended by.
  endedAt: BN;
  /// End time is the cut-off point that the store is forced to end by.
  endStoreAt: BN;
  /// The state the store is in, whether it has started or ended.
  state: StoreState;

  public timeToEnd(): StoreCountdownState {
    const now = moment().unix();
    const ended = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const endAt = this.endedAt?.toNumber() || 0;

    let delta = endAt - now;

    if (!endAt || delta <= 0) return ended;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    const seconds = Math.floor(delta % 60);

    return { days, hours, minutes, seconds };
  }

  public ended() {
    const now = moment().unix();
    if (!this.endedAt) return false;

    if (this.endedAt.toNumber() > now) return false;

    if (this.endedAt.toNumber() < now) {
      return true;
    }
  }

  constructor(args: {
    authority: StringPublicKey;
    tokenMint: StringPublicKey;
    tokenPool: StringPublicKey;
    endedAt: BN;
    endStoreAt: BN;
    state: StoreState;
  }) {
    this.authority = args.authority;
    this.tokenMint = args.tokenMint;
    this.tokenPool = args.tokenPool;
    this.endedAt = args.endedAt;
    this.endStoreAt = args.endStoreAt;
    this.state = args.state;
  }
}

export class CreateStoreArgs {
  instruction: number = 0;
  /// End time is the cut-off point that the store is forced to end by. See StoreData.
  endStoreAt: BN;

  constructor(args: { endStoreAt: BN }) {
    this.endStoreAt = args.endStoreAt;
  }
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

export async function startStore(
  creator: StringPublicKey,
  lotteryStore: StringPublicKey,
  instructions: TransactionInstruction[],
) {
  const lotteryProgramId = programIds().lottery;

  const data = Buffer.from([2]);

  const storeKey: StringPublicKey = (
    await findProgramAddress(
      [
        Buffer.from(STORE_PREFIX),
        toPublicKey(lotteryProgramId).toBuffer(),
        toPublicKey(lotteryStore).toBuffer(),
      ],
      toPublicKey(lotteryProgramId),
    )
  )[0];

  const keys = [
    {
      pubkey: toPublicKey(creator),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(storeKey),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: SYSVAR_CLOCK_PUBKEY,
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

export async function setStoreAuthority(
  lottery: StringPublicKey,
  currentAuthority: StringPublicKey,
  newAuthority: StringPublicKey,
  instructions: TransactionInstruction[],
) {
  const lotteryProgramId = programIds().lottery;

  const data = Buffer.from([1]);

  const keys = [
    {
      pubkey: toPublicKey(lottery),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(currentAuthority),
      isSigner: true,
      isWritable: false,
    },
    {
      pubkey: toPublicKey(newAuthority),
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

export async function getTicket(
  bidderPubkey: StringPublicKey,
  bidderTokenPubkey: StringPublicKey,
  poolTokenPubkey: StringPublicKey,
  tokenMintPubkey: StringPublicKey,
  transferAuthority: StringPublicKey,
  lotteryStore: StringPublicKey,
  instructions: TransactionInstruction[],
) {
  const lotteryProgramId = programIds().lottery;

  const data = Buffer.from([3]);

  const lotteryKey: StringPublicKey = (
    await findProgramAddress(
      [
        Buffer.from(STORE_PREFIX),
        toPublicKey(lotteryProgramId).toBuffer(),
        toPublicKey(lotteryStore).toBuffer(),
      ],
      toPublicKey(lotteryProgramId),
    )
  )[0];

  const keys = [
    {
      pubkey: toPublicKey(lotteryKey),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(bidderPubkey),
      isSigner: true,
      isWritable: false,
    },
    {
      pubkey: toPublicKey(bidderTokenPubkey),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(poolTokenPubkey),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(tokenMintPubkey),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(transferAuthority),
      isSigner: true,
      isWritable: false,
    },
    {
      pubkey: programIds().token,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: SYSVAR_CLOCK_PUBKEY,
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
