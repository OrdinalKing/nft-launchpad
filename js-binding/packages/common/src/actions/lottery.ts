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

export const LOTTERY_PREFIX = 'lottery';

export enum LotteryState {
  Created = 0,
  Started,
  Ended,
}

export enum TicketState {
  Bought = 0,
  Winned,
  NotWinned,
  Claimed,
}

export class Ticket {
  wallet: StringPublicKey;
  state: TicketState;
  constructor(args: { wallet: StringPublicKey; state: TicketState }) {
    this.wallet = args.wallet;
    this.state = args.state;
  }
}

export const LotteryParser: AccountParser = (
  pubkey: StringPublicKey,
  account: AccountInfo<Buffer>,
) => ({
  pubkey,
  account,
  info: decodeLottery(account.data),
});

export const decodeLottery = (buffer: Buffer) => {
  return deserializeUnchecked(
    LOTTERY_SCHEMA,
    LotteryData,
    buffer,
  ) as LotteryData;
};

export const BASE_LOTTERY_DATA_SIZE = 32 + 32 + 32 + 32 + 8 + 8 + 1 + 8 + 8 + 8;

export interface LotteryCountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export class LotteryData {
  /// Pubkey of the authority with permission to modify this lottery.
  authority: StringPublicKey;
  /// Token mint for the SPL token being used to bid
  tokenMint: StringPublicKey;
  /// Token pool account to store deposited token amount
  tokenPool: StringPublicKey;
  /// Lottery store id
  lotteryStoreId: StringPublicKey;
  /// Slot time the lottery was officially ended by.
  endedAt: BN;
  /// End time is the cut-off point that the lottery is forced to end by.
  endLotteryAt: BN;
  /// The state the lottery is in, whether it has started or ended.
  state: LotteryState;
  /// Existing NFT amount
  nftAmount: BN;
  /// ticket price
  ticketPrice: BN;
  /// existing ticket amount
  ticketAmount: BN;
  /// current bought tickets
  currentTickets: Ticket[];

  public timeToEnd(): LotteryCountdownState {
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
    lotteryStoreId: StringPublicKey;
    endedAt: BN;
    endLotteryAt: BN;
    state: LotteryState;
    nftAmount: BN;
    ticketPrice: BN;
    ticketAmount: BN;
    currentTickets: Ticket[];
  }) {
    this.authority = args.authority;
    this.tokenMint = args.tokenMint;
    this.tokenPool = args.tokenPool;
    this.lotteryStoreId = args.lotteryStoreId;
    this.endedAt = args.endedAt;
    this.endLotteryAt = args.endLotteryAt;
    this.state = args.state;
    this.nftAmount = args.nftAmount;
    this.ticketPrice = args.ticketPrice;
    this.ticketAmount = args.ticketAmount;
    this.currentTickets = args.currentTickets;
  }
}

export class CreateLotteryArgs {
  instruction: number = 0;
  /// End time is the cut-off point that the lottery is forced to end by. See LotteryData.
  endLotteryAt: BN;
  /// ticket price
  ticketPrice: BN;
  /// ticket amount for this lottery
  ticketAmount: number;
  /// ticket amount for this lottery
  nftAmount: number;

  constructor(args: {
    endLotteryAt: BN;
    ticketPrice: BN;
    ticketAmount: number;
    nftAmount: number;
  }) {
    this.endLotteryAt = args.endLotteryAt;
    this.ticketPrice = args.ticketPrice;
    this.ticketAmount = args.ticketAmount;
    this.nftAmount = args.nftAmount;
  }
}

export const LOTTERY_SCHEMA = new Map<any, any>([
  [
    CreateLotteryArgs,
    {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
        ['endLotteryAt', 'u64'],
        ['ticketPrice', 'u64'],
        ['ticketAmount', 'u32'],
        ['nftAmount', 'u32'],
      ],
    },
  ],
  [
    LotteryData,
    {
      kind: 'struct',
      fields: [
        ['authority', 'pubkeyAsString'],
        ['tokenMint', 'pubkeyAsString'],
        ['tokenPool', 'pubkeyAsString'],
        ['lotteryStoreId', 'pubkeyAsString'],
        ['endedAt', 'u64'],
        ['endLotteryAt', 'u64'],
        ['state', 'u8'],
        ['nftAmount', 'u64'],
        ['ticketPrice', 'u64'],
        ['ticketAmount', 'u64'],
        ['currentTickets', [Ticket]],
      ],
    },
  ],
  [
    Ticket,
    {
      kind: 'struct',
      fields: [
        ['wallet', 'pubkeyAsString'],
        ['state', 'u8'],
      ],
    },
  ],
]);

export const decodeLotteryData = (buffer: Buffer) => {
  return deserializeUnchecked(
    LOTTERY_SCHEMA,
    LotteryData,
    buffer,
  ) as LotteryData;
};

export async function createLottery(
  settings: CreateLotteryArgs,
  creator: StringPublicKey,
  lotteryStoreId: StringPublicKey,
  tokenMint: StringPublicKey,
  tokenPool: StringPublicKey,
  authority: StringPublicKey,
  instructions: TransactionInstruction[],
) {
  const lotteryProgramId = programIds().lottery;

  const data = Buffer.from(serialize(LOTTERY_SCHEMA, settings));

  const lotteryKey: StringPublicKey = (
    await findProgramAddress(
      [
        Buffer.from(LOTTERY_PREFIX),
        toPublicKey(lotteryProgramId).toBuffer(),
        toPublicKey(lotteryStoreId).toBuffer(),
      ],
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
      pubkey: toPublicKey(lotteryKey),
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: toPublicKey(lotteryStoreId),
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

export async function startLottery(
  creator: StringPublicKey,
  lotteryStore: StringPublicKey,
  instructions: TransactionInstruction[],
) {
  const lotteryProgramId = programIds().lottery;

  const data = Buffer.from([2]);

  const lotteryKey: StringPublicKey = (
    await findProgramAddress(
      [
        Buffer.from(LOTTERY_PREFIX),
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
      pubkey: toPublicKey(lotteryKey),
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

export async function setLotteryAuthority(
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
        Buffer.from(LOTTERY_PREFIX),
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
