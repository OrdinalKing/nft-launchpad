exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 557:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src_App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(2146);
// EXTERNAL MODULE: ../common/dist/lib/index.js
var lib = __webpack_require__(9819);
// EXTERNAL MODULE: external "canvas-confetti"
var external_canvas_confetti_ = __webpack_require__(8243);
var external_canvas_confetti_default = /*#__PURE__*/__webpack_require__.n(external_canvas_confetti_);
;// CONCATENATED MODULE: ./src/components/Confetti/index.tsx





const ConfettiContext = /*#__PURE__*/external_react_default().createContext(null);
const ConfettiProvider = ({
  children = null
}) => {
  const canvasRef = (0,external_react_.useRef)();
  const confettiRef = (0,external_react_.useRef)();
  const dropConfetti = (0,external_react_.useMemo)(() => () => {
    if (confettiRef.current && canvasRef.current) {
      var _confettiRef$current;

      canvasRef.current.style.visibility = 'visible';
      (_confettiRef$current = confettiRef.current({
        particleCount: 400,
        spread: 160,
        origin: {
          y: 0.3
        }
      })) === null || _confettiRef$current === void 0 ? void 0 : _confettiRef$current.finally(() => {
        if (canvasRef.current) {
          canvasRef.current.style.visibility = 'hidden';
        }
      });
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    if (canvasRef.current && !confettiRef.current) {
      canvasRef.current.style.visibility = 'hidden';
      confettiRef.current = external_canvas_confetti_default().create(canvasRef.current, {
        resize: true,
        useWorker: true
      });
    }
  }, []);
  const canvasStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ConfettiContext.Provider, {
    value: {
      dropConfetti
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("canvas", {
      ref: canvasRef,
      style: canvasStyle
    }), children]
  });
};
const Confetti = () => {
  const {
    dropConfetti
  } = useConfetti();
  (0,external_react_.useEffect)(() => {
    dropConfetti();
  }, [dropConfetti]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
const useConfetti = () => {
  const context = (0,external_react_.useContext)(ConfettiContext);
  return context;
};
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./src/constants/labels.ts
const LABELS = {
  CONNECT_LABEL: 'Connect Wallet',
  GIVE_SOL: 'Give me SOL',
  FAUCET_INFO: 'This faucet will help you fund your accounts outside of Solana main network.',
  ACCOUNT_FUNDED: 'Account funded.',
  MENU_HOME: 'Home',
  MENU_FAUCET: 'Faucet',
  APP_TITLE: 'Metaplex',
  CONNECT_BUTTON: 'Connect',
  WALLET_TOOLTIP: 'Wallet public key',
  WALLET_BALANCE: 'Wallet balance',
  SETTINGS_TOOLTIP: 'Settings',
  GO_BACK_ACTION: 'Go back',
  TOTAL_TITLE: 'Total',
  ENTER_AMOUNT: 'Enter an amount',
  TRANSFER: 'Transfer',
  SET_CORRECT_WALLET_NETWORK: 'Set correct wallet network'
};
;// CONCATENATED MODULE: ./src/constants/style.tsx
const GUTTER = [16, {
  xs: 8,
  sm: 16,
  md: 16,
  lg: 16
}];
const SMALL_STATISTIC = {
  fontSize: 10
};
;// CONCATENATED MODULE: ./src/constants/index.tsx



const QUOTE_MINT = lib.WRAPPED_SOL_MINT;
// EXTERNAL MODULE: external "@solana/wallet-adapter-react"
var wallet_adapter_react_ = __webpack_require__(5772);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "@solana/wallet-adapter-base"
var wallet_adapter_base_ = __webpack_require__(384);
// EXTERNAL MODULE: external "@solana/spl-token"
var spl_token_ = __webpack_require__(4541);
;// CONCATENATED MODULE: ./src/actions/closePersonalEscrow.ts


 // When you are an artist and you receive royalties, due to the design of the system
// it is to a permanent ATA WSOL account. This is because the auctioneer can't transfer monies
// from your WSOL to your SOL wallet since you own both, and having the auctioneer temporarily
// own your WSOL account to the transfer is one hell of a security vulnerability for a little convenience.
// Instead we make the WSOL permanent, and you have to accept it on the UI via your "unsettled funds"
// notification. All we do is then transfer the lamports out of the account.

async function closePersonalEscrow(connection, wallet, ata) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = lib.utils.programIds();
  const signers = [];
  const instructions = [spl_token_.Token.createCloseAccountInstruction(PROGRAM_IDS.token, (0,lib.toPublicKey)(ata), wallet.publicKey, wallet.publicKey, [])];
  await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions, signers, 'single');
}
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(5681);
// EXTERNAL MODULE: external "bn.js"
var external_bn_js_ = __webpack_require__(2416);
var external_bn_js_default = /*#__PURE__*/__webpack_require__.n(external_bn_js_);
// EXTERNAL MODULE: external "borsh"
var external_borsh_ = __webpack_require__(7384);
// EXTERNAL MODULE: external "bs58"
var external_bs58_ = __webpack_require__(2815);
var external_bs58_default = /*#__PURE__*/__webpack_require__.n(external_bs58_);
;// CONCATENATED MODULE: ./src/models/metaplex/deprecatedStates.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MAX_BID_REDEMPTION_TICKET_V1_SIZE = 3;
class deprecatedStates_AuctionManagerV1 {
  constructor(args) {
    _defineProperty(this, "key", void 0);

    _defineProperty(this, "store", void 0);

    _defineProperty(this, "authority", void 0);

    _defineProperty(this, "auction", void 0);

    _defineProperty(this, "vault", void 0);

    _defineProperty(this, "acceptPayment", void 0);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "settings", void 0);

    this.key = metaplex_MetaplexKey.AuctionManagerV1;
    this.store = args.store;
    this.authority = args.authority;
    this.auction = args.auction;
    this.vault = args.vault;
    this.acceptPayment = args.acceptPayment;
    this.state = args.state;
    this.settings = args.settings;
  }

}
class deprecatedStates_DeprecatedInitAuctionManagerV1Args {
  constructor(args) {
    _defineProperty(this, "instruction", 0);

    _defineProperty(this, "settings", void 0);

    this.settings = args.settings;
  }

}
class deprecatedStates_DeprecatedValidateSafetyDepositBoxV1Args {
  constructor() {
    _defineProperty(this, "instruction", 1);
  }

}
class DeprecatedRedeemParticipationBidArgs {
  constructor() {
    _defineProperty(this, "instruction", 4);
  }

}
class DeprecatedPopulateParticipationPrintingAccountArgs {
  constructor() {
    _defineProperty(this, "instruction", 11);
  }

}
class DeprecatedValidateParticipationArgs {
  constructor() {
    _defineProperty(this, "instruction", 10);
  }

}
class AuctionManagerSettingsV1 {
  constructor(args) {
    _defineProperty(this, "winningConfigs", []);

    _defineProperty(this, "participationConfig", null);

    Object.assign(this, args);
  }

}
class ParticipationStateV1 {
  constructor(args) {
    _defineProperty(this, "collectedToAcceptPayment", new (external_bn_js_default())(0));

    _defineProperty(this, "primarySaleHappened", false);

    _defineProperty(this, "validated", false);

    _defineProperty(this, "printingAuthorizationTokenAccount", null);

    Object.assign(this, args);
  }

}
class ParticipationConfigV1 {
  constructor(args) {
    _defineProperty(this, "winnerConstraint", WinningConstraint.NoParticipationPrize);

    _defineProperty(this, "nonWinningConstraint", NonWinningConstraint.GivenForFixedPrice);

    _defineProperty(this, "safetyDepositBoxIndex", 0);

    _defineProperty(this, "fixedPrice", new (external_bn_js_default())(0));

    Object.assign(this, args);
  }

}
class WinningConfig {
  constructor(args) {
    _defineProperty(this, "items", []);

    Object.assign(this, args);
  }

}
class WinningConfigItem {
  constructor(args) {
    _defineProperty(this, "safetyDepositBoxIndex", 0);

    _defineProperty(this, "amount", 0);

    _defineProperty(this, "winningConfigType", WinningConfigType.TokenOnlyTransfer);

    Object.assign(this, args);
  }

}
class WinningConfigState {
  constructor(args) {
    _defineProperty(this, "items", []);

    _defineProperty(this, "moneyPushedToAcceptPayment", false);

    Object.assign(this, args);
  }

}
class WinningConfigStateItem {
  constructor(args) {
    _defineProperty(this, "primarySaleHappened", false);

    _defineProperty(this, "claimed", false);

    Object.assign(this, args);
  }

}
class AuctionManagerStateV1 {
  constructor(args) {
    _defineProperty(this, "status", AuctionManagerStatus.Initialized);

    _defineProperty(this, "winningConfigItemsValidated", 0);

    _defineProperty(this, "winningConfigStates", []);

    _defineProperty(this, "participationState", null);

    Object.assign(this, args);
  }

}
class deprecatedStates_BidRedemptionTicketV1 {
  constructor(args) {
    _defineProperty(this, "key", metaplex_MetaplexKey.BidRedemptionTicketV1);

    _defineProperty(this, "participationRedeemed", false);

    _defineProperty(this, "itemsRedeemed", 0);

    Object.assign(this, args);
  }

  getBidRedeemed() {
    return this.participationRedeemed;
  }

}
async function deprecatedStates_getSafetyDepositBoxValidationTicket(auctionManager, safetyDepositBox) {
  const PROGRAM_IDS = programIds();
  return (await findProgramAddress([Buffer.from(METAPLEX_PREFIX), toPublicKey(PROGRAM_IDS.metaplex).toBuffer(), toPublicKey(auctionManager).toBuffer(), toPublicKey(safetyDepositBox).toBuffer()], toPublicKey(PROGRAM_IDS.metaplex)))[0];
}
const DEPRECATED_SCHEMA = new Map([[deprecatedStates_AuctionManagerV1, {
  kind: 'struct',
  fields: [['key', 'u8'], ['store', 'pubkeyAsString'], ['authority', 'pubkeyAsString'], ['auction', 'pubkeyAsString'], ['vault', 'pubkeyAsString'], ['acceptPayment', 'pubkeyAsString'], ['state', AuctionManagerStateV1], ['settings', AuctionManagerSettingsV1]]
}], [ParticipationConfigV1, {
  kind: 'struct',
  fields: [['winnerConstraint', 'u8'], // enum
  ['nonWinningConstraint', 'u8'], ['safetyDepositBoxIndex', 'u8'], ['fixedPrice', {
    kind: 'option',
    type: 'u64'
  }]]
}], [AuctionManagerSettingsV1, {
  kind: 'struct',
  fields: [['winningConfigs', [WinningConfig]], ['participationConfig', {
    kind: 'option',
    type: ParticipationConfigV1
  }]]
}], [WinningConfig, {
  kind: 'struct',
  fields: [['items', [WinningConfigItem]]]
}], [WinningConfigItem, {
  kind: 'struct',
  fields: [['safetyDepositBoxIndex', 'u8'], ['amount', 'u8'], ['winningConfigType', 'u8']]
}], [WinningConfigState, {
  kind: 'struct',
  fields: [['items', [WinningConfigStateItem]], ['moneyPushedToAcceptPayment', 'u8'] // bool
  ]
}], [WinningConfigStateItem, {
  kind: 'struct',
  fields: [['primarySaleHappened', 'u8'], //bool
  ['claimed', 'u8'] // bool
  ]
}], [AuctionManagerStateV1, {
  kind: 'struct',
  fields: [['status', 'u8'], ['winningConfigItemsValidated', 'u8'], ['winningConfigStates', [WinningConfigState]], ['participationState', {
    kind: 'option',
    type: ParticipationStateV1
  }]]
}], [ParticipationStateV1, {
  kind: 'struct',
  fields: [['collectedToAcceptPayment', 'u64'], ['primarySaleHappened', 'u8'], //bool
  ['validated', 'u8'], //bool
  ['printingAuthorizationTokenAccount', {
    kind: 'option',
    type: 'pubkeyAsString'
  }]]
}], [deprecatedStates_BidRedemptionTicketV1, {
  kind: 'struct',
  fields: [['key', 'u8'], ['participationRedeemed', 'u8'], // bool
  ['itemsRedeemed', 'u8'] // bool
  ]
}], [DeprecatedPopulateParticipationPrintingAccountArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [deprecatedStates_DeprecatedInitAuctionManagerV1Args, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['settings', AuctionManagerSettingsV1]]
}], [deprecatedStates_DeprecatedValidateSafetyDepositBoxV1Args, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [DeprecatedRedeemParticipationBidArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [DeprecatedValidateParticipationArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}]]);
;// CONCATENATED MODULE: ./src/models/metaplex/deprecatedInitAuctionManagerV1.ts





async function deprecatedInitAuctionManagerV1(vault, auctionManagerAuthority, payer, acceptPaymentAccount, store, settings, instructions) {
  const PROGRAM_IDS = programIds();
  const {
    auctionKey,
    auctionManagerKey
  } = await getAuctionKeys(vault);
  const value = new DeprecatedInitAuctionManagerV1Args({
    settings
  });
  const data = Buffer.from(serialize(SCHEMA, value));
  const keys = [{
    pubkey: toPublicKey(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: toPublicKey(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(auctionManagerAuthority),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: toPublicKey(acceptPaymentAccount),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new TransactionInstruction({
    keys,
    programId: toPublicKey(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/redeemBid.ts




async function redeemBid(vault, safetyDepositTokenStore, destination, safetyDeposit, fractionMint, bidder, payer, masterEdition, reservationList, isPrintingType, instructions, // If this is an auctioneer trying to reclaim a specific winning index, pass it here,
// and this will instead call the proxy route instead of the real one, wrapping the original
// redemption call in an override call that forces the winning index if the auctioneer is authorized.
auctioneerReclaimIndex) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const {
    bidRedemption,
    bidMetadata
  } = await getBidderKeys(auctionKey, bidder);
  const transferAuthority = (await (0,lib.findProgramAddress)([Buffer.from(lib.VAULT_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.vault).toBuffer(), (0,lib.toPublicKey)(vault).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.vault)))[0];
  const safetyDepositConfig = await getSafetyDepositConfig(auctionManagerKey, safetyDeposit);
  const value = auctioneerReclaimIndex !== undefined ? new RedeemUnusedWinningConfigItemsAsAuctioneerArgs({
    winningConfigItemIndex: auctioneerReclaimIndex,
    proxyCall: ProxyCallAddress.RedeemBid
  }) : new RedeemBidArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositTokenStore),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(destination),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(bidRedemption),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDeposit),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(fractionMint),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidMetadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidder),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(transferAuthority),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositConfig),
    isSigner: false,
    isWritable: false
  }];

  if (isPrintingType && masterEdition && reservationList) {
    keys.push({
      pubkey: (0,lib.toPublicKey)(masterEdition),
      isSigner: false,
      isWritable: true
    });
    keys.push({
      pubkey: (0,lib.toPublicKey)(reservationList),
      isSigner: false,
      isWritable: true
    });
  }

  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/redeemFullRightsTransferBid.ts




async function redeemFullRightsTransferBid(vault, safetyDepositTokenStore, destination, safetyDeposit, fractionMint, bidder, payer, instructions, masterMetadata, newAuthority, // If this is an auctioneer trying to reclaim a specific winning index, pass it here,
// and this will instead call the proxy route instead of the real one, wrapping the original
// redemption call in an override call that forces the winning index if the auctioneer is authorized.
auctioneerReclaimIndex) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const {
    bidRedemption,
    bidMetadata
  } = await getBidderKeys(auctionKey, bidder);
  const transferAuthority = (await (0,lib.findProgramAddress)([Buffer.from(lib.VAULT_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.vault).toBuffer(), (0,lib.toPublicKey)(vault).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.vault)))[0];
  const safetyDepositConfig = await getSafetyDepositConfig(auctionManagerKey, safetyDeposit);
  const value = auctioneerReclaimIndex !== undefined ? new RedeemUnusedWinningConfigItemsAsAuctioneerArgs({
    winningConfigItemIndex: auctioneerReclaimIndex,
    proxyCall: ProxyCallAddress.RedeemFullRightsTransferBid
  }) : new RedeemFullRightsTransferBidArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositTokenStore),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(destination),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(bidRedemption),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDeposit),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(fractionMint),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidMetadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidder),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(masterMetadata),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(newAuthority),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(transferAuthority),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositConfig),
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/deprecatedRedeemParticipationBid.ts





async function deprecatedRedeemParticipationBid(vault, safetyDepositTokenStore, destination, safetyDeposit, bidder, payer, instructions, participationPrintingAccount, transferAuthority, acceptPaymentAccount, tokenPaymentAccount) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const {
    bidRedemption,
    bidMetadata
  } = await getBidderKeys(auctionKey, bidder);
  const safetyDepositConfig = await getSafetyDepositConfig(auctionManagerKey, safetyDeposit);
  const value = new DeprecatedRedeemParticipationBidArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositTokenStore),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(destination),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(bidRedemption),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDeposit),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositConfig),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidMetadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidder),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(transferAuthority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(acceptPaymentAccount),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(tokenPaymentAccount),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(participationPrintingAccount),
    isSigner: false,
    isWritable: true
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/startAuction.ts




async function startAuction(vault, auctionManagerAuthority, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const value = new StartAuctionArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionManagerAuthority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.auction),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_CLOCK_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/deprecatedValidateSafetyDepositBoxV1.ts





async function deprecatedValidateSafetyDepositBoxV1(vault, metadata, safetyDepositBox, safetyDepositTokenStore, tokenMint, auctionManagerAuthority, metadataAuthority, payer, instructions, edition, whitelistedCreator, store, printingMint, printingMintAuthority) {
  const PROGRAM_IDS = programIds();
  const {
    auctionKey,
    auctionManagerKey
  } = await getAuctionKeys(vault);
  const originalAuthorityLookup = await getOriginalAuthority(auctionKey, metadata);
  const value = new DeprecatedValidateSafetyDepositBoxV1Args();
  const data = Buffer.from(serialize(SCHEMA, value));
  const keys = [{
    pubkey: toPublicKey(await getSafetyDepositBoxValidationTicket(auctionManagerKey, safetyDepositBox)),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: toPublicKey(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: toPublicKey(metadata),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: toPublicKey(originalAuthorityLookup),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: toPublicKey(whitelistedCreator || SystemProgram.programId),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(safetyDepositBox),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(safetyDepositTokenStore),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(tokenMint),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(edition),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: toPublicKey(auctionManagerAuthority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: toPublicKey(metadataAuthority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: toPublicKey(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: toPublicKey(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];

  if (printingMint && printingMintAuthority) {
    keys.push({
      pubkey: toPublicKey(printingMint),
      isSigner: false,
      isWritable: true
    });
    keys.push({
      pubkey: toPublicKey(printingMintAuthority),
      isSigner: true,
      isWritable: false
    });
  }

  instructions.push(new TransactionInstruction({
    keys,
    programId: toPublicKey(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/redeemParticipationBidV3.ts




async function redeemParticipationBidV3(vault, safetyDepositTokenStore, destination, safetyDeposit, bidder, payer, metadata, masterEdition, originalMint, transferAuthority, acceptPaymentAccount, tokenPaymentAccount, newMint, edition, winIndex, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const auctionDataExtended = await (0,lib.getAuctionExtended)({
    auctionProgramId: PROGRAM_IDS.auction,
    resource: vault
  });
  const {
    bidRedemption,
    bidMetadata
  } = await getBidderKeys(auctionKey, bidder);
  const prizeTrackingTicket = await getPrizeTrackingTicket(auctionManagerKey, originalMint);
  const newMetadata = await (0,lib.getMetadata)(newMint);
  const newEdition = await (0,lib.getEdition)(newMint);
  const editionMarkPda = await (0,lib.getEditionMarkPda)(originalMint, edition);
  const safetyDepositConfig = await getSafetyDepositConfig(auctionManagerKey, safetyDeposit);
  const value = new RedeemParticipationBidV3Args({
    winIndex
  });
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositTokenStore),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(destination),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(bidRedemption),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDeposit),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositConfig),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidMetadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidder),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: true
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(transferAuthority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(acceptPaymentAccount),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(tokenPaymentAccount),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(prizeTrackingTicket),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(newMetadata),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(newEdition),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(masterEdition),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(newMint),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(editionMarkPda),
    isSigner: false,
    isWritable: true
  }, {
    // Mint authority (this) is going to be the payer since the bidder
    // may not be signer hre - we may be redeeming for someone else (permissionless)
    // and during the txn, mint authority is removed from us and given to master edition.
    // The ATA account is already owned by bidder by default. No signing needed
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionDataExtended),
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/redeemPrintingV2Bid.ts




async function redeemPrintingV2Bid(vault, safetyDepositTokenStore, tokenAccount, safetyDeposit, bidder, payer, metadata, masterEdition, originalMint, newMint, edition, editionOffset, winIndex, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const {
    bidRedemption,
    bidMetadata
  } = await getBidderKeys(auctionKey, bidder);
  const prizeTrackingTicket = await getPrizeTrackingTicket(auctionManagerKey, originalMint);
  const safetyDepositConfig = await getSafetyDepositConfig(auctionManagerKey, safetyDeposit);
  const newMetadata = await (0,lib.getMetadata)(newMint);
  const newEdition = await (0,lib.getEdition)(newMint);
  const editionMarkPda = await (0,lib.getEditionMarkPda)(originalMint, edition);
  const value = new RedeemPrintingV2BidArgs({
    editionOffset,
    winIndex
  });
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositTokenStore),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(tokenAccount),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(bidRedemption),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDeposit),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositConfig),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidMetadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidder),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: true
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(prizeTrackingTicket),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(newMetadata),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(newEdition),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(masterEdition),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(newMint),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(editionMarkPda),
    isSigner: false,
    isWritable: true
  }, {
    // Mint authority (this) is going to be the payer since the bidder
    // may not be signer hre - we may be redeeming for someone else (permissionless)
    // and during the txn, mint authority is removed from us and given to master edition.
    // The ATA account is already owned by bidder by default. No signing needed
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(metadata),
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/withdrawMasterEdition.ts




async function withdrawMasterEdition(vault, safetyDepositTokenStore, destination, safetyDeposit, fractionMint, mint, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const prizeTrackingTicket = await getPrizeTrackingTicket(auctionManagerKey, mint);
  const vaultAuthority = (await (0,lib.findProgramAddress)([Buffer.from(lib.VAULT_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.vault).toBuffer(), (0,lib.toPublicKey)(vault).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.vault)))[0];
  const auctionExtended = (await (0,lib.findProgramAddress)([Buffer.from(lib.AUCTION_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.auction).toBuffer(), (0,lib.toPublicKey)(vault).toBuffer(), Buffer.from(lib.EXTENDED)], (0,lib.toPublicKey)(PROGRAM_IDS.auction)))[0];
  const safetyDepositConfig = await getSafetyDepositConfig(auctionManagerKey, safetyDeposit);
  const value = new WithdrawMasterEditionArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositTokenStore),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(destination),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDeposit),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(fractionMint),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(prizeTrackingTicket),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(vaultAuthority),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionExtended),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositConfig),
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/index.ts
function metaplex_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const metaplex_METAPLEX_PREFIX = 'metaplex';
const TOTALS = 'totals';
const ORIGINAL_AUTHORITY_LOOKUP_SIZE = 33;
const MAX_PRIZE_TRACKING_TICKET_SIZE = 1 + 32 + 8 + 8 + 8 + 50;
const metaplex_MAX_WHITELISTED_CREATOR_SIZE = (/* unused pure expression or super */ null && (2 + 32 + 10));
let metaplex_MetaplexKey;

(function (MetaplexKey) {
  MetaplexKey[MetaplexKey["Uninitialized"] = 0] = "Uninitialized";
  MetaplexKey[MetaplexKey["OriginalAuthorityLookupV1"] = 1] = "OriginalAuthorityLookupV1";
  MetaplexKey[MetaplexKey["BidRedemptionTicketV1"] = 2] = "BidRedemptionTicketV1";
  MetaplexKey[MetaplexKey["StoreV1"] = 3] = "StoreV1";
  MetaplexKey[MetaplexKey["WhitelistedCreatorV1"] = 4] = "WhitelistedCreatorV1";
  MetaplexKey[MetaplexKey["PayoutTicketV1"] = 5] = "PayoutTicketV1";
  MetaplexKey[MetaplexKey["SafetyDepositValidationTicketV1"] = 6] = "SafetyDepositValidationTicketV1";
  MetaplexKey[MetaplexKey["AuctionManagerV1"] = 7] = "AuctionManagerV1";
  MetaplexKey[MetaplexKey["PrizeTrackingTicketV1"] = 8] = "PrizeTrackingTicketV1";
  MetaplexKey[MetaplexKey["SafetyDepositConfigV1"] = 9] = "SafetyDepositConfigV1";
  MetaplexKey[MetaplexKey["AuctionManagerV2"] = 10] = "AuctionManagerV2";
  MetaplexKey[MetaplexKey["BidRedemptionTicketV2"] = 11] = "BidRedemptionTicketV2";
  MetaplexKey[MetaplexKey["AuctionWinnerTokenTypeTrackerV1"] = 12] = "AuctionWinnerTokenTypeTrackerV1";
})(metaplex_MetaplexKey || (metaplex_MetaplexKey = {}));

class PrizeTrackingTicket {
  constructor(args) {
    metaplex_defineProperty(this, "key", metaplex_MetaplexKey.PrizeTrackingTicketV1);

    metaplex_defineProperty(this, "metadata", void 0);

    metaplex_defineProperty(this, "supplySnapshot", void 0);

    metaplex_defineProperty(this, "expectedRedemptions", void 0);

    metaplex_defineProperty(this, "redemptions", void 0);

    this.key = metaplex_MetaplexKey.PrizeTrackingTicketV1;
    this.metadata = args.metadata;
    this.supplySnapshot = args.supplySnapshot;
    this.expectedRedemptions = args.expectedRedemptions;
    this.redemptions = args.redemptions;
  }

}
class PayoutTicket {
  constructor(args) {
    metaplex_defineProperty(this, "key", metaplex_MetaplexKey.PayoutTicketV1);

    metaplex_defineProperty(this, "recipient", void 0);

    metaplex_defineProperty(this, "amountPaid", void 0);

    this.key = metaplex_MetaplexKey.PayoutTicketV1;
    this.recipient = args.recipient;
    this.amountPaid = args.amountPaid;
  }

}
class AuctionManager {
  constructor(args) {
    var _this$safetyDepositCo;

    metaplex_defineProperty(this, "pubkey", void 0);

    metaplex_defineProperty(this, "store", void 0);

    metaplex_defineProperty(this, "authority", void 0);

    metaplex_defineProperty(this, "auction", void 0);

    metaplex_defineProperty(this, "vault", void 0);

    metaplex_defineProperty(this, "acceptPayment", void 0);

    metaplex_defineProperty(this, "numWinners", void 0);

    metaplex_defineProperty(this, "safetyDepositConfigs", void 0);

    metaplex_defineProperty(this, "bidRedemptions", void 0);

    metaplex_defineProperty(this, "instance", void 0);

    metaplex_defineProperty(this, "status", void 0);

    metaplex_defineProperty(this, "safetyDepositBoxesExpected", void 0);

    metaplex_defineProperty(this, "participationConfig", void 0);

    this.pubkey = args.instance.pubkey;
    this.instance = args.instance;
    this.numWinners = args.auction.info.bidState.max;
    this.safetyDepositBoxesExpected = this.instance.info.key == metaplex_MetaplexKey.AuctionManagerV2 ? new (external_bn_js_default())(args.vault.info.tokenTypeCount) : new (external_bn_js_default())(this.instance.info.state.winningConfigItemsValidated);
    this.store = this.instance.info.store;
    this.authority = this.instance.info.authority;
    this.vault = this.instance.info.vault;
    this.acceptPayment = this.instance.info.acceptPayment;
    this.auction = this.instance.info.auction;
    this.status = this.instance.info.state.status;
    this.safetyDepositConfigs = args.safetyDepositConfigs;
    this.bidRedemptions = args.bidRedemptions;
    this.participationConfig = this.instance.info.key == metaplex_MetaplexKey.AuctionManagerV2 ? ((_this$safetyDepositCo = this.safetyDepositConfigs) === null || _this$safetyDepositCo === void 0 ? void 0 : _this$safetyDepositCo.filter(s => s.info.participationConfig).map(s => {
      var _s$info$participation, _s$info$participation2, _s$info$participation3;

      return {
        winnerConstraint: ((_s$info$participation = s.info.participationConfig) === null || _s$info$participation === void 0 ? void 0 : _s$info$participation.winnerConstraint) || WinningConstraint.NoParticipationPrize,
        nonWinningConstraint: ((_s$info$participation2 = s.info.participationConfig) === null || _s$info$participation2 === void 0 ? void 0 : _s$info$participation2.nonWinningConstraint) || NonWinningConstraint.GivenForFixedPrice,
        fixedPrice: ((_s$info$participation3 = s.info.participationConfig) === null || _s$info$participation3 === void 0 ? void 0 : _s$info$participation3.fixedPrice) || null,
        safetyDepositBoxIndex: s.info.order.toNumber()
      };
    })[0]) || undefined : this.instance.info.settings.participationConfig || undefined;
  }

  isItemClaimed(winnerIndex, safetyDepositBoxIndex) {
    if (this.instance.info.key == metaplex_MetaplexKey.AuctionManagerV1) {
      const asV1 = this.instance.info;
      const itemIndex = asV1.settings.winningConfigs[winnerIndex].items.findIndex(i => i.safetyDepositBoxIndex == safetyDepositBoxIndex);
      return asV1.state.winningConfigStates[winnerIndex].items[itemIndex].claimed;
    } else {
      const winner = this.bidRedemptions.find(b => b.info.winnerIndex && b.info.winnerIndex.eq(new (external_bn_js_default())(winnerIndex)));

      if (!winner) {
        return false;
      } else {
        return winner.info.getBidRedeemed(safetyDepositBoxIndex);
      }
    }
  }

  getAmountForWinner(winnerIndex, safetyDepositBoxIndex) {
    if (this.instance.info.key == metaplex_MetaplexKey.AuctionManagerV1) {
      var _settings$winningConf;

      return new (external_bn_js_default())(((_settings$winningConf = this.instance.info.settings.winningConfigs[winnerIndex].items.find(i => i.safetyDepositBoxIndex == safetyDepositBoxIndex)) === null || _settings$winningConf === void 0 ? void 0 : _settings$winningConf.amount) || 0);
    } else {
      const safetyDepositConfig = this.safetyDepositConfigs[safetyDepositBoxIndex];
      return safetyDepositConfig.info.getAmountForWinner(new (external_bn_js_default())(winnerIndex));
    }
  }

  getItemsFromSafetyDepositBoxes(metadataByMint, masterEditionsByPrintingMint, metadataByMasterEdition, masterEditions, boxes) {
    if (this.instance.info.key == metaplex_MetaplexKey.AuctionManagerV1) {
      return this.instance.info.settings.winningConfigs.map(w => {
        return w.items.map(it => {
          var _boxes$it$safetyDepos, _metadata, _metadata$info;

          let metadata = metadataByMint[(_boxes$it$safetyDepos = boxes[it.safetyDepositBoxIndex]) === null || _boxes$it$safetyDepos === void 0 ? void 0 : _boxes$it$safetyDepos.info.tokenMint];

          if (!metadata) {
            var _boxes$it$safetyDepos2;

            // Means is a limited edition v1, so the tokenMint is the printingMint
            const masterEdition = masterEditionsByPrintingMint[(_boxes$it$safetyDepos2 = boxes[it.safetyDepositBoxIndex]) === null || _boxes$it$safetyDepos2 === void 0 ? void 0 : _boxes$it$safetyDepos2.info.tokenMint];

            if (masterEdition) {
              metadata = metadataByMasterEdition[masterEdition.pubkey];
            }
          }

          return {
            metadata,
            winningConfigType: it.winningConfigType,
            safetyDeposit: boxes[it.safetyDepositBoxIndex],
            amount: new (external_bn_js_default())(it.amount),
            masterEdition: (_metadata = metadata) !== null && _metadata !== void 0 && (_metadata$info = _metadata.info) !== null && _metadata$info !== void 0 && _metadata$info.masterEdition ? masterEditions[metadata.info.masterEdition] : undefined
          };
        });
      });
    } else {
      const items = [];

      for (let i = 0; i < this.numWinners.toNumber(); i++) {
        var _this$safetyDepositCo2;

        const newWinnerArr = [];
        items.push(newWinnerArr);
        (_this$safetyDepositCo2 = this.safetyDepositConfigs) === null || _this$safetyDepositCo2 === void 0 ? void 0 : _this$safetyDepositCo2.forEach(s => {
          const amount = s.info.getAmountForWinner(new (external_bn_js_default())(i));

          if (amount.gt(new (external_bn_js_default())(0))) {
            var _metadata$info2;

            const safetyDeposit = boxes[s.info.order.toNumber()];
            const metadata = metadataByMint[safetyDeposit.info.tokenMint];
            newWinnerArr.push({
              metadata,
              winningConfigType: s.info.winningConfigType,
              safetyDeposit,
              amount,
              masterEdition: metadata !== null && metadata !== void 0 && (_metadata$info2 = metadata.info) !== null && _metadata$info2 !== void 0 && _metadata$info2.masterEdition ? masterEditions[metadata.info.masterEdition] : undefined
            });
          }
        });
      }

      return items;
    }
  }

}
class AuctionManagerV2 {
  constructor(args) {
    metaplex_defineProperty(this, "key", void 0);

    metaplex_defineProperty(this, "store", void 0);

    metaplex_defineProperty(this, "authority", void 0);

    metaplex_defineProperty(this, "auction", void 0);

    metaplex_defineProperty(this, "vault", void 0);

    metaplex_defineProperty(this, "acceptPayment", void 0);

    metaplex_defineProperty(this, "state", void 0);

    this.key = metaplex_MetaplexKey.AuctionManagerV2;
    this.store = args.store;
    this.authority = args.authority;
    this.auction = args.auction;
    this.vault = args.vault;
    this.acceptPayment = args.acceptPayment;
    this.state = args.state;
  }

}
class AuctionManagerStateV2 {
  constructor(args) {
    metaplex_defineProperty(this, "status", AuctionManagerStatus.Initialized);

    metaplex_defineProperty(this, "safetyConfigItemsValidated", new (external_bn_js_default())(0));

    metaplex_defineProperty(this, "bidsPushedToAcceptPayment", new (external_bn_js_default())(0));

    metaplex_defineProperty(this, "hasParticipation", false);

    Object.assign(this, args);
  }

}
class ParticipationStateV2 {
  constructor(args) {
    metaplex_defineProperty(this, "collectedToAcceptPayment", new (external_bn_js_default())(0));

    Object.assign(this, args);
  }

}
class ParticipationConfigV2 {
  constructor(args) {
    metaplex_defineProperty(this, "winnerConstraint", WinningConstraint.NoParticipationPrize);

    metaplex_defineProperty(this, "nonWinningConstraint", NonWinningConstraint.GivenForFixedPrice);

    metaplex_defineProperty(this, "fixedPrice", new (external_bn_js_default())(0));

    Object.assign(this, args);
  }

}
class RedeemBidArgs {
  constructor() {
    metaplex_defineProperty(this, "instruction", 2);
  }

}
class RedeemFullRightsTransferBidArgs {
  constructor() {
    metaplex_defineProperty(this, "instruction", 3);
  }

}
class StartAuctionArgs {
  constructor() {
    metaplex_defineProperty(this, "instruction", 5);
  }

}
class ClaimBidArgs {
  constructor() {
    metaplex_defineProperty(this, "instruction", 6);
  }

}
let ProxyCallAddress;

(function (ProxyCallAddress) {
  ProxyCallAddress[ProxyCallAddress["RedeemBid"] = 0] = "RedeemBid";
  ProxyCallAddress[ProxyCallAddress["RedeemFullRightsTransferBid"] = 1] = "RedeemFullRightsTransferBid";
})(ProxyCallAddress || (ProxyCallAddress = {}));

class RedeemUnusedWinningConfigItemsAsAuctioneerArgs {
  constructor(args) {
    metaplex_defineProperty(this, "instruction", 12);

    metaplex_defineProperty(this, "winningConfigItemIndex", void 0);

    metaplex_defineProperty(this, "proxyCall", void 0);

    this.winningConfigItemIndex = args.winningConfigItemIndex;
    this.proxyCall = args.proxyCall;
  }

}
class EmptyPaymentAccountArgs {
  constructor(args) {
    metaplex_defineProperty(this, "instruction", 7);

    metaplex_defineProperty(this, "winningConfigIndex", void 0);

    metaplex_defineProperty(this, "winningConfigItemIndex", void 0);

    metaplex_defineProperty(this, "creatorIndex", void 0);

    this.winningConfigIndex = args.winningConfigIndex;
    this.winningConfigItemIndex = args.winningConfigItemIndex;
    this.creatorIndex = args.creatorIndex;
  }

}
class SetStoreArgs {
  constructor(args) {
    metaplex_defineProperty(this, "instruction", 8);

    metaplex_defineProperty(this, "public", void 0);

    this.public = args.public;
  }

}
class SetWhitelistedCreatorArgs {
  constructor(args) {
    metaplex_defineProperty(this, "instruction", 9);

    metaplex_defineProperty(this, "activated", void 0);

    this.activated = args.activated;
  }

}
class DecommissionAuctionManagerArgs {
  constructor() {
    metaplex_defineProperty(this, "instruction", 13);
  }

}
class RedeemPrintingV2BidArgs {
  constructor(args) {
    metaplex_defineProperty(this, "instruction", 14);

    metaplex_defineProperty(this, "editionOffset", void 0);

    metaplex_defineProperty(this, "winIndex", void 0);

    this.editionOffset = args.editionOffset;
    this.winIndex = args.winIndex;
  }

}
class WithdrawMasterEditionArgs {
  constructor() {
    metaplex_defineProperty(this, "instruction", 15);
  }

}
class RedeemParticipationBidV3Args {
  constructor(args) {
    metaplex_defineProperty(this, "instruction", 19);

    metaplex_defineProperty(this, "winIndex", void 0);

    this.winIndex = args.winIndex;
  }

}
let WinningConstraint;

(function (WinningConstraint) {
  WinningConstraint[WinningConstraint["NoParticipationPrize"] = 0] = "NoParticipationPrize";
  WinningConstraint[WinningConstraint["ParticipationPrizeGiven"] = 1] = "ParticipationPrizeGiven";
})(WinningConstraint || (WinningConstraint = {}));

let NonWinningConstraint;

(function (NonWinningConstraint) {
  NonWinningConstraint[NonWinningConstraint["NoParticipationPrize"] = 0] = "NoParticipationPrize";
  NonWinningConstraint[NonWinningConstraint["GivenForFixedPrice"] = 1] = "GivenForFixedPrice";
  NonWinningConstraint[NonWinningConstraint["GivenForBidPrice"] = 2] = "GivenForBidPrice";
})(NonWinningConstraint || (NonWinningConstraint = {}));

let WinningConfigType;

(function (WinningConfigType) {
  WinningConfigType[WinningConfigType["TokenOnlyTransfer"] = 0] = "TokenOnlyTransfer";
  WinningConfigType[WinningConfigType["FullRightsTransfer"] = 1] = "FullRightsTransfer";
  WinningConfigType[WinningConfigType["PrintingV1"] = 2] = "PrintingV1";
  WinningConfigType[WinningConfigType["PrintingV2"] = 3] = "PrintingV2";
  WinningConfigType[WinningConfigType["Participation"] = 4] = "Participation";
})(WinningConfigType || (WinningConfigType = {}));

const metaplex_decodePrizeTrackingTicket = buffer => {
  return deserializeUnchecked(metaplex_SCHEMA, PrizeTrackingTicket, buffer);
};
const metaplex_decodeWhitelistedCreator = buffer => {
  return deserializeUnchecked(metaplex_SCHEMA, metaplex_WhitelistedCreator, buffer);
};
const metaplex_WhitelistedCreatorParser = (pubkey, account) => ({
  pubkey,
  account,
  info: metaplex_decodeWhitelistedCreator(account.data)
});
const metaplex_decodeStore = buffer => {
  return deserializeUnchecked(metaplex_SCHEMA, Store, buffer);
};
const metaplex_decodeAuctionManager = buffer => {
  return buffer[0] == metaplex_MetaplexKey.AuctionManagerV1 ? deserializeUnchecked(metaplex_SCHEMA, AuctionManagerV1, buffer) : deserializeUnchecked(metaplex_SCHEMA, AuctionManagerV2, buffer);
};
const metaplex_decodeBidRedemptionTicket = buffer => {
  return buffer[0] == metaplex_MetaplexKey.BidRedemptionTicketV1 ? deserializeUnchecked(metaplex_SCHEMA, BidRedemptionTicketV1, buffer) : new BidRedemptionTicketV2({
    key: metaplex_MetaplexKey.BidRedemptionTicketV2,
    data: buffer.toJSON().data
  });
};
const metaplex_decodeSafetyDepositConfig = buffer => {
  return new SafetyDepositConfig({
    data: buffer
  });
};
const metaplex_decodePayoutTicket = buffer => {
  return deserializeUnchecked(metaplex_SCHEMA, PayoutTicket, buffer);
};
class metaplex_WhitelistedCreator {
  // Populated from name service
  constructor(args) {
    metaplex_defineProperty(this, "key", metaplex_MetaplexKey.WhitelistedCreatorV1);

    metaplex_defineProperty(this, "address", void 0);

    metaplex_defineProperty(this, "activated", true);

    metaplex_defineProperty(this, "twitter", void 0);

    metaplex_defineProperty(this, "name", void 0);

    metaplex_defineProperty(this, "image", void 0);

    metaplex_defineProperty(this, "description", void 0);

    this.address = args.address;
    this.activated = args.activated;
  }

}
class Store {
  constructor(args) {
    metaplex_defineProperty(this, "key", metaplex_MetaplexKey.StoreV1);

    metaplex_defineProperty(this, "public", true);

    metaplex_defineProperty(this, "auctionProgram", void 0);

    metaplex_defineProperty(this, "tokenVaultProgram", void 0);

    metaplex_defineProperty(this, "tokenMetadataProgram", void 0);

    metaplex_defineProperty(this, "tokenProgram", void 0);

    this.key = metaplex_MetaplexKey.StoreV1;
    this.public = args.public;
    this.auctionProgram = args.auctionProgram;
    this.tokenVaultProgram = args.tokenVaultProgram;
    this.tokenMetadataProgram = args.tokenMetadataProgram;
    this.tokenProgram = args.tokenProgram;
  }

}
class BidRedemptionTicketV2 {
  constructor(args) {
    metaplex_defineProperty(this, "key", metaplex_MetaplexKey.BidRedemptionTicketV2);

    metaplex_defineProperty(this, "winnerIndex", void 0);

    metaplex_defineProperty(this, "auctionManager", void 0);

    metaplex_defineProperty(this, "data", []);

    Object.assign(this, args);
    let offset = 2;

    if (this.data[1] == 0) {
      this.winnerIndex = null;
    } else {
      this.winnerIndex = new BN(this.data.slice(1, 9), 'le');
      offset += 8;
    }

    this.auctionManager = bs58.encode(this.data.slice(offset, offset + 32));
  }

  getBidRedeemed(order) {
    let offset = 42;

    if (this.data[1] == 0) {
      offset -= 8;
    }

    const index = Math.floor(order / 8) + offset;
    const positionFromRight = 7 - order % 8;
    const mask = Math.pow(2, positionFromRight);
    const appliedMask = this.data[index] & mask;
    return appliedMask != 0;
  }

}
let AuctionManagerStatus;

(function (AuctionManagerStatus) {
  AuctionManagerStatus[AuctionManagerStatus["Initialized"] = 0] = "Initialized";
  AuctionManagerStatus[AuctionManagerStatus["Validated"] = 1] = "Validated";
  AuctionManagerStatus[AuctionManagerStatus["Running"] = 2] = "Running";
  AuctionManagerStatus[AuctionManagerStatus["Disbursing"] = 3] = "Disbursing";
  AuctionManagerStatus[AuctionManagerStatus["Finished"] = 4] = "Finished";
})(AuctionManagerStatus || (AuctionManagerStatus = {}));

let TupleNumericType;

(function (TupleNumericType) {
  TupleNumericType[TupleNumericType["U8"] = 1] = "U8";
  TupleNumericType[TupleNumericType["U16"] = 2] = "U16";
  TupleNumericType[TupleNumericType["U32"] = 4] = "U32";
  TupleNumericType[TupleNumericType["U64"] = 8] = "U64";
})(TupleNumericType || (TupleNumericType = {}));

class AmountRange {
  constructor(args) {
    metaplex_defineProperty(this, "amount", void 0);

    metaplex_defineProperty(this, "length", void 0);

    this.amount = args.amount;
    this.length = args.length;
  }

}
class InitAuctionManagerV2Args {
  constructor(args) {
    metaplex_defineProperty(this, "instruction", 17);

    metaplex_defineProperty(this, "amountType", TupleNumericType.U8);

    metaplex_defineProperty(this, "lengthType", TupleNumericType.U8);

    metaplex_defineProperty(this, "maxRanges", new (external_bn_js_default())(1));

    this.amountType = args.amountType;
    this.lengthType = args.lengthType;
    this.maxRanges = args.maxRanges;
  }

}
class SafetyDepositConfig {
  constructor(args) {
    metaplex_defineProperty(this, "key", metaplex_MetaplexKey.SafetyDepositConfigV1);

    metaplex_defineProperty(this, "auctionManager", web3_js_.SystemProgram.programId.toBase58());

    metaplex_defineProperty(this, "order", new (external_bn_js_default())(0));

    metaplex_defineProperty(this, "winningConfigType", WinningConfigType.PrintingV2);

    metaplex_defineProperty(this, "amountType", TupleNumericType.U8);

    metaplex_defineProperty(this, "lengthType", TupleNumericType.U8);

    metaplex_defineProperty(this, "amountRanges", []);

    metaplex_defineProperty(this, "participationConfig", null);

    metaplex_defineProperty(this, "participationState", null);

    if (args.directArgs) {
      Object.assign(this, args.directArgs);
    } else if (args.data) {
      this.auctionManager = external_bs58_default().encode(args.data.slice(1, 33));
      this.order = new (external_bn_js_default())(args.data.slice(33, 41), 'le');
      this.winningConfigType = args.data[41];
      this.amountType = args.data[42];
      this.lengthType = args.data[43];
      const lengthOfArray = new (external_bn_js_default())(args.data.slice(44, 48), 'le');
      this.amountRanges = [];
      let offset = 48;

      for (let i = 0; i < lengthOfArray.toNumber(); i++) {
        const amount = this.getBNFromData(args.data, offset, this.amountType);
        offset += this.amountType;
        const length = this.getBNFromData(args.data, offset, this.lengthType);
        offset += this.lengthType;
        this.amountRanges.push(new AmountRange({
          amount,
          length
        }));
      }

      if (args.data[offset] == 0) {
        offset += 1;
        this.participationConfig = null;
      } else {
        // pick up participation config manually
        const winnerConstraintAsNumber = args.data[offset + 1];
        const nonWinnerConstraintAsNumber = args.data[offset + 2];
        let fixedPrice = null;
        offset += 3;

        if (args.data[offset] == 1) {
          fixedPrice = new (external_bn_js_default())(args.data.slice(offset + 1, offset + 9), 'le');
          offset += 9;
        } else {
          offset += 1;
        }

        this.participationConfig = new ParticipationConfigV2({
          winnerConstraint: winnerConstraintAsNumber,
          nonWinningConstraint: nonWinnerConstraintAsNumber,
          fixedPrice: fixedPrice
        });
      }

      if (args.data[offset] == 0) {
        offset += 1;
        this.participationState = null;
      } else {
        // pick up participation state manually
        const collectedToAcceptPayment = new (external_bn_js_default())(args.data.slice(offset + 1, offset + 9), 'le');
        offset += 9;
        this.participationState = new ParticipationStateV2({
          collectedToAcceptPayment
        });
      }
    }
  }

  getBNFromData(data, offset, dataType) {
    switch (dataType) {
      case TupleNumericType.U8:
        return new (external_bn_js_default())(data[offset], 'le');

      case TupleNumericType.U16:
        return new (external_bn_js_default())(data.slice(offset, offset + 2), 'le');

      case TupleNumericType.U32:
        return new (external_bn_js_default())(data.slice(offset, offset + 4), 'le');

      case TupleNumericType.U64:
        return new (external_bn_js_default())(data.slice(offset, offset + 8), 'le');
    }
  }

  getAmountForWinner(winner) {
    let start = new (external_bn_js_default())(0);

    for (let i = 0; i < this.amountRanges.length; i++) {
      const end = start.add(this.amountRanges[i].length);

      if (winner.gte(start) && winner.lt(end)) {
        return this.amountRanges[i].amount;
      }

      start = end;
    }

    return new (external_bn_js_default())(0);
  }

}
class ValidateSafetyDepositBoxV2Args {
  constructor(safetyDeposit) {
    metaplex_defineProperty(this, "instruction", 18);

    metaplex_defineProperty(this, "safetyDepositConfig", void 0);

    this.safetyDepositConfig = safetyDeposit;
  }

}
const metaplex_SCHEMA = new Map([...DEPRECATED_SCHEMA, [PrizeTrackingTicket, {
  kind: 'struct',
  fields: [['key', 'u8'], ['metadata', 'pubkeyAsString'], ['supplySnapshot', 'u64'], ['expectedRedemptions', 'u64'], ['redemptions', 'u64']]
}], [AuctionManagerV2, {
  kind: 'struct',
  fields: [['key', 'u8'], ['store', 'pubkeyAsString'], ['authority', 'pubkeyAsString'], ['auction', 'pubkeyAsString'], ['vault', 'pubkeyAsString'], ['acceptPayment', 'pubkeyAsString'], ['state', AuctionManagerStateV2]]
}], [ParticipationConfigV2, {
  kind: 'struct',
  fields: [['winnerConstraint', 'u8'], // enum
  ['nonWinningConstraint', 'u8'], ['fixedPrice', {
    kind: 'option',
    type: 'u64'
  }]]
}], [metaplex_WhitelistedCreator, {
  kind: 'struct',
  fields: [['key', 'u8'], ['address', 'pubkeyAsString'], ['activated', 'u8']]
}], [Store, {
  kind: 'struct',
  fields: [['key', 'u8'], ['public', 'u8'], ['auctionProgram', 'pubkeyAsString'], ['tokenVaultProgram', 'pubkeyAsString'], ['tokenMetadataProgram', 'pubkeyAsString'], ['tokenProgram', 'pubkeyAsString']]
}], [AuctionManagerStateV2, {
  kind: 'struct',
  fields: [['status', 'u8'], ['safetyConfigItemsValidated', 'u64'], ['bidsPushedToAcceptPayment', 'u64'], ['hasParticipation', 'u8']]
}], [ParticipationStateV2, {
  kind: 'struct',
  fields: [['collectedToAcceptPayment', 'u64']]
}], [PayoutTicket, {
  kind: 'struct',
  fields: [['key', 'u8'], ['recipient', 'pubkeyAsString'], ['amountPaid', 'u64']]
}], [AmountRange, {
  kind: 'struct',
  fields: [['amount', 'u64'], ['length', 'u64']]
}], [SafetyDepositConfig, {
  kind: 'struct',
  fields: [['key', 'u8'], ['auctionManager', 'pubkeyAsString'], ['order', 'u64'], ['winningConfigType', 'u8'], ['amountType', 'u8'], ['lengthType', 'u8'], ['amountRanges', [AmountRange]], ['participationConfig', {
    kind: 'option',
    type: ParticipationConfigV2
  }], ['participationState', {
    kind: 'option',
    type: ParticipationStateV2
  }]]
}], [RedeemUnusedWinningConfigItemsAsAuctioneerArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['winningConfigItemIndex', 'u8'], ['proxyCall', 'u8']]
}], [DecommissionAuctionManagerArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [RedeemPrintingV2BidArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['editionOffset', 'u64'], ['winIndex', 'u64']]
}], [WithdrawMasterEditionArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [RedeemParticipationBidV3Args, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['winIndex', {
    kind: 'option',
    type: 'u64'
  }]]
}], [InitAuctionManagerV2Args, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['amountType', 'u8'], ['lengthType', 'u8'], ['maxRanges', 'u64']]
}], [ValidateSafetyDepositBoxV2Args, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['safetyDepositConfig', SafetyDepositConfig]]
}], [RedeemBidArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [RedeemFullRightsTransferBidArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [StartAuctionArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [ClaimBidArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8']]
}], [EmptyPaymentAccountArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['winningConfigIndex', {
    kind: 'option',
    type: 'u8'
  }], ['winningConfigItemIndex', {
    kind: 'option',
    type: 'u8'
  }], ['creatorIndex', {
    kind: 'option',
    type: 'u8'
  }]]
}], [SetStoreArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['public', 'u8'] //bool
  ]
}], [SetWhitelistedCreatorArgs, {
  kind: 'struct',
  fields: [['instruction', 'u8'], ['activated', 'u8'] //bool
  ]
}]]);
async function getAuctionManagerKey(vault, auctionKey) {
  const PROGRAM_IDS = (0,lib.programIds)();
  return (await (0,lib.findProgramAddress)([Buffer.from(metaplex_METAPLEX_PREFIX), (0,lib.toPublicKey)(auctionKey).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.metaplex)))[0];
}
async function metaplex_getAuctionKeys(vault) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const auctionKey = (await (0,lib.findProgramAddress)([Buffer.from(lib.AUCTION_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.auction).toBuffer(), (0,lib.toPublicKey)(vault).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.auction)))[0];
  const auctionManagerKey = await getAuctionManagerKey(vault, auctionKey);
  return {
    auctionKey,
    auctionManagerKey
  };
}
async function getBidRedemption(auctionKey, bidMetadata) {
  const PROGRAM_IDS = (0,lib.programIds)();
  return (await (0,lib.findProgramAddress)([Buffer.from(metaplex_METAPLEX_PREFIX), (0,lib.toPublicKey)(auctionKey).toBuffer(), (0,lib.toPublicKey)(bidMetadata).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.metaplex)))[0];
}
async function getBidderKeys(auctionKey, bidder) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const bidMetadata = (await (0,lib.findProgramAddress)([Buffer.from(lib.AUCTION_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.auction).toBuffer(), (0,lib.toPublicKey)(auctionKey).toBuffer(), (0,lib.toPublicKey)(bidder).toBuffer(), Buffer.from(lib.METADATA)], (0,lib.toPublicKey)(PROGRAM_IDS.auction)))[0];
  const bidRedemption = await getBidRedemption(auctionKey, bidMetadata);
  return {
    bidMetadata,
    bidRedemption
  };
}
async function metaplex_getOriginalAuthority(auctionKey, metadata) {
  const PROGRAM_IDS = (0,lib.programIds)();
  return (await (0,lib.findProgramAddress)([Buffer.from(metaplex_METAPLEX_PREFIX), (0,lib.toPublicKey)(auctionKey).toBuffer(), (0,lib.toPublicKey)(metadata).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.metaplex)))[0];
}
async function metaplex_getWhitelistedCreator(creator) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  return (await (0,lib.findProgramAddress)([Buffer.from(metaplex_METAPLEX_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.metaplex).toBuffer(), (0,lib.toPublicKey)(store).toBuffer(), (0,lib.toPublicKey)(creator).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.metaplex)))[0];
}
async function getPrizeTrackingTicket(auctionManager, mint) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  return (await (0,lib.findProgramAddress)([Buffer.from(metaplex_METAPLEX_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.metaplex).toBuffer(), (0,lib.toPublicKey)(auctionManager).toBuffer(), (0,lib.toPublicKey)(mint).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.metaplex)))[0];
}
async function getAuctionWinnerTokenTypeTracker(auctionManager) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  return (await (0,lib.findProgramAddress)([Buffer.from(metaplex_METAPLEX_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.metaplex).toBuffer(), (0,lib.toPublicKey)(auctionManager).toBuffer(), Buffer.from(TOTALS)], (0,lib.toPublicKey)(PROGRAM_IDS.metaplex)))[0];
}
async function getSafetyDepositConfig(auctionManager, safetyDeposit) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  return (await (0,lib.findProgramAddress)([Buffer.from(metaplex_METAPLEX_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.metaplex).toBuffer(), (0,lib.toPublicKey)(auctionManager).toBuffer(), (0,lib.toPublicKey)(safetyDeposit).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.metaplex)))[0];
}
async function getPayoutTicket(auctionManager, winnerConfigIndex, winnerConfigItemIndex, creatorIndex, safetyDepositBox, recipient) {
  const PROGRAM_IDS = (0,lib.programIds)();
  return (await (0,lib.findProgramAddress)([Buffer.from(metaplex_METAPLEX_PREFIX), (0,lib.toPublicKey)(auctionManager).toBuffer(), Buffer.from(winnerConfigIndex !== null && winnerConfigIndex !== undefined ? winnerConfigIndex.toString() : 'participation'), Buffer.from(winnerConfigItemIndex !== null && winnerConfigItemIndex !== undefined ? winnerConfigItemIndex.toString() : '0'), Buffer.from(creatorIndex !== null && creatorIndex !== undefined ? creatorIndex.toString() : 'auctioneer'), (0,lib.toPublicKey)(safetyDepositBox).toBuffer(), (0,lib.toPublicKey)(recipient).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.metaplex)))[0];
}
;// CONCATENATED MODULE: ./src/models/metaplex/decommissionAuctionManager.ts




async function decommissionAuctionManager(auctionManager, auction, authority, vault, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const value = new DecommissionAuctionManagerArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManager),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auction),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(authority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.auction),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_CLOCK_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)((0,lib.programIds)().vault),
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/actions/closeVault.ts





const {
  createTokenAccount,
  activateVault,
  combineVault
} = lib.actions;
const {
  approve
} = lib.models; // This command "closes" the vault, by activating & combining it in one go, handing it over to the auction manager
// authority (that may or may not exist yet.)

async function closeVault(connection, wallet, vault, fractionMint, fractionTreasury, redeemTreasury, priceMint, externalPriceAccount) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  const signers = [];
  const instructions = [];
  await activateVault(new (external_bn_js_default())(0), vault, fractionMint, fractionTreasury, wallet.publicKey.toBase58(), instructions);
  const outstandingShareAccount = createTokenAccount(instructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(fractionMint), wallet.publicKey, signers);
  const payingTokenAccount = createTokenAccount(instructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(priceMint), wallet.publicKey, signers);
  const transferAuthority = web3_js_.Keypair.generate(); // Shouldn't need to pay anything since we activated vault with 0 shares, but we still
  // need this setup anyway.

  approve(instructions, [], payingTokenAccount, wallet.publicKey, 0, false, undefined, transferAuthority);
  approve(instructions, [], outstandingShareAccount, wallet.publicKey, 0, false, undefined, transferAuthority);
  signers.push(transferAuthority);
  await combineVault(vault, outstandingShareAccount.toBase58(), payingTokenAccount.toBase58(), fractionMint, fractionTreasury, redeemTreasury, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), transferAuthority.publicKey.toBase58(), externalPriceAccount, instructions);
  return {
    instructions,
    signers
  };
}
;// CONCATENATED MODULE: ./src/actions/unwindVault.ts




const BATCH_SIZE = 1; // Given a vault you own, unwind all the tokens out of it.

async function unwindVault(connection, wallet, vault, safetyDepositBoxesByVaultAndIndex) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  let batchCounter = 0;
  const PROGRAM_IDS = (0,lib.programIds)();
  const signers = [];
  const instructions = [];
  let currSigners = [];
  let currInstructions = [];

  if (vault.info.state === lib.VaultState.Inactive) {
    console.log('Vault is inactive, combining');
    const epa = await connection.getAccountInfo((0,lib.toPublicKey)(vault.info.pricingLookupAddress));

    if (epa) {
      const decoded = (0,lib.decodeExternalPriceAccount)(epa.data); // "Closing" it here actually brings it to Combined state which means we can withdraw tokens.

      const {
        instructions: cvInstructions,
        signers: cvSigners
      } = await closeVault(connection, wallet, vault.pubkey, vault.info.fractionMint, vault.info.fractionTreasury, vault.info.redeemTreasury, decoded.priceMint, vault.info.pricingLookupAddress);
      signers.push(cvSigners);
      instructions.push(cvInstructions);
    }
  }

  const vaultKey = vault.pubkey;
  const boxes = [];
  let box = safetyDepositBoxesByVaultAndIndex[vaultKey + '-0'];

  if (box) {
    boxes.push(box);
    let i = 1;

    while (box) {
      box = safetyDepositBoxesByVaultAndIndex[vaultKey + '-' + i.toString()];
      if (box) boxes.push(box);
      i++;
    }
  }

  console.log('Found boxes', boxes);

  for (let i = 0; i < boxes.length; i++) {
    const nft = boxes[i];
    const ata = (await (0,lib.findProgramAddress)([wallet.publicKey.toBuffer(), PROGRAM_IDS.token.toBuffer(), (0,lib.toPublicKey)(nft.info.tokenMint).toBuffer()], PROGRAM_IDS.associatedToken))[0];
    const existingAta = await connection.getAccountInfo((0,lib.toPublicKey)(ata));
    console.log('Existing ata?', existingAta);
    if (!existingAta) (0,lib.createAssociatedTokenAccountInstruction)(currInstructions, (0,lib.toPublicKey)(ata), wallet.publicKey, wallet.publicKey, (0,lib.toPublicKey)(nft.info.tokenMint));
    const value = await connection.getTokenAccountBalance((0,lib.toPublicKey)(nft.info.store));
    await (0,lib.withdrawTokenFromSafetyDepositBox)(new (external_bn_js_default())(value.value.uiAmount || 1), ata, nft.pubkey, nft.info.store, vault.pubkey, vault.info.fractionMint, wallet.publicKey.toBase58(), currInstructions);

    if (batchCounter === BATCH_SIZE) {
      signers.push(currSigners);
      instructions.push(currInstructions);
      batchCounter = 0;
      currSigners = [];
      currInstructions = [];
    }

    batchCounter++;
  }

  if (instructions[instructions.length - 1] !== currInstructions) {
    signers.push(currSigners);
    instructions.push(currInstructions);
  }

  await (0,lib.sendTransactionsWithManualRetry)(connection, wallet, instructions, signers);
}
;// CONCATENATED MODULE: ./src/actions/decommAuctionManagerAndReturnPrizes.ts





async function decommAuctionManagerAndReturnPrizes(connection, wallet, auctionView, safetyDepositBoxesByVaultAndIndex) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const signers = [];
  const instructions = [];

  if (auctionView.auctionManager.status === AuctionManagerStatus.Initialized) {
    const decomSigners = [];
    const decomInstructions = [];

    if (auctionView.auction.info.authority === wallet.publicKey.toBase58()) {
      await (0,lib.setAuctionAuthority)(auctionView.auction.pubkey, wallet.publicKey.toBase58(), auctionView.auctionManager.pubkey, decomInstructions);
    }

    if (auctionView.vault.info.authority === wallet.publicKey.toBase58()) {
      await (0,lib.setVaultAuthority)(auctionView.vault.pubkey, wallet.publicKey.toBase58(), auctionView.auctionManager.pubkey, decomInstructions);
    }

    await decommissionAuctionManager(auctionView.auctionManager.pubkey, auctionView.auction.pubkey, wallet.publicKey.toBase58(), auctionView.vault.pubkey, decomInstructions);
    signers.push(decomSigners);
    instructions.push(decomInstructions);
  }

  await (0,lib.sendTransactionsWithManualRetry)(connection, wallet, instructions, signers); // now that is rightfully decommed, we have authority back properly to the vault,
  // and the auction manager is in disbursing, so we can unwind the vault.

  await unwindVault(connection, wallet, auctionView.vault, safetyDepositBoxesByVaultAndIndex);
}
;// CONCATENATED MODULE: ./src/actions/sendSignMetadata.ts


async function sendSignMetadata(connection, wallet, metadata) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const signers = [];
  const instructions = [];
  await (0,lib.signMetadata)(metadata, wallet.publicKey.toBase58(), instructions);
  await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions, signers, 'single');
}
;// CONCATENATED MODULE: ./src/models/metaplex/claimBid.ts




async function claimBid(acceptPayment, bidder, bidderPotToken, vault, tokenMint, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const bidderPotKey = await (0,lib.getBidderPotKey)({
    auctionProgramId: PROGRAM_IDS.auction,
    auctionKey,
    bidderPubkey: bidder
  });
  const value = new ClaimBidArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(acceptPayment),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(bidderPotToken),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(bidderPotKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(bidder),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(tokenMint),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.auction),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_CLOCK_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/emptyPaymentAccount.ts




async function emptyPaymentAccount(acceptPayment, destination, auctionManager, metadata, masterEdition, safetyDepositBox, vault, auction, payer, recipient, winningConfigIndex, winningConfigItemIndex, creatorIndex, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const safetyDepositConfig = await getSafetyDepositConfig(auctionManager, safetyDepositBox);
  const tokenTracker = await getAuctionWinnerTokenTypeTracker(auctionManager);
  const value = new EmptyPaymentAccountArgs({
    winningConfigIndex,
    winningConfigItemIndex,
    creatorIndex
  });
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(acceptPayment),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(destination),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionManager),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(await getPayoutTicket(auctionManager, winningConfigIndex, winningConfigItemIndex, creatorIndex, safetyDepositBox, recipient)),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(masterEdition || web3_js_.SystemProgram.programId),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositBox),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auction),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(tokenTracker),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositConfig),
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/deprecatedPopulateParticipationPrintingAccount.ts





async function deprecatedPopulateParticipationPrintingAccount(vault, auctionManager, auction, safetyDepositTokenStore, transientOneTimeAccount, printingTokenAccount, safetyDeposit, fractionMint, printingMint, oneTimePrintingAuthorizationMint, masterEdition, metadata, payer, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const transferAuthority = (await (0,lib.findProgramAddress)([Buffer.from(lib.VAULT_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.vault).toBuffer(), (0,lib.toPublicKey)(vault).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.vault)))[0];
  const value = new DeprecatedPopulateParticipationPrintingAccountArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(safetyDepositTokenStore),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(transientOneTimeAccount),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(printingTokenAccount),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(oneTimePrintingAuthorizationMint),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(printingMint),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDeposit),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(fractionMint),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auction),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(await (0,lib.getAuctionExtended)({
      auctionProgramId: PROGRAM_IDS.auction,
      resource: vault
    })),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionManager),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(masterEdition),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(transferAuthority),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/actions/createMintAndAccountWithOne.ts



async function createMintAndAccountWithOne(wallet, receiverWallet, mintRent, instructions, signers) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const mint = (0,lib.createMint)(instructions, wallet.publicKey, mintRent, 0, wallet.publicKey, wallet.publicKey, signers);
  const PROGRAM_IDS = (0,lib.programIds)();
  const account = (await (0,lib.findProgramAddress)([(0,lib.toPublicKey)(receiverWallet).toBuffer(), PROGRAM_IDS.token.toBuffer(), mint.toBuffer()], PROGRAM_IDS.associatedToken))[0];
  (0,lib.createAssociatedTokenAccountInstruction)(instructions, (0,lib.toPublicKey)(account), wallet.publicKey, (0,lib.toPublicKey)(receiverWallet), mint);
  instructions.push(spl_token_.Token.createMintToInstruction(PROGRAM_IDS.token, mint, (0,lib.toPublicKey)(account), wallet.publicKey, [], 1));
  return {
    mint: mint.toBase58(),
    account
  };
}
;// CONCATENATED MODULE: ./src/actions/sendRedeemBid.ts












const {
  createTokenAccount: sendRedeemBid_createTokenAccount
} = lib.actions;
const {
  approve: sendRedeemBid_approve
} = lib.models;
function eligibleForParticipationPrizeGivenWinningIndex(winnerIndex, auctionView, bidderMetadata, bidRedemption) {
  var _auctionView$auctionM, _auctionView$auctionM2, _auctionView$auctionM3;

  const index = (_auctionView$auctionM = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM === void 0 ? void 0 : _auctionView$auctionM.safetyDepositBoxIndex;

  if (index == undefined || index == null) {
    return false;
  }

  if (!bidderMetadata || bidRedemption !== null && bidRedemption !== void 0 && bidRedemption.info.getBidRedeemed(index)) return false;
  return winnerIndex === null && ((_auctionView$auctionM2 = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM2 === void 0 ? void 0 : _auctionView$auctionM2.nonWinningConstraint) !== NonWinningConstraint.NoParticipationPrize || winnerIndex !== null && ((_auctionView$auctionM3 = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM3 === void 0 ? void 0 : _auctionView$auctionM3.winnerConstraint) !== WinningConstraint.NoParticipationPrize;
}
async function sendRedeemBid(connection, wallet, payingAccount, auctionView, accountsByMint, prizeTrackingTickets, bidRedemptions, bids) {
  var _auctionView$myBidder, _auctionView$myBidder2;

  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const signers = [];
  const instructions = [];

  if (auctionView.auction.info.ended() && auctionView.auction.info.state !== lib.AuctionState.Ended) {
    await setupPlaceBid(connection, wallet, payingAccount, auctionView, accountsByMint, 0, instructions, signers);
  }

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  const mintRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span);
  let winnerIndex = null;
  if ((_auctionView$myBidder = auctionView.myBidderPot) !== null && _auctionView$myBidder !== void 0 && _auctionView$myBidder.pubkey) winnerIndex = auctionView.auction.info.bidState.getWinnerIndex((_auctionView$myBidder2 = auctionView.myBidderPot) === null || _auctionView$myBidder2 === void 0 ? void 0 : _auctionView$myBidder2.info.bidderAct);
  console.log('Winner index', winnerIndex);

  if (winnerIndex !== null) {
    // items is a prebuilt array of arrays where each entry represents one
    // winning spot, and each entry in it represents one type of item that can
    // be received.
    const winningSet = auctionView.items[winnerIndex];

    for (let i = 0; i < winningSet.length; i++) {
      const item = winningSet[i];
      const safetyDeposit = item.safetyDeposit;

      switch (item.winningConfigType) {
        case WinningConfigType.PrintingV1:
          console.log('Redeeming printing v1');
          await deprecatedSetupRedeemPrintingV1Instructions(auctionView, accountsByMint, accountRentExempt, mintRentExempt, wallet, safetyDeposit, item, winnerIndex, signers, instructions);
          break;

        case WinningConfigType.PrintingV2:
          console.log('Redeeming printing v2');
          await setupRedeemPrintingV2Instructions(connection, auctionView, mintRentExempt, wallet, wallet.publicKey.toBase58(), safetyDeposit, item, signers, instructions, winnerIndex, prizeTrackingTickets);
          break;

        case WinningConfigType.FullRightsTransfer:
          console.log('Redeeming Full Rights');
          await setupRedeemFullRightsTransferInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, item, winnerIndex, signers, instructions);
          break;

        case WinningConfigType.TokenOnlyTransfer:
          console.log('Redeeming Token only');
          await setupRedeemInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, winnerIndex, signers, instructions);
          break;
      }
    }

    if (auctionView.myBidderMetadata && auctionView.myBidderPot) {
      var _auctionView$myBidder3;

      const claimSigners = [];
      const claimInstructions = [];
      instructions.push(claimInstructions);
      signers.push(claimSigners);
      console.log('Claimed');
      await claimBid(auctionView.auctionManager.acceptPayment, auctionView.myBidderMetadata.info.bidderPubkey, (_auctionView$myBidder3 = auctionView.myBidderPot) === null || _auctionView$myBidder3 === void 0 ? void 0 : _auctionView$myBidder3.info.bidderPot, auctionView.vault.pubkey, auctionView.auction.info.tokenMint, claimInstructions);
    }
  } else {
    // If you didnt win, you must have a bid we can refund before we check for open editions.
    await setupCancelBid(auctionView, accountsByMint, accountRentExempt, wallet, signers, instructions);
  }

  if (auctionView.participationItem && eligibleForParticipationPrizeGivenWinningIndex(winnerIndex, auctionView, auctionView.myBidderMetadata, auctionView.myBidRedemption)) {
    var _item$masterEdition;

    console.log('eligible for participation');
    const item = auctionView.participationItem;
    const safetyDeposit = item.safetyDeposit;

    if (((_item$masterEdition = item.masterEdition) === null || _item$masterEdition === void 0 ? void 0 : _item$masterEdition.info.key) == lib.MetadataKey.MasterEditionV1) {
      await deprecatedSetupRedeemParticipationInstructions(connection, auctionView, accountsByMint, accountRentExempt, mintRentExempt, wallet, safetyDeposit, item, signers, instructions);
    } else {
      await setupRedeemParticipationInstructions(connection, auctionView, accountsByMint, accountRentExempt, mintRentExempt, wallet, wallet.publicKey.toBase58(), safetyDeposit, auctionView.myBidRedemption, auctionView.myBidderMetadata, item, signers, instructions);
    }
  }

  if (wallet.publicKey.toBase58() === auctionView.auctionManager.authority) {
    await claimUnusedPrizes(connection, wallet, auctionView, accountsByMint, bids, bidRedemptions, prizeTrackingTickets, signers, instructions);
  }

  await (0,lib.sendTransactionsWithManualRetry)(connection, wallet, instructions, signers);
}

async function setupRedeemInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, winnerIndex, signers, instructions) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const winningPrizeSigner = [];
  const winningPrizeInstructions = [];
  signers.push(winningPrizeSigner);
  instructions.push(winningPrizeInstructions);
  const claimed = auctionView.auctionManager.isItemClaimed(winnerIndex, safetyDeposit.info.order);

  if (!claimed && auctionView.myBidderMetadata) {
    var _accountsByMint$get;

    let newTokenAccount = (_accountsByMint$get = accountsByMint.get(safetyDeposit.info.tokenMint)) === null || _accountsByMint$get === void 0 ? void 0 : _accountsByMint$get.pubkey;
    if (!newTokenAccount) newTokenAccount = sendRedeemBid_createTokenAccount(winningPrizeInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(safetyDeposit.info.tokenMint), wallet.publicKey, winningPrizeSigner).toBase58();
    await redeemBid(auctionView.auctionManager.vault, safetyDeposit.info.store, newTokenAccount, safetyDeposit.pubkey, auctionView.vault.info.fractionMint, auctionView.myBidderMetadata.info.bidderPubkey, wallet.publicKey.toBase58(), undefined, undefined, false, winningPrizeInstructions);
    const metadata = await (0,lib.getMetadata)(safetyDeposit.info.tokenMint);
    await (0,lib.updatePrimarySaleHappenedViaToken)(metadata, wallet.publicKey.toBase58(), newTokenAccount, winningPrizeInstructions);
  }
}

async function setupRedeemFullRightsTransferInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, item, winnerIndex, signers, instructions) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const winningPrizeSigner = [];
  const winningPrizeInstructions = [];
  signers.push(winningPrizeSigner);
  instructions.push(winningPrizeInstructions);
  const claimed = auctionView.auctionManager.isItemClaimed(winnerIndex, safetyDeposit.info.order);

  if (!claimed && auctionView.myBidderMetadata) {
    var _accountsByMint$get2;

    let newTokenAccount = (_accountsByMint$get2 = accountsByMint.get(safetyDeposit.info.tokenMint)) === null || _accountsByMint$get2 === void 0 ? void 0 : _accountsByMint$get2.pubkey;
    if (!newTokenAccount) newTokenAccount = sendRedeemBid_createTokenAccount(winningPrizeInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(safetyDeposit.info.tokenMint), wallet.publicKey, winningPrizeSigner).toBase58();
    await redeemFullRightsTransferBid(auctionView.auctionManager.vault, safetyDeposit.info.store, newTokenAccount, safetyDeposit.pubkey, auctionView.vault.info.fractionMint, auctionView.myBidderMetadata.info.bidderPubkey, wallet.publicKey.toBase58(), winningPrizeInstructions, item.metadata.pubkey, wallet.publicKey.toBase58());
    const metadata = await (0,lib.getMetadata)(safetyDeposit.info.tokenMint);
    await (0,lib.updatePrimarySaleHappenedViaToken)(metadata, wallet.publicKey.toBase58(), newTokenAccount, winningPrizeInstructions);
  }
}

async function setupRedeemPrintingV2Instructions(connection, auctionView, mintRentExempt, wallet, receiverWallet, safetyDeposit, item, signers, instructions, winningIndex, prizeTrackingTickets) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();

  if (!item.masterEdition || !item.metadata) {
    return;
  }

  const me = item.masterEdition;
  const myPrizeTrackingTicketKey = await getPrizeTrackingTicket(auctionView.auctionManager.pubkey, item.metadata.info.mint);
  const myPrizeTrackingTicket = prizeTrackingTickets[myPrizeTrackingTicketKey]; // We are not entirely guaranteed this is right. Someone could be clicking at the same time. Contract will throw error if this
  // is the case and they'll need to refresh to get tracking ticket which may not have existed when they first clicked.

  const editionBase = myPrizeTrackingTicket ? myPrizeTrackingTicket.info.supplySnapshot : me.info.supply;
  let offset = new external_bn_js_.BN(1);
  auctionView.items.forEach((wc, index) => index < winningIndex && wc.forEach(i => {
    if (i.safetyDeposit.info.order === item.safetyDeposit.info.order && i.winningConfigType === item.winningConfigType) {
      offset = offset.add(i.amount);
    }
  }));

  for (let i = 0; i < item.amount.toNumber(); i++) {
    const myInstructions = [];
    const mySigners = [];
    const {
      mint,
      account
    } = await createMintAndAccountWithOne(wallet, receiverWallet, mintRentExempt, myInstructions, mySigners);
    const winIndex = auctionView.auction.info.bidState.getWinnerIndex(receiverWallet) || 0;
    const desiredEdition = editionBase.add(offset.add(new external_bn_js_.BN(i)));
    const editionMarkPda = await (0,lib.getEditionMarkPda)(item.metadata.info.mint, desiredEdition);

    try {
      const editionData = await connection.getAccountInfo((0,lib.toPublicKey)(editionMarkPda));

      if (editionData) {
        const marker = (0,lib.decodeEditionMarker)(editionData.data);

        if (marker.editionTaken(desiredEdition.toNumber())) {
          console.log('Edition', desiredEdition, 'taken, continuing');
          continue;
        }
      }
    } catch (e) {
      console.error(e);
    }

    await redeemPrintingV2Bid(auctionView.vault.pubkey, safetyDeposit.info.store, account, safetyDeposit.pubkey, receiverWallet, wallet.publicKey.toBase58(), item.metadata.pubkey, me.pubkey, item.metadata.info.mint, mint, desiredEdition, new external_bn_js_.BN(offset.add(new external_bn_js_.BN(i))), new external_bn_js_.BN(winIndex), myInstructions);
    const metadata = await (0,lib.getMetadata)(mint);

    if (wallet.publicKey.toBase58() === receiverWallet) {
      await (0,lib.updatePrimarySaleHappenedViaToken)(metadata, wallet.publicKey.toBase58(), account, myInstructions);
    }

    instructions.push(myInstructions);
    signers.push(mySigners);
  }
}

async function deprecatedSetupRedeemPrintingV1Instructions(auctionView, accountsByMint, accountRentExempt, mintRentExempt, wallet, safetyDeposit, item, winnerIndex, signers, instructions) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();

  if (!item.masterEdition || !item.metadata) {
    return;
  }

  const updateAuth = item.metadata.info.updateAuthority;
  const reservationList = await (0,lib.deprecatedGetReservationList)(item.masterEdition.pubkey, auctionView.auctionManager.pubkey);
  const me = item.masterEdition;
  const newTokenAccount = accountsByMint.get(me.info.printingMint);
  let newTokenAccountKey = newTokenAccount === null || newTokenAccount === void 0 ? void 0 : newTokenAccount.pubkey;
  let newTokenAccountBalance = newTokenAccount ? newTokenAccount.info.amount.toNumber() : 0;
  const claimed = auctionView.auctionManager.isItemClaimed(winnerIndex, safetyDeposit.info.order);

  if (updateAuth && auctionView.myBidderMetadata) {
    console.log('This state item is', claimed);

    if (!claimed) {
      const winningPrizeSigner = [];
      const winningPrizeInstructions = [];
      signers.push(winningPrizeSigner);
      instructions.push(winningPrizeInstructions);
      if (!newTokenAccountKey) // TODO: switch to ATA
        newTokenAccountKey = sendRedeemBid_createTokenAccount(winningPrizeInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(me.info.printingMint), wallet.publicKey, winningPrizeSigner).toBase58();
      await redeemBid(auctionView.auctionManager.vault, safetyDeposit.info.store, newTokenAccountKey, safetyDeposit.pubkey, auctionView.vault.info.fractionMint, auctionView.myBidderMetadata.info.bidderPubkey, wallet.publicKey.toBase58(), item.masterEdition.pubkey, reservationList, true, winningPrizeInstructions);
      newTokenAccountBalance = auctionView.auctionManager.getAmountForWinner(winnerIndex, safetyDeposit.info.order).toNumber();
    }

    if (newTokenAccountKey && newTokenAccountBalance > 0) for (let i = 0; i < newTokenAccountBalance; i++) {
      console.log('Redeeming v1 token', i);
      await deprecatedRedeemPrintingV1Token(wallet, updateAuth, item, newTokenAccountKey, mintRentExempt, accountRentExempt, signers, instructions, reservationList);
    }
  }
}

async function deprecatedRedeemPrintingV1Token(wallet, updateAuth, item, newTokenAccount, mintRentExempt, accountRentExempt, signers, instructions, reservationList) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  if (!item.masterEdition) return;
  const cashInLimitedPrizeAuthorizationTokenSigner = [];
  const cashInLimitedPrizeAuthorizationTokenInstruction = [];
  signers.push(cashInLimitedPrizeAuthorizationTokenSigner);
  instructions.push(cashInLimitedPrizeAuthorizationTokenInstruction);
  const newLimitedEditionMint = (0,lib.createMint)(cashInLimitedPrizeAuthorizationTokenInstruction, wallet.publicKey, mintRentExempt, 0, wallet.publicKey, wallet.publicKey, cashInLimitedPrizeAuthorizationTokenSigner).toBase58();
  const newLimitedEdition = sendRedeemBid_createTokenAccount(cashInLimitedPrizeAuthorizationTokenInstruction, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(newLimitedEditionMint), wallet.publicKey, cashInLimitedPrizeAuthorizationTokenSigner);
  cashInLimitedPrizeAuthorizationTokenInstruction.push(spl_token_.Token.createMintToInstruction((0,lib.programIds)().token, (0,lib.toPublicKey)(newLimitedEditionMint), newLimitedEdition, wallet.publicKey, [], 1));
  const burnAuthority = sendRedeemBid_approve(cashInLimitedPrizeAuthorizationTokenInstruction, [], (0,lib.toPublicKey)(newTokenAccount), wallet.publicKey, 1);
  cashInLimitedPrizeAuthorizationTokenSigner.push(burnAuthority);
  const me = item.masterEdition;
  await (0,lib.deprecatedMintNewEditionFromMasterEditionViaPrintingToken)(newLimitedEditionMint, item.metadata.info.mint, wallet.publicKey.toBase58(), me.info.printingMint, newTokenAccount, burnAuthority.publicKey.toBase58(), updateAuth, reservationList, cashInLimitedPrizeAuthorizationTokenInstruction, wallet.publicKey.toBase58());
  const metadata = await (0,lib.getMetadata)(newLimitedEditionMint);
  await (0,lib.updatePrimarySaleHappenedViaToken)(metadata, wallet.publicKey.toBase58(), newLimitedEdition.toBase58(), cashInLimitedPrizeAuthorizationTokenInstruction);
}

async function setupRedeemParticipationInstructions(connection, auctionView, accountsByMint, accountRentExempt, mintRentExempt, wallet, receiverWallet, safetyDeposit, bidRedemption, bid, item, signers, instructions) {
  var _bidRedemption$info;

  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();

  if (!item.masterEdition || !item.metadata) {
    return;
  } // Forgive me, for i have sinned. I had to split up the commands
  // here into multiple txns because participation redemption is huge.


  if (!(bidRedemption !== null && bidRedemption !== void 0 && (_bidRedemption$info = bidRedemption.info) !== null && _bidRedemption$info !== void 0 && _bidRedemption$info.getBidRedeemed(safetyDeposit.info.order))) {
    var _auctionView$auctionM4;

    const me = item.masterEdition; // Super unfortunate but cant fit this all in one txn

    const mintingInstructions = [];
    const mintingSigners = [];
    const cleanupInstructions = [];
    const {
      mint,
      account
    } = await createMintAndAccountWithOne(wallet, receiverWallet, mintRentExempt, mintingInstructions, mintingSigners);
    const fixedPrice = (_auctionView$auctionM4 = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM4 === void 0 ? void 0 : _auctionView$auctionM4.fixedPrice;
    const price = fixedPrice !== undefined && fixedPrice !== null ? fixedPrice.toNumber() : (bid === null || bid === void 0 ? void 0 : bid.info.lastBid.toNumber()) || 0;
    let tokenAccount = accountsByMint.get(auctionView.auction.info.tokenMint);
    console.log('Have token account', tokenAccount);

    if (!tokenAccount) {
      // In case accountsByMint missed it(which it does sometimes)
      const allAccounts = await connection.getTokenAccountsByOwner(wallet.publicKey, {
        mint: QUOTE_MINT
      });

      if (allAccounts.value.length > 0) {
        tokenAccount = (0,lib.TokenAccountParser)(allAccounts.value[0].pubkey.toBase58(), allAccounts.value[0].account);
      }

      console.log('Found token account', tokenAccount);
    }

    const payingSolAccount = (0,lib.ensureWrappedAccount)(mintingInstructions, cleanupInstructions, tokenAccount, wallet.publicKey, price + accountRentExempt, mintingSigners);
    instructions.push(mintingInstructions);
    signers.push(mintingSigners);
    const myInstructions = [];
    const mySigners = [];
    const transferAuthority = sendRedeemBid_approve(myInstructions, cleanupInstructions, (0,lib.toPublicKey)(payingSolAccount), wallet.publicKey, price);
    mySigners.push(transferAuthority);
    const winnerIndex = auctionView.auction.info.bidState.getWinnerIndex(wallet.publicKey.toBase58());
    await redeemParticipationBidV3(auctionView.vault.pubkey, safetyDeposit.info.store, account, safetyDeposit.pubkey, receiverWallet, wallet.publicKey.toBase58(), item.metadata.pubkey, me.pubkey, item.metadata.info.mint, transferAuthority.publicKey.toBase58(), auctionView.auctionManager.acceptPayment, payingSolAccount, mint, me.info.supply.add(new external_bn_js_.BN(1)), winnerIndex != null && winnerIndex != undefined ? new external_bn_js_.BN(winnerIndex) : null, myInstructions);
    instructions.push([...myInstructions, ...cleanupInstructions]);
    signers.push(mySigners);
    const metadata = await (0,lib.getMetadata)(mint);

    if (receiverWallet === wallet.publicKey.toBase58()) {
      const updatePrimarySaleHappenedInstructions = [];
      const updatePrimarySaleHappenedSigners = [];
      await (0,lib.updatePrimarySaleHappenedViaToken)(metadata, wallet.publicKey.toBase58(), account, updatePrimarySaleHappenedInstructions);
      instructions.push(updatePrimarySaleHappenedInstructions);
      signers.push(updatePrimarySaleHappenedSigners);
    }
  } else {
    console.log('Item is already claimed!', item.metadata.info.mint);
  }
}

async function deprecatedSetupRedeemParticipationInstructions(connection, auctionView, accountsByMint, accountRentExempt, mintRentExempt, wallet, safetyDeposit, item, signers, instructions) {
  var _state, _accountsByMint$get3, _accountsByMint$get4, _auctionView$myBidRed;

  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const me = item.masterEdition;
  const participationState = (_state = auctionView.auctionManager.instance.info.state) === null || _state === void 0 ? void 0 : _state.participationState;
  if (!participationState || !(participationState !== null && participationState !== void 0 && participationState.printingAuthorizationTokenAccount) || !(me !== null && me !== void 0 && me.info.oneTimePrintingAuthorizationMint) || !item.metadata) return;
  const updateAuth = item.metadata.info.updateAuthority;
  const tokenAccount = accountsByMint.get(auctionView.auction.info.tokenMint);
  const mint = lib.cache.get(auctionView.auction.info.tokenMint);
  const participationBalance = await connection.getTokenAccountBalance((0,lib.toPublicKey)(participationState.printingAuthorizationTokenAccount));
  const tokenBalance = await connection.getTokenAccountBalance((0,lib.toPublicKey)(safetyDeposit.info.store));

  if (participationBalance.value.uiAmount === 0 && tokenBalance.value.uiAmount === 1) {
    // I'm the first, I need to populate for the others with a crank turn.
    const fillParticipationStashSigners = [];
    const fillParticipationStashInstructions = [];
    const oneTimeTransient = sendRedeemBid_createTokenAccount(fillParticipationStashInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(me === null || me === void 0 ? void 0 : me.info.oneTimePrintingAuthorizationMint), (0,lib.toPublicKey)(auctionView.auctionManager.pubkey), fillParticipationStashSigners).toBase58();
    await deprecatedPopulateParticipationPrintingAccount(auctionView.vault.pubkey, auctionView.auctionManager.pubkey, auctionView.auction.pubkey, safetyDeposit.info.store, oneTimeTransient, participationState.printingAuthorizationTokenAccount, safetyDeposit.pubkey, auctionView.vault.info.fractionMint, me.info.printingMint, me.info.oneTimePrintingAuthorizationMint, me.pubkey, item.metadata.pubkey, wallet.publicKey.toBase58(), fillParticipationStashInstructions);
    signers.push(fillParticipationStashSigners);
    instructions.push(fillParticipationStashInstructions);
  }

  let newTokenAccount = (_accountsByMint$get3 = accountsByMint.get(me.info.printingMint)) === null || _accountsByMint$get3 === void 0 ? void 0 : _accountsByMint$get3.pubkey;
  let newTokenBalance = ((_accountsByMint$get4 = accountsByMint.get(me.info.printingMint)) === null || _accountsByMint$get4 === void 0 ? void 0 : _accountsByMint$get4.info.amount) || 0;

  if (me && updateAuth && auctionView.myBidderMetadata && mint && !((_auctionView$myBidRed = auctionView.myBidRedemption) !== null && _auctionView$myBidRed !== void 0 && _auctionView$myBidRed.info.getBidRedeemed(safetyDeposit.info.order))) {
    var _auctionView$myBidRed2;

    if (!((_auctionView$myBidRed2 = auctionView.myBidRedemption) !== null && _auctionView$myBidRed2 !== void 0 && _auctionView$myBidRed2.info.getBidRedeemed(safetyDeposit.info.order))) {
      var _auctionView$auctionM5;

      const winningPrizeSigner = [];
      const winningPrizeInstructions = [];
      const cleanupInstructions = [];

      if (!newTokenAccount) {
        // made a separate txn because we're over the txn limit by like 10 bytes.
        const newTokenAccountSigner = [];
        const newTokenAccountInstructions = [];
        signers.push(newTokenAccountSigner);
        instructions.push(newTokenAccountInstructions);
        newTokenAccount = sendRedeemBid_createTokenAccount(newTokenAccountInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(me.info.printingMint), wallet.publicKey, newTokenAccountSigner).toBase58();
      }

      signers.push(winningPrizeSigner);
      const fixedPrice = (_auctionView$auctionM5 = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM5 === void 0 ? void 0 : _auctionView$auctionM5.fixedPrice;
      const price = fixedPrice !== undefined && fixedPrice !== null ? fixedPrice.toNumber() : auctionView.myBidderMetadata.info.lastBid.toNumber() || 0;
      const payingSolAccount = (0,lib.ensureWrappedAccount)(winningPrizeInstructions, cleanupInstructions, tokenAccount, wallet.publicKey, price + accountRentExempt, winningPrizeSigner);
      const transferAuthority = sendRedeemBid_approve(winningPrizeInstructions, cleanupInstructions, (0,lib.toPublicKey)(payingSolAccount), wallet.publicKey, price);
      winningPrizeSigner.push(transferAuthority);
      await deprecatedRedeemParticipationBid(auctionView.auctionManager.vault, safetyDeposit.info.store, newTokenAccount, safetyDeposit.pubkey, auctionView.myBidderMetadata.info.bidderPubkey, wallet.publicKey.toBase58(), winningPrizeInstructions, participationState.printingAuthorizationTokenAccount, transferAuthority.publicKey.toBase58(), auctionView.auctionManager.acceptPayment, payingSolAccount);
      newTokenBalance = 1;
      instructions.push([...winningPrizeInstructions, ...cleanupInstructions]);
    }
  }

  if (newTokenAccount && newTokenBalance === 1) {
    await deprecatedRedeemPrintingV1Token(wallet, updateAuth, item, newTokenAccount, mintRentExempt, accountRentExempt, signers, instructions, undefined);
  }
}
;// CONCATENATED MODULE: ./src/actions/claimUnusedPrizes.ts





const {
  createTokenAccount: claimUnusedPrizes_createTokenAccount
} = lib.actions;
async function findEligibleParticipationBidsForRedemption(auctionView, bids, bidRedemptions) {
  const unredeemedParticipations = [];

  for (let i = 0; i < bids.length; i++) {
    const bid = bids[i];

    if (!bid.info.cancelled) {
      const winnerIndex = auctionView.auction.info.bidState.getWinnerIndex(bid.info.bidderPubkey);
      const bidRedemption = bidRedemptions[await getBidRedemption(auctionView.auction.pubkey, bid.pubkey)];
      const eligible = eligibleForParticipationPrizeGivenWinningIndex(winnerIndex, auctionView, bid, bidRedemption);
      console.log(bid.pubkey, 'eligible?', eligible);

      if (eligible) {
        unredeemedParticipations.push({
          bid,
          bidRedemption
        });
      }
    }
  }

  return unredeemedParticipations;
}
async function claimUnusedPrizes(connection, wallet, auctionView, accountsByMint, bids, bidRedemptions, prizeTrackingTickets, signers, instructions) {
  var _auctionView$particip;

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  const mintRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span);

  if (auctionView.participationItem && auctionView.participationItem.safetyDeposit && ((_auctionView$particip = auctionView.participationItem.masterEdition) === null || _auctionView$particip === void 0 ? void 0 : _auctionView$particip.info.key) == lib.MetadataKey.MasterEditionV2) {
    const balance = await connection.getTokenAccountBalance((0,lib.toPublicKey)(auctionView.participationItem.safetyDeposit.info.store));

    if (balance.value.uiAmount || 0 > 0) {
      // before we can redeem, check if we need to print other people's stuff.
      const unredeemedParticipations = await findEligibleParticipationBidsForRedemption(auctionView, bids, bidRedemptions);
      await Promise.all(unredeemedParticipations.map(p => auctionView.participationItem && setupRedeemParticipationInstructions(connection, auctionView, accountsByMint, accountRentExempt, mintRentExempt, wallet, p.bid.info.bidderPubkey, auctionView.participationItem.safetyDeposit, p.bidRedemption, p.bid, auctionView.participationItem, signers, instructions)));
      await setupWithdrawMasterEditionInstructions(connection, auctionView, wallet, auctionView.participationItem.safetyDeposit, auctionView.participationItem, signers, instructions);
    }
  }

  const printingV2ByMint = {};

  for (let winnerIndex = 0; winnerIndex < auctionView.auctionManager.numWinners.toNumber(); winnerIndex++) {
    const winningSet = auctionView.items[winnerIndex];

    for (let i = 0; i < winningSet.length; i++) {
      const item = winningSet[i];
      const safetyDeposit = item.safetyDeposit;
      const tokenBalance = await connection.getTokenAccountBalance((0,lib.toPublicKey)(safetyDeposit.info.store)); // If box is empty, we cant redeem this. Could be broken AM we are claiming against.

      if (tokenBalance.value.uiAmount === 0) {
        console.log('Skipping', i, ' due to empty balance');
        continue;
      }

      if (winnerIndex < auctionView.auction.info.bidState.bids.length && item.winningConfigType != WinningConfigType.PrintingV2) {
        continue;
      }

      switch (item.winningConfigType) {
        case WinningConfigType.PrintingV1:
          console.log('Redeeming printing v1 same way we redeem a normal bid because we arent printing it');
          await deprecatedSetupRedeemPrintingInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, item, signers, instructions, winnerIndex);
          break;

        case WinningConfigType.PrintingV2:
          {
            const winningBidder = auctionView.auction.info.bidState.getWinnerAt(winnerIndex);

            if (winningBidder) {
              const bidderMetadata = bids.find(b => b.info.bidderPubkey === winningBidder);

              if (bidderMetadata) {
                console.log('Redeeming v2 for bid by wallet', winningBidder);
                await setupRedeemPrintingV2Instructions(connection, auctionView, mintRentExempt, wallet, winningBidder, item.safetyDeposit, item, signers, instructions, winnerIndex, prizeTrackingTickets);
              }
            }

            printingV2ByMint[item.metadata.info.mint] = item;
            break;
          }

        case WinningConfigType.FullRightsTransfer:
          console.log('Redeeming Full Rights');
          await claimUnusedPrizes_setupRedeemFullRightsTransferInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, item, signers, instructions, winnerIndex);
          break;

        case WinningConfigType.TokenOnlyTransfer:
          console.log('Redeeming Token only');
          await claimUnusedPrizes_setupRedeemInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, signers, instructions, winnerIndex);
          break;
      }
    }
  }

  const allV2s = Object.values(printingV2ByMint);

  for (let i = 0; i < allV2s.length; i++) {
    const item = allV2s[i];
    await setupWithdrawMasterEditionInstructions(connection, auctionView, wallet, item.safetyDeposit, item, signers, instructions);
  }
}

async function claimUnusedPrizes_setupRedeemInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, signers, instructions, winningConfigIndex) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const winningPrizeSigner = [];
  const winningPrizeInstructions = [];
  signers.push(winningPrizeSigner);
  instructions.push(winningPrizeInstructions);
  const claimed = auctionView.auctionManager.isItemClaimed(winningConfigIndex, safetyDeposit.info.order);

  if (!claimed) {
    var _accountsByMint$get;

    let newTokenAccount = (_accountsByMint$get = accountsByMint.get(safetyDeposit.info.tokenMint)) === null || _accountsByMint$get === void 0 ? void 0 : _accountsByMint$get.pubkey;
    if (!newTokenAccount) newTokenAccount = claimUnusedPrizes_createTokenAccount(winningPrizeInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(safetyDeposit.info.tokenMint), wallet.publicKey, winningPrizeSigner).toBase58();
    await redeemBid(auctionView.auctionManager.vault, safetyDeposit.info.store, newTokenAccount, safetyDeposit.pubkey, auctionView.vault.info.fractionMint, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), undefined, undefined, false, winningPrizeInstructions, winningConfigIndex);
  }
}

async function claimUnusedPrizes_setupRedeemFullRightsTransferInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, item, signers, instructions, winningConfigIndex) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const winningPrizeSigner = [];
  const winningPrizeInstructions = [];
  const claimed = auctionView.auctionManager.isItemClaimed(winningConfigIndex, safetyDeposit.info.order);
  signers.push(winningPrizeSigner);
  instructions.push(winningPrizeInstructions);

  if (!claimed) {
    var _accountsByMint$get2;

    let newTokenAccount = (_accountsByMint$get2 = accountsByMint.get(safetyDeposit.info.tokenMint)) === null || _accountsByMint$get2 === void 0 ? void 0 : _accountsByMint$get2.pubkey;
    if (!newTokenAccount) newTokenAccount = claimUnusedPrizes_createTokenAccount(winningPrizeInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(safetyDeposit.info.tokenMint), wallet.publicKey, winningPrizeSigner).toBase58();
    await redeemFullRightsTransferBid(auctionView.auctionManager.vault, safetyDeposit.info.store, newTokenAccount, safetyDeposit.pubkey, auctionView.vault.info.fractionMint, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), winningPrizeInstructions, item.metadata.pubkey, wallet.publicKey.toBase58(), winningConfigIndex);
  }
}

async function setupWithdrawMasterEditionInstructions(connection, auctionView, wallet, safetyDeposit, item, signers, instructions) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();

  if (!item.masterEdition || !item.metadata) {
    return;
  }

  const myInstructions = [];
  const mySigners = [];
  const ata = (await (0,lib.findProgramAddress)([wallet.publicKey.toBuffer(), (0,lib.programIds)().token.toBuffer(), (0,lib.toPublicKey)(item.metadata.info.mint).toBuffer()], (0,lib.programIds)().associatedToken))[0];
  const existingAta = await connection.getAccountInfo((0,lib.toPublicKey)(ata));
  console.log('Existing ata?', existingAta);

  if (!existingAta) {
    (0,lib.createAssociatedTokenAccountInstruction)(myInstructions, (0,lib.toPublicKey)(ata), wallet.publicKey, wallet.publicKey, (0,lib.toPublicKey)(item.metadata.info.mint));
  }

  await withdrawMasterEdition(auctionView.vault.pubkey, safetyDeposit.info.store, ata, safetyDeposit.pubkey, auctionView.vault.info.fractionMint, item.metadata.info.mint, myInstructions);
  instructions.push(myInstructions);
  signers.push(mySigners);
}

async function deprecatedSetupRedeemPrintingInstructions(auctionView, accountsByMint, accountRentExempt, wallet, safetyDeposit, item, signers, instructions, winningConfigIndex) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();

  if (!item.masterEdition || !item.metadata) {
    return;
  }

  const updateAuth = item.metadata.info.updateAuthority;
  const me = item.masterEdition;
  const reservationList = await (0,lib.deprecatedGetReservationList)(item.masterEdition.pubkey, auctionView.auctionManager.pubkey);
  const newTokenAccount = accountsByMint.get(me.info.printingMint);
  let newTokenAccountKey = newTokenAccount === null || newTokenAccount === void 0 ? void 0 : newTokenAccount.pubkey;

  if (updateAuth) {
    const claimed = auctionView.auctionManager.isItemClaimed(winningConfigIndex, safetyDeposit.info.order);
    console.log('This state item is', claimed);

    if (!claimed) {
      const winningPrizeSigner = [];
      const winningPrizeInstructions = [];
      signers.push(winningPrizeSigner);
      instructions.push(winningPrizeInstructions);
      if (!newTokenAccountKey) // TODO: switch to ATA
        newTokenAccountKey = claimUnusedPrizes_createTokenAccount(winningPrizeInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(me.info.printingMint), wallet.publicKey, winningPrizeSigner).toBase58();
      await redeemBid(auctionView.auctionManager.vault, safetyDeposit.info.store, newTokenAccountKey, safetyDeposit.pubkey, auctionView.vault.info.fractionMint, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), item.masterEdition.pubkey, reservationList, true, winningPrizeInstructions, winningConfigIndex);
    }
  }
}
;// CONCATENATED MODULE: ./src/actions/cancelBid.ts





async function sendCancelBid(connection, wallet, payingAccount, auctionView, accountsByMint, bids, bidRedemptions, prizeTrackingTickets) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const signers = [];
  const instructions = [];

  if (auctionView.auction.info.ended() && auctionView.auction.info.state !== lib.AuctionState.Ended) {
    await setupPlaceBid(connection, wallet, payingAccount, auctionView, accountsByMint, 0, instructions, signers);
  }

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  await setupCancelBid(auctionView, accountsByMint, accountRentExempt, wallet, signers, instructions);

  if (wallet.publicKey.equals((0,lib.toPublicKey)(auctionView.auctionManager.authority)) && auctionView.auction.info.ended()) {
    await claimUnusedPrizes(connection, wallet, auctionView, accountsByMint, bids, bidRedemptions, prizeTrackingTickets, signers, instructions);
  }

  instructions.length === 1 ? await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions[0], signers[0], 'single') : await (0,lib.sendTransactions)(connection, wallet, instructions, signers, lib.SequenceType.StopOnFailure, 'single');
}
async function setupCancelBid(auctionView, accountsByMint, accountRentExempt, wallet, signers, instructions) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const cancelSigners = [];
  const cancelInstructions = [];
  const cleanupInstructions = [];
  const tokenAccount = accountsByMint.get(auctionView.auction.info.tokenMint);
  const mint = lib.cache.get(auctionView.auction.info.tokenMint);

  if (mint && auctionView.myBidderPot) {
    const receivingSolAccount = (0,lib.ensureWrappedAccount)(cancelInstructions, cleanupInstructions, tokenAccount, wallet.publicKey, accountRentExempt, cancelSigners);
    await (0,lib.cancelBid)(wallet.publicKey.toBase58(), receivingSolAccount, auctionView.myBidderPot.info.bidderPot, auctionView.auction.info.tokenMint, auctionView.vault.pubkey, cancelInstructions);
    signers.push(cancelSigners);
    instructions.push([...cancelInstructions, ...cleanupInstructions]);
  }
}
;// CONCATENATED MODULE: ./src/actions/sendPlaceBid.ts






const {
  createTokenAccount: sendPlaceBid_createTokenAccount
} = lib.actions;
const {
  approve: sendPlaceBid_approve
} = lib.models;
async function sendPlaceBid(connection, wallet, bidderTokenAccount, auctionView, accountsByMint, // value entered by the user adjust to decimals of the mint
amount) {
  const signers = [];
  const instructions = [];
  const bid = await setupPlaceBid(connection, wallet, bidderTokenAccount, auctionView, accountsByMint, amount, instructions, signers);
  await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions[0], signers[0], 'single');
  return {
    amount: bid
  };
}
async function setupPlaceBid(connection, wallet, bidderTokenAccount, auctionView, accountsByMint, // value entered by the user adjust to decimals of the mint
amount, overallInstructions, overallSigners) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  let signers = [];
  let instructions = [];
  const cleanupInstructions = [];
  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  const tokenAccount = bidderTokenAccount ? lib.cache.get(bidderTokenAccount) : undefined;
  const mint = lib.cache.get(tokenAccount ? tokenAccount.info.mint : QUOTE_MINT);
  const lamports = (0,lib.toLamports)(amount, mint.info) + accountRentExempt;
  let bidderPotTokenAccount;

  if (!auctionView.myBidderPot) {
    bidderPotTokenAccount = sendPlaceBid_createTokenAccount(instructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(auctionView.auction.info.tokenMint), (0,lib.toPublicKey)(auctionView.auction.pubkey), signers).toBase58();
  } else {
    var _auctionView$myBidder;

    bidderPotTokenAccount = (_auctionView$myBidder = auctionView.myBidderPot) === null || _auctionView$myBidder === void 0 ? void 0 : _auctionView$myBidder.info.bidderPot;

    if (!auctionView.auction.info.ended()) {
      const cancelSigners = [];
      const cancelInstr = [];
      await setupCancelBid(auctionView, accountsByMint, accountRentExempt, wallet, cancelSigners, cancelInstr);
      signers = [...signers, ...cancelSigners[0]];
      instructions = [...cancelInstr[0], ...instructions];
    }
  }

  const payingSolAccount = (0,lib.ensureWrappedAccount)(instructions, cleanupInstructions, tokenAccount, wallet.publicKey, lamports + accountRentExempt * 2, signers);
  const transferAuthority = sendPlaceBid_approve(instructions, cleanupInstructions, (0,lib.toPublicKey)(payingSolAccount), wallet.publicKey, lamports - accountRentExempt);
  signers.push(transferAuthority);
  const bid = new (external_bn_js_default())(lamports - accountRentExempt);
  await (0,lib.placeBid)(wallet.publicKey.toBase58(), payingSolAccount, bidderPotTokenAccount, auctionView.auction.info.tokenMint, transferAuthority.publicKey.toBase58(), wallet.publicKey.toBase58(), auctionView.auctionManager.vault, bid, instructions);
  overallInstructions.push([...instructions, ...cleanupInstructions]);
  overallSigners.push(signers);
  return bid;
}
;// CONCATENATED MODULE: ./src/actions/settle.ts






const settle_BATCH_SIZE = 10;
const SETTLE_TRANSACTION_SIZE = 6;
const CLAIM_TRANSACTION_SIZE = 6;
async function settle(connection, wallet, auctionView, bidsToClaim, payingAccount, accountsByMint) {
  if (auctionView.auction.info.ended() && auctionView.auction.info.state !== lib.AuctionState.Ended) {
    const signers = [];
    const instructions = [];
    await setupPlaceBid(connection, wallet, payingAccount, auctionView, accountsByMint, 0, instructions, signers);
    await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions[0], signers[0]);
  }

  await claimAllBids(connection, wallet, auctionView, bidsToClaim);
  await emptyPaymentAccountForAllTokens(connection, wallet, auctionView);
}

async function emptyPaymentAccountForAllTokens(connection, wallet, auctionView) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = (0,lib.programIds)();
  const signers = [];
  const instructions = [];
  let currSignerBatch = [];
  let currInstrBatch = [];
  let settleSigners = [];
  let settleInstructions = [];
  const ataLookup = {}; // TODO replace all this with payer account so user doesnt need to click approve several times.
  // Overall we have 10 parallel txns, of up to 4 settlements per txn
  // That's what this loop is building.

  const prizeArrays = [...auctionView.items, ...(auctionView.participationItem ? [[auctionView.participationItem]] : [])];

  for (let i = 0; i < prizeArrays.length; i++) {
    const items = prizeArrays[i];

    for (let j = 0; j < items.length; j++) {
      const item = items[j];
      const creators = item.metadata.info.data.creators;
      const edgeCaseWhereCreatorIsAuctioneer = !!(creators !== null && creators !== void 0 && creators.map(c => c.address).find(c => c === auctionView.auctionManager.authority));
      const addresses = [...(creators ? creators.map(c => c.address) : []), ...[auctionView.auctionManager.authority]];

      for (let k = 0; k < addresses.length; k++) {
        var _item$masterEdition;

        const ata = (await (0,lib.findProgramAddress)([(0,lib.toPublicKey)(addresses[k]).toBuffer(), PROGRAM_IDS.token.toBuffer(), QUOTE_MINT.toBuffer()], PROGRAM_IDS.associatedToken))[0];
        const existingAta = await connection.getAccountInfo((0,lib.toPublicKey)(ata));
        console.log('Existing ata?', existingAta);
        if (!existingAta && !ataLookup[ata]) (0,lib.createAssociatedTokenAccountInstruction)(settleInstructions, (0,lib.toPublicKey)(ata), wallet.publicKey, (0,lib.toPublicKey)(addresses[k]), QUOTE_MINT);
        ataLookup[ata] = true;
        const creatorIndex = creators ? creators.map(c => c.address).indexOf(addresses[k]) : null;
        await emptyPaymentAccount(auctionView.auctionManager.acceptPayment, ata, auctionView.auctionManager.pubkey, item.metadata.pubkey, (_item$masterEdition = item.masterEdition) === null || _item$masterEdition === void 0 ? void 0 : _item$masterEdition.pubkey, item.safetyDeposit.pubkey, item.safetyDeposit.info.vault, auctionView.auction.pubkey, wallet.publicKey.toBase58(), addresses[k], item === auctionView.participationItem ? null : i, item === auctionView.participationItem ? null : j, creatorIndex === -1 || creatorIndex === null || edgeCaseWhereCreatorIsAuctioneer && k === addresses.length - 1 ? null : creatorIndex, settleInstructions);

        if (settleInstructions.length >= SETTLE_TRANSACTION_SIZE) {
          currSignerBatch.push(settleSigners);
          currInstrBatch.push(settleInstructions);
          settleSigners = [];
          settleInstructions = [];
        }

        if (currInstrBatch.length === settle_BATCH_SIZE) {
          signers.push(currSignerBatch);
          instructions.push(currInstrBatch);
          currSignerBatch = [];
          currInstrBatch = [];
        }
      }
    }
  }

  if (settleInstructions.length < SETTLE_TRANSACTION_SIZE && settleInstructions.length > 0) {
    currSignerBatch.push(settleSigners);
    currInstrBatch.push(settleInstructions);
  }

  if (currInstrBatch.length <= settle_BATCH_SIZE && currInstrBatch.length > 0) {
    // add the last one on
    signers.push(currSignerBatch);
    instructions.push(currInstrBatch);
  }

  for (let i = 0; i < instructions.length; i++) {
    const instructionBatch = instructions[i];
    const signerBatch = signers[i];
    if (instructionBatch.length >= 2) // Pump em through!
      await (0,lib.sendTransactions)(connection, wallet, instructionBatch, signerBatch, lib.SequenceType.StopOnFailure, 'single');else await (0,lib.sendTransactionWithRetry)(connection, wallet, instructionBatch[0], signerBatch[0], 'single');
  }
}

async function claimAllBids(connection, wallet, auctionView, bids) {
  const signers = [];
  const instructions = [];
  let currSignerBatch = [];
  let currInstrBatch = [];
  let claimBidSigners = [];
  let claimBidInstructions = []; // TODO replace all this with payer account so user doesnt need to click approve several times.
  // Overall we have 10 parallel txns, of up to 7 claims in each txn
  // That's what this loop is building.

  for (let i = 0; i < bids.length; i++) {
    const bid = bids[i];
    console.log('Claiming', bid.info.bidderAct);
    await claimBid(auctionView.auctionManager.acceptPayment, bid.info.bidderAct, bid.info.bidderPot, auctionView.vault.pubkey, auctionView.auction.info.tokenMint, claimBidInstructions);

    if (claimBidInstructions.length === CLAIM_TRANSACTION_SIZE) {
      currSignerBatch.push(claimBidSigners);
      currInstrBatch.push(claimBidInstructions);
      claimBidSigners = [];
      claimBidInstructions = [];
    }

    if (currInstrBatch.length === settle_BATCH_SIZE) {
      signers.push(currSignerBatch);
      instructions.push(currInstrBatch);
      currSignerBatch = [];
      currInstrBatch = [];
    }
  }

  if (claimBidInstructions.length < CLAIM_TRANSACTION_SIZE && claimBidInstructions.length > 0) {
    currSignerBatch.push(claimBidSigners);
    currInstrBatch.push(claimBidInstructions);
  }

  if (currInstrBatch.length <= settle_BATCH_SIZE && currInstrBatch.length > 0) {
    // add the last one on
    signers.push(currSignerBatch);
    instructions.push(currInstrBatch);
  }

  console.log('Instructions', instructions);

  for (let i = 0; i < instructions.length; i++) {
    const instructionBatch = instructions[i];
    const signerBatch = signers[i];
    console.log('Running batch', i);
    if (instructionBatch.length >= 2) // Pump em through!
      await (0,lib.sendTransactions)(connection, wallet, instructionBatch, signerBatch, lib.SequenceType.StopOnFailure, 'single');else await (0,lib.sendTransactionWithRetry)(connection, wallet, instructionBatch[0], signerBatch[0], 'single');
    console.log('Done');
  }
}
;// CONCATENATED MODULE: ./src/actions/startAuctionManually.ts


async function startAuctionManually(connection, wallet, auctionView) {
  try {
    const signers = [];
    const instructions = [];
    await startAuction(auctionView.vault.pubkey, auctionView.auctionManager.authority, instructions);
    await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions, signers);
    (0,lib.notify)({
      message: 'Auction started',
      type: 'success'
    });
  } catch (e) {
    (0,lib.notify)({
      message: 'Transaction failed...',
      description: 'Failed to start the auction',
      type: 'error'
    });
    return Promise.reject(e);
  }
}
;// CONCATENATED MODULE: ./src/contexts/meta/queryExtendedMetadata.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { queryExtendedMetadata_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function queryExtendedMetadata_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const queryExtendedMetadata = async (connection, mintToMeta) => {
  const mintToMetadata = _objectSpread({}, mintToMeta);

  const mints = await (0,lib.getMultipleAccounts)(connection, [...Object.keys(mintToMetadata)].filter(k => !lib.cache.get(k)), 'single');
  mints.keys.forEach((key, index) => {
    const mintAccount = mints.array[index];

    if (mintAccount) {
      const mint = lib.cache.add(key, mintAccount, lib.MintParser, false);

      if (!mint.info.supply.eqn(1) || mint.info.decimals !== 0) {
        // naive not NFT check
        delete mintToMetadata[key];
      } else {// const metadata = mintToMetadata[key];
      }
    }
  }); // await Promise.all([...extendedMetadataFetch.values()]);

  const metadata = [...Object.values(mintToMetadata)];
  return {
    metadata,
    mintToMetadata
  };
};
// EXTERNAL MODULE: ../common/dist/lib/utils/ids.js
var ids = __webpack_require__(9556);
;// CONCATENATED MODULE: ./src/contexts/meta/processAuctions.ts

const processAuctions_processAuctions = ({
  account,
  pubkey
}, setter) => {
  if (!isAuctionAccount(account)) return;

  try {
    const parsedAccount = cache.add(pubkey, account, AuctionParser, false);
    setter('auctions', pubkey, parsedAccount);
  } catch (e) {// ignore errors
    // add type as first byte for easier deserialization
  }

  try {
    if (isExtendedAuctionAccount(account)) {
      const parsedAccount = cache.add(pubkey, account, AuctionDataExtendedParser, false);
      setter('auctionDataExtended', pubkey, parsedAccount);
    }
  } catch {// ignore errors
    // add type as first byte for easier deserialization
  }

  try {
    if (isBidderMetadataAccount(account)) {
      const parsedAccount = cache.add(pubkey, account, BidderMetadataParser, false);
      setter('bidderMetadataByAuctionAndBidder', parsedAccount.info.auctionPubkey + '-' + parsedAccount.info.bidderPubkey, parsedAccount);
    }
  } catch {// ignore errors
    // add type as first byte for easier deserialization
  }

  try {
    if (isBidderPotAccount(account)) {
      const parsedAccount = cache.add(pubkey, account, BidderPotParser, false);
      setter('bidderPotsByAuctionAndBidder', parsedAccount.info.auctionAct + '-' + parsedAccount.info.bidderAct, parsedAccount);
    }
  } catch {// ignore errors
    // add type as first byte for easier deserialization
  }
};

const isAuctionAccount = account => account.owner === AUCTION_ID;

const isExtendedAuctionAccount = account => account.data.length === MAX_AUCTION_DATA_EXTENDED_SIZE;

const isBidderMetadataAccount = account => account.data.length === BIDDER_METADATA_LEN;

const isBidderPotAccount = account => account.data.length === BIDDER_POT_LEN;
;// CONCATENATED MODULE: ./src/config/userNames.json
var userNames_namespaceObject = {};
;// CONCATENATED MODULE: ./src/contexts/meta/processMetaplexAccounts.ts
function processMetaplexAccounts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function processMetaplexAccounts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { processMetaplexAccounts_ownKeys(Object(source), true).forEach(function (key) { processMetaplexAccounts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { processMetaplexAccounts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function processMetaplexAccounts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const processMetaplexAccounts_processMetaplexAccounts = async ({
  account,
  pubkey
}, setter, useAll) => {
  if (!isMetaplexAccount(account)) return;

  try {
    const STORE_ID = programIds().store;

    if (isAuctionManagerV1Account(account) || isAuctionManagerV2Account(account)) {
      const storeKey = new PublicKey(account.data.slice(1, 33));

      if (STORE_ID && storeKey.equals(toPublicKey(STORE_ID)) || useAll) {
        const auctionManager = decodeAuctionManager(account.data);
        const parsedAccount = {
          pubkey,
          account,
          info: auctionManager
        };
        setter('auctionManagersByAuction', auctionManager.auction, parsedAccount);
      }
    }

    if (isBidRedemptionTicketV1Account(account) || isBidRedemptionTicketV2Account(account)) {
      const ticket = decodeBidRedemptionTicket(account.data);
      const parsedAccount = {
        pubkey,
        account,
        info: ticket
      };
      setter('bidRedemptions', pubkey, parsedAccount);

      if (ticket.key == MetaplexKey.BidRedemptionTicketV2) {
        const asV2 = ticket;

        if (asV2.winnerIndex) {
          setter('bidRedemptionV2sByAuctionManagerAndWinningIndex', asV2.auctionManager + '-' + asV2.winnerIndex.toNumber(), parsedAccount);
        }
      }
    }

    if (isPayoutTicketV1Account(account)) {
      const ticket = decodePayoutTicket(account.data);
      const parsedAccount = {
        pubkey,
        account,
        info: ticket
      };
      setter('payoutTickets', pubkey, parsedAccount);
    }

    if (isPrizeTrackingTicketV1Account(account)) {
      const ticket = decodePrizeTrackingTicket(account.data);
      const parsedAccount = {
        pubkey,
        account,
        info: ticket
      };
      setter('prizeTrackingTickets', pubkey, parsedAccount);
    }

    if (isStoreV1Account(account)) {
      const store = decodeStore(account.data);
      const parsedAccount = {
        pubkey,
        account,
        info: store
      };

      if (STORE_ID && pubkey === STORE_ID) {
        setter('store', pubkey, parsedAccount);
      }

      setter('stores', pubkey, parsedAccount);
    }

    if (isSafetyDepositConfigV1Account(account)) {
      const config = decodeSafetyDepositConfig(account.data);
      const parsedAccount = {
        pubkey,
        account,
        info: config
      };
      setter('safetyDepositConfigsByAuctionManagerAndIndex', config.auctionManager + '-' + config.order.toNumber(), parsedAccount);
    }

    if (isWhitelistedCreatorV1Account(account)) {
      const whitelistedCreator = decodeWhitelistedCreator(account.data); // TODO: figure out a way to avoid generating creator addresses during parsing
      // should we store store id inside creator?

      const creatorKeyIfCreatorWasPartOfThisStore = await getWhitelistedCreator(whitelistedCreator.address);

      if (creatorKeyIfCreatorWasPartOfThisStore === pubkey) {
        const parsedAccount = cache.add(pubkey, account, WhitelistedCreatorParser, false);
        const nameInfo = names[parsedAccount.info.address];

        if (nameInfo) {
          parsedAccount.info = processMetaplexAccounts_objectSpread(processMetaplexAccounts_objectSpread({}, parsedAccount.info), nameInfo);
        }

        setter('whitelistedCreatorsByCreator', whitelistedCreator.address, parsedAccount);
      }
    }
  } catch {// ignore errors
    // add type as first byte for easier deserialization
  }
};

const isMetaplexAccount = account => account.owner === METAPLEX_ID;

const isAuctionManagerV1Account = account => account.data[0] === MetaplexKey.AuctionManagerV1;

const isAuctionManagerV2Account = account => account.data[0] === MetaplexKey.AuctionManagerV2;

const isBidRedemptionTicketV1Account = account => account.data[0] === MetaplexKey.BidRedemptionTicketV1;

const isBidRedemptionTicketV2Account = account => account.data[0] === MetaplexKey.BidRedemptionTicketV2;

const isPayoutTicketV1Account = account => account.data[0] === MetaplexKey.PayoutTicketV1;

const isPrizeTrackingTicketV1Account = account => account.data[0] === MetaplexKey.PrizeTrackingTicketV1;

const isStoreV1Account = account => account.data[0] === MetaplexKey.StoreV1;

const isSafetyDepositConfigV1Account = account => account.data[0] === MetaplexKey.SafetyDepositConfigV1;

const isWhitelistedCreatorV1Account = account => account.data[0] === MetaplexKey.WhitelistedCreatorV1;
;// CONCATENATED MODULE: ./src/contexts/meta/processMetaData.ts


const processMetaData_processMetaData = ({
  account,
  pubkey
}, setter) => {
  if (!isMetadataAccount(account)) return;

  try {
    if (isMetadataV1Account(account)) {
      const metadata = decodeMetadata(account.data);

      if (isValidHttpUrl(metadata.data.uri) && metadata.data.uri.indexOf('arweave') >= 0) {
        const parsedAccount = {
          pubkey,
          account,
          info: metadata
        };
        setter('metadataByMint', metadata.mint, parsedAccount);
      }
    }

    if (isEditionV1Account(account)) {
      const edition = decodeEdition(account.data);
      const parsedAccount = {
        pubkey,
        account,
        info: edition
      };
      setter('editions', pubkey, parsedAccount);
    }

    if (isMasterEditionAccount(account)) {
      const masterEdition = decodeMasterEdition(account.data);

      if (isMasterEditionV1(masterEdition)) {
        const parsedAccount = {
          pubkey,
          account,
          info: masterEdition
        };
        setter('masterEditions', pubkey, parsedAccount);
        setter('masterEditionsByPrintingMint', masterEdition.printingMint, parsedAccount);
        setter('masterEditionsByOneTimeAuthMint', masterEdition.oneTimePrintingAuthorizationMint, parsedAccount);
      } else {
        const parsedAccount = {
          pubkey,
          account,
          info: masterEdition
        };
        setter('masterEditions', pubkey, parsedAccount);
      }
    }
  } catch {// ignore errors
    // add type as first byte for easier deserialization
  }
};

const isMetadataAccount = account => {
  return account.owner === METADATA_PROGRAM_ID;
};

const isMetadataV1Account = account => account.data[0] === MetadataKey.MetadataV1;

const isEditionV1Account = account => account.data[0] === MetadataKey.EditionV1;

const isMasterEditionAccount = account => account.data[0] === MetadataKey.MasterEditionV1 || account.data[0] === MetadataKey.MasterEditionV2;

const isMasterEditionV1 = me => {
  return me.key === MetadataKey.MasterEditionV1;
};
;// CONCATENATED MODULE: ./src/contexts/meta/processVaultData.ts


const processVaultData_processVaultData = ({
  account,
  pubkey
}, setter) => {
  if (!isVaultAccount(account)) return;

  try {
    if (isSafetyDepositBoxV1Account(account)) {
      const safetyDeposit = decodeSafetyDeposit(account.data);
      const parsedAccount = {
        pubkey,
        account: account,
        info: safetyDeposit
      };
      setter('safetyDepositBoxesByVaultAndIndex', safetyDeposit.vault + '-' + safetyDeposit.order, parsedAccount);
    }

    if (isVaultV1Account(account)) {
      const vault = decodeVault(account.data);
      const parsedAccount = {
        pubkey,
        account: account,
        info: vault
      };
      setter('vaults', pubkey, parsedAccount);
    }
  } catch {// ignore errors
    // add type as first byte for easier deserialization
  }
};

const isVaultAccount = account => account.owner === VAULT_ID;

const isSafetyDepositBoxV1Account = account => account.data[0] === VaultKey.SafetyDepositBoxV1;

const isVaultV1Account = account => account.data[0] === VaultKey.VaultV1;
;// CONCATENATED MODULE: ./src/contexts/meta/loadAccounts.ts










async function getProgramAccounts(connection, programId, configOrCommitment) {
  const extra = {};
  let commitment; //let encoding;

  if (configOrCommitment) {
    if (typeof configOrCommitment === 'string') {
      commitment = configOrCommitment;
    } else {
      commitment = configOrCommitment.commitment; //encoding = configOrCommitment.encoding;

      if (configOrCommitment.dataSlice) {
        extra.dataSlice = configOrCommitment.dataSlice;
      }

      if (configOrCommitment.filters) {
        extra.filters = configOrCommitment.filters;
      }
    }
  }

  const args = connection._buildArgs([programId], commitment, 'base64', extra);

  const unsafeRes = await connection._rpcRequest('getProgramAccounts', args);
  const data = unsafeRes.result.map(item => {
    return {
      account: {
        // TODO: possible delay parsing could be added here
        data: Buffer.from(item.account.data[0], 'base64'),
        executable: item.account.executable,
        lamports: item.account.lamports,
        // TODO: maybe we can do it in lazy way? or just use string
        owner: item.account.owner
      },
      pubkey: item.pubkey
    };
  });
  return data;
}

const loadAccounts = async (connection, all) => {
  var _process$env$NEXT_PUB;

  const tempCache = {
    metadata: [],
    metadataByMint: {},
    masterEditions: {},
    masterEditionsByPrintingMint: {},
    masterEditionsByOneTimeAuthMint: {},
    metadataByMasterEdition: {},
    editions: {},
    auctionManagersByAuction: {},
    bidRedemptions: {},
    auctions: {},
    auctionDataExtended: {},
    vaults: {},
    payoutTickets: {},
    store: null,
    whitelistedCreatorsByCreator: {},
    bidderMetadataByAuctionAndBidder: {},
    bidderPotsByAuctionAndBidder: {},
    safetyDepositBoxesByVaultAndIndex: {},
    prizeTrackingTickets: {},
    safetyDepositConfigsByAuctionManagerAndIndex: {},
    bidRedemptionV2sByAuctionManagerAndWinningIndex: {},
    stores: {}
  };
  const updateTemp = makeSetter(tempCache);

  const forEach = fn => async accounts => {
    for (const account of accounts) {
      await fn(account, updateTemp, all);
    }
  };

  const additionalPromises = [];
  const IS_BIG_STORE = ((_process$env$NEXT_PUB = "FALSE") === null || _process$env$NEXT_PUB === void 0 ? void 0 : _process$env$NEXT_PUB.toLowerCase()) === 'true';
  console.log(`Is big store: ${IS_BIG_STORE}`);
  const promises = [getProgramAccounts(connection, VAULT_ID).then(forEach(processVaultData)), getProgramAccounts(connection, AUCTION_ID).then(forEach(processAuctions)), getProgramAccounts(connection, METAPLEX_ID).then(forEach(processMetaplexAccounts)), IS_BIG_STORE ? getProgramAccounts(connection, METADATA_PROGRAM_ID).then(forEach(processMetaData)) : undefined, getProgramAccounts(connection, METAPLEX_ID, {
    filters: [{
      dataSize: MAX_WHITELISTED_CREATOR_SIZE
    }]
  }).then(async creators => {
    const result = await forEach(processMetaplexAccounts)(creators);

    if (IS_BIG_STORE) {
      return result;
    }

    const whitelistedCreators = Object.values(tempCache.whitelistedCreatorsByCreator);

    if (whitelistedCreators.length > 3) {
      console.log(' too many creators, pulling all nfts in one go');
      additionalPromises.push(getProgramAccounts(connection, METADATA_PROGRAM_ID).then(forEach(processMetaData)));
    } else {
      console.log('pulling optimized nfts');

      for (let i = 0; i < MAX_CREATOR_LIMIT; i++) {
        for (let j = 0; j < whitelistedCreators.length; j++) {
          additionalPromises.push(getProgramAccounts(connection, METADATA_PROGRAM_ID, {
            filters: [{
              memcmp: {
                offset: 1 + // key
                32 + // update auth
                32 + // mint
                4 + // name string length
                MAX_NAME_LENGTH + // name
                4 + // uri string length
                MAX_URI_LENGTH + // uri
                4 + // symbol string length
                MAX_SYMBOL_LENGTH + // symbol
                2 + // seller fee basis points
                1 + // whether or not there is a creators vec
                4 + // creators vec length
                i * MAX_CREATOR_LEN,
                bytes: whitelistedCreators[j].info.address
              }
            }]
          }).then(forEach(processMetaData)));
        }
      }
    }
  })];
  await Promise.all(promises);
  await Promise.all(additionalPromises);
  await postProcessMetadata(tempCache, all);
  console.log('Metadata size', tempCache.metadata.length);

  if (additionalPromises.length > 0) {
    console.log('Pulling editions for optimized metadata');
    let setOf100MetadataEditionKeys = [];
    const editionPromises = [];

    for (let i = 0; i < tempCache.metadata.length; i++) {
      let edition;

      if (tempCache.metadata[i].info.editionNonce != null) {
        edition = (await PublicKey.createProgramAddress([Buffer.from(METADATA_PREFIX), toPublicKey(METADATA_PROGRAM_ID).toBuffer(), toPublicKey(tempCache.metadata[i].info.mint).toBuffer(), new Uint8Array([tempCache.metadata[i].info.editionNonce || 0])], toPublicKey(METADATA_PROGRAM_ID))).toBase58();
      } else {
        edition = await getEdition(tempCache.metadata[i].info.mint);
      }

      setOf100MetadataEditionKeys.push(edition);

      if (setOf100MetadataEditionKeys.length >= 100) {
        editionPromises.push(getMultipleAccounts(connection, setOf100MetadataEditionKeys, 'recent'));
        setOf100MetadataEditionKeys = [];
      }
    }

    if (setOf100MetadataEditionKeys.length >= 0) {
      editionPromises.push(getMultipleAccounts(connection, setOf100MetadataEditionKeys, 'recent'));
      setOf100MetadataEditionKeys = [];
    }

    const responses = await Promise.all(editionPromises);

    for (let i = 0; i < responses.length; i++) {
      const returnedAccounts = responses[i];

      for (let j = 0; j < returnedAccounts.array.length; j++) {
        processMetaData({
          pubkey: returnedAccounts.keys[j],
          account: returnedAccounts.array[j]
        }, updateTemp, all);
      }
    }

    console.log('Edition size', Object.keys(tempCache.editions).length, Object.keys(tempCache.masterEditions).length);
  }

  return tempCache;
};
const makeSetter = state => (prop, key, value) => {
  if (prop === 'store') {
    state[prop] = value;
  } else if (prop !== 'metadata') {
    state[prop][key] = value;
  }

  return state;
};

const postProcessMetadata = async (tempCache, all) => {
  const values = Object.values(tempCache.metadataByMint);

  for (const metadata of values) {
    await metadataByMintUpdater(metadata, tempCache, all);
  }
};

const metadataByMintUpdater = async (metadata, state, all) => {
  const key = metadata.info.mint;

  if (isMetadataPartOfStore(metadata, state.store, state.whitelistedCreatorsByCreator, all)) {
    var _metadata$info;

    await metadata.info.init();
    const masterEditionKey = (_metadata$info = metadata.info) === null || _metadata$info === void 0 ? void 0 : _metadata$info.masterEdition;

    if (masterEditionKey) {
      state.metadataByMasterEdition[masterEditionKey] = metadata;
    }

    state.metadataByMint[key] = metadata;
    state.metadata.push(metadata);
  } else {
    delete state.metadataByMint[key];
  }

  return state;
};
;// CONCATENATED MODULE: ./src/contexts/meta/meta.tsx


function meta_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function meta_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { meta_ownKeys(Object(source), true).forEach(function (key) { meta_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { meta_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function meta_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MetaContext = /*#__PURE__*/external_react_default().createContext({
  metadata: [],
  metadataByMint: {},
  masterEditions: {},
  masterEditionsByPrintingMint: {},
  masterEditionsByOneTimeAuthMint: {},
  metadataByMasterEdition: {},
  editions: {},
  auctionManagersByAuction: {},
  auctions: {},
  auctionDataExtended: {},
  vaults: {},
  store: null,
  isLoading: false,
  bidderMetadataByAuctionAndBidder: {},
  safetyDepositBoxesByVaultAndIndex: {},
  safetyDepositConfigsByAuctionManagerAndIndex: {},
  bidRedemptionV2sByAuctionManagerAndWinningIndex: {},
  bidderPotsByAuctionAndBidder: {},
  bidRedemptions: {},
  whitelistedCreatorsByCreator: {},
  payoutTickets: {},
  prizeTrackingTickets: {},
  stores: {}
});
function MetaProvider({
  children = null
}) {
  const connection = (0,lib.useConnection)();
  const {
    isReady,
    storeAddress
  } = (0,lib.useStore)();
  const searchParams = (0,lib.useQuerySearch)();
  const all = searchParams.get('all') == 'true';
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)({
    metadata: [],
    metadataByMint: {},
    masterEditions: {},
    masterEditionsByPrintingMint: {},
    masterEditionsByOneTimeAuthMint: {},
    metadataByMasterEdition: {},
    editions: {},
    auctionManagersByAuction: {},
    bidRedemptions: {},
    auctions: {},
    auctionDataExtended: {},
    vaults: {},
    payoutTickets: {},
    store: null,
    whitelistedCreatorsByCreator: {},
    bidderMetadataByAuctionAndBidder: {},
    bidderPotsByAuctionAndBidder: {},
    safetyDepositBoxesByVaultAndIndex: {},
    prizeTrackingTickets: {},
    safetyDepositConfigsByAuctionManagerAndIndex: {},
    bidRedemptionV2sByAuctionManagerAndWinningIndex: {},
    stores: {}
  });
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(true);
  const updateMints = (0,external_react_.useCallback)(async metadataByMint => {
    try {
      if (!all) {
        const {
          metadata,
          mintToMetadata
        } = await queryExtendedMetadata(connection, metadataByMint);
        setState(current => meta_objectSpread(meta_objectSpread({}, current), {}, {
          metadata,
          metadataByMint: mintToMetadata
        }));
      }
    } catch (er) {
      console.error(er);
    }
  }, [setState]);
  (0,external_react_.useEffect)(() => {}, [connection, setState, updateMints, storeAddress, isReady]);
  const updateStateValue = (0,external_react_.useMemo)(() => (prop, key, value) => {
    setState(current => makeSetter(meta_objectSpread({}, current))(prop, key, value));
  }, [setState]);
  const store = state.store;
  const whitelistedCreatorsByCreator = state.whitelistedCreatorsByCreator;
  (0,external_react_.useEffect)(() => {}, [connection, updateStateValue, setState, store, whitelistedCreatorsByCreator, isLoading]); // TODO: fetch names dynamically
  // TODO: get names for creators
  // useEffect(() => {
  //   (async () => {
  //     const twitterHandles = await connection.getProgramAccounts(NAME_PROGRAM_ID, {
  //      filters: [
  //        {
  //           dataSize: TWITTER_ACCOUNT_LENGTH,
  //        },
  //        {
  //          memcmp: {
  //           offset: VERIFICATION_AUTHORITY_OFFSET,
  //           bytes: TWITTER_VERIFICATION_AUTHORITY.toBase58()
  //          }
  //        }
  //      ]
  //     });
  //     const handles = twitterHandles.map(t => {
  //       const owner = new PublicKey(t.account.data.slice(32, 64));
  //       const name = t.account.data.slice(96, 114).toString();
  //     });
  //     console.log(handles);
  //   })();
  // }, [whitelistedCreatorsByCreator]);

  return /*#__PURE__*/jsx_runtime_.jsx(MetaContext.Provider, {
    value: meta_objectSpread(meta_objectSpread({}, state), {}, {
      isLoading
    }),
    children: children
  });
}
const meta_useMeta = () => {
  const context = (0,external_react_.useContext)(MetaContext);
  return context;
};
;// CONCATENATED MODULE: ./src/contexts/meta/index.ts

;// CONCATENATED MODULE: ./src/contexts/coingecko.tsx


const COINGECKO_POOL_INTERVAL = 1000 * 60; // 60 sec

const COINGECKO_API = 'https://api.coingecko.com/api/v3/';
const COINGECKO_COIN_PRICE_API = `${COINGECKO_API}simple/price`;
const solToUSD = async () => {
  const url = `${COINGECKO_COIN_PRICE_API}?ids=solana&vs_currencies=usd`;
  const resp = await window.fetch(url).then(resp => resp.json());
  return resp.solana.usd;
};
const CoingeckoContext = /*#__PURE__*/external_react_default().createContext(null);
function CoingeckoProvider({
  children = null
}) {
  const {
    0: solPrice,
    1: setSolPrice
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    let timerId = 0;

    const queryPrice = async () => {
      const price = await solToUSD();
      setSolPrice(price);
      startTimer();
    };

    const startTimer = () => {
      timerId = window.setTimeout(async () => {
        queryPrice();
      }, COINGECKO_POOL_INTERVAL);
    };

    queryPrice();
    return () => {
      clearTimeout(timerId);
    };
  }, [setSolPrice]);
  return /*#__PURE__*/jsx_runtime_.jsx(CoingeckoContext.Provider, {
    value: {
      solPrice
    },
    children: children
  });
}
const useCoingecko = () => {
  const context = (0,external_react_.useContext)(CoingeckoContext);
  return context;
};
const useSolPrice = () => {
  const {
    solPrice
  } = useCoingecko();
  return solPrice;
};
;// CONCATENATED MODULE: ./src/contexts/index.tsx


;// CONCATENATED MODULE: ./src/types/index.ts
let ArtType;

(function (ArtType) {
  ArtType[ArtType["Master"] = 0] = "Master";
  ArtType[ArtType["Print"] = 1] = "Print";
  ArtType[ArtType["NFT"] = 2] = "NFT";
})(ArtType || (ArtType = {}));
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(2293);
// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__(2889);
;// CONCATENATED MODULE: ./src/utils/pubkeyToString.ts
const pubkeyToString = (key = '') => {
  return typeof key === 'string' ? key : (key === null || key === void 0 ? void 0 : key.toBase58()) || '';
};
;// CONCATENATED MODULE: ./src/hooks/useArt.ts







const metadataToArt = (info, editions, masterEditions, whitelistedCreatorsByCreator) => {
  let type = ArtType.NFT;
  let editionNumber = undefined;
  let maxSupply = undefined;
  let supply = undefined;

  if (info) {
    const masterEdition = masterEditions[info.masterEdition || ''];
    const edition = editions[info.edition || ''];

    if (edition) {
      const myMasterEdition = masterEditions[edition.info.parent || ''];

      if (myMasterEdition) {
        var _myMasterEdition$info;

        type = ArtType.Print;
        editionNumber = edition.info.edition.toNumber();
        supply = ((_myMasterEdition$info = myMasterEdition.info) === null || _myMasterEdition$info === void 0 ? void 0 : _myMasterEdition$info.supply.toNumber()) || 0;
      }
    } else if (masterEdition) {
      var _masterEdition$info$m;

      type = ArtType.Master;
      maxSupply = (_masterEdition$info$m = masterEdition.info.maxSupply) === null || _masterEdition$info$m === void 0 ? void 0 : _masterEdition$info$m.toNumber();
      supply = masterEdition.info.supply.toNumber();
    }
  }

  return {
    uri: (info === null || info === void 0 ? void 0 : info.data.uri) || '',
    mint: info === null || info === void 0 ? void 0 : info.mint,
    title: info === null || info === void 0 ? void 0 : info.data.name,
    creators: ((info === null || info === void 0 ? void 0 : info.data.creators) || []).map(creator => {
      const knownCreator = whitelistedCreatorsByCreator[creator.address];
      return {
        address: creator.address,
        verified: creator.verified,
        share: creator.share,
        image: (knownCreator === null || knownCreator === void 0 ? void 0 : knownCreator.info.image) || '',
        name: (knownCreator === null || knownCreator === void 0 ? void 0 : knownCreator.info.name) || '',
        link: (knownCreator === null || knownCreator === void 0 ? void 0 : knownCreator.info.twitter) || ''
      };
    }).sort((a, b) => {
      const share = (b.share || 0) - (a.share || 0);

      if (share === 0) {
        return a.name.localeCompare(b.name);
      }

      return share;
    }),
    seller_fee_basis_points: (info === null || info === void 0 ? void 0 : info.data.sellerFeeBasisPoints) || 0,
    edition: editionNumber,
    maxSupply,
    supply,
    type
  };
};

const cachedImages = new Map();
const useCachedImage = (uri, cacheMesh) => {
  const {
    0: cachedBlob,
    1: setCachedBlob
  } = (0,external_react_.useState)(undefined);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    if (!uri) {
      return;
    }

    const result = cachedImages.get(uri);

    if (result) {
      setCachedBlob(result);
      return;
    }

    (async () => {
      let response;

      try {
        response = await fetch(uri, {
          cache: 'force-cache'
        });
      } catch {
        try {
          response = await fetch(uri, {
            cache: 'reload'
          });
        } catch {
          // If external URL, just use the uri
          if (uri !== null && uri !== void 0 && uri.startsWith('http')) {
            setCachedBlob(uri);
          }

          setIsLoading(false);
          return;
        }
      }

      const blob = await response.blob();

      if (cacheMesh) {
        // extra caching for meshviewer
        external_three_.Cache.enabled = true;
        external_three_.Cache.add(uri, await blob.arrayBuffer());
      }

      const blobURI = URL.createObjectURL(blob);
      cachedImages.set(uri, blobURI);
      setCachedBlob(blobURI);
      setIsLoading(false);
    })();
  }, [uri, setCachedBlob, setIsLoading]);
  return {
    cachedBlob,
    isLoading
  };
};
const useArt_useArt = key => {
  const {
    metadata,
    editions,
    masterEditions,
    whitelistedCreatorsByCreator
  } = meta_useMeta();
  const account = (0,external_react_.useMemo)(() => metadata.find(a => a.pubkey === key), [key, metadata]);
  const art = (0,external_react_.useMemo)(() => metadataToArt(account === null || account === void 0 ? void 0 : account.info, editions, masterEditions, whitelistedCreatorsByCreator), [account, editions, masterEditions, whitelistedCreatorsByCreator]);
  return art;
};
const useExtendedArt = id => {
  const {
    metadata
  } = meta_useMeta();
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)();
  const {
    ref,
    inView
  } = (0,external_react_intersection_observer_.useInView)();
  const key = pubkeyToString(id);
  const account = (0,external_react_.useMemo)(() => metadata.find(a => a.pubkey === key), [key, metadata]);
  (0,external_react_.useEffect)(() => {
    if (inView && id && !data) {
      const USE_CDN = false;

      const routeCDN = uri => {
        let result = uri;

        if (USE_CDN) {
          result = uri.replace('https://arweave.net/', 'https://coldcdn.com/api/cdn/bronil/');
        }

        return result;
      };

      if (account && account.info.data.uri) {
        const uri = routeCDN(account.info.data.uri);

        const processJson = extended => {
          var _extended$properties, _extended$properties$;

          if (!extended || (extended === null || extended === void 0 ? void 0 : (_extended$properties = extended.properties) === null || _extended$properties === void 0 ? void 0 : (_extended$properties$ = _extended$properties.files) === null || _extended$properties$ === void 0 ? void 0 : _extended$properties$.length) === 0) {
            return;
          }

          if (extended !== null && extended !== void 0 && extended.image) {
            const file = extended.image.startsWith('http') ? extended.image : `${account.info.data.uri}/${extended.image}`;
            extended.image = routeCDN(file);
          }

          return extended;
        };

        try {
          const cached = localStorage.getItem(uri);

          if (cached) {
            setData(processJson(JSON.parse(cached)));
          } else {
            // TODO: BL handle concurrent calls to avoid double query
            fetch(uri).then(async _ => {
              try {
                const data = await _.json();

                try {
                  localStorage.setItem(uri, JSON.stringify(data));
                } catch {// ignore
                }

                setData(processJson(data));
              } catch {
                return undefined;
              }
            }).catch(() => {
              return undefined;
            });
          }
        } catch (ex) {
          console.error(ex);
        }
      }
    }
  }, [inView, id, data, setData, account]);
  return {
    ref,
    data
  };
};
;// CONCATENATED MODULE: ./src/hooks/useAuctions.ts






let useAuctions_AuctionViewState;

(function (AuctionViewState) {
  AuctionViewState["Live"] = "0";
  AuctionViewState["Upcoming"] = "1";
  AuctionViewState["Ended"] = "2";
  AuctionViewState["BuyNow"] = "3";
  AuctionViewState["Defective"] = "-1";
})(useAuctions_AuctionViewState || (useAuctions_AuctionViewState = {}));

function useCachedRedemptionKeysByWallet() {
  const {
    auctions,
    bidRedemptions
  } = meta_useMeta();
  const {
    publicKey
  } = (0,wallet_adapter_react_.useWallet)();
  const {
    0: cachedRedemptionKeys,
    1: setCachedRedemptionKeys
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(() => {
    (async () => {
      if (publicKey) {
        const temp = {};
        const keys = Object.keys(auctions);
        const tasks = [];

        for (let i = 0; i < keys.length; i++) {
          const a = keys[i];
          if (!cachedRedemptionKeys[a]) tasks.push(getBidderKeys(auctions[a].pubkey, publicKey.toBase58()).then(key => {
            temp[a] = bidRedemptions[key.bidRedemption] ? bidRedemptions[key.bidRedemption] : {
              pubkey: key.bidRedemption,
              info: null
            };
          }));else if (!cachedRedemptionKeys[a].info) {
            temp[a] = bidRedemptions[cachedRedemptionKeys[a].pubkey] || cachedRedemptionKeys[a];
          }
        }

        await Promise.all(tasks);
        setCachedRedemptionKeys(temp);
      }
    })();
  }, [auctions, bidRedemptions, publicKey]);
  return cachedRedemptionKeys;
}
const useAuctions_useAuctions = state => {
  const {
    0: auctionViews,
    1: setAuctionViews
  } = (0,external_react_.useState)([]);
  const {
    publicKey
  } = (0,wallet_adapter_react_.useWallet)();
  const cachedRedemptionKeys = useCachedRedemptionKeysByWallet();
  const {
    auctions,
    auctionManagersByAuction,
    safetyDepositBoxesByVaultAndIndex,
    metadataByMint,
    bidderMetadataByAuctionAndBidder,
    bidderPotsByAuctionAndBidder,
    vaults,
    masterEditions,
    masterEditionsByPrintingMint,
    masterEditionsByOneTimeAuthMint,
    metadataByMasterEdition,
    safetyDepositConfigsByAuctionManagerAndIndex,
    bidRedemptionV2sByAuctionManagerAndWinningIndex
  } = meta_useMeta();
  (0,external_react_.useEffect)(() => {
    const map = Object.keys(auctions).reduce((agg, a) => {
      const auction = auctions[a];
      const nextAuctionView = processAccountsIntoAuctionView(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), auction, auctionManagersByAuction, safetyDepositBoxesByVaultAndIndex, metadataByMint, bidderMetadataByAuctionAndBidder, bidderPotsByAuctionAndBidder, bidRedemptionV2sByAuctionManagerAndWinningIndex, masterEditions, vaults, safetyDepositConfigsByAuctionManagerAndIndex, masterEditionsByPrintingMint, masterEditionsByOneTimeAuthMint, metadataByMasterEdition, cachedRedemptionKeys, state);
      agg[a] = nextAuctionView;
      return agg;
    }, {});
    setAuctionViews(Object.values(map).filter(v => v).sort((a, b) => {
      var _b$auction$info$ended;

      return (b === null || b === void 0 ? void 0 : (_b$auction$info$ended = b.auction.info.endedAt) === null || _b$auction$info$ended === void 0 ? void 0 : _b$auction$info$ended.sub((a === null || a === void 0 ? void 0 : a.auction.info.endedAt) || new (external_bn_js_default())(0)).toNumber()) || 0;
    }));
  }, [state, auctions, auctionManagersByAuction, safetyDepositBoxesByVaultAndIndex, metadataByMint, bidderMetadataByAuctionAndBidder, bidderPotsByAuctionAndBidder, bidRedemptionV2sByAuctionManagerAndWinningIndex, vaults, safetyDepositConfigsByAuctionManagerAndIndex, masterEditions, masterEditionsByPrintingMint, masterEditionsByOneTimeAuthMint, metadataByMasterEdition, publicKey, cachedRedemptionKeys, setAuctionViews]);
  return auctionViews;
};

function buildListWhileNonZero(hash, key) {
  const list = [];
  let ticket = hash[key + '-0'];

  if (ticket) {
    list.push(ticket);
    let i = 1;

    while (ticket) {
      ticket = hash[key + '-' + i.toString()];
      if (ticket) list.push(ticket);
      i++;
    }
  }

  return list;
}

function processAccountsIntoAuctionView(walletPubkey, auction, auctionManagersByAuction, safetyDepositBoxesByVaultAndIndex, metadataByMint, bidderMetadataByAuctionAndBidder, bidderPotsByAuctionAndBidder, bidRedemptionV2sByAuctionManagerAndWinningIndex, masterEditions, vaults, safetyDepositConfigsByAuctionManagerAndIndex, masterEditionsByPrintingMint, masterEditionsByOneTimeAuthMint, metadataByMasterEdition, cachedRedemptionKeysByWallet, desiredState, existingAuctionView) {
  let state;

  if (auction.info.ended()) {
    state = useAuctions_AuctionViewState.Ended;
  } else if (auction.info.state === lib.AuctionState.Started) {
    state = useAuctions_AuctionViewState.Live;
  } else if (auction.info.state === lib.AuctionState.Created) {
    state = useAuctions_AuctionViewState.Upcoming;
  } else {
    state = useAuctions_AuctionViewState.BuyNow;
  }

  const auctionManagerInstance = auctionManagersByAuction[auction.pubkey || '']; // The defective auction view state really applies to auction managers, not auctions, so we ignore it here

  if (desiredState && desiredState !== useAuctions_AuctionViewState.Defective && desiredState !== state) return undefined;

  if (auctionManagerInstance) {
    var _cachedRedemptionKeys;

    // instead we apply defective state to auction managers
    if (desiredState === useAuctions_AuctionViewState.Defective && auctionManagerInstance.info.state.status !== AuctionManagerStatus.Initialized) return undefined; // Generally the only way an initialized auction manager can get through is if you are asking for defective ones.
    else if (desiredState !== useAuctions_AuctionViewState.Defective && auctionManagerInstance.info.state.status === AuctionManagerStatus.Initialized) return undefined;
    const vault = vaults[auctionManagerInstance.info.vault];
    const auctionManagerKey = auctionManagerInstance.pubkey;
    const safetyDepositConfigs = buildListWhileNonZero(safetyDepositConfigsByAuctionManagerAndIndex, auctionManagerKey);
    const bidRedemptions = buildListWhileNonZero(bidRedemptionV2sByAuctionManagerAndWinningIndex, auctionManagerKey);
    const auctionManager = new AuctionManager({
      instance: auctionManagerInstance,
      auction,
      vault,
      safetyDepositConfigs,
      bidRedemptions
    });
    const boxesExpected = auctionManager.safetyDepositBoxesExpected.toNumber();
    const bidRedemption = (_cachedRedemptionKeys = cachedRedemptionKeysByWallet[auction.pubkey]) !== null && _cachedRedemptionKeys !== void 0 && _cachedRedemptionKeys.info ? cachedRedemptionKeysByWallet[auction.pubkey] : undefined;
    const bidderMetadata = bidderMetadataByAuctionAndBidder[auction.pubkey + '-' + walletPubkey];
    const bidderPot = bidderPotsByAuctionAndBidder[auction.pubkey + '-' + walletPubkey];

    if (existingAuctionView && existingAuctionView.totallyComplete) {
      // If totally complete, we know we arent updating anythign else, let's speed things up
      // and only update the two things that could possibly change
      existingAuctionView.myBidderPot = bidderPot;
      existingAuctionView.myBidderMetadata = bidderMetadata;
      existingAuctionView.myBidRedemption = bidRedemption;

      for (let i = 0; i < existingAuctionView.items.length; i++) {
        const winningSet = existingAuctionView.items[i];

        for (let j = 0; j < winningSet.length; j++) {
          const curr = winningSet[j];

          if (!curr.metadata) {
            let foundMetadata = metadataByMint[curr.safetyDeposit.info.tokenMint];

            if (!foundMetadata) {
              // Means is a limited edition, so the tokenMint is the printingMint
              const masterEdition = masterEditionsByPrintingMint[curr.safetyDeposit.info.tokenMint];

              if (masterEdition) {
                foundMetadata = metadataByMasterEdition[masterEdition.pubkey];
              }
            }

            curr.metadata = foundMetadata;
          }

          if (curr.metadata && !curr.masterEdition && curr.metadata.info.masterEdition) {
            const foundMaster = masterEditions[curr.metadata.info.masterEdition];
            curr.masterEdition = foundMaster;
          }
        }
      }

      return existingAuctionView;
    }

    const vaultKey = auctionManager.vault;
    const boxes = buildListWhileNonZero(safetyDepositBoxesByVaultAndIndex, vaultKey);

    if (boxes.length > 0) {
      let participationMetadata = undefined;
      let participationBox = undefined;
      let participationMaster = undefined;

      if (auctionManager.participationConfig !== null && auctionManager.participationConfig !== undefined) {
        var _auctionManager$parti, _masterEditionsByOneT;

        participationBox = boxes[(_auctionManager$parti = auctionManager.participationConfig) === null || _auctionManager$parti === void 0 ? void 0 : _auctionManager$parti.safetyDepositBoxIndex]; // Cover case of V1 master edition (where we're using one time auth mint in storage)
        // and case of v2 master edition where the edition itself is stored

        participationMetadata = metadataByMasterEdition[(_masterEditionsByOneT = masterEditionsByOneTimeAuthMint[participationBox.info.tokenMint]) === null || _masterEditionsByOneT === void 0 ? void 0 : _masterEditionsByOneT.pubkey] || metadataByMint[participationBox.info.tokenMint];

        if (participationMetadata) {
          participationMaster = masterEditionsByOneTimeAuthMint[participationBox.info.tokenMint] || participationMetadata.info.masterEdition && masterEditions[participationMetadata.info.masterEdition];
        }
      }

      const view = {
        auction,
        auctionManager,
        state,
        vault,
        safetyDepositBoxes: boxes,
        items: auctionManager.getItemsFromSafetyDepositBoxes(metadataByMint, masterEditionsByPrintingMint, metadataByMasterEdition, masterEditions, boxes),
        participationItem: participationMetadata && participationBox ? {
          metadata: participationMetadata,
          safetyDeposit: participationBox,
          masterEdition: participationMaster,
          amount: new (external_bn_js_default())(1),
          winningConfigType: WinningConfigType.Participation
        } : undefined,
        myBidderMetadata: bidderMetadata,
        myBidderPot: bidderPot,
        myBidRedemption: bidRedemption
      };
      view.thumbnail = ((view.items || [])[0] || [])[0] || view.participationItem;
      view.totallyComplete = !!(view.thumbnail && boxesExpected === (view.items || []).length + (auctionManager.participationConfig === null || auctionManager.participationConfig === undefined ? 0 : 1) && (auctionManager.participationConfig === null || auctionManager.participationConfig === undefined || auctionManager.participationConfig !== null && view.participationItem) && view.vault);
      if ((!view.thumbnail || !view.thumbnail.metadata) && desiredState != useAuctions_AuctionViewState.Defective) return undefined;
      return view;
    }
  }

  return undefined;
}
;// CONCATENATED MODULE: ./src/hooks/useUserArts.ts




const useUserArts = () => {
  const {
    metadata,
    masterEditions,
    editions
  } = meta_useMeta();
  const {
    userAccounts
  } = (0,lib.useUserAccounts)();
  const accountByMint = userAccounts.reduce((prev, acc) => {
    prev.set(acc.info.mint.toBase58(), acc);
    return prev;
  }, new Map());
  const ownedMetadata = metadata.filter(m => {
    var _accountByMint$get, _accountByMint$get$in, _accountByMint$get$in2;

    return accountByMint.has(m.info.mint) && ((accountByMint === null || accountByMint === void 0 ? void 0 : (_accountByMint$get = accountByMint.get(m.info.mint)) === null || _accountByMint$get === void 0 ? void 0 : (_accountByMint$get$in = _accountByMint$get.info) === null || _accountByMint$get$in === void 0 ? void 0 : (_accountByMint$get$in2 = _accountByMint$get$in.amount) === null || _accountByMint$get$in2 === void 0 ? void 0 : _accountByMint$get$in2.toNumber()) || 0) > 0;
  });
  const possibleEditions = ownedMetadata.map(m => m.info.edition ? editions[m.info.edition] : undefined);
  const possibleMasterEditions = ownedMetadata.map(m => m.info.masterEdition ? masterEditions[m.info.masterEdition] : undefined);
  const safetyDeposits = [];
  let i = 0;
  ownedMetadata.forEach(m => {
    const a = accountByMint.get(m.info.mint);
    let masterA;
    const masterEdition = possibleMasterEditions[i];

    if ((masterEdition === null || masterEdition === void 0 ? void 0 : masterEdition.info.key) == lib.MetadataKey.MasterEditionV1) {
      masterA = accountByMint.get((masterEdition === null || masterEdition === void 0 ? void 0 : masterEdition.info.printingMint) || '');
    }

    let winningConfigType;

    if ((masterEdition === null || masterEdition === void 0 ? void 0 : masterEdition.info.key) == lib.MetadataKey.MasterEditionV1) {
      winningConfigType = WinningConfigType.PrintingV1;
    } else if ((masterEdition === null || masterEdition === void 0 ? void 0 : masterEdition.info.key) == lib.MetadataKey.MasterEditionV2) {
      if (masterEdition.info.maxSupply) {
        winningConfigType = WinningConfigType.PrintingV2;
      } else {
        winningConfigType = WinningConfigType.Participation;
      }
    } else {
      winningConfigType = WinningConfigType.TokenOnlyTransfer;
    }

    if (a) {
      var _masterA;

      safetyDeposits.push({
        holding: a.pubkey,
        edition: possibleEditions[i],
        masterEdition,
        metadata: m,
        printingMintHolding: (_masterA = masterA) === null || _masterA === void 0 ? void 0 : _masterA.pubkey,
        winningConfigType,
        amountRanges: [],
        participationConfig: winningConfigType == WinningConfigType.Participation ? new ParticipationConfigV2({
          winnerConstraint: WinningConstraint.ParticipationPrizeGiven,
          nonWinningConstraint: NonWinningConstraint.GivenForFixedPrice,
          fixedPrice: new (external_bn_js_default())(0)
        }) : undefined
      });
    }

    i++;
  });
  return safetyDeposits;
};
;// CONCATENATED MODULE: ./src/hooks/useAuction.ts




const useAuction = id => {
  const {
    publicKey
  } = (0,wallet_adapter_react_.useWallet)();
  const cachedRedemptionKeys = useCachedRedemptionKeysByWallet();
  const {
    0: existingAuctionView,
    1: setAuctionView
  } = (0,external_react_.useState)(undefined);
  const walletPubkey = publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58();
  const {
    auctions,
    auctionManagersByAuction,
    safetyDepositBoxesByVaultAndIndex,
    metadataByMint,
    bidderMetadataByAuctionAndBidder,
    bidderPotsByAuctionAndBidder,
    masterEditions,
    vaults,
    safetyDepositConfigsByAuctionManagerAndIndex,
    masterEditionsByOneTimeAuthMint,
    masterEditionsByPrintingMint,
    metadataByMasterEdition,
    bidRedemptionV2sByAuctionManagerAndWinningIndex
  } = meta_useMeta();
  (0,external_react_.useEffect)(() => {
    const auction = auctions[id];

    if (auction) {
      const auctionView = processAccountsIntoAuctionView(walletPubkey, auction, auctionManagersByAuction, safetyDepositBoxesByVaultAndIndex, metadataByMint, bidderMetadataByAuctionAndBidder, bidderPotsByAuctionAndBidder, bidRedemptionV2sByAuctionManagerAndWinningIndex, masterEditions, vaults, safetyDepositConfigsByAuctionManagerAndIndex, masterEditionsByPrintingMint, masterEditionsByOneTimeAuthMint, metadataByMasterEdition, cachedRedemptionKeys, undefined, existingAuctionView || undefined);
      if (auctionView) setAuctionView(auctionView);
    }
  }, [auctions, walletPubkey, auctionManagersByAuction, safetyDepositBoxesByVaultAndIndex, metadataByMint, bidderMetadataByAuctionAndBidder, bidderPotsByAuctionAndBidder, bidRedemptionV2sByAuctionManagerAndWinningIndex, vaults, safetyDepositConfigsByAuctionManagerAndIndex, masterEditions, masterEditionsByPrintingMint, masterEditionsByOneTimeAuthMint, metadataByMasterEdition, cachedRedemptionKeys]);
  return existingAuctionView;
};
;// CONCATENATED MODULE: ./src/hooks/useBidsForAuction.ts


const useBidsForAuction_useHighestBidForAuction = auctionPubkey => {
  const bids = useBidsForAuction_useBidsForAuction(auctionPubkey);
  const winner = useMemo(() => {
    return bids === null || bids === void 0 ? void 0 : bids[0];
  }, [bids]);
  return winner;
};
const useBidsForAuction_useBidsForAuction = auctionPubkey => {
  const id = (0,external_react_.useMemo)(() => typeof auctionPubkey === 'string' ? auctionPubkey !== '' ? auctionPubkey : undefined : auctionPubkey, [auctionPubkey]);
  const {
    0: bids,
    1: setBids
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const dispose = lib.cache.emitter.onCache(args => {
      if (args.parser === lib.BidderMetadataParser) {
        setBids(getBids(id));
      }
    });
    setBids(getBids(id));
    return () => {
      dispose();
    };
  }, [id]);
  return bids;
};

const getBids = id => {
  return lib.cache.byParser(lib.BidderMetadataParser).filter(key => {
    const bidder = lib.cache.get(key);

    if (!bidder) {
      return false;
    }

    return id === bidder.info.auctionPubkey;
  }).map(key => {
    const bidder = lib.cache.get(key);
    return bidder;
  }).sort((a, b) => {
    const lastBidDiff = b.info.lastBid.sub(a.info.lastBid).toNumber();

    if (lastBidDiff === 0) {
      return a.info.lastBidTimestamp.sub(b.info.lastBidTimestamp).toNumber();
    }

    return lastBidDiff;
  }).map(item => {
    return item;
  });
};
;// CONCATENATED MODULE: ./src/hooks/useUserBalance.ts



function useUserBalance(mintAddress, account) {
  const mint = (0,external_react_.useMemo)(() => typeof mintAddress === 'string' ? mintAddress : mintAddress, [mintAddress]);
  const {
    userAccounts
  } = (0,lib.useUserAccounts)();
  const {
    0: balanceInUSD,
    1: setBalanceInUSD
  } = (0,external_react_.useState)(0); // TODO: add option to register for different token prices

  const solPrice = useSolPrice();
  const mintInfo = (0,lib.useMint)(mint);
  const accounts = (0,external_react_.useMemo)(() => {
    return userAccounts.filter(acc => mint === acc.info.mint.toBase58() && (!account || account === acc.pubkey)).sort((a, b) => b.info.amount.sub(a.info.amount).toNumber());
  }, [userAccounts, mint, account]);
  const balanceLamports = (0,external_react_.useMemo)(() => {
    return accounts.reduce((res, item) => res += item.info.amount.toNumber(), 0);
  }, [accounts]);
  const balance = (0,external_react_.useMemo)(() => (0,lib.fromLamports)(balanceLamports, mintInfo), [mintInfo, balanceLamports]);
  (0,external_react_.useEffect)(() => {
    setBalanceInUSD(balance * solPrice);
  }, [balance, solPrice, mint, setBalanceInUSD]);
  return {
    balance,
    balanceLamports,
    balanceInUSD,
    accounts,
    hasBalance: accounts.length > 0 && balance > 0
  };
}
;// CONCATENATED MODULE: ./src/hooks/useCreator.ts


const useCreator = id => {
  const {
    whitelistedCreatorsByCreator
  } = meta_useMeta();
  const key = pubkeyToString(id);
  const creator = Object.values(whitelistedCreatorsByCreator).find(creator => creator.info.address === key);
  return creator;
};
;// CONCATENATED MODULE: ./src/hooks/useCreatorArts.ts

const useCreatorArts = id => {
  const {
    metadata
  } = meta_useMeta();
  const filtered = metadata.filter(m => {
    var _m$info$data$creators;

    return (_m$info$data$creators = m.info.data.creators) === null || _m$info$data$creators === void 0 ? void 0 : _m$info$data$creators.some(c => c.address === id);
  });
  return filtered;
};
;// CONCATENATED MODULE: ./src/hooks/useCreators.ts


const useCreators = auction => {
  const {
    whitelistedCreatorsByCreator
  } = meta_useMeta();
  const creators = (0,external_react_.useMemo)(() => {
    var _auction$participatio;

    return [...([...((auction === null || auction === void 0 ? void 0 : auction.items) || []).flat().map(item => item === null || item === void 0 ? void 0 : item.metadata), auction === null || auction === void 0 ? void 0 : (_auction$participatio = auction.participationItem) === null || _auction$participatio === void 0 ? void 0 : _auction$participatio.metadata].filter(item => item && item.info).map(item => (item === null || item === void 0 ? void 0 : item.info.data.creators) || []).flat() || []).filter(creator => creator.verified).reduce((agg, item) => {
      agg.add(item.address);
      return agg;
    }, new Set()).values()].map((creator, index, arr) => {
      const knownCreator = whitelistedCreatorsByCreator[creator];
      return {
        address: creator,
        verified: true,
        // not exact share of royalties
        share: 1 / arr.length * 100,
        image: (knownCreator === null || knownCreator === void 0 ? void 0 : knownCreator.info.image) || '',
        name: (knownCreator === null || knownCreator === void 0 ? void 0 : knownCreator.info.name) || '',
        link: (knownCreator === null || knownCreator === void 0 ? void 0 : knownCreator.info.twitter) || ''
      };
    });
  }, [auction, whitelistedCreatorsByCreator]);
  return creators;
};
;// CONCATENATED MODULE: ./src/hooks/index.ts









;// CONCATENATED MODULE: ./src/components/Notifications/index.tsx




function Notifications_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Notifications_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Notifications_ownKeys(Object(source), true).forEach(function (key) { Notifications_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Notifications_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Notifications_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var RunActionState;

(function (RunActionState) {
  RunActionState[RunActionState["NotRunning"] = 0] = "NotRunning";
  RunActionState[RunActionState["Running"] = 1] = "Running";
  RunActionState[RunActionState["Success"] = 2] = "Success";
  RunActionState[RunActionState["Failed"] = 3] = "Failed";
})(RunActionState || (RunActionState = {}));

function RunAction({
  id,
  action,
  onFinish,
  icon
}) {
  const {
    0: state,
    1: setRunState
  } = (0,external_react_.useState)(RunActionState.NotRunning);
  (0,external_react_.useMemo)(() => setRunState(RunActionState.NotRunning), [id]);

  const run = async () => {
    await setRunState(RunActionState.Running);
    const result = await action();

    if (result) {
      await setRunState(RunActionState.Success);
      setTimeout(() => onFinish ? onFinish() : null, 2000); // Give user a sense of completion before removal from list
    } else {
      await setRunState(RunActionState.Failed);
    }
  };

  let component;

  switch (state) {
    case RunActionState.NotRunning:
      component = /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "hover-button",
        onClick: run,
        children: icon
      });
      break;

    case RunActionState.Failed:
      component = /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "hover-button",
        onClick: run,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.SyncOutlined, {})
      });
      break;

    case RunActionState.Running:
      component = /*#__PURE__*/jsx_runtime_.jsx(icons_.LoadingOutlined, {});
      break;

    case RunActionState.Success:
      component = /*#__PURE__*/jsx_runtime_.jsx(icons_.CheckCircleTwoTone, {
        twoToneColor: "#52c41a"
      });
  }

  return component;
}

async function getPersonalEscrowAta(wallet) {
  const PROGRAM_IDS = (0,lib.programIds)();
  if (!(wallet !== null && wallet !== void 0 && wallet.publicKey)) return;
  return (await (0,lib.findProgramAddress)([wallet.publicKey.toBuffer(), PROGRAM_IDS.token.toBuffer(), QUOTE_MINT.toBuffer()], PROGRAM_IDS.associatedToken))[0];
}
function useCollapseWrappedSol({
  connection,
  wallet,
  notifications
}) {
  const {
    0: showNotification,
    1: setShowNotification
  } = (0,external_react_.useState)(false);

  const fn = async () => {
    const ata = await getPersonalEscrowAta(wallet);

    if (ata) {
      try {
        const balance = await connection.getTokenAccountBalance((0,lib.toPublicKey)(ata));

        if (balance && balance.value.uiAmount || 0 > 0) {
          setShowNotification(true);
        }
      } catch (e) {}
    }

    setTimeout(fn, 60000);
  };

  (0,external_react_.useEffect)(() => {
    fn();
  }, []);

  if (showNotification) {
    notifications.push({
      id: 'unsettled',
      title: 'Unsettled funds!',
      description: 'You have unsettled royalties in your personal escrow account.',
      action: async () => {
        try {
          const ata = await getPersonalEscrowAta(wallet);

          if (ata) {
            const data = await connection.getAccountInfo((0,lib.toPublicKey)(ata));
            if (data !== null && data !== void 0 && data.data.length || 0 > 0) await closePersonalEscrow(connection, wallet, ata);
          }
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  }
}
const CALLING_MUTEX = {};
function useSettlementAuctions({
  connection,
  wallet,
  notifications
}) {
  var _wallet$publicKey;

  const {
    accountByMint
  } = (0,lib.useUserAccounts)();
  const walletPubkey = wallet === null || wallet === void 0 ? void 0 : (_wallet$publicKey = wallet.publicKey) === null || _wallet$publicKey === void 0 ? void 0 : _wallet$publicKey.toBase58();
  const {
    bidderPotsByAuctionAndBidder
  } = meta_useMeta();
  const auctionsNeedingSettling = useAuctions_useAuctions(useAuctions_AuctionViewState.Ended);
  const {
    0: validDiscoveredEndedAuctions,
    1: setValidDiscoveredEndedAuctions
  } = (0,external_react_.useState)({});
  (0,external_react_.useMemo)(() => {
    const f = async () => {
      const nextBatch = auctionsNeedingSettling.filter(a => walletPubkey && a.auctionManager.authority === walletPubkey && a.auction.info.ended()).sort((a, b) => {
        var _b$auction$info$ended, _a$auction$info$ended;

        return (((_b$auction$info$ended = b.auction.info.endedAt) === null || _b$auction$info$ended === void 0 ? void 0 : _b$auction$info$ended.toNumber()) || 0) - (((_a$auction$info$ended = a.auction.info.endedAt) === null || _a$auction$info$ended === void 0 ? void 0 : _a$auction$info$ended.toNumber()) || 0);
      });

      for (let i = 0; i < nextBatch.length; i++) {
        const av = nextBatch[i];

        if (!CALLING_MUTEX[av.auctionManager.pubkey]) {
          CALLING_MUTEX[av.auctionManager.pubkey] = true;

          try {
            const balance = await connection.getTokenAccountBalance((0,lib.toPublicKey)(av.auctionManager.acceptPayment));

            if ((balance.value.uiAmount || 0) === 0 && av.auction.info.bidState.bids.map(b => b.amount.toNumber()).reduce((acc, r) => acc += r, 0) > 0 || (balance.value.uiAmount || 0) > 0.01) {
              setValidDiscoveredEndedAuctions(old => Notifications_objectSpread(Notifications_objectSpread({}, old), {}, {
                [av.auctionManager.pubkey]: balance.value.uiAmount || 0
              }));
            }
          } catch (e) {
            console.error(e);
          }
        }
      }
    };

    f();
  }, [auctionsNeedingSettling.length, walletPubkey]);
  Object.keys(validDiscoveredEndedAuctions).forEach(auctionViewKey => {
    const auctionView = auctionsNeedingSettling.find(a => a.auctionManager.pubkey === auctionViewKey);
    if (!auctionView) return;
    const winners = [...auctionView.auction.info.bidState.bids].reverse().slice(0, auctionView.auctionManager.numWinners.toNumber()).reduce((acc, r) => {
      acc[r.key] = true;
      return acc;
    }, {});
    const myPayingAccount = accountByMint.get(auctionView.auction.info.tokenMint);
    const auctionKey = auctionView.auction.pubkey;
    const bidsToClaim = Object.values(bidderPotsByAuctionAndBidder).filter(b => winners[b.info.bidderAct] && !b.info.emptied && b.info.auctionAct === auctionKey);
    if (bidsToClaim.length || validDiscoveredEndedAuctions[auctionViewKey] > 0) notifications.push({
      id: auctionViewKey,
      title: 'You have an ended auction that needs settling!',
      description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: ["One of your auctions ended and it has monies that can be claimed. For more detail,", ' ', /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
          to: `/auction/${auctionKey}/billing`,
          children: "click here."
        })]
      }),
      action: async () => {
        try {
          await settle(connection, wallet, auctionView, // Just claim all bidder pots
          bidsToClaim, myPayingAccount === null || myPayingAccount === void 0 ? void 0 : myPayingAccount.pubkey, accountByMint);

          if (wallet.publicKey) {
            const ata = await getPersonalEscrowAta(wallet);
            if (ata) await closePersonalEscrow(connection, wallet, ata);
          }
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
}
function Notifications() {
  var _wallet$publicKey2;

  const {
    metadata,
    whitelistedCreatorsByCreator,
    store,
    vaults,
    safetyDepositBoxesByVaultAndIndex
  } = meta_useMeta();
  const possiblyBrokenAuctionManagerSetups = useAuctions_useAuctions(useAuctions_AuctionViewState.Defective);
  const upcomingAuctions = useAuctions_useAuctions(useAuctions_AuctionViewState.Upcoming);
  const connection = (0,lib.useConnection)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const {
    accountByMint
  } = (0,lib.useUserAccounts)();
  const notifications = [];
  const walletPubkey = ((_wallet$publicKey2 = wallet.publicKey) === null || _wallet$publicKey2 === void 0 ? void 0 : _wallet$publicKey2.toBase58()) || '';
  useCollapseWrappedSol({
    connection,
    wallet,
    notifications
  });
  useSettlementAuctions({
    connection,
    wallet,
    notifications
  });
  const vaultsNeedUnwinding = (0,external_react_.useMemo)(() => Object.values(vaults).filter(v => v.info.authority === walletPubkey && v.info.state !== lib.VaultState.Deactivated && v.info.tokenTypeCount > 0), [vaults, walletPubkey]);
  vaultsNeedUnwinding.forEach(v => {
    notifications.push({
      id: v.pubkey,
      title: 'You have items locked in a defective auction!',
      description: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "During an auction creation process that probably had some issues, you lost an item. Reclaim it now."
      }),
      action: async () => {
        try {
          await unwindVault(connection, wallet, v, safetyDepositBoxesByVaultAndIndex);
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
  possiblyBrokenAuctionManagerSetups.filter(v => v.auctionManager.authority === walletPubkey).forEach(v => {
    notifications.push({
      id: v.auctionManager.pubkey,
      title: 'You have items locked in a defective auction!',
      description: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "During an auction creation process that probably had some issues, you lost an item. Reclaim it now."
      }),
      action: async () => {
        try {
          await decommAuctionManagerAndReturnPrizes(connection, wallet, v, safetyDepositBoxesByVaultAndIndex);
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
  const metaNeedsApproving = (0,external_react_.useMemo)(() => metadata.filter(m => {
    var _whitelistedCreatorsB, _whitelistedCreatorsB2;

    return m.info.data.creators && (((_whitelistedCreatorsB = whitelistedCreatorsByCreator[m.info.updateAuthority]) === null || _whitelistedCreatorsB === void 0 ? void 0 : (_whitelistedCreatorsB2 = _whitelistedCreatorsB.info) === null || _whitelistedCreatorsB2 === void 0 ? void 0 : _whitelistedCreatorsB2.activated) || (store === null || store === void 0 ? void 0 : store.info.public)) && m.info.data.creators.find(c => c.address === walletPubkey && !c.verified);
  }), [metadata, whitelistedCreatorsByCreator, walletPubkey]);
  metaNeedsApproving.forEach(m => {
    var _whitelistedCreatorsB3, _whitelistedCreatorsB4;

    notifications.push({
      id: m.pubkey,
      title: 'You have a new artwork to approve!',
      description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: [((_whitelistedCreatorsB3 = whitelistedCreatorsByCreator[m.info.updateAuthority]) === null || _whitelistedCreatorsB3 === void 0 ? void 0 : (_whitelistedCreatorsB4 = _whitelistedCreatorsB3.info) === null || _whitelistedCreatorsB4 === void 0 ? void 0 : _whitelistedCreatorsB4.name) || m.pubkey, ' ', "wants you to approve that you helped create their art", ' ', /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
          to: `/art/${m.pubkey}`,
          children: "here."
        })]
      }),
      action: async () => {
        try {
          await sendSignMetadata(connection, wallet, m.pubkey);
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
  upcomingAuctions.filter(v => v.auctionManager.authority === walletPubkey).forEach(v => {
    notifications.push({
      id: v.auctionManager.pubkey,
      title: 'You have an auction which is not started yet!',
      description: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "You can activate it now if you wish."
      }),
      action: async () => {
        try {
          await startAuctionManually(connection, wallet, v);
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
  const content = notifications.length ? /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      width: '300px'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List, {
      itemLayout: "vertical",
      size: "small",
      dataSource: notifications.slice(0, 10),
      renderItem: item => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List.Item, {
        extra: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(RunAction, {
            id: item.id,
            action: item.action,
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlayCircleOutlined, {})
          }), item.dismiss && /*#__PURE__*/jsx_runtime_.jsx(RunAction, {
            id: item.id,
            action: item.dismiss,
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlayCircleOutlined, {})
          })]
        }),
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List.Item.Meta, {
          title: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: item.title
          }),
          description: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: item.description
            })
          })
        })
      })
    })
  }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: "No notifications"
  });

  const justContent = /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Popover, {
    className: "noty-popover",
    placement: "bottomLeft",
    content: content,
    trigger: "click",
    children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "title",
      children: "ATLAS"
    })
  });

  if (notifications.length === 0) return justContent;else return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Badge, {
    count: notifications.length,
    style: {
      backgroundColor: 'white'
    },
    children: justContent
  });
}
// EXTERNAL MODULE: external "buffer-layout"
var external_buffer_layout_ = __webpack_require__(2949);
;// CONCATENATED MODULE: ./src/utils/layout.ts




/**
 * Layout for a public key
 */

const publicKey = (property = 'publicKey') => {
  const publicKeyLayout = BufferLayout.blob(32, property);

  const _decode = publicKeyLayout.decode.bind(publicKeyLayout);

  const _encode = publicKeyLayout.encode.bind(publicKeyLayout);

  publicKeyLayout.decode = (buffer, offset) => {
    const data = _decode(buffer, offset);

    return new PublicKey(data);
  };

  publicKeyLayout.encode = (key, buffer, offset) => {
    return _encode(key.toBuffer(), buffer, offset);
  };

  return publicKeyLayout;
};
/**
 * Layout for a 64bit unsigned value
 */

const uint64 = (property = 'uint64') => {
  const layout = BufferLayout.blob(8, property);

  const _decode = layout.decode.bind(layout);

  const _encode = layout.encode.bind(layout);

  layout.decode = (buffer, offset) => {
    const data = _decode(buffer, offset);

    return new BN([...data].reverse().map(i => `00${i.toString(16)}`.slice(-2)).join(''), 16);
  };

  layout.encode = (num, buffer, offset) => {
    const a = num.toArray().reverse();
    let b = Buffer.from(a);

    if (b.length !== 8) {
      const zeroPad = Buffer.alloc(8);
      b.copy(zeroPad);
      b = zeroPad;
    }

    return _encode(b, buffer, offset);
  };

  return layout;
}; // TODO: wrap in BN (what about decimals?)

const uint128 = (property = 'uint128') => {
  const layout = BufferLayout.blob(16, property);

  const _decode = layout.decode.bind(layout);

  const _encode = layout.encode.bind(layout);

  layout.decode = (buffer, offset) => {
    const data = _decode(buffer, offset);

    return new BN([...data].reverse().map(i => `00${i.toString(16)}`.slice(-2)).join(''), 16);
  };

  layout.encode = (num, buffer, offset) => {
    const a = num.toArray().reverse();
    let b = Buffer.from(a);

    if (b.length !== 16) {
      const zeroPad = Buffer.alloc(16);
      b.copy(zeroPad);
      b = zeroPad;
    }

    return _encode(b, buffer, offset);
  };

  return layout;
};
/**
 * Layout for a Rust String type
 */

const rustString = (property = 'string') => {
  const rsl = BufferLayout.struct([BufferLayout.u32('length'), BufferLayout.u32('lengthPadding'), BufferLayout.blob(BufferLayout.offset(BufferLayout.u32(), -8), 'chars')], property);

  const _decode = rsl.decode.bind(rsl);

  const _encode = rsl.encode.bind(rsl);

  rsl.decode = (buffer, offset) => {
    const data = _decode(buffer, offset);

    return data.chars.toString('utf8');
  };

  rsl.encode = (str, buffer, offset) => {
    const data = {
      chars: Buffer.from(str, 'utf8')
    };
    return _encode(data, buffer, offset);
  };

  return rsl;
};

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = (0,external_react_.useState)(getWindowDimensions());
  (0,external_react_.useEffect)(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}
;// CONCATENATED MODULE: ./src/components/AppBar/index.tsx













const UserActions = () => {
  const {
    publicKey
  } = (0,wallet_adapter_react_.useWallet)();
  const {
    whitelistedCreatorsByCreator,
    store
  } = meta_useMeta();
  const pubkey = (publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58()) || '';
  const canCreate = (0,external_react_.useMemo)(() => {
    var _store$info, _whitelistedCreatorsB, _whitelistedCreatorsB2;

    return (store === null || store === void 0 ? void 0 : (_store$info = store.info) === null || _store$info === void 0 ? void 0 : _store$info.public) || ((_whitelistedCreatorsB = whitelistedCreatorsByCreator[pubkey]) === null || _whitelistedCreatorsB === void 0 ? void 0 : (_whitelistedCreatorsB2 = _whitelistedCreatorsB.info) === null || _whitelistedCreatorsB2 === void 0 ? void 0 : _whitelistedCreatorsB2.activated);
  }, [pubkey, whitelistedCreatorsByCreator, store]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: store && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [canCreate ? /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
        to: `/art/create`,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          className: "app-btn",
          children: "Create"
        })
      }) : null, /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
        to: `/auction/create/0`,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          className: "connector",
          type: "primary",
          children: "Sell"
        })
      })]
    })
  });
};

const DefaultActions = ({
  vertical = false
}) => {
  const {
    connected
  } = (0,wallet_adapter_react_.useWallet)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
      to: `/create-lottery-store`,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        className: "app-btn",
        children: "Create Lottery Store"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
      to: `/create-lottery`,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        className: "app-btn",
        children: "Create Lottery NFT"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
      to: `/join-raffle`,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        className: "app-btn",
        children: "Join Raffle"
      })
    })]
  });
};

const MetaplexMenu = () => {
  const {
    width
  } = useWindowDimensions();
  const {
    connected
  } = (0,wallet_adapter_react_.useWallet)();
  if (width < 768) return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Dropdown, {
      arrow: true,
      placement: "bottomLeft",
      trigger: ['click'],
      overlay: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
            to: `/`,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
              className: "app-btn",
              children: "Explore"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
            to: `/artworks`,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
              className: "app-btn",
              children: connected ? 'My Items' : 'Artworks'
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
            to: `/artists`,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
              className: "app-btn",
              children: "Creators"
            })
          })
        })]
      }),
      children: /*#__PURE__*/jsx_runtime_.jsx(icons_.MenuOutlined, {
        style: {
          fontSize: '1.4rem'
        }
      })
    })
  });
  return /*#__PURE__*/jsx_runtime_.jsx(DefaultActions, {});
};

const AppBar = () => {
  const {
    connected
  } = (0,wallet_adapter_react_.useWallet)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "app-left app-bar-box",
      children: [window.location.hash !== '#/analytics' && /*#__PURE__*/jsx_runtime_.jsx(Notifications, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "divider"
      }), /*#__PURE__*/jsx_runtime_.jsx(MetaplexMenu, {})]
    }), connected ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "app-right app-bar-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx(UserActions, {}), /*#__PURE__*/jsx_runtime_.jsx(lib.CurrentUserBadge, {
        showBalance: false,
        showAddress: false,
        iconSize: 24
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(lib.ConnectButton, {
      type: "primary",
      allowWalletChange: true
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/Layout/index.tsx








const {
  Header,
  Content
} = external_antd_.Layout;

const paddingForLayout = width => {
  if (width <= 768) return '5px 10px';
  if (width > 768) return '10px 30px';
};

const AppLayout = /*#__PURE__*/external_react_default().memo(props => {
  const {
    width
  } = useWindowDimensions();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
      title: LABELS.APP_TITLE,
      style: {
        padding: paddingForLayout(width),
        maxWidth: 1000
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        className: "App-Bar",
        children: /*#__PURE__*/jsx_runtime_.jsx(AppBar, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
        style: {
          overflow: 'scroll',
          paddingBottom: 50
        },
        children: props.children
      })]
    })
  });
});
;// CONCATENATED MODULE: ./src/providers.tsx






const Providers = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(lib.ConnectionProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx(lib.WalletProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(lib.AccountsProvider, {
        children: /*#__PURE__*/jsx_runtime_.jsx(CoingeckoProvider, {
          children: /*#__PURE__*/jsx_runtime_.jsx(lib.StoreProvider, {
            ownerAddress: "4GJ3z4skEHJADz3MVeNYBg4YV8H27rBQey2YYdiPC8PA",
            storeAddress: "BkkXxCYmACJAyxf7wrkAJ9bF7T4dZ43s8gjTfLkvXwfT",
            children: /*#__PURE__*/jsx_runtime_.jsx(MetaProvider, {
              children: /*#__PURE__*/jsx_runtime_.jsx(ConfettiProvider, {
                children: /*#__PURE__*/jsx_runtime_.jsx(AppLayout, {
                  children: children
                })
              })
            })
          })
        })
      })
    })
  });
};
// EXTERNAL MODULE: external "react-masonry-css"
var external_react_masonry_css_ = __webpack_require__(1968);
var external_react_masonry_css_default = /*#__PURE__*/__webpack_require__.n(external_react_masonry_css_);
// EXTERNAL MODULE: external "@google/model-viewer/dist/model-viewer"
var model_viewer_ = __webpack_require__(8671);
;// CONCATENATED MODULE: ./src/components/MeshViewer/index.tsx


function MeshViewer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MeshViewer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MeshViewer_ownKeys(Object(source), true).forEach(function (key) { MeshViewer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MeshViewer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MeshViewer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function MeshViewer(props) {
  return (
    /*#__PURE__*/
    // @ts-ignore
    jsx_runtime_.jsx("model-viewer", {
      style: MeshViewer_objectSpread({
        width: `100%`,
        height: `100%`,
        minHeight: 400,
        minWidth: 400,
        maxHeight: 400
      }, props.style),
      src: props.url,
      "auto-rotate": true,
      "rotation-per-second": "40deg",
      className: props.className,
      "camera-controls": true
    })
  );
}
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/MyLoader/index.tsx




const MyLoader_CardLoader = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), {
  speed: 2,
  width: 223,
  height: 400,
  viewBox: "0 0 250 400",
  backgroundColor: "#0c0c0c",
  foregroundColor: "#595959",
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "9",
    y: "0",
    rx: "14",
    ry: "14",
    width: "232",
    height: "240"
  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
    cx: "39",
    cy: "296",
    r: "15"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "24",
    y: "251",
    rx: "0",
    ry: "6",
    width: "123",
    height: "21"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "24",
    y: "322",
    rx: "6",
    ry: "6",
    width: "44",
    height: "25"
  })]
});
const ThreeDots = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), {
  viewBox: "0 0 212 200",
  height: 200,
  width: 212,
  backgroundColor: "transparent",
  style: {
    width: '100%',
    margin: 'auto'
  },
  children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
    cx: "86",
    cy: "100",
    r: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
    cx: "106",
    cy: "100",
    r: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
    cx: "126",
    cy: "100",
    r: "8"
  })]
});
// EXTERNAL MODULE: external "@cloudflare/stream-react"
var stream_react_ = __webpack_require__(5599);
;// CONCATENATED MODULE: ./src/utils/utils.ts
const cleanName = name => {
  if (!name) {
    return undefined;
  }

  return name.replace(/\s+/g, '-');
};
const getLast = arr => {
  if (arr.length <= 0) {
    return undefined;
  }

  return arr[arr.length - 1];
};
;// CONCATENATED MODULE: ./src/components/ArtContent/index.tsx



function ArtContent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ArtContent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ArtContent_ownKeys(Object(source), true).forEach(function (key) { ArtContent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ArtContent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArtContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MeshArtContent = ({
  uri,
  animationUrl,
  className,
  style,
  files
}) => {
  const renderURL = files && files.length > 0 && typeof files[0] === 'string' ? files[0] : animationUrl;
  const {
    isLoading
  } = useCachedImage(renderURL || '', true);

  if (isLoading) {
    return /*#__PURE__*/jsx_runtime_.jsx(CachedImageContent, {
      uri: uri,
      className: className,
      preview: false,
      style: ArtContent_objectSpread({
        width: 300
      }, style)
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(MeshViewer, {
    url: renderURL,
    className: className,
    style: style
  });
};

const CachedImageContent = ({
  uri,
  className,
  preview,
  style
}) => {
  const {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(false);
  const {
    cachedBlob
  } = useCachedImage(uri || '');
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Image, ArtContent_objectSpread({
    src: cachedBlob,
    preview: preview,
    wrapperClassName: className,
    loading: "lazy",
    wrapperStyle: ArtContent_objectSpread({}, style),
    onLoad: e => {
      setLoaded(true);
    },
    placeholder: /*#__PURE__*/jsx_runtime_.jsx(ThreeDots, {})
  }, loaded ? {} : {
    height: 200
  }));
};

const VideoArtContent = ({
  className,
  style,
  files,
  uri,
  animationURL,
  active
}) => {
  var _filter;

  const {
    0: playerApi,
    1: setPlayerApi
  } = (0,external_react_.useState)();
  const playerRef = (0,external_react_.useCallback)(ref => {
    setPlayerApi(ref);
  }, [setPlayerApi]);
  (0,external_react_.useEffect)(() => {
    if (playerApi) {
      playerApi.currentTime = 0;
    }
  }, [active, playerApi]);
  const likelyVideo = (_filter = (files || []).filter((f, index, arr) => {
    if (typeof f !== 'string') {
      return false;
    } // TODO: filter by fileType


    return arr.length >= 2 ? index === 1 : index === 0;
  })) === null || _filter === void 0 ? void 0 : _filter[0];
  const content = likelyVideo && likelyVideo.startsWith('https://watch.videodelivery.net/') ? /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${className} square`,
    children: /*#__PURE__*/jsx_runtime_.jsx(stream_react_.Stream, {
      streamRef: e => playerRef(e),
      src: likelyVideo.replace('https://watch.videodelivery.net/', ''),
      loop: true,
      height: 600,
      width: 600,
      controls: false,
      videoDimensions: {
        videoHeight: 700,
        videoWidth: 400
      },
      autoplay: true,
      muted: true
    })
  }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("video", {
    className: className,
    playsInline: true,
    autoPlay: true,
    muted: true,
    controls: true,
    controlsList: "nodownload",
    style: style,
    loop: true,
    poster: uri,
    children: [likelyVideo && /*#__PURE__*/jsx_runtime_.jsx("source", {
      src: likelyVideo,
      type: "video/mp4",
      style: style
    }), animationURL && /*#__PURE__*/jsx_runtime_.jsx("source", {
      src: animationURL,
      type: "video/mp4",
      style: style
    }), files === null || files === void 0 ? void 0 : files.filter(f => typeof f !== 'string').map(f => /*#__PURE__*/jsx_runtime_.jsx("source", {
      src: f.uri,
      type: f.type,
      style: style
    }))]
  });
  return content;
};

const ArtContent_ArtContent = ({
  category,
  className,
  preview,
  style,
  active,
  allowMeshRender,
  pubkey,
  uri,
  animationURL,
  files
}) => {
  const id = pubkeyToString(pubkey);
  const {
    ref,
    data
  } = useExtendedArt(id);

  if (pubkey && data) {
    uri = data.image;
    animationURL = data.animation_url;
  }

  if (pubkey && data !== null && data !== void 0 && data.properties) {
    files = data.properties.files;
    category = data.properties.category;
  }

  animationURL = animationURL || '';
  const animationUrlExt = new URLSearchParams(getLast(animationURL.split('?'))).get('ext');

  if (allowMeshRender && (category === 'vr' || animationUrlExt === 'glb' || animationUrlExt === 'gltf')) {
    return /*#__PURE__*/jsx_runtime_.jsx(MeshArtContent, {
      uri: uri,
      animationUrl: animationURL,
      className: className,
      style: style,
      files: files
    });
  }

  const content = category === 'video' ? /*#__PURE__*/jsx_runtime_.jsx(VideoArtContent, {
    className: className,
    style: style,
    files: files,
    uri: uri,
    animationURL: animationURL,
    active: active
  }) : /*#__PURE__*/jsx_runtime_.jsx(CachedImageContent, {
    uri: uri,
    className: className,
    preview: preview,
    style: style
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    ref: ref,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    children: content
  });
};
;// CONCATENATED MODULE: ./src/components/AmountLabel/index.tsx



function AmountLabel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AmountLabel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AmountLabel_ownKeys(Object(source), true).forEach(function (key) { AmountLabel_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AmountLabel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AmountLabel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const AmountLabel_AmountLabel = props => {
  const {
    amount: _amount,
    displayUSD = true,
    title = '',
    style = {},
    containerStyle = {}
  } = props;
  const amount = typeof _amount === 'string' ? parseFloat(_amount) : _amount;
  const solPrice = useSolPrice();
  const {
    0: priceUSD,
    1: setPriceUSD
  } = (0,external_react_.useState)(undefined);
  (0,external_react_.useEffect)(() => {
    setPriceUSD(solPrice * amount);
  }, [amount, solPrice]);
  const PriceNaN = isNaN(amount);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: AmountLabel_objectSpread({
      display: 'flex'
    }, containerStyle),
    children: [PriceNaN === false && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Statistic, {
      style: style,
      className: "create-statistic",
      title: title || '',
      value: amount,
      prefix: "\u25CE"
    }), displayUSD && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "usd",
      children: PriceNaN === false ? lib.formatUSD.format(priceUSD || 0) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "placebid",
        children: "Place Bid"
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/AuctionRenderCard/index.tsx











const {
  Meta
} = external_antd_.Card;
const AuctionRenderCard_AuctionRenderCard = props => {
  var _auctionView$auctionM, _auctionView$auction$;

  let {
    auctionView
  } = props;
  const id = auctionView.thumbnail.metadata.pubkey;
  const art = useArt(id);
  const name = (art === null || art === void 0 ? void 0 : art.title) || ' ';
  const {
    0: state,
    1: setState
  } = useState();
  const bids = useBidsForAuction(auctionView.auction.pubkey);
  const mintInfo = useMint(auctionView.auction.info.tokenMint);
  const participationFixedPrice = ((_auctionView$auctionM = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM === void 0 ? void 0 : _auctionView$auctionM.fixedPrice) || 0;
  const participationOnly = auctionView.auctionManager.numWinners.eq(new BN(0));
  const priceFloor = auctionView.auction.info.priceFloor.type === PriceFloorType.Minimum ? ((_auctionView$auction$ = auctionView.auction.info.priceFloor.minPrice) === null || _auctionView$auction$ === void 0 ? void 0 : _auctionView$auction$.toNumber()) || 0 : 0;
  const isUpcoming = auctionView.state === AuctionViewState.Upcoming;
  const winningBid = useHighestBidForAuction(auctionView.auction.pubkey);
  const ended = (state === null || state === void 0 ? void 0 : state.hours) === 0 && (state === null || state === void 0 ? void 0 : state.minutes) === 0 && (state === null || state === void 0 ? void 0 : state.seconds) === 0;
  let currentBid = 0;
  let label = '';

  if (isUpcoming || bids) {
    label = ended ? 'Ended' : 'Starting bid';
    currentBid = fromLamports(participationOnly ? participationFixedPrice : priceFloor, mintInfo);
  }

  if (!isUpcoming && bids.length > 0) {
    var _winningBid$info$last;

    label = ended ? 'Winning bid' : 'Current bid';
    currentBid = winningBid && Number.isFinite((_winningBid$info$last = winningBid.info.lastBid) === null || _winningBid$info$last === void 0 ? void 0 : _winningBid$info$last.toNumber()) ? formatTokenAmount(winningBid.info.lastBid) : 'No Bid';
  }

  const auction = auctionView.auction.info;
  useEffect(() => {
    const calc = () => {
      setState(auction.timeToEnd());
    };

    const interval = setInterval(() => {
      calc();
    }, 1000);
    calc();
    return () => clearInterval(interval);
  }, [auction, setState]);

  const card = /*#__PURE__*/_jsx(Card, {
    hoverable: true,
    className: `art-card`,
    cover: /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsx(ArtContent, {
        className: "auction-image no-events",
        preview: false,
        pubkey: id,
        allowMeshRender: false
      })
    }),
    children: /*#__PURE__*/_jsx(Meta, {
      title: `${name}`,
      description: /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("h4", {
          style: {
            marginBottom: 0
          },
          children: label
        }), /*#__PURE__*/_jsx("div", {
          className: "bids",
          children: /*#__PURE__*/_jsx(AmountLabel, {
            style: {
              marginBottom: 10
            },
            containerStyle: {
              flexDirection: 'row'
            },
            title: label,
            amount: currentBid
          })
        })]
      })
    })
  });

  return card;
};
;// CONCATENATED MODULE: ./src/components/AuctionNumbers/index.tsx








const AuctionNumbers = props => {
  var _auctionView$auctionM, _auctionView$auction$;

  const {
    auctionView
  } = props;
  const bids = useBidsForAuction_useBidsForAuction(auctionView.auction.pubkey);
  const mintInfo = (0,lib.useMint)(auctionView.auction.info.tokenMint);
  const participationFixedPrice = ((_auctionView$auctionM = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM === void 0 ? void 0 : _auctionView$auctionM.fixedPrice) || 0;
  const participationOnly = auctionView.auctionManager.numWinners.toNumber() === 0;
  const priceFloor = auctionView.auction.info.priceFloor.type === lib.PriceFloorType.Minimum ? ((_auctionView$auction$ = auctionView.auction.info.priceFloor.minPrice) === null || _auctionView$auction$ === void 0 ? void 0 : _auctionView$auction$.toNumber()) || 0 : 0;
  const isUpcoming = auctionView.state === useAuctions_AuctionViewState.Upcoming;
  const isStarted = auctionView.state === useAuctions_AuctionViewState.Live;
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)();
  const auction = auctionView.auction.info;
  (0,external_react_.useEffect)(() => {
    const calc = () => {
      const newState = auction.timeToEnd();
      setState(newState);
    };

    const interval = setInterval(() => {
      calc();
    }, 1000);
    calc();
    return () => clearInterval(interval);
  }, [auction]);
  const ended = isEnded(state);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      minWidth: 350
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      children: [!ended && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        span: 12,
        children: [(isUpcoming || bids.length === 0) && /*#__PURE__*/jsx_runtime_.jsx(AmountLabel_AmountLabel, {
          style: {
            marginBottom: 10
          },
          containerStyle: {
            flexDirection: 'column'
          },
          title: "Starting bid",
          amount: (0,lib.fromLamports)(participationOnly ? participationFixedPrice : priceFloor, mintInfo)
        }), isStarted && bids.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(AmountLabel_AmountLabel, {
          style: {
            marginBottom: 10
          },
          containerStyle: {
            flexDirection: 'column'
          },
          title: "Highest bid",
          amount: (0,lib.formatTokenAmount)(bids[0].info.lastBid, mintInfo)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: ended ? 24 : 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(Countdown, {
          state: state
        })
      })]
    })
  });
};

const isEnded = state => (state === null || state === void 0 ? void 0 : state.days) === 0 && (state === null || state === void 0 ? void 0 : state.hours) === 0 && (state === null || state === void 0 ? void 0 : state.minutes) === 0 && (state === null || state === void 0 ? void 0 : state.seconds) === 0;

const Countdown = ({
  state
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: '100%'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "info-header",
          style: {
            margin: '12px 0',
            fontSize: 18
          },
          children: "Time left"
        }), state && (isEnded(state) ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          style: {
            width: '100%'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "cd-number",
            children: "This auction has ended"
          })
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
          style: {
            width: '100%',
            flexWrap: 'nowrap'
          },
          children: [state && state.days > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cd-number",
              children: [state.days < 10 && /*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  opacity: 0.2
                },
                children: "0"
              }), state.days, /*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  opacity: 0.2
                },
                children: ":"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cd-label",
              children: "days"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cd-number",
              children: [state.hours < 10 && /*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  opacity: 0.2
                },
                children: "0"
              }), state.hours, /*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  opacity: 0.2
                },
                children: ":"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cd-label",
              children: "hour"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cd-number",
              children: [state.minutes < 10 && /*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  opacity: 0.2
                },
                children: "0"
              }), state.minutes, state.days === 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  opacity: 0.2
                },
                children: ":"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cd-label",
              children: "mins"
            })]
          }), !state.days && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cd-number",
              children: [state.seconds < 10 && /*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  opacity: 0.2
                },
                children: "0"
              }), state.seconds]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cd-label",
              children: "secs"
            })]
          })]
        }))]
      })
    })
  });
};
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./src/components/AuctionCard/index.tsx























async function calculateTotalCostOfRedeemingOtherPeoplesBids(connection, auctionView, bids, bidRedemptions) {
  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  const mintRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span);
  const metadataRentExempt = await connection.getMinimumBalanceForRentExemption(lib.MAX_METADATA_LEN);
  const editionRentExempt = await connection.getMinimumBalanceForRentExemption(lib.MAX_EDITION_LEN);
  const prizeTrackingTicketExempt = await connection.getMinimumBalanceForRentExemption(MAX_PRIZE_TRACKING_TICKET_SIZE);
  const eligibleParticipations = await findEligibleParticipationBidsForRedemption(auctionView, bids, bidRedemptions);
  const max = auctionView.auction.info.bidState.max.toNumber();
  let totalWinnerItems = 0;

  for (let i = 0; i < max; i++) {
    const winner = auctionView.auction.info.bidState.getWinnerAt(i);

    if (!winner) {
      break;
    } else {
      const bid = bids.find(b => b.info.bidderPubkey === winner);

      if (bid) {
        for (let j = 0; j < auctionView.auctionManager.safetyDepositBoxesExpected.toNumber(); j++) {
          totalWinnerItems += auctionView.auctionManager.getAmountForWinner(i, j).toNumber();
        }
      }
    }
  }

  return (mintRentExempt + accountRentExempt + metadataRentExempt + editionRentExempt + prizeTrackingTicketExempt) * (eligibleParticipations.length + totalWinnerItems);
}

function useGapTickCheck(value, gapTick, gapTime, auctionView) {
  return !!(0,external_react_.useMemo)(() => {
    if (gapTick && value && gapTime && !auctionView.auction.info.ended()) {
      // so we have a gap tick percentage, and a gap tick time, and a value, and we're not ended - are we within gap time?
      const now = external_moment_default()().unix();
      const endedAt = auctionView.auction.info.endedAt;

      if (endedAt) {
        const ended = endedAt.toNumber();

        if (now > ended) {
          const toLamportVal = value * web3_js_.LAMPORTS_PER_SOL; // Ok, we are in gap time, since now is greater than ended and we're not actually an ended auction yt.
          // Check that the bid is at least gapTick % bigger than the next biggest one in the stack.

          for (let i = auctionView.auction.info.bidState.bids.length - 1; i > -1; i--) {
            const bid = auctionView.auction.info.bidState.bids[i];
            const expected = bid.amount.toNumber();

            if (expected < toLamportVal) {
              const higherExpectedAmount = expected * ((100 + gapTick) / 100);
              return higherExpectedAmount > toLamportVal;
            } else if (expected === toLamportVal) {
              // If gap tick is set, no way you can bid in this case - you must bid higher.
              return true;
            }
          }

          return false;
        } else {
          return false;
        }
      }

      return false;
    }
  }, [value, gapTick, gapTime, auctionView]);
}

function useAuctionExtended(auctionView) {
  const {
    0: auctionExtended,
    1: setAuctionExtended
  } = (0,external_react_.useState)();
  const {
    auctionDataExtended
  } = meta_useMeta();
  (0,external_react_.useMemo)(() => {
    const fn = async () => {
      if (!auctionExtended) {
        const PROGRAM_IDS = (0,lib.programIds)();
        const extendedKey = await (0,lib.getAuctionExtended)({
          auctionProgramId: PROGRAM_IDS.auction,
          resource: auctionView.vault.pubkey
        });
        const extendedValue = auctionDataExtended[extendedKey];
        if (extendedValue) setAuctionExtended(extendedValue);
      }
    };

    fn();
  }, [auctionDataExtended, auctionExtended, setAuctionExtended]);
  return auctionExtended;
}

const AuctionCard_AuctionCard = ({
  auctionView,
  style,
  hideDefaultAction,
  action
}) => {
  var _auctionView$myBidder, _auctionView$myBidder2, _auctionView$auction$, _auctionView$auction$2, _wallet$publicKey;

  const connection = (0,lib.useConnection)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const {
    setVisible
  } = (0,lib.useWalletModal)();
  const connect = (0,external_react_.useCallback)(() => wallet.wallet ? wallet.connect().catch() : setVisible(true), [wallet.wallet, wallet.connect, setVisible]);
  const mintInfo = (0,lib.useMint)(auctionView.auction.info.tokenMint);
  const {
    prizeTrackingTickets,
    bidRedemptions
  } = meta_useMeta();
  const bids = useBidsForAuction_useBidsForAuction(auctionView.auction.pubkey);
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: showBidModal,
    1: setShowBidModal
  } = (0,external_react_.useState)(false);
  const {
    0: showRedeemedBidModal,
    1: setShowRedeemedBidModal
  } = (0,external_react_.useState)(false);
  const {
    0: showRedemptionIssue,
    1: setShowRedemptionIssue
  } = (0,external_react_.useState)(false);
  const {
    0: showBidPlaced,
    1: setShowBidPlaced
  } = (0,external_react_.useState)(false);
  const {
    0: lastBid,
    1: setLastBid
  } = (0,external_react_.useState)(undefined);
  const {
    0: modalHistory,
    1: setModalHistory
  } = (0,external_react_.useState)();
  const {
    0: showWarningModal,
    1: setShowWarningModal
  } = (0,external_react_.useState)(false);
  const {
    0: printingCost,
    1: setPrintingCost
  } = (0,external_react_.useState)();
  const {
    accountByMint
  } = (0,lib.useUserAccounts)();
  const mintKey = auctionView.auction.info.tokenMint;
  const balance = useUserBalance(mintKey);
  const myPayingAccount = balance.accounts[0];
  let winnerIndex = null;
  if ((_auctionView$myBidder = auctionView.myBidderPot) !== null && _auctionView$myBidder !== void 0 && _auctionView$myBidder.pubkey) winnerIndex = auctionView.auction.info.bidState.getWinnerIndex((_auctionView$myBidder2 = auctionView.myBidderPot) === null || _auctionView$myBidder2 === void 0 ? void 0 : _auctionView$myBidder2.info.bidderAct);
  const priceFloor = auctionView.auction.info.priceFloor.type === lib.PriceFloorType.Minimum ? ((_auctionView$auction$ = auctionView.auction.info.priceFloor.minPrice) === null || _auctionView$auction$ === void 0 ? void 0 : _auctionView$auction$.toNumber()) || 0 : 0;
  const eligibleForOpenEdition = eligibleForParticipationPrizeGivenWinningIndex(winnerIndex, auctionView, auctionView.myBidderMetadata, auctionView.myBidRedemption);
  const auctionExtended = useAuctionExtended(auctionView);
  const eligibleForAnything = winnerIndex !== null || eligibleForOpenEdition;
  const gapTime = (((_auctionView$auction$2 = auctionView.auction.info.auctionGap) === null || _auctionView$auction$2 === void 0 ? void 0 : _auctionView$auction$2.toNumber()) || 0) / 60;
  const gapTick = auctionExtended ? auctionExtended.info.gapTickSizePercentage : 0;
  const tickSize = auctionExtended ? auctionExtended.info.tickSize : 0;
  const tickSizeInvalid = !!(tickSize && value && value * web3_js_.LAMPORTS_PER_SOL % tickSize.toNumber() != 0);
  const gapBidInvalid = useGapTickCheck(value, gapTick, gapTime, auctionView);
  const isAuctionManagerAuthorityNotWalletOwner = auctionView.auctionManager.authority !== (wallet === null || wallet === void 0 ? void 0 : (_wallet$publicKey = wallet.publicKey) === null || _wallet$publicKey === void 0 ? void 0 : _wallet$publicKey.toBase58());
  const isAuctionNotStarted = auctionView.auction.info.state === lib.AuctionState.Created;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "auction-container",
    style: style,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(AuctionNumbers, {
        auctionView: auctionView
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), showRedemptionIssue && /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "There was an issue redeeming or refunding your bid. Please try again."
      }), !hideDefaultAction && wallet.connected && auctionView.auction.info.ended() && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        className: "action-btn",
        disabled: !myPayingAccount || !auctionView.myBidderMetadata && isAuctionManagerAuthorityNotWalletOwner || loading || !!auctionView.items.find(i => i.find(it => !it.metadata)),
        onClick: async () => {
          var _wallet$publicKey2;

          setLoading(true);
          setShowRedemptionIssue(false);

          if ((wallet === null || wallet === void 0 ? void 0 : (_wallet$publicKey2 = wallet.publicKey) === null || _wallet$publicKey2 === void 0 ? void 0 : _wallet$publicKey2.toBase58()) === auctionView.auctionManager.authority) {
            const totalCost = await calculateTotalCostOfRedeemingOtherPeoplesBids(connection, auctionView, bids, bidRedemptions);
            setPrintingCost(totalCost);
            setShowWarningModal(true);
          }

          try {
            if (eligibleForAnything) {
              await sendRedeemBid(connection, wallet, myPayingAccount.pubkey, auctionView, accountByMint, prizeTrackingTickets, bidRedemptions, bids).then(() => setShowRedeemedBidModal(true));
            } else {
              await sendCancelBid(connection, wallet, myPayingAccount.pubkey, auctionView, accountByMint, bids, bidRedemptions, prizeTrackingTickets);
            }
          } catch (e) {
            console.error(e);
            setShowRedemptionIssue(true);
          }

          setLoading(false);
        },
        style: {
          marginTop: 20
        },
        children: loading || auctionView.items.find(i => i.find(it => !it.metadata)) || !myPayingAccount ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {}) : eligibleForAnything ? `Redeem bid` : `${wallet !== null && wallet !== void 0 && wallet.publicKey && auctionView.auctionManager.authority === wallet.publicKey.toBase58() ? 'Reclaim Items' : 'Refund bid'}`
      }), !hideDefaultAction && wallet.connected && !auctionView.auction.info.ended() && (isAuctionNotStarted && !isAuctionManagerAuthorityNotWalletOwner ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        className: "action-btn",
        disabled: loading,
        onClick: async () => {
          setLoading(true);

          try {
            await startAuctionManually(connection, wallet, auctionView);
          } catch (e) {
            console.error(e);
          }

          setLoading(false);
        },
        style: {
          marginTop: 20
        },
        children: loading ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {}) : 'Start auction'
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        className: "action-btn",
        disabled: loading,
        onClick: () => setShowBidModal(true),
        style: {
          marginTop: 20
        },
        children: loading ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {}) : 'Place bid'
      })), !hideDefaultAction && !wallet.connected && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        className: "action-btn",
        onClick: connect,
        style: {
          marginTop: 20
        },
        children: "Connect wallet to place bid"
      }), action]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(lib.MetaplexOverlay, {
      visible: showBidPlaced,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Confetti, {}), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "title",
        style: {
          fontSize: '3rem',
          marginBottom: 20
        },
        children: "Nice bid!"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        style: {
          color: 'white',
          textAlign: 'center',
          fontSize: '2rem'
        },
        children: ["Your bid of \u25CE ", (0,lib.formatTokenAmount)(lastBid === null || lastBid === void 0 ? void 0 : lastBid.amount, mintInfo), " was successful"]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        onClick: () => setShowBidPlaced(false),
        className: "overlay-btn",
        children: "Got it"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(lib.MetaplexOverlay, {
      visible: showRedeemedBidModal,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Confetti, {}), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "title",
        style: {
          fontSize: '3rem',
          marginBottom: 20
        },
        children: "Congratulations"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        style: {
          color: 'white',
          textAlign: 'center',
          fontSize: '2rem'
        },
        children: ["Your bid has been redeemed please view your NFTs in", ' ', /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
          to: "/artworks",
          children: "My Items"
        }), "."]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        onClick: () => setShowRedeemedBidModal(false),
        className: "overlay-btn",
        children: "Got it"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(lib.MetaplexModal, {
      visible: showBidModal,
      onCancel: () => setShowBidModal(false),
      bodyStyle: {
        alignItems: 'start'
      },
      afterClose: () => modalHistory.replace('/placebid'),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_router_dom_.MemoryRouter, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Redirect, {
          to: "/placebid"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
          exact: true,
          path: "/placebid",
          render: ({
            history
          }) => {
            setModalHistory(history);

            const placeBid = async () => {
              setLoading(true);

              if (myPayingAccount && value) {
                const bid = await sendPlaceBid(connection, wallet, myPayingAccount.pubkey, auctionView, accountByMint, value);
                setLastBid(bid);
                setShowBidModal(false);
                setShowBidPlaced(true);
                setLoading(false);
              }
            };

            return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "modal-title",
                children: "Place a bid"
              }), !!gapTime && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "info-content",
                style: {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem'
                },
                children: ["Bids placed in the last ", gapTime, " minutes will extend bidding for another ", gapTime, " minutes beyond the point in time that bid was made.", ' ', gapTick && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  children: ["Additionally, once the official auction end time has passed, only bids ", gapTick, "% larger than an existing bid will be accepted."]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(AuctionNumbers, {
                auctionView: auctionView
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), tickSizeInvalid && tickSize && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  color: 'red'
                },
                children: ["Tick size is \u25CE", tickSize.toNumber() / web3_js_.LAMPORTS_PER_SOL, "."]
              }), gapBidInvalid && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  color: 'red'
                },
                children: ["Your bid needs to be at least ", gapTick, "% larger than an existing bid during gap periods to be eligible."]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  width: '100%',
                  background: '#242424',
                  borderRadius: 14,
                  color: 'rgba(0, 0, 0, 0.5)'
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.InputNumber, {
                  autoFocus: true,
                  className: "input",
                  value: value,
                  style: {
                    width: '100%',
                    background: '#393939',
                    borderRadius: 16
                  },
                  onChange: setValue,
                  precision: 4,
                  formatter: value => value ? `◎ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '',
                  placeholder: "Amount in SOL"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  style: {
                    display: 'inline-block',
                    margin: '5px 20px',
                    fontWeight: 700
                  },
                  children: ["\u25CE ", (0,lib.formatAmount)(balance.balance, 2), ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
                    style: {
                      color: '#717171'
                    },
                    children: "available"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
                  to: "/addfunds",
                  style: {
                    float: 'right',
                    margin: '5px 20px',
                    color: '#5870EE'
                  },
                  children: "Add funds"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                type: "primary",
                size: "large",
                className: "action-btn",
                onClick: placeBid,
                disabled: tickSizeInvalid || gapBidInvalid || !myPayingAccount || value === undefined || value * web3_js_.LAMPORTS_PER_SOL < priceFloor || loading || !accountByMint.get(QUOTE_MINT.toBase58()),
                children: loading || !accountByMint.get(QUOTE_MINT.toBase58()) ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {}) : 'Place bid'
              })]
            });
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
          exact: true,
          path: "/addfunds",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              maxWidth: '100%'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Add funds"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              style: {
                color: 'white'
              },
              children: ["We partner with ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: "FTX"
              }), " to make it simple to start purchasing digital collectibles."]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                width: '100%',
                background: '#242424',
                borderRadius: 12,
                marginBottom: 10,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                justifyContent: 'space-between',
                fontWeight: 700
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  color: 'rgba(255, 255, 255, 0.5)'
                },
                children: "Balance"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [(0,lib.formatAmount)(balance.balance, 2), "\xA0\xA0", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    borderRadius: '50%',
                    background: 'black',
                    display: 'inline-block',
                    padding: '1px 4px 4px 4px',
                    lineHeight: 1
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/sol.svg",
                    width: "10"
                  })
                }), ' ', "SOL"]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "If you have not used FTX Pay before, it may take a few moments to get set up."
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
              onClick: () => modalHistory.push('/placebid'),
              style: {
                background: '#454545',
                borderRadius: 14,
                width: '30%',
                padding: 10,
                height: 'auto'
              },
              children: "Back"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
              onClick: () => {
                var _wallet$publicKey3;

                window.open(`https://ftx.com/pay/request?coin=SOL&address=${(_wallet$publicKey3 = wallet.publicKey) === null || _wallet$publicKey3 === void 0 ? void 0 : _wallet$publicKey3.toBase58()}&tag=&wallet=sol&memoIsRequired=false`, '_blank', 'resizable,width=680,height=860');
              },
              style: {
                background: 'black',
                borderRadius: 14,
                width: '68%',
                marginLeft: '2%',
                padding: 10,
                height: 'auto',
                borderColor: 'black'
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: 'flex',
                  placeContent: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  fontSize: 16
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    marginRight: 5
                  },
                  children: "Sign with"
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/ftxpay.png",
                  width: "80"
                })]
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(lib.MetaplexModal, {
      visible: showWarningModal,
      onCancel: () => setShowWarningModal(false),
      bodyStyle: {
        alignItems: 'start'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        style: {
          color: 'white'
        },
        children: ["Warning: There may be some items in this auction that still are required by the auction for printing bidders' limited or open edition NFTs. If you wish to withdraw them, you are agreeing to foot the cost of up to an estimated \u25CE", /*#__PURE__*/jsx_runtime_.jsx("b", {
          children: (printingCost || 0) / web3_js_.LAMPORTS_PER_SOL
        }), ' ', "plus transaction fees to redeem their bids for them right now."]
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/PreSaleBanner/index.tsx










const PreSaleBanner_PreSaleBanner = ({
  auction
}) => {
  const {
    isLoading
  } = useMeta();
  const id = auction === null || auction === void 0 ? void 0 : auction.thumbnail.metadata.pubkey;
  const art = useArt();

  if (isLoading) {
    return /*#__PURE__*/_jsx(Skeleton, {});
  }

  return /*#__PURE__*/_jsxs(Row, {
    className: "presale",
    children: [/*#__PURE__*/_jsx(Col, {
      md: 12,
      className: "explore",
      children: /*#__PURE__*/_jsx(ArtContent, {
        pubkey: id,
        className: "artwork-image",
        allowMeshRender: true
      })
    }), /*#__PURE__*/_jsxs(Col, {
      md: 12,
      className: "presale-info",
      children: [/*#__PURE__*/_jsx("h2", {
        className: "art-title",
        children: art.title
      }), auction && /*#__PURE__*/_jsx(AuctionCard, {
        auctionView: auction,
        style: {
          background: 'transparent',
          width: '100%',
          padding: 0,
          margin: 0
        },
        hideDefaultAction: true,
        action: /*#__PURE__*/_jsx(_Fragment, {
          children: /*#__PURE__*/_jsx(Link, {
            to: `/auction/${auction.auction.pubkey}`,
            children: /*#__PURE__*/_jsx(Button, {
              type: "primary",
              size: "large",
              className: "action-btn",
              style: {
                maxWidth: 290
              },
              children: "Go to auction"
            })
          })
        })
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/views/home/auctionList.tsx














const {
  TabPane
} = external_antd_.Tabs;
const {
  Content: auctionList_Content
} = external_antd_.Layout;
let LiveAuctionViewState;

(function (LiveAuctionViewState) {
  LiveAuctionViewState["All"] = "0";
  LiveAuctionViewState["Participated"] = "1";
  LiveAuctionViewState["Ended"] = "2";
  LiveAuctionViewState["Resale"] = "3";
})(LiveAuctionViewState || (LiveAuctionViewState = {}));

const auctionList_AuctionListView = () => {
  const auctions = useAuctions(AuctionViewState.Live);
  const auctionsEnded = useAuctions(AuctionViewState.Ended);
  const {
    0: activeKey,
    1: setActiveKey
  } = useState(LiveAuctionViewState.All);
  const {
    isLoading
  } = useMeta();
  const {
    connected,
    publicKey
  } = useWallet();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }; // Check if the auction is primary sale or not

  const checkPrimarySale = auc => {
    var flag = 0;
    auc.items.forEach(i => {
      i.forEach(j => {
        if (j.metadata.info.primarySaleHappened == true) {
          flag = 1;
          return true;
        }
      });
      if (flag == 1) return true;
    });
    if (flag == 1) return true;else return false;
  };

  const resaleAuctions = auctions.sort((a, b) => {
    var _a$auction$info$ended;

    return ((_a$auction$info$ended = a.auction.info.endedAt) === null || _a$auction$info$ended === void 0 ? void 0 : _a$auction$info$ended.sub(b.auction.info.endedAt || new BN(0)).toNumber()) || 0;
  }).filter(m => checkPrimarySale(m) == true); // Removed resales from live auctions

  const liveAuctions = auctions.sort((a, b) => {
    var _a$auction$info$ended2;

    return ((_a$auction$info$ended2 = a.auction.info.endedAt) === null || _a$auction$info$ended2 === void 0 ? void 0 : _a$auction$info$ended2.sub(b.auction.info.endedAt || new BN(0)).toNumber()) || 0;
  }).filter(a => !resaleAuctions.includes(a));
  let items = liveAuctions;

  switch (activeKey) {
    case LiveAuctionViewState.All:
      items = liveAuctions;
      break;

    case LiveAuctionViewState.Participated:
      items = liveAuctions.concat(auctionsEnded).filter((m, idx) => {
        var _m$myBidderMetadata;

        return ((_m$myBidderMetadata = m.myBidderMetadata) === null || _m$myBidderMetadata === void 0 ? void 0 : _m$myBidderMetadata.info.bidderPubkey) == (publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58());
      });
      break;

    case LiveAuctionViewState.Resale:
      items = resaleAuctions;
      break;

    case LiveAuctionViewState.Ended:
      items = auctionsEnded;
      break;
  }

  const heroAuction = useMemo(() => {
    var _auctions$filter;

    return (_auctions$filter = auctions.filter(a => {
      // const now = moment().unix();
      return !a.auction.info.ended() && !resaleAuctions.includes(a); // filter out auction for banner that are further than 30 days in the future
      // return Math.floor(delta / 86400) <= 30;
    })) === null || _auctions$filter === void 0 ? void 0 : _auctions$filter[0];
  }, [auctions]);

  const liveAuctionsView = /*#__PURE__*/_jsx(Masonry, {
    breakpointCols: breakpointColumnsObj,
    className: "my-masonry-grid",
    columnClassName: "my-masonry-grid_column",
    children: !isLoading ? items.map((m, idx) => {
      if (m === heroAuction) {
        return;
      }

      const id = m.auction.pubkey;
      return /*#__PURE__*/_jsx(Link, {
        to: `/auction/${id}`,
        children: /*#__PURE__*/_jsx(AuctionRenderCard, {
          auctionView: m
        }, id)
      }, idx);
    }) : [...Array(10)].map((_, idx) => /*#__PURE__*/_jsx(CardLoader, {}, idx))
  });

  const endedAuctions = /*#__PURE__*/_jsx(Masonry, {
    breakpointCols: breakpointColumnsObj,
    className: "my-masonry-grid",
    columnClassName: "my-masonry-grid_column",
    children: !isLoading ? auctionsEnded.map((m, idx) => {
      if (m === heroAuction) {
        return;
      }

      const id = m.auction.pubkey;
      return /*#__PURE__*/_jsx(Link, {
        to: `/auction/${id}`,
        children: /*#__PURE__*/_jsx(AuctionRenderCard, {
          auctionView: m
        }, id)
      }, idx);
    }) : [...Array(10)].map((_, idx) => /*#__PURE__*/_jsx(CardLoader, {}, idx))
  });

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(PreSaleBanner, {
      auction: heroAuction
    }), /*#__PURE__*/_jsx(Layout, {
      children: /*#__PURE__*/_jsx(auctionList_Content, {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        },
        children: /*#__PURE__*/_jsx(Col, {
          style: {
            width: '100%',
            marginTop: 10
          },
          children: liveAuctions.length >= 0 && /*#__PURE__*/_jsx(Row, {
            children: /*#__PURE__*/_jsxs(Tabs, {
              activeKey: activeKey,
              onTabClick: key => setActiveKey(key),
              children: [/*#__PURE__*/_jsx(TabPane, {
                tab: /*#__PURE__*/_jsx("span", {
                  className: "tab-title",
                  children: "Live Auctions"
                }),
                children: liveAuctionsView
              }, LiveAuctionViewState.All), auctionsEnded.length > 0 && /*#__PURE__*/_jsx(TabPane, {
                tab: /*#__PURE__*/_jsx("span", {
                  className: "tab-title",
                  children: "Secondary Marketplace"
                }),
                children: liveAuctionsView
              }, LiveAuctionViewState.Resale), auctionsEnded.length > 0 && /*#__PURE__*/_jsx(TabPane, {
                tab: /*#__PURE__*/_jsx("span", {
                  className: "tab-title",
                  children: "Ended Auctions"
                }),
                children: endedAuctions
              }, LiveAuctionViewState.Ended), connected && /*#__PURE__*/_jsx(TabPane, {
                tab: /*#__PURE__*/_jsx("span", {
                  className: "tab-title",
                  children: "Participated"
                }),
                children: liveAuctionsView
              }, LiveAuctionViewState.Participated)]
            })
          })
        })
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/models/metaplex/setStore.ts




async function setStore(isPublic, admin, payer, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const value = new SetStoreArgs({
    public: isPublic
  });
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(admin),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.token,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.auction),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.system,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/setWhitelistedCreator.ts




async function setWhitelistedCreator(creator, activated, admin, payer, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const store = PROGRAM_IDS.store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const whitelistedCreatorPDAKey = await metaplex_getWhitelistedCreator(creator);
  const value = new SetWhitelistedCreatorArgs({
    activated
  });
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(whitelistedCreatorPDAKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(admin),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(creator),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: PROGRAM_IDS.system,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/actions/saveAdmin.ts



 // TODO if this becomes very slow move to batching txns like we do with settle.ts
// but given how little this should be used keep it simple

async function saveAdmin_saveAdmin(connection, wallet, isPublic, whitelistedCreators) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const signers = [];
  const instructions = [];
  const storeSigners = [];
  const storeInstructions = [];
  await setStore(isPublic, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), storeInstructions);
  signers.push(storeSigners);
  instructions.push(storeInstructions);

  for (let i = 0; i < whitelistedCreators.length; i++) {
    const wc = whitelistedCreators[i];
    const wcSigners = [];
    const wcInstructions = [];
    await setWhitelistedCreator(wc.address, wc.activated, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), wcInstructions);
    signers.push(wcSigners);
    instructions.push(wcInstructions);
  }

  instructions.length === 1 ? await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions[0], signers[0], 'single') : await (0,lib.sendTransactions)(connection, wallet, instructions, signers, lib.SequenceType.StopOnFailure, 'single');
}
;// CONCATENATED MODULE: ./src/components/SetupVariables/index.tsx





const SetupVariables_SetupVariables = ({
  storeAddress,
  storeOwnerAddress
}) => {
  const ref = (0,external_react_.useRef)(null);
  const copySettings = (0,external_react_.useCallback)(() => {
    var _ref$current;

    const text = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.innerText;

    if (text) {
      navigator.clipboard.writeText(text);
    }
  }, []);

  if (!storeAddress && !storeOwnerAddress) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, {
    title: "Store configuration",
    extra: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
      type: "dashed",
      onClick: copySettings,
      icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.CopyOutlined, {})
    }),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      ref: ref,
      children: [storeOwnerAddress && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["STORE_OWNER_ADDRESS=", storeOwnerAddress]
      }), storeAddress && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["STORE_ADDRESS=", storeAddress]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/views/home/setup.tsx












const setup_SetupView = () => {
  var _wallet$publicKey;

  const {
    0: isInitalizingStore,
    1: setIsInitalizingStore
  } = useState(false);
  const connection = useConnection();
  const {
    store
  } = useMeta();
  const {
    setStoreForOwner
  } = useStore();
  const history = useHistory();
  const wallet = useWallet();
  const {
    setVisible
  } = useWalletModal();
  const connect = useCallback(() => wallet.wallet ? wallet.connect().catch() : setVisible(true), [wallet.wallet, wallet.connect, setVisible]);
  const {
    0: storeAddress,
    1: setStoreAddress
  } = useState();
  useEffect(() => {
    const getStore = async () => {
      if (wallet.publicKey) {
        const store = await setStoreForOwner(wallet.publicKey.toBase58());
        setStoreAddress(store);
      } else {
        setStoreAddress(undefined);
      }
    };

    getStore();
  }, [wallet.publicKey]);

  const initializeStore = async () => {
    if (!wallet.publicKey) {
      return;
    }

    setIsInitalizingStore(true);
    await saveAdmin(connection, wallet, false, [new WhitelistedCreator({
      address: wallet.publicKey.toBase58(),
      activated: true
    })]); // TODO: process errors

    await setStoreForOwner(undefined);
    await setStoreForOwner(wallet.publicKey.toBase58());
    history.push('/admin');
  };

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [!wallet.connected && /*#__PURE__*/_jsxs("p", {
      children: [/*#__PURE__*/_jsx(Button, {
        type: "primary",
        className: "app-btn",
        onClick: connect,
        children: "Connect"
      }), ' ', "to configure store."]
    }), wallet.connected && !store && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("p", {
        children: "Store is not initialized yet"
      }), /*#__PURE__*/_jsx("p", {
        children: "There must be some \u25CE SOL in the wallet before initialization."
      }), /*#__PURE__*/_jsx("p", {
        children: "After initialization, you will be able to manage the list of creators"
      }), /*#__PURE__*/_jsx("p", {
        children: /*#__PURE__*/_jsx(Button, {
          className: "app-btn",
          type: "primary",
          loading: isInitalizingStore,
          onClick: initializeStore,
          children: "Init Store"
        })
      })]
    }), wallet.connected && store && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("p", {
        children: ["To finish initialization please copy config below into", ' ', /*#__PURE__*/_jsx("b", {
          children: "packages/web/.env"
        }), " and restart yarn or redeploy"]
      }), /*#__PURE__*/_jsx(SetupVariables, {
        storeAddress: storeAddress,
        storeOwnerAddress: (_wallet$publicKey = wallet.publicKey) === null || _wallet$publicKey === void 0 ? void 0 : _wallet$publicKey.toBase58()
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/views/home/index.tsx







const HomeView = () => {
  const {
    isLoading,
    store
  } = useMeta();
  const {
    isConfigured
  } = useStore();
  const showAuctions = store && isConfigured || isLoading;
  return /*#__PURE__*/_jsx(Layout, {
    style: {
      margin: 0,
      marginTop: 30,
      alignItems: 'center'
    },
    children: showAuctions ? /*#__PURE__*/_jsx(AuctionListView, {}) : /*#__PURE__*/_jsx(SetupView, {})
  });
};
;// CONCATENATED MODULE: ./src/components/MetaAvatar/index.tsx





const MetaAvatarItem = props => {
  const {
    creator,
    size,
    alt
  } = props;
  const {
    0: noImage,
    1: setNoImage
  } = (0,external_react_.useState)(false);
  const image = creator.image || '';
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
    alt: alt,
    size: size,
    src: noImage ? /*#__PURE__*/jsx_runtime_.jsx(lib.Identicon, {
      alt: alt,
      address: creator.address,
      style: {
        width: size
      }
    }) : image,
    onError: () => {
      setNoImage(true);
      return false;
    }
  });
};

const MetaAvatar = props => {
  const {
    creators,
    showMultiple
  } = props;
  let size = props.size || 32;

  if (!creators || creators.length === 0) {
    return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
      size: size,
      src: false
    });
  }

  let controls = (creators || []).map(creator => /*#__PURE__*/jsx_runtime_.jsx(MetaAvatarItem, {
    creator: creator,
    alt: creator.name,
    size: size
  }));

  if (!showMultiple) {
    return controls[0];
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar.Group, {
    children: controls || null
  });
};
;// CONCATENATED MODULE: ./src/components/ViewOn/index.tsx







const ViewOn = ({
  id
}) => {
  const {
    env
  } = (0,lib.useConnectionConfig)();
  const art = useArt_useArt(id);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
        children: "View on"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: 'flex'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          className: "tag",
          onClick: () => window.open(art.uri || '', '_blank'),
          children: "Arweave"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          className: "tag",
          onClick: () => window.open(`https://explorer.solana.com/account/${(art === null || art === void 0 ? void 0 : art.mint) || ''}${env.indexOf('main') >= 0 ? '' : `?cluster=${env}`}`, '_blank'),
          children: "Solana"
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(223);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);
;// CONCATENATED MODULE: ./src/actions/setupMintEditionIntoWalletInstructions.ts



async function setupMintEditionIntoWalletInstructions(art, wallet, connection, mintTokenAccount, edition, instructions, signers, mintDestination) {
  if (!art.mint) throw new Error('Art mint is not provided');

  if (typeof art.supply === 'undefined') {
    throw new Error('Art supply is not provided');
  }

  if (!wallet.publicKey) throw new Error('Wallet pubKey is not provided');

  if (!mintTokenAccount) {
    throw new Error('Art mint token account is not provided');
  }

  const walletPubKey = wallet.publicKey.toString();
  const {
    mint: tokenMint
  } = art;
  const {
    pubkey: mintTokenAccountPubKey
  } = mintTokenAccount;
  const mintTokenAccountOwner = mintTokenAccount.info.owner.toString();
  const mintRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span);
  const {
    mint: newMint
  } = await createMintAndAccountWithOne(wallet, mintDestination, mintRentExempt, instructions, signers);
  await (0,lib.mintNewEditionFromMasterEditionViaToken)(newMint, tokenMint, walletPubKey, walletPubKey, mintTokenAccountOwner, mintTokenAccountPubKey, instructions, walletPubKey, edition);
}
;// CONCATENATED MODULE: ./src/actions/mintEditionsIntoWallet.ts



// TODO: Refactor. Extract batching logic,
//  as the similar one is used in settle.ts and convertMasterEditions.ts
const MINT_TRANSACTION_SIZE = 5;
const mintEditionsIntoWallet_BATCH_SIZE = 10;
async function mintEditionsToWallet(art, wallet, connection, mintTokenAccount, editions = 1, mintDestination) {
  const signers = [];
  const instructions = [];
  let currSignerBatch = [];
  let currInstrBatch = [];
  let mintEditionIntoWalletSigners = [];
  let mintEditionIntoWalletInstructions = []; // TODO replace all this with payer account so user doesnt need to click approve several times.
  // Overall we have 10 parallel txns.
  // That's what this loop is building.

  for (let i = 0; i < editions; i++) {
    console.log('Minting', i);
    await setupMintEditionIntoWalletInstructions(art, wallet, connection, mintTokenAccount, new (external_bn_js_default())(art.supply + 1 + i), mintEditionIntoWalletInstructions, mintEditionIntoWalletSigners, mintDestination);

    if (mintEditionIntoWalletInstructions.length === MINT_TRANSACTION_SIZE) {
      currSignerBatch.push(mintEditionIntoWalletSigners);
      currInstrBatch.push(mintEditionIntoWalletInstructions);
      mintEditionIntoWalletSigners = [];
      mintEditionIntoWalletInstructions = [];
    }

    if (currInstrBatch.length === mintEditionsIntoWallet_BATCH_SIZE) {
      signers.push(currSignerBatch);
      instructions.push(currInstrBatch);
      currSignerBatch = [];
      currInstrBatch = [];
    }
  }

  if (mintEditionIntoWalletInstructions.length < MINT_TRANSACTION_SIZE && mintEditionIntoWalletInstructions.length > 0) {
    currSignerBatch.push(mintEditionIntoWalletSigners);
    currInstrBatch.push(mintEditionIntoWalletInstructions);
  }

  if (currInstrBatch.length <= mintEditionsIntoWallet_BATCH_SIZE && currInstrBatch.length > 0) {
    // add the last one on
    signers.push(currSignerBatch);
    instructions.push(currInstrBatch);
  }

  console.log('Instructions', instructions);

  for (let i = 0; i < instructions.length; i++) {
    const instructionBatch = instructions[i];
    const signerBatch = signers[i];
    console.log('Running batch', i);
    if (instructionBatch.length >= 2) // Pump em through!
      await (0,lib.sendTransactions)(connection, wallet, instructionBatch, signerBatch, lib.SequenceType.StopOnFailure, 'single');else await (0,lib.sendTransactionWithRetry)(connection, wallet, instructionBatch[0], signerBatch[0], 'single');
    console.log('Done');
  }
}
;// CONCATENATED MODULE: ./src/components/ArtMinting/index.tsx















const ArtMinting = ({
  id,
  onMint
}) => {
  var _wallet$publicKey;

  const wallet = (0,wallet_adapter_react_.useWallet)();
  const connection = (0,lib.useConnection)();
  const {
    accountByMint
  } = (0,lib.useUserAccounts)();
  const {
    0: showMintModal,
    1: setShowMintModal
  } = (0,external_react_.useState)(false);
  const {
    0: showCongrats,
    1: setShowCongrats
  } = (0,external_react_.useState)(false);
  const {
    0: mintingDestination,
    1: setMintingDestination
  } = (0,external_react_.useState)('');
  const {
    0: editions,
    1: setEditions
  } = (0,external_react_.useState)(1);
  const {
    0: totalCost,
    1: setTotalCost
  } = (0,external_react_.useState)(0);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const art = useArt_useArt(id);
  const walletPubKey = (wallet === null || wallet === void 0 ? void 0 : (_wallet$publicKey = wallet.publicKey) === null || _wallet$publicKey === void 0 ? void 0 : _wallet$publicKey.toString()) || '';
  const maxEditionsToMint = art.maxSupply - art.supply;
  const isArtMasterEdition = art.type === ArtType.Master;
  const artMintTokenAccount = accountByMint.get(art.mint);
  const isArtOwnedByUser = (accountByMint.has(art.mint) && (artMintTokenAccount === null || artMintTokenAccount === void 0 ? void 0 : artMintTokenAccount.info.amount.toNumber()) || 0) > 0;
  const isMasterEditionV1 = artMintTokenAccount ? (0,lib.decodeMasterEdition)(artMintTokenAccount.account.data).key === lib.MetadataKey.MasterEditionV1 : false;
  const renderMintEdition = isArtMasterEdition && isArtOwnedByUser && !isMasterEditionV1 && maxEditionsToMint !== 0;
  const mintingDestinationErr = (0,external_react_.useMemo)(() => {
    if (!mintingDestination) return 'Required';

    try {
      new web3_js_.PublicKey(mintingDestination);
      return '';
    } catch (e) {
      return 'Invalid address format';
    }
  }, [mintingDestination]);
  const isMintingDisabled = isLoading || editions < 1 || Boolean(mintingDestinationErr);
  const debouncedEditionsChangeHandler = (0,external_react_.useCallback)(debounce_default()(val => {
    setEditions(val < 1 ? 1 : val);
  }, 300), []);
  (0,external_react_.useEffect)(() => {
    if (editions < 1) return;

    (async () => {
      const mintRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span);
      const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
      const metadataRentExempt = await connection.getMinimumBalanceForRentExemption(lib.MAX_METADATA_LEN);
      const editionRentExempt = await connection.getMinimumBalanceForRentExemption(lib.MAX_EDITION_LEN);
      const cost = (mintRentExempt + accountRentExempt + metadataRentExempt + editionRentExempt) * editions / web3_js_.LAMPORTS_PER_SOL;
      setTotalCost(cost);
    })();
  }, [connection, editions]);
  (0,external_react_.useEffect)(() => {
    if (!walletPubKey) return;
    setMintingDestination(walletPubKey);
  }, [walletPubKey]);
  (0,external_react_.useEffect)(() => {
    return debouncedEditionsChangeHandler.cancel();
  }, []);

  const onSuccessfulMint = () => {
    setShowMintModal(false);
    setMintingDestination(walletPubKey);
    setEditions(1);
    setShowCongrats(true);
  };

  const mint = async () => {
    try {
      setIsLoading(true);
      await mintEditionsToWallet(art, wallet, connection, artMintTokenAccount, editions, mintingDestination);
      onSuccessfulMint();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: renderMintEdition && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        className: "action-btn",
        style: {
          marginTop: 20
        },
        onClick: () => setShowMintModal(true),
        children: "Mint"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Modal, {
        visible: showMintModal,
        centered: true,
        okText: "Mint",
        closable: !isLoading,
        okButtonProps: {
          disabled: isMintingDisabled
        },
        cancelButtonProps: {
          disabled: isLoading
        },
        onOk: mint,
        onCancel: () => setShowMintModal(false),
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          style: {
            width: '100%',
            flexDirection: 'column',
            paddingTop: 30,
            marginBottom: 4
          },
          label: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Mint to"
          }),
          labelAlign: "left",
          colon: false,
          validateStatus: mintingDestinationErr ? 'error' : 'success',
          help: mintingDestinationErr,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            placeholder: "Address to mint edition to",
            value: mintingDestination,
            onChange: e => {
              setMintingDestination(e.target.value);
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          style: {
            width: '100%',
            flexDirection: 'column',
            paddingTop: 30
          },
          label: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "Number of editions to mint"
          }),
          labelAlign: "left",
          colon: false,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.InputNumber, {
            type: "number",
            placeholder: "1",
            style: {
              width: '100%'
            },
            min: 1,
            max: maxEditionsToMint,
            value: editions,
            precision: 0,
            onChange: debouncedEditionsChangeHandler
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: ["Total cost: ", `◎${totalCost}`]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(lib.MetaplexOverlay, {
        visible: showCongrats,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Confetti, {}), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "title",
          style: {
            fontSize: '3rem',
            marginBottom: 20
          },
          children: "Congratulations"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          style: {
            color: 'white',
            textAlign: 'center',
            fontSize: '2rem'
          },
          children: ["New editions have been minted please view your NFTs in", ' ', /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
            to: "/artworks",
            children: "My Items"
          }), "."]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          onClick: async () => {
            await onMint();
            setShowCongrats(false);
          },
          className: "overlay-btn",
          children: "Got it"
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/views/art/index.tsx















const {
  Content: art_Content
} = external_antd_.Layout;
const ArtView = () => {
  var _wallet$publicKey, _art$creators, _art$creators2;

  const {
    id
  } = (0,external_react_router_dom_.useParams)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const {
    0: remountArtMinting,
    1: setRemountArtMinting
  } = (0,external_react_.useState)(0);
  const connection = (0,lib.useConnection)();
  const art = useArt_useArt(id);
  let badge = '';

  if (art.type === ArtType.NFT) {
    badge = 'Unique';
  } else if (art.type === ArtType.Master) {
    badge = 'NFT 0';
  } else if (art.type === ArtType.Print) {
    badge = `${art.edition} of ${art.supply}`;
  }

  const {
    ref,
    data
  } = useExtendedArt(id); // const { userAccounts } = useUserAccounts();
  // const accountByMint = userAccounts.reduce((prev, acc) => {
  //   prev.set(acc.info.mint.toBase58(), acc);
  //   return prev;
  // }, new Map<string, TokenAccount>());

  const description = data === null || data === void 0 ? void 0 : data.description;
  const attributes = data === null || data === void 0 ? void 0 : data.attributes;
  const pubkey = (wallet === null || wallet === void 0 ? void 0 : (_wallet$publicKey = wallet.publicKey) === null || _wallet$publicKey === void 0 ? void 0 : _wallet$publicKey.toBase58()) || '';

  const tag = /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "info-header",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Tag, {
      color: "blue",
      children: "UNVERIFIED"
    })
  });

  const unverified = /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [tag, /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        fontSize: 12
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("i", {
        children: ["This artwork is still missing verification from", ' ', (_art$creators = art.creators) === null || _art$creators === void 0 ? void 0 : _art$creators.filter(c => !c.verified).length, " contributors before it can be considered verified and sellable on the platform."]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
  });

  return /*#__PURE__*/jsx_runtime_.jsx(art_Content, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        ref: ref,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          xs: {
            span: 24
          },
          md: {
            span: 12
          },
          style: {
            padding: '30px'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(ArtContent_ArtContent, {
            style: {
              width: 300
            },
            height: 300,
            width: 300,
            className: "artwork-image",
            pubkey: id,
            active: true,
            allowMeshRender: true
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          xs: {
            span: 24
          },
          md: {
            span: 12
          },
          style: {
            textAlign: 'left',
            fontSize: '1.4rem'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                fontWeight: 700,
                fontSize: '4rem'
              },
              children: art.title || /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
                paragraph: {
                  rows: 0
                }
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
              span: 6,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Royalties"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "royalties",
                children: [((art.seller_fee_basis_points || 0) / 100).toFixed(2), "%"]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              span: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx(ViewOn, {
                id: id
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                style: {
                  marginTop: 5
                },
                children: "Created By"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "creators",
                children: (art.creators || []).map((creator, idx) => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 5
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx(MetaAvatar, {
                      creators: [creator],
                      size: 64
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "creator-name",
                        children: creator.name || (0,lib.shortenAddress)(creator.address || '')
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        style: {
                          marginLeft: 10
                        },
                        children: !creator.verified && (creator.address === pubkey ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                          onClick: async () => {
                            try {
                              await sendSignMetadata(connection, wallet, id);
                            } catch (e) {
                              console.error(e);
                              return false;
                            }

                            return true;
                          },
                          children: "Approve"
                        }) : tag)
                      })]
                    })]
                  }, idx);
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                style: {
                  marginTop: 5
                },
                children: "Edition"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "art-edition",
                children: badge
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ArtMinting, {
            id: id,
            onMint: async () => await setRemountArtMinting(prev => prev + 1)
          }, remountArtMinting)]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          span: "12",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), ((_art$creators2 = art.creators) === null || _art$creators2 === void 0 ? void 0 : _art$creators2.find(c => !c.verified)) && unverified, /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-header",
            children: "ABOUT THE CREATION"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-content",
            children: description
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          span: "12",
          children: attributes && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "info-header",
              children: "Attributes"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List, {
              size: "large",
              grid: {
                column: 4
              },
              children: attributes.map(attribute => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List.Item, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, {
                  title: attribute.trait_type,
                  children: attribute.value
                })
              }))
            })]
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/ArtCard/index.tsx




function ArtCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ArtCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ArtCard_ownKeys(Object(source), true).forEach(function (key) { ArtCard_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ArtCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArtCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const {
  Meta: ArtCard_Meta
} = external_antd_.Card;
const ArtCard = props => {
  var _art$creators;

  let {
    className,
    small,
    category,
    image,
    animationURL,
    name,
    preview,
    creators,
    description,
    close,
    pubkey,
    height,
    width
  } = props,
      rest = _objectWithoutProperties(props, ["className", "small", "category", "image", "animationURL", "name", "preview", "creators", "description", "close", "pubkey", "height", "width"]);

  const art = useArt_useArt(pubkey);
  creators = (art === null || art === void 0 ? void 0 : art.creators) || creators || [];
  name = (art === null || art === void 0 ? void 0 : art.title) || name || ' ';
  let badge = '';

  if (art.type === ArtType.NFT) {
    badge = 'Unique';
  } else if (art.type === ArtType.Master) {
    badge = 'NFT 0';
  } else if (art.type === ArtType.Print) {
    badge = `${art.edition} of ${art.supply}`;
  }

  const card = /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, ArtCard_objectSpread(ArtCard_objectSpread({
    hoverable: true,
    className: `art-card ${small ? 'small' : ''} ${className !== null && className !== void 0 ? className : ''}`,
    cover: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [close && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        className: "card-close-button",
        shape: "circle",
        onClick: e => {
          e.stopPropagation();
          e.preventDefault();
          close && close();
        },
        children: "X"
      }), /*#__PURE__*/jsx_runtime_.jsx(ArtContent_ArtContent, {
        pubkey: pubkey,
        uri: image,
        animationURL: animationURL,
        category: category,
        preview: preview,
        height: height,
        width: width
      })]
    })
  }, rest), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ArtCard_Meta, {
      title: `${name}`,
      description: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(MetaAvatar, {
          creators: creators,
          size: 32
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "edition-badge",
          children: badge
        })]
      })
    })
  }));

  return (_art$creators = art.creators) !== null && _art$creators !== void 0 && _art$creators.find(c => !c.verified) ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Badge.Ribbon, {
    text: "Unverified",
    children: card
  }) : card;
};
;// CONCATENATED MODULE: ./src/components/UserSearch/index.tsx


function UserSearch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserSearch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserSearch_ownKeys(Object(source), true).forEach(function (key) { UserSearch_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserSearch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserSearch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UserSearch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = UserSearch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function UserSearch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function DebounceSelect(_ref) {
  let {
    fetchOptions,
    debounceTimeout = 800
  } = _ref,
      props = UserSearch_objectWithoutProperties(_ref, ["fetchOptions", "debounceTimeout"]);

  const {
    0: fetching,
    1: setFetching
  } = (0,external_react_.useState)(false);
  const {
    0: options,
    1: setOptions
  } = (0,external_react_.useState)([]);
  const fetchRef = (0,external_react_.useRef)(0);
  const debounceFetcher = (0,external_react_.useMemo)(() => {
    const loadOptions = value => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce_default()(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, UserSearch_objectSpread(UserSearch_objectSpread({
    labelInValue: true,
    filterOption: false,
    onSearch: debounceFetcher,
    notFoundContent: fetching ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {
      size: "small"
    }) : null
  }, props), {}, {
    options: options
  }));
} // Usage of DebounceSelect


const UserSearch = props => {
  const {
    whitelistedCreatorsByCreator
  } = meta_useMeta();
  const [value, setValue] = external_react_default().useState([]);
  return /*#__PURE__*/jsx_runtime_.jsx(DebounceSelect, {
    className: "user-selector",
    mode: "multiple",
    size: "large",
    value: value,
    placeholder: "Select creator",
    fetchOptions: async search => {
      const items = Object.values(whitelistedCreatorsByCreator).filter(c => c.info.activated).map(a => ({
        label: a.info.name || (0,lib.shortenAddress)(a.info.address),
        value: a.info.address
      }));
      return items;
    },
    onChange: newValue => {
      props.setCreators(newValue);
      setValue(newValue);
    },
    style: {
      width: '100%'
    }
  });
};
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6417);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// CONCATENATED MODULE: ./src/utils/assets.ts
const LAMPORT_MULTIPLIER = 10 ** 9;
const WINSTON_MULTIPLIER = 10 ** 12;
const filterModalSolTokens = tokens => {
  return tokens;
};
async function getAssetCostToStore(files) {
  const totalBytes = files.reduce((sum, f) => sum += f.size, 0);
  console.log('Total bytes', totalBytes);
  const txnFeeInWinstons = parseInt(await (await fetch('https://arweave.net/price/0')).text());
  console.log('txn fee', txnFeeInWinstons);
  const byteCostInWinstons = parseInt(await (await fetch('https://arweave.net/price/' + totalBytes.toString())).text());
  console.log('byte cost', byteCostInWinstons);
  const totalArCost = (txnFeeInWinstons * files.length + byteCostInWinstons) / WINSTON_MULTIPLIER;
  console.log('total ar', totalArCost);
  let conversionRates = JSON.parse(localStorage.getItem('conversionRates') || '{}');

  if (!conversionRates || !conversionRates.expiry || conversionRates.expiry < Date.now()) {
    console.log('Calling conversion rate');
    conversionRates = {
      value: JSON.parse(await (await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana,arweave&vs_currencies=usd')).text()),
      expiry: Date.now() + 5 * 60 * 1000
    };

    if (conversionRates.value.solana) {
      try {
        localStorage.setItem('conversionRates', JSON.stringify(conversionRates));
      } catch {// ignore
      }
    }
  } // To figure out how many lamports are required, multiply ar byte cost by this number


  const arMultiplier = conversionRates.value.arweave.usd / conversionRates.value.solana.usd;
  console.log('Ar mult', arMultiplier); // We also always make a manifest file, which, though tiny, needs payment.

  return LAMPORT_MULTIPLIER * totalArCost * arMultiplier * 1.1;
}
;// CONCATENATED MODULE: ./src/utils/ids.ts
 // TODO: generate key ---

const AR_SOL_HOLDER_ID = new web3_js_.PublicKey('HvwC9QSAzvGXhhVrgPmauVwFWcYZhne3hVot9EbHuFTm');
;// CONCATENATED MODULE: ./src/actions/nft.tsx


function nft_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function nft_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { nft_ownKeys(Object(source), true).forEach(function (key) { nft_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { nft_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function nft_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const RESERVED_TXN_MANIFEST = 'manifest.json';
const mintNFT = async (connection, wallet, env, files, metadata, maxSupply) => {
  var _metadata$creators, _result$messages;

  if (!(wallet !== null && wallet !== void 0 && wallet.publicKey)) return;
  const metadataContent = {
    name: metadata.name,
    symbol: metadata.symbol,
    description: metadata.description,
    seller_fee_basis_points: metadata.sellerFeeBasisPoints,
    image: metadata.image,
    animation_url: metadata.animation_url,
    attributes: metadata.attributes,
    external_url: metadata.external_url,
    properties: nft_objectSpread(nft_objectSpread({}, metadata.properties), {}, {
      creators: (_metadata$creators = metadata.creators) === null || _metadata$creators === void 0 ? void 0 : _metadata$creators.map(creator => {
        return {
          address: creator.address,
          share: creator.share
        };
      })
    })
  };
  const realFiles = [...files, new File([JSON.stringify(metadataContent)], 'metadata.json')];
  const {
    instructions: pushInstructions,
    signers: pushSigners
  } = await prepPayForFilesTxn(wallet, realFiles, metadata);
  const TOKEN_PROGRAM_ID = (0,lib.programIds)().token; // Allocate memory for the account

  const mintRent = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span); // const accountRent = await connection.getMinimumBalanceForRentExemption(
  //   AccountLayout.span,
  // );
  // This owner is a temporary signer and owner of metadata we use to circumvent requesting signing
  // twice post Arweave. We store in an account (payer) and use it post-Arweave to update MD with new link
  // then give control back to the user.
  // const payer = new Account();

  const payerPublicKey = wallet.publicKey.toBase58();
  const instructions = [...pushInstructions];
  const signers = [...pushSigners]; // This is only temporarily owned by wallet...transferred to program by createMasterEdition below

  const mintKey = (0,lib.createMint)(instructions, wallet.publicKey, mintRent, 0, // Some weird bug with phantom where it's public key doesnt mesh with data encode wellff
  (0,lib.toPublicKey)(payerPublicKey), (0,lib.toPublicKey)(payerPublicKey), signers).toBase58();
  const recipientKey = (await (0,lib.findProgramAddress)([wallet.publicKey.toBuffer(), (0,lib.programIds)().token.toBuffer(), (0,lib.toPublicKey)(mintKey).toBuffer()], (0,lib.programIds)().associatedToken))[0];
  (0,lib.createAssociatedTokenAccountInstruction)(instructions, (0,lib.toPublicKey)(recipientKey), wallet.publicKey, wallet.publicKey, (0,lib.toPublicKey)(mintKey));
  const metadataAccount = await (0,lib.createMetadata)(new lib.Data({
    symbol: metadata.symbol,
    name: metadata.name,
    uri: ' '.repeat(64),
    // size of url for arweave
    sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
    creators: metadata.creators
  }), payerPublicKey, mintKey, payerPublicKey, instructions, wallet.publicKey.toBase58()); // TODO: enable when using payer account to avoid 2nd popup
  // const block = await connection.getRecentBlockhash('singleGossip');
  // instructions.push(
  //   SystemProgram.transfer({
  //     fromPubkey: wallet.publicKey,
  //     toPubkey: payerPublicKey,
  //     lamports: 0.5 * LAMPORTS_PER_SOL // block.feeCalculator.lamportsPerSignature * 3 + mintRent, // TODO
  //   }),
  // );

  const {
    txid
  } = await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions, signers);

  try {
    await connection.confirmTransaction(txid, 'max');
  } catch {// ignore
  } // Force wait for max confirmations
  // await connection.confirmTransaction(txid, 'max');


  await connection.getParsedConfirmedTransaction(txid, 'confirmed'); // this means we're done getting AR txn setup. Ship it off to ARWeave!

  const data = new FormData();
  const tags = realFiles.reduce((acc, f) => {
    acc[f.name] = [{
      name: 'mint',
      value: mintKey
    }];
    return acc;
  }, {});
  data.append('tags', JSON.stringify(tags));
  data.append('transaction', txid);
  realFiles.map(f => data.append('file[]', f)); // TODO: convert to absolute file name for image

  const result = await (await fetch( // TODO: add CNAME
  env.startsWith('mainnet-beta') ? 'https://us-central1-principal-lane-200702.cloudfunctions.net/uploadFileProd2' : 'https://us-central1-principal-lane-200702.cloudfunctions.net/uploadFile2', {
    method: 'POST',
    body: data
  })).json();
  const metadataFile = (_result$messages = result.messages) === null || _result$messages === void 0 ? void 0 : _result$messages.find(m => m.filename === RESERVED_TXN_MANIFEST);

  if (metadataFile !== null && metadataFile !== void 0 && metadataFile.transactionId && wallet.publicKey) {
    const updateInstructions = [];
    const updateSigners = []; // TODO: connect to testnet arweave

    const arweaveLink = `https://arweave.net/${metadataFile.transactionId}`;
    await (0,lib.updateMetadata)(new lib.Data({
      name: metadata.name,
      symbol: metadata.symbol,
      uri: arweaveLink,
      creators: metadata.creators,
      sellerFeeBasisPoints: metadata.sellerFeeBasisPoints
    }), undefined, undefined, mintKey, payerPublicKey, updateInstructions, metadataAccount);
    updateInstructions.push(spl_token_.Token.createMintToInstruction(TOKEN_PROGRAM_ID, (0,lib.toPublicKey)(mintKey), (0,lib.toPublicKey)(recipientKey), (0,lib.toPublicKey)(payerPublicKey), [], 1)); // // In this instruction, mint authority will be removed from the main mint, while
    // // minting authority will be maintained for the Printing mint (which we want.)

    await (0,lib.createMasterEdition)(maxSupply !== undefined ? new (external_bn_js_default())(maxSupply) : undefined, mintKey, payerPublicKey, payerPublicKey, payerPublicKey, updateInstructions); // TODO: enable when using payer account to avoid 2nd popup

    /*  if (maxSupply !== undefined)
      updateInstructions.push(
        setAuthority({
          target: authTokenAccount,
          currentAuthority: payerPublicKey,
          newAuthority: wallet.publicKey,
          authorityType: 'AccountOwner',
        }),
      );
    */
    // TODO: enable when using payer account to avoid 2nd popup
    // Note with refactoring this needs to switch to the updateMetadataAccount command
    // await transferUpdateAuthority(
    //   metadataAccount,
    //   payerPublicKey,
    //   wallet.publicKey,
    //   updateInstructions,
    // );

    const txid = await (0,lib.sendTransactionWithRetry)(connection, wallet, updateInstructions, updateSigners);
    (0,lib.notify)({
      message: 'Art created on Solana',
      description: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: arweaveLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Arweave Link"
      }),
      type: 'success'
    }); // TODO: refund funds
    // send transfer back to user
  } // TODO:
  // 1. Jordan: --- upload file and metadata to storage API
  // 2. pay for storage by hashing files and attaching memo for each file


  return {
    metadataAccount
  };
};
const prepPayForFilesTxn = async (wallet, files, metadata) => {
  const memo = (0,lib.programIds)().memo;
  const instructions = [];
  const signers = [];
  if (wallet.publicKey) instructions.push(web3_js_.SystemProgram.transfer({
    fromPubkey: wallet.publicKey,
    toPubkey: AR_SOL_HOLDER_ID,
    lamports: await getAssetCostToStore(files)
  }));

  for (let i = 0; i < files.length; i++) {
    const hashSum = external_crypto_default().createHash('sha256');
    hashSum.update(await files[i].text());
    const hex = hashSum.digest('hex');
    instructions.push(new web3_js_.TransactionInstruction({
      keys: [],
      programId: memo,
      data: Buffer.from(hex)
    }));
  }

  return {
    instructions,
    signers
  };
};
;// CONCATENATED MODULE: ./src/actions/createVault.ts




const {
  createTokenAccount: createVault_createTokenAccount,
  initVault,
  MAX_VAULT_SIZE,
  VAULT_PREFIX
} = lib.actions; // This command creates the external pricing oracle a vault
// This gets the vault ready for adding the tokens.

async function createVault(connection, wallet, priceMint, externalPriceAccount) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = lib.utils.programIds();
  const signers = [];
  const instructions = [];
  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  const mintRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span);
  const vaultRentExempt = await connection.getMinimumBalanceForRentExemption(MAX_VAULT_SIZE);
  const vault = web3_js_.Keypair.generate();
  const vaultAuthority = (await (0,lib.findProgramAddress)([Buffer.from(VAULT_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.vault).toBuffer(), vault.publicKey.toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.vault)))[0];
  const fractionalMint = (0,lib.createMint)(instructions, wallet.publicKey, mintRentExempt, 0, (0,lib.toPublicKey)(vaultAuthority), (0,lib.toPublicKey)(vaultAuthority), signers).toBase58();
  const redeemTreasury = createVault_createTokenAccount(instructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(priceMint), (0,lib.toPublicKey)(vaultAuthority), signers).toBase58();
  const fractionTreasury = createVault_createTokenAccount(instructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(fractionalMint), (0,lib.toPublicKey)(vaultAuthority), signers).toBase58();
  const uninitializedVault = web3_js_.SystemProgram.createAccount({
    fromPubkey: wallet.publicKey,
    newAccountPubkey: vault.publicKey,
    lamports: vaultRentExempt,
    space: MAX_VAULT_SIZE,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.vault)
  });
  instructions.push(uninitializedVault);
  signers.push(vault);
  await initVault(true, fractionalMint, redeemTreasury, fractionTreasury, vault.publicKey.toBase58(), wallet.publicKey.toBase58(), externalPriceAccount, instructions);
  return {
    vault: vault.publicKey.toBase58(),
    fractionalMint,
    redeemTreasury,
    fractionTreasury,
    signers,
    instructions
  };
}
;// CONCATENATED MODULE: ./src/actions/makeAuction.ts
function makeAuction_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function makeAuction_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { makeAuction_ownKeys(Object(source), true).forEach(function (key) { makeAuction_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { makeAuction_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function makeAuction_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  AUCTION_PREFIX,
  createAuction
} = lib.actions; // This command makes an auction

async function makeAuction(wallet, vault, auctionSettings) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = lib.utils.programIds();
  const signers = [];
  const instructions = [];
  const auctionKey = (await (0,lib.findProgramAddress)([Buffer.from(AUCTION_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.auction).toBuffer(), (0,lib.toPublicKey)(vault).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.auction)))[0];
  const fullSettings = new lib.CreateAuctionArgs(makeAuction_objectSpread(makeAuction_objectSpread({}, auctionSettings), {}, {
    authority: wallet.publicKey.toBase58(),
    resource: vault
  }));
  createAuction(fullSettings, wallet.publicKey.toBase58(), instructions);
  return {
    instructions,
    signers,
    auction: auctionKey
  };
}
;// CONCATENATED MODULE: ./src/actions/makeLottery.ts
function makeLottery_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function makeLottery_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { makeLottery_ownKeys(Object(source), true).forEach(function (key) { makeLottery_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { makeLottery_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function makeLottery_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  createLottery
} = lib.actions; // This command makes an Lottery

async function makeLottery(connection, wallet, lotteryStore, tokenMint, LotterySettings) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = lib.utils.programIds();
  const lotteryKey = (await (0,lib.findProgramAddress)([Buffer.from(lib.LOTTERY_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.lottery).toBuffer(), (0,lib.toPublicKey)(lotteryStore).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.lottery)))[0];
  const instructions = [];
  const tokenPoolAccount = await (0,lib.createSPLTokenKeypair)(instructions, connection, wallet.publicKey, (0,lib.toPublicKey)(lotteryKey), (0,lib.toPublicKey)(tokenMint));
  const signers = [];
  signers.push(tokenPoolAccount);
  const fullSettings = new lib.CreateLotteryArgs(makeLottery_objectSpread({}, LotterySettings));
  await createLottery(fullSettings, wallet.publicKey.toBase58(), lotteryStore, tokenMint, lotteryKey, tokenPoolAccount.publicKey.toBase58(), instructions);
  const {
    txid,
    slot
  } = await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions, signers, 'single');
  return {
    txid,
    slot,
    lottery: lotteryKey
  };
}
// EXTERNAL MODULE: external "@project-serum/serum/lib/token-instructions"
var token_instructions_ = __webpack_require__(9298);
;// CONCATENATED MODULE: ./src/actions/joinRaffle.ts





const {
  getTicket
} = lib.actions;
const {
  createTokenAccountIfNotExist
} = lib.utils; // This command makes an Lottery

async function joinRaffle(connection, wallet, lottery, lotteryData) {
  if (!wallet.publicKey) throw new WalletNotConnectedError();
  const instructions = [];
  const ticketKeypair = new Keypair();
  const signers = [];
  signers.push(ticketKeypair);
  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(AccountLayout.span);
  const userWsolAccount = await createTokenAccountIfNotExist(connection, null, wallet.publicKey, utils.WRAPPED_SOL_MINT.toBase58(), lotteryData.ticketPrice.toNumber() + accountRentExempt, instructions, signers);
  await getTicket(ticketKeypair.publicKey.toBase58(), wallet.publicKey.toBase58(), userWsolAccount.toBase58(), lotteryData.tokenPool, lotteryData.tokenMint, wallet.publicKey.toBase58(), lottery, instructions);
  instructions.push(closeAccount({
    source: userWsolAccount,
    destination: wallet,
    owner: wallet
  }));
  const {
    txid,
    slot
  } = await sendTransactionWithRetry(connection, wallet, instructions, signers, 'single');
  return {
    txid,
    slot
  };
}
;// CONCATENATED MODULE: ./src/actions/makeStore.ts



const {
  createStore
} = lib.actions; // This command makes an Lottery

async function makeStore(connection, wallet) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = lib.utils.programIds();
  const signers = [];
  const instructions = [];
  const storeKey = new web3_js_.Keypair();
  const [authority, nonce] = await (0,lib.findProgramAddress)([storeKey.publicKey.toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.store));
  const fullSettings = new lib.CreateStoreArgs({
    bump: nonce
  });
  createStore(fullSettings, wallet.publicKey.toBase58(), storeKey.publicKey.toBase58(), authority, instructions);
  const {
    txid,
    slot
  } = await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions, signers);
  return {
    txid,
    slot,
    store: storeKey.publicKey.toBase58()
  };
}
;// CONCATENATED MODULE: ./src/actions/mintNFTStore.ts
function mintNFTStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function mintNFTStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { mintNFTStore_ownKeys(Object(source), true).forEach(function (key) { mintNFTStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { mintNFTStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function mintNFTStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  mintNFT: mintNFTStore_mintNFT
} = lib.actions; // This command makes an Lottery

async function mintNFTStore(connection, wallet, storeid, mintNFTSetting) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError(); // const storeKey = (
  //   await findProgramAddress(
  //     [
  //       Buffer.from(STORE_PREFIX),
  //       toPublicKey(PROGRAM_IDS.store).toBuffer(),
  //       toPublicKey(storeid).toBuffer(),
  //     ],
  //     toPublicKey(PROGRAM_IDS.store),
  //   )
  // )[0];

  const instructions = [];
  const signers = [];
  const mintRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span); // const _token = Token.createMint(
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

  const account = await (0,lib.createMint)(instructions, wallet.publicKey, mintRentExempt, 0, (0,lib.toPublicKey)(storeid), (0,lib.toPublicKey)(storeid), signers);
  const tokenPoolAccount = await (0,lib.createSPLTokenKeypair)(instructions, connection, wallet.publicKey, (0,lib.toPublicKey)(storeid), account);
  const keypair = new web3_js_.Keypair();
  signers.push(tokenPoolAccount);
  signers.push(keypair);
  const fullSettings = new lib.MintNFTArgs(mintNFTStore_objectSpread({}, mintNFTSetting));
  await mintNFTStore_mintNFT(fullSettings, wallet.publicKey.toBase58(), keypair.publicKey.toBase58(), storeid, storeid, account.toBase58(), tokenPoolAccount.publicKey.toBase58(), instructions);
  const {
    txid,
    slot
  } = await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions, signers, 'single');
  return {
    txid,
    slot,
    mint: account.toBase58()
  };
}
;// CONCATENATED MODULE: ./src/actions/index.ts







;// CONCATENATED MODULE: ./src/views/artCreate/index.tsx




function artCreate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function artCreate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { artCreate_ownKeys(Object(source), true).forEach(function (key) { artCreate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { artCreate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function artCreate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const {
  Step
} = external_antd_.Steps;
const {
  Dragger
} = external_antd_.Upload;
const {
  Text
} = external_antd_.Typography;
const ArtCreateView = () => {
  const connection = (0,lib.useConnection)();
  const {
    env
  } = (0,lib.useConnectionConfig)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const {
    step_param
  } = (0,external_react_router_dom_.useParams)();
  const history = (0,external_react_router_dom_.useHistory)();
  const {
    width
  } = useWindowDimensions();
  const {
    0: step,
    1: setStep
  } = (0,external_react_.useState)(0);
  const {
    0: stepsVisible,
    1: setStepsVisible
  } = (0,external_react_.useState)(true);
  const {
    0: progress,
    1: setProgress
  } = (0,external_react_.useState)(0);
  const {
    0: nft,
    1: setNft
  } = (0,external_react_.useState)(undefined);
  const {
    0: files,
    1: setFiles
  } = (0,external_react_.useState)([]);
  const {
    0: attributes,
    1: setAttributes
  } = (0,external_react_.useState)({
    name: '',
    symbol: '',
    description: '',
    external_url: '',
    image: '',
    animation_url: undefined,
    attributes: undefined,
    seller_fee_basis_points: 0,
    creators: [],
    properties: {
      files: [],
      category: lib.MetadataCategory.Image
    }
  });
  const gotoStep = (0,external_react_.useCallback)(_step => {
    history.push(`/art/create/${_step.toString()}`);
    if (_step === 0) setStepsVisible(true);
  }, [history]);
  (0,external_react_.useEffect)(() => {
    if (step_param) setStep(parseInt(step_param));else gotoStep(0);
  }, [step_param, gotoStep]); // store files

  const mint = async () => {
    var _attributes$propertie, _attributes$propertie2;

    const metadata = {
      name: attributes.name,
      symbol: attributes.symbol,
      creators: attributes.creators,
      description: attributes.description,
      sellerFeeBasisPoints: attributes.seller_fee_basis_points,
      image: attributes.image,
      animation_url: attributes.animation_url,
      attributes: attributes.attributes,
      external_url: attributes.external_url,
      properties: {
        files: attributes.properties.files,
        category: (_attributes$propertie = attributes.properties) === null || _attributes$propertie === void 0 ? void 0 : _attributes$propertie.category
      }
    };
    setStepsVisible(false);
    const inte = setInterval(() => setProgress(prog => Math.min(prog + 1, 99)), 600); // Update progress inside mintNFT

    const _nft = await mintNFT(connection, wallet, env, files, metadata, (_attributes$propertie2 = attributes.properties) === null || _attributes$propertie2 === void 0 ? void 0 : _attributes$propertie2.maxSupply);

    if (_nft) setNft(_nft);
    clearInterval(inte);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      style: {
        paddingTop: 50
      },
      children: [stepsVisible && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 24,
        md: 4,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Steps, {
          progressDot: true,
          direction: width < 768 ? 'horizontal' : 'vertical',
          current: step,
          style: {
            width: 'fit-content',
            margin: '0 auto 30px auto',
            overflowX: 'auto',
            maxWidth: '100%'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(Step, {
            title: "Category"
          }), /*#__PURE__*/jsx_runtime_.jsx(Step, {
            title: "Upload"
          }), /*#__PURE__*/jsx_runtime_.jsx(Step, {
            title: "Info"
          }), /*#__PURE__*/jsx_runtime_.jsx(Step, {
            title: "Royalties"
          }), /*#__PURE__*/jsx_runtime_.jsx(Step, {
            title: "Launch"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, artCreate_objectSpread(artCreate_objectSpread({
        span: 24
      }, stepsVisible ? {
        md: 20
      } : {
        md: 24
      }), {}, {
        children: [step === 0 && /*#__PURE__*/jsx_runtime_.jsx(CategoryStep, {
          confirm: category => {
            setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, attributes), {}, {
              properties: artCreate_objectSpread(artCreate_objectSpread({}, attributes.properties), {}, {
                category
              })
            }));
            gotoStep(1);
          }
        }), step === 1 && /*#__PURE__*/jsx_runtime_.jsx(UploadStep, {
          attributes: attributes,
          setAttributes: setAttributes,
          files: files,
          setFiles: setFiles,
          confirm: () => gotoStep(2)
        }), step === 2 && /*#__PURE__*/jsx_runtime_.jsx(InfoStep, {
          attributes: attributes,
          files: files,
          setAttributes: setAttributes,
          confirm: () => gotoStep(3)
        }), step === 3 && /*#__PURE__*/jsx_runtime_.jsx(RoyaltiesStep, {
          attributes: attributes,
          confirm: () => gotoStep(4),
          setAttributes: setAttributes
        }), step === 4 && /*#__PURE__*/jsx_runtime_.jsx(LaunchStep, {
          attributes: attributes,
          files: files,
          confirm: () => gotoStep(5),
          connection: connection
        }), step === 5 && /*#__PURE__*/jsx_runtime_.jsx(WaitingStep, {
          mint: mint,
          progress: progress,
          confirm: () => gotoStep(6)
        }), 0 < step && step < 5 && /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            margin: 'auto',
            width: 'fit-content'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            onClick: () => gotoStep(step - 1),
            children: "Back"
          })
        })]
      }))]
    }), /*#__PURE__*/jsx_runtime_.jsx(lib.MetaplexOverlay, {
      visible: step === 6,
      children: /*#__PURE__*/jsx_runtime_.jsx(Congrats, {
        nft: nft
      })
    })]
  });
};

const CategoryStep = props => {
  const {
    width
  } = useWindowDimensions();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Create a new item"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["First time creating on Metaplex?", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          children: "Read our creators\u2019 guide."
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: width < 768 ? 'center' : 'start',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            className: "type-btn",
            size: "large",
            onClick: () => props.confirm(lib.MetadataCategory.Image),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Image"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "type-btn-description",
                children: "JPG, PNG, GIF"
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            className: "type-btn",
            size: "large",
            onClick: () => props.confirm(lib.MetadataCategory.Video),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Video"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "type-btn-description",
                children: "MP4, MOV"
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            className: "type-btn",
            size: "large",
            onClick: () => props.confirm(lib.MetadataCategory.Audio),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Audio"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "type-btn-description",
                children: "MP3, WAV, FLAC"
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            className: "type-btn",
            size: "large",
            onClick: () => props.confirm(lib.MetadataCategory.VR),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "AR/3D"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "type-btn-description",
                children: "GLB"
              })]
            })
          })
        })]
      })
    })]
  });
};

const UploadStep = props => {
  var _props$files, _props$files2, _props$attributes$pro, _props$attributes$pro2, _props$attributes$pro3;

  const {
    0: coverFile,
    1: setCoverFile
  } = (0,external_react_.useState)((_props$files = props.files) === null || _props$files === void 0 ? void 0 : _props$files[0]);
  const {
    0: mainFile,
    1: setMainFile
  } = (0,external_react_.useState)((_props$files2 = props.files) === null || _props$files2 === void 0 ? void 0 : _props$files2[1]);
  const {
    0: customURL,
    1: setCustomURL
  } = (0,external_react_.useState)('');
  const {
    0: customURLErr,
    1: setCustomURLErr
  } = (0,external_react_.useState)('');
  const disableContinue = !coverFile || !!customURLErr;
  (0,external_react_.useEffect)(() => {
    props.setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, props.attributes), {}, {
      properties: artCreate_objectSpread(artCreate_objectSpread({}, props.attributes.properties), {}, {
        files: []
      })
    }));
  }, []);

  const uploadMsg = category => {
    switch (category) {
      case lib.MetadataCategory.Audio:
        return 'Upload your audio creation (MP3, FLAC, WAV)';

      case lib.MetadataCategory.Image:
        return 'Upload your image creation (PNG, JPG, GIF)';

      case lib.MetadataCategory.Video:
        return 'Upload your video creation (MP4, MOV, GLB)';

      case lib.MetadataCategory.VR:
        return 'Upload your AR/VR creation (GLB)';

      default:
        return 'Please go back and choose a category';
    }
  };

  const acceptableFiles = category => {
    switch (category) {
      case lib.MetadataCategory.Audio:
        return '.mp3,.flac,.wav';

      case lib.MetadataCategory.Image:
        return '.png,.jpg,.gif';

      case lib.MetadataCategory.Video:
        return '.mp4,.mov,.webm';

      case lib.MetadataCategory.VR:
        return '.glb';

      default:
        return '';
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Now, let's upload your creation"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        style: {
          fontSize: '1.2rem'
        },
        children: "Your file will be uploaded to the decentralized web via Arweave. Depending on file type, can take up to 1 minute. Arweave is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever \u2013 for the very first time."
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "content-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Upload a cover image (PNG, JPG, GIF, SVG)"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dragger, {
        accept: ".png,.jpg,.gif,.mp4,.svg",
        style: {
          padding: 20
        },
        multiple: false,
        customRequest: info => {
          var _info$onSuccess;

          // dont upload files here, handled outside of the control
          info === null || info === void 0 ? void 0 : (_info$onSuccess = info.onSuccess) === null || _info$onSuccess === void 0 ? void 0 : _info$onSuccess.call(info, {}, null);
        },
        fileList: coverFile ? [coverFile] : [],
        onChange: async info => {
          const file = info.file.originFileObj;
          if (file) setCoverFile(file);
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ant-upload-drag-icon",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            style: {
              fontWeight: 700
            },
            children: "Upload your cover image (PNG, JPG, GIF, SVG)"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "ant-upload-text",
          children: "Drag and drop, or click to browse"
        })]
      })]
    }), ((_props$attributes$pro = props.attributes.properties) === null || _props$attributes$pro === void 0 ? void 0 : _props$attributes$pro.category) !== lib.MetadataCategory.Image && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "content-action",
      style: {
        marginBottom: 5,
        marginTop: 30
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: uploadMsg((_props$attributes$pro2 = props.attributes.properties) === null || _props$attributes$pro2 === void 0 ? void 0 : _props$attributes$pro2.category)
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dragger, {
        accept: acceptableFiles((_props$attributes$pro3 = props.attributes.properties) === null || _props$attributes$pro3 === void 0 ? void 0 : _props$attributes$pro3.category),
        style: {
          padding: 20,
          background: 'rgba(255, 255, 255, 0.08)'
        },
        multiple: false,
        customRequest: info => {
          var _info$onSuccess2;

          // dont upload files here, handled outside of the control
          info === null || info === void 0 ? void 0 : (_info$onSuccess2 = info.onSuccess) === null || _info$onSuccess2 === void 0 ? void 0 : _info$onSuccess2.call(info, {}, null);
        },
        fileList: mainFile ? [mainFile] : [],
        onChange: async info => {
          const file = info.file.originFileObj; // Reset image URL

          setCustomURL('');
          setCustomURLErr('');
          if (file) setMainFile(file);
        },
        onRemove: () => {
          setMainFile(undefined);
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ant-upload-drag-icon",
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            style: {
              fontWeight: 700
            },
            children: "Upload your creation"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "ant-upload-text",
          children: "Drag and drop, or click to browse"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
      style: {
        width: '100%',
        flexDirection: 'column',
        paddingTop: 30,
        marginBottom: 4
      },
      label: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "OR use absolute URL to content"
      }),
      labelAlign: "left",
      colon: false,
      validateStatus: customURLErr ? 'error' : 'success',
      help: customURLErr,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
        disabled: !!mainFile,
        placeholder: "http://example.com/path/to/image",
        value: customURL,
        onChange: ev => setCustomURL(ev.target.value),
        onFocus: () => setCustomURLErr(''),
        onBlur: () => {
          if (!customURL) {
            setCustomURLErr('');
            return;
          }

          try {
            // Validate URL and save
            new URL(customURL);
            setCustomURL(customURL);
            setCustomURLErr('');
          } catch (e) {
            console.error(e);
            setCustomURLErr('Please enter a valid absolute URL');
          }
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        disabled: disableContinue,
        onClick: () => {
          props.setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, props.attributes), {}, {
            properties: artCreate_objectSpread(artCreate_objectSpread({}, props.attributes.properties), {}, {
              files: [coverFile, mainFile, customURL].filter(f => f).map(f => {
                const uri = typeof f === 'string' ? f : (f === null || f === void 0 ? void 0 : f.name) || '';
                const type = typeof f === 'string' || !f ? 'unknown' : f.type || getLast(f.name.split('.')) || 'unknown';
                return {
                  uri,
                  type
                };
              })
            }),
            image: (coverFile === null || coverFile === void 0 ? void 0 : coverFile.name) || '',
            animation_url: mainFile && mainFile.name
          }));
          props.setFiles([coverFile, mainFile].filter(f => f));
          props.confirm();
        },
        style: {
          marginTop: 24
        },
        className: "action-btn",
        children: "Continue to Mint"
      })
    })]
  });
};

const useArtworkFiles = (files, attributes) => {
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)({
    image: '',
    animation_url: ''
  });
  (0,external_react_.useEffect)(() => {
    if (attributes.image) {
      const file = files.find(f => f.name === attributes.image);

      if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
          setData(data => {
            var _event$target;

            return artCreate_objectSpread(artCreate_objectSpread({}, data || {}), {}, {
              image: ((_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result) || ''
            });
          });
        };

        if (file) reader.readAsDataURL(file);
      }
    }

    if (attributes.animation_url) {
      const file = files.find(f => f.name === attributes.animation_url);

      if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
          setData(data => {
            var _event$target2;

            return artCreate_objectSpread(artCreate_objectSpread({}, data || {}), {}, {
              animation_url: ((_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.result) || ''
            });
          });
        };

        if (file) reader.readAsDataURL(file);
      }
    }
  }, [files, attributes]);
  return data;
};

const InfoStep = props => {
  var _props$attributes$pro4;

  const {
    0: creators,
    1: setCreators
  } = (0,external_react_.useState)([]);
  const {
    0: royalties,
    1: setRoyalties
  } = (0,external_react_.useState)([]);
  const {
    image,
    animation_url
  } = useArtworkFiles(props.files, props.attributes);
  const [form] = external_antd_.Form.useForm();
  (0,external_react_.useEffect)(() => {
    setRoyalties(creators.map(creator => ({
      creatorKey: creator.key,
      amount: Math.trunc(100 / creators.length)
    })));
  }, [creators]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Describe your item"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Provide detailed description of your creative process to engage with your audience."
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "content-action",
      justify: "space-around",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: props.attributes.image && /*#__PURE__*/jsx_runtime_.jsx(ArtCard, {
          image: image,
          animationURL: animation_url,
          category: (_props$attributes$pro4 = props.attributes.properties) === null || _props$attributes$pro4 === void 0 ? void 0 : _props$attributes$pro4.category,
          name: props.attributes.name,
          symbol: props.attributes.symbol,
          small: true
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        className: "section",
        style: {
          minWidth: 300
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Title"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            autoFocus: true,
            className: "input",
            placeholder: "Max 50 characters",
            allowClear: true,
            value: props.attributes.name,
            onChange: info => props.setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, props.attributes), {}, {
              name: info.target.value
            }))
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Description"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input.TextArea, {
            className: "input textarea",
            placeholder: "Max 500 characters",
            value: props.attributes.description,
            onChange: info => props.setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, props.attributes), {}, {
              description: info.target.value
            })),
            allowClear: true
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Maximum Supply"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.InputNumber, {
            placeholder: "Quantity",
            onChange: val => {
              props.setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, props.attributes), {}, {
                properties: artCreate_objectSpread(artCreate_objectSpread({}, props.attributes.properties), {}, {
                  maxSupply: val
                })
              }));
            },
            className: "royalties-input"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
          className: "action-field",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Attributes"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form, {
          name: "dynamic_attributes",
          form: form,
          autoComplete: "off",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.List, {
            name: "attributes",
            children: (fields, {
              add,
              remove
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [fields.map(({
                key,
                name,
                fieldKey
              }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Space, {
                align: "baseline",
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
                  name: [name, 'trait_type'],
                  fieldKey: [fieldKey, 'trait_type'],
                  hasFeedback: true,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                    placeholder: "trait_type (Optional)"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
                  name: [name, 'value'],
                  fieldKey: [fieldKey, 'value'],
                  rules: [{
                    required: true,
                    message: 'Missing value'
                  }],
                  hasFeedback: true,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                    placeholder: "value"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
                  name: [name, 'display_type'],
                  fieldKey: [fieldKey, 'display_type'],
                  hasFeedback: true,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                    placeholder: "display_type (Optional)"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(icons_.MinusCircleOutlined, {
                  onClick: () => remove(name)
                })]
              }, key)), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                  type: "dashed",
                  onClick: () => add(),
                  block: true,
                  icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}),
                  children: "Add attribute"
                })
              })]
            })
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: () => {
          form.validateFields().then(values => {
            const nftAttributes = values.attributes; // value is number if possible

            for (const nftAttribute of nftAttributes || []) {
              const newValue = Number(nftAttribute.value);

              if (!isNaN(newValue)) {
                nftAttribute.value = newValue;
              }
            }

            console.log('Adding NFT attributes:', nftAttributes);
            props.setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, props.attributes), {}, {
              attributes: nftAttributes
            }));
            props.confirm();
          });
        },
        className: "action-btn",
        children: "Continue to royalties"
      })
    })]
  });
};

const RoyaltiesSplitter = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      gutter: [0, 24],
      children: props.creators.map((creator, idx) => {
        const royalty = props.royalties.find(royalty => royalty.creatorKey === creator.key);
        if (!royalty) return null;
        const amt = royalty.amount;

        const handleChangeShare = newAmt => {
          props.setRoyalties(props.royalties.map(_royalty => {
            return artCreate_objectSpread(artCreate_objectSpread({}, _royalty), {}, {
              amount: _royalty.creatorKey === royalty.creatorKey ? newAmt : _royalty.amount
            });
          }));
        };

        return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
            align: "middle",
            gutter: [0, 16],
            style: {
              margin: '5px auto'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              span: 4,
              style: {
                padding: 10
              },
              children: creator.label
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              span: 3,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.InputNumber, {
                min: 0,
                max: 100,
                formatter: value => `${value}%`,
                value: amt,
                parser: value => {
                  var _value$replace;

                  return parseInt((_value$replace = value === null || value === void 0 ? void 0 : value.replace('%', '')) !== null && _value$replace !== void 0 ? _value$replace : '0');
                },
                onChange: handleChangeShare,
                className: "royalties-input"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              span: 4,
              style: {
                paddingLeft: 12
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Slider, {
                value: amt,
                onChange: handleChangeShare
              })
            }), props.isShowErrors && amt === 0 && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              style: {
                paddingLeft: 12
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(Text, {
                type: "danger",
                children: "The split percentage for this creator cannot be 0%."
              })
            })]
          })
        }, idx);
      })
    })
  });
};

const RoyaltiesStep = props => {
  // const file = props.attributes.image;
  const {
    publicKey,
    connected
  } = (0,wallet_adapter_react_.useWallet)();
  const {
    0: creators,
    1: setCreators
  } = (0,external_react_.useState)([]);
  const {
    0: fixedCreators,
    1: setFixedCreators
  } = (0,external_react_.useState)([]);
  const {
    0: royalties,
    1: setRoyalties
  } = (0,external_react_.useState)([]);
  const {
    0: totalRoyaltyShares,
    1: setTotalRoyaltiesShare
  } = (0,external_react_.useState)(0);
  const {
    0: showCreatorsModal,
    1: setShowCreatorsModal
  } = (0,external_react_.useState)(false);
  const {
    0: isShowErrors,
    1: setIsShowErrors
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (publicKey) {
      const key = publicKey.toBase58();
      setFixedCreators([{
        key,
        label: (0,lib.shortenAddress)(key),
        value: key
      }]);
    }
  }, [connected, setCreators]);
  (0,external_react_.useEffect)(() => {
    setRoyalties([...fixedCreators, ...creators].map(creator => ({
      creatorKey: creator.key,
      amount: Math.trunc(100 / [...fixedCreators, ...creators].length)
    })));
  }, [creators, fixedCreators]);
  (0,external_react_.useEffect)(() => {
    // When royalties changes, sum up all the amounts.
    const total = royalties.reduce((totalShares, royalty) => {
      return totalShares + royalty.amount;
    }, 0);
    setTotalRoyaltiesShare(total);
  }, [royalties]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      style: {
        marginBottom: 20
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Set royalties and creator splits"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Royalties ensure that you continue to get compensated for your work after its initial sale."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      style: {
        marginBottom: 20
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        className: "action-field",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "field-title",
          children: "Royalty Percentage"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "This is how much of each secondary sale will be paid out to the creators."
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.InputNumber, {
          autoFocus: true,
          min: 0,
          max: 100,
          placeholder: "Between 0 and 100",
          onChange: val => {
            props.setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, props.attributes), {}, {
              seller_fee_basis_points: val * 100
            }));
          },
          className: "royalties-input"
        })]
      })
    }), [...fixedCreators, ...creators].length > 0 && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        className: "action-field",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "field-title",
          children: "Creators Split"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "This is how much of the proceeds from the initial sale and any royalties will be split out amongst the creators."
        }), /*#__PURE__*/jsx_runtime_.jsx(RoyaltiesSplitter, {
          creators: [...fixedCreators, ...creators],
          royalties: royalties,
          setRoyalties: setRoyalties,
          isShowErrors: isShowErrors
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        onClick: () => setShowCreatorsModal(true),
        style: {
          padding: 10,
          marginBottom: 10
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            color: 'white',
            fontSize: 25,
            padding: '0px 8px 3px 8px',
            background: 'rgb(57, 57, 57)',
            borderRadius: '50%',
            marginRight: 5,
            verticalAlign: 'middle'
          },
          children: "+"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            color: 'rgba(255, 255, 255, 0.7)',
            verticalAlign: 'middle',
            lineHeight: 1
          },
          children: "Add another creator"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(lib.MetaplexModal, {
        visible: showCreatorsModal,
        onCancel: () => setShowCreatorsModal(false),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          style: {
            width: '100%'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Creators"
          }), /*#__PURE__*/jsx_runtime_.jsx(UserSearch, {
            setCreators: setCreators
          })]
        })
      })]
    }), isShowErrors && totalRoyaltyShares !== 100 && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text, {
        type: "danger",
        style: {
          paddingBottom: 14
        },
        children: ["The split percentages for each creator must add up to 100%. Current total split percentage is ", totalRoyaltyShares, "%."]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: () => {
          // Find all royalties that are invalid (0)
          const zeroedRoyalties = royalties.filter(royalty => royalty.amount === 0);

          if (zeroedRoyalties.length !== 0 || totalRoyaltyShares !== 100) {
            // Contains a share that is 0 or total shares does not equal 100, show errors.
            setIsShowErrors(true);
            return;
          }

          const creatorStructs = [...fixedCreators, ...creators].map(c => {
            var _royalties$find;

            return new lib.Creator({
              address: c.value,
              verified: c.value === (publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58()),
              share: ((_royalties$find = royalties.find(r => r.creatorKey === c.value)) === null || _royalties$find === void 0 ? void 0 : _royalties$find.amount) || Math.round(100 / royalties.length)
            });
          });
          const share = creatorStructs.reduce((acc, el) => acc += el.share, 0);

          if (share > 100 && creatorStructs.length) {
            creatorStructs[0].share -= share - 100;
          }

          props.setAttributes(artCreate_objectSpread(artCreate_objectSpread({}, props.attributes), {}, {
            creators: creatorStructs
          }));
          props.confirm();
        },
        className: "action-btn",
        children: "Continue to review"
      })
    })]
  });
};

const LaunchStep = props => {
  var _props$attributes$pro5;

  const {
    0: cost,
    1: setCost
  } = (0,external_react_.useState)(0);
  const {
    image,
    animation_url
  } = useArtworkFiles(props.files, props.attributes);
  const files = props.files;
  const metadata = props.attributes;
  (0,external_react_.useEffect)(() => {
    const rentCall = Promise.all([props.connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span), props.connection.getMinimumBalanceForRentExemption(lib.MAX_METADATA_LEN)]);
    if (files.length) getAssetCostToStore([...files, new File([JSON.stringify(metadata)], 'metadata.json')]).then(async lamports => {
      const sol = lamports / LAMPORT_MULTIPLIER; // TODO: cache this and batch in one call

      const [mintRent, metadataRent] = await rentCall; // const uriStr = 'x';
      // let uriBuilder = '';
      // for (let i = 0; i < MAX_URI_LENGTH; i++) {
      //   uriBuilder += uriStr;
      // }

      const additionalSol = (metadataRent + mintRent) / LAMPORT_MULTIPLIER; // TODO: add fees based on number of transactions and signers

      setCost(sol + additionalSol);
    });
  }, [files, metadata, setCost]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Launch your creation"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Provide detailed description of your creative process to engage with your audience."
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "content-action",
      justify: "space-around",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: props.attributes.image && /*#__PURE__*/jsx_runtime_.jsx(ArtCard, {
          image: image,
          animationURL: animation_url,
          category: (_props$attributes$pro5 = props.attributes.properties) === null || _props$attributes$pro5 === void 0 ? void 0 : _props$attributes$pro5.category,
          name: props.attributes.name,
          symbol: props.attributes.symbol,
          small: true
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        className: "section",
        style: {
          minWidth: 300
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Statistic, {
          className: "create-statistic",
          title: "Royalty Percentage",
          value: props.attributes.seller_fee_basis_points / 100,
          precision: 2,
          suffix: "%"
        }), cost ? /*#__PURE__*/jsx_runtime_.jsx(AmountLabel_AmountLabel, {
          title: "Cost to Create",
          amount: cost.toFixed(5)
        }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {})]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Pay with SOL"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        disabled: true,
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Pay with Credit Card"
      })]
    })]
  });
};

const WaitingStep = props => {
  (0,external_react_.useEffect)(() => {
    const func = async () => {
      await props.mint();
      props.confirm();
    };

    func();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      marginTop: 70,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Progress, {
      type: "circle",
      percent: props.progress
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "waiting-title",
      children: "Your creation is being uploaded to the decentralized web..."
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "waiting-subtitle",
      children: "This can take up to 1 minute."
    })]
  });
};

const Congrats = props => {
  const history = (0,external_react_router_dom_.useHistory)();

  const newTweetURL = () => {
    var _props$nft;

    const params = {
      text: "I've created a new NFT artwork on Metaplex, check it out!",
      url: `${window.location.origin}/#/art/${(_props$nft = props.nft) === null || _props$nft === void 0 ? void 0 : _props$nft.metadataAccount.toString()}`,
      hashtags: 'NFT,Crypto,Metaplex',
      // via: "Metaplex",
      related: 'Metaplex,Solana'
    };
    const queryParams = new URLSearchParams(params).toString();
    return `https://twitter.com/intent/tweet?${queryParams}`;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "waiting-title",
      children: "Congratulations, you created an NFT!"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "congrats-button-container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
        className: "metaplex-button",
        onClick: _ => window.open(newTweetURL(), '_blank'),
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Share it on Twitter"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: ">"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
        className: "metaplex-button",
        onClick: _ => {
          var _props$nft2;

          return history.push(`/art/${(_props$nft2 = props.nft) === null || _props$nft2 === void 0 ? void 0 : _props$nft2.metadataAccount.toString()}`);
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "See it in your collection"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: ">"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
        className: "metaplex-button",
        onClick: _ => history.push('/auction/create'),
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Sell it via auction"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: ">"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Confetti, {})]
  });
};
;// CONCATENATED MODULE: ./src/views/artist/index.tsx










const ArtistView = () => {
  const {
    id
  } = (0,external_react_router_dom_.useParams)();
  const creator = useCreator(id);
  const artwork = useCreatorArts(id);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const artworkGrid = /*#__PURE__*/jsx_runtime_.jsx((external_react_masonry_css_default()), {
    breakpointCols: breakpointColumnsObj,
    className: "my-masonry-grid",
    columnClassName: "my-masonry-grid_column",
    children: artwork.length > 0 ? artwork.map((m, idx) => {
      const id = m.pubkey;
      return /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
        to: `/art/${id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(ArtCard, {
          pubkey: m.pubkey,
          preview: false
        }, id)
      }, idx);
    }) : [...Array(6)].map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(MyLoader_CardLoader, {}, idx))
  });

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        style: {
          margin: '0 30px',
          textAlign: 'left',
          fontSize: '1.4rem'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          span: 24,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: (creator === null || creator === void 0 ? void 0 : creator.info.name) || (creator === null || creator === void 0 ? void 0 : creator.info.address)
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-header",
            children: "ABOUT THE CREATOR"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-content",
            children: creator === null || creator === void 0 ? void 0 : creator.info.description
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-header",
            children: "Art Created"
          }), artworkGrid]
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/ArtistCard/index.tsx






const ArtistCard = ({
  artist
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, {
    hoverable: true,
    className: `artist-card`,
    cover: /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        height: 100
      }
    }),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(MetaAvatar, {
        creators: [artist],
        size: 100
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "artist-card-name",
        children: artist.name || (0,lib.shortenAddress)(artist.address || '')
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "artist-card-description",
        children: artist.about
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/views/artists/index.tsx







const {
  Content: artists_Content
} = external_antd_.Layout;
const ArtistsView = () => {
  const {
    whitelistedCreatorsByCreator
  } = meta_useMeta();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  const items = Object.values(whitelistedCreatorsByCreator);

  const artistGrid = /*#__PURE__*/jsx_runtime_.jsx((external_react_masonry_css_default()), {
    breakpointCols: breakpointColumnsObj,
    className: "my-masonry-grid",
    columnClassName: "my-masonry-grid_column",
    children: items.map((m, idx) => {
      const id = m.info.address;
      return /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
        to: `/artists/${id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(ArtistCard, {
          artist: {
            address: m.info.address,
            name: m.info.name || '',
            image: m.info.image || '',
            link: m.info.twitter || ''
          }
        }, id)
      }, idx);
    })
  });

  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Layout, {
    style: {
      margin: 0,
      marginTop: 30
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(artists_Content, {
      style: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        style: {
          width: '100%',
          marginTop: 10
        },
        children: artistGrid
      })
    })
  });
};
// EXTERNAL MODULE: external "@solana/spl-name-service"
var spl_name_service_ = __webpack_require__(5199);
;// CONCATENATED MODULE: ./src/views/auction/index.tsx




function auction_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auction_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auction_ownKeys(Object(source), true).forEach(function (key) { auction_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auction_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auction_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const AuctionItem = ({
  item,
  index,
  size,
  active
}) => {
  const id = item.metadata.pubkey;
  var style = {
    transform: index === 0 ? '' : `translate(${index * 15}px, ${-40 * index}px) scale(${Math.max(1 - 0.2 * index, 0)})`,
    transformOrigin: 'right bottom',
    position: index !== 0 ? 'absolute' : 'static',
    zIndex: -1 * index,
    marginLeft: size > 1 && index === 0 ? '0px' : 'auto',
    background: 'black',
    boxShadow: 'rgb(0 0 0 / 10%) 12px 2px 20px 14px',
    height: 300
  };
  return /*#__PURE__*/jsx_runtime_.jsx(ArtContent_ArtContent, {
    pubkey: id,
    className: "artwork-image stack-item",
    style: style,
    active: active,
    allowMeshRender: true
  });
};
const AuctionView = () => {
  const {
    id
  } = (0,external_react_router_dom_.useParams)();
  const {
    env
  } = (0,lib.useConnectionConfig)();
  const auction = useAuction(id);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = (0,external_react_.useState)(0);
  const art = useArt_useArt(auction === null || auction === void 0 ? void 0 : auction.thumbnail.metadata.pubkey);
  const {
    ref,
    data
  } = useExtendedArt(auction === null || auction === void 0 ? void 0 : auction.thumbnail.metadata.pubkey);
  const creators = useCreators(auction);
  let edition = '';

  if (art.type === ArtType.NFT) {
    edition = 'Unique';
  } else if (art.type === ArtType.Master) {
    edition = 'NFT 0';
  } else if (art.type === ArtType.Print) {
    edition = `${art.edition} of ${art.supply}`;
  }

  const nftCount = auction === null || auction === void 0 ? void 0 : auction.items.flat().length;
  const winnerCount = auction === null || auction === void 0 ? void 0 : auction.items.length;
  const hasDescription = data === undefined || data.description === undefined;
  const description = data === null || data === void 0 ? void 0 : data.description;
  const attributes = data === null || data === void 0 ? void 0 : data.attributes;
  const items = [...((auction === null || auction === void 0 ? void 0 : auction.items.flat().reduce((agg, item) => {
    agg.set(item.metadata.pubkey, item);
    return agg;
  }, new Map()).values()) || []), auction === null || auction === void 0 ? void 0 : auction.participationItem].map((item, index, arr) => {
    var _item$metadata;

    if (!item || !(item !== null && item !== void 0 && item.metadata) || !((_item$metadata = item.metadata) !== null && _item$metadata !== void 0 && _item$metadata.pubkey)) {
      return null;
    }

    return /*#__PURE__*/jsx_runtime_.jsx(AuctionItem, {
      item: item,
      index: index,
      size: arr.length,
      active: index === currentIndex
    }, item.metadata.pubkey);
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      justify: "space-around",
      ref: ref,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        span: 24,
        md: 12,
        className: "pr-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auction-view",
          style: {
            minHeight: 300
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Carousel, {
            autoplay: false,
            afterChange: index => setCurrentIndex(index),
            children: items
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
          children: "Number Of Winners"
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: winnerCount === undefined ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
            paragraph: {
              rows: 0
            }
          }) : winnerCount
        }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
          children: "Number Of NFTs"
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: nftCount === undefined ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
            paragraph: {
              rows: 0
            }
          }) : nftCount
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          children: ["About this ", nftCount === 1 ? 'NFT' : 'Collection']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "auction-paragraph",
          children: [hasDescription && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
            paragraph: {
              rows: 3
            }
          }), description || winnerCount !== undefined && /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              fontStyle: 'italic'
            },
            children: "No description provided."
          })]
        }), attributes && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: "Attributes"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List, {
            grid: {
              column: 4
            },
            children: attributes.map(attribute => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Card, {
                title: attribute.trait_type,
                children: attribute.value
              })
            }))
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        span: 24,
        md: 12,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "art-title",
          children: art.title || /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
            paragraph: {
              rows: 0
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
          gutter: [50, 0],
          style: {
            marginRight: 'unset'
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "Edition"
            }), !auction && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
              title: {
                width: '100%'
              },
              paragraph: {
                rows: 0
              }
            }), auction && /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "auction-art-edition",
              children: ((auction === null || auction === void 0 ? void 0 : auction.items.length) || 0) > 1 ? 'Multiple' : edition
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "View on"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                display: 'flex'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                className: "tag",
                onClick: () => window.open(art.uri || '', '_blank'),
                children: "Arweave"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                className: "tag",
                onClick: () => window.open(`https://explorer.solana.com/account/${(art === null || art === void 0 ? void 0 : art.mint) || ''}${env.indexOf('main') >= 0 ? '' : `?cluster=${env}`}`, '_blank'),
                children: "Solana"
              })]
            })]
          })]
        }), !auction && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
          paragraph: {
            rows: 6
          }
        }), auction && /*#__PURE__*/jsx_runtime_.jsx(AuctionCard_AuctionCard, {
          auctionView: auction
        }), /*#__PURE__*/jsx_runtime_.jsx(AuctionBids, {
          auctionView: auction
        })]
      })]
    })
  });
};

const BidLine = props => {
  const {
    bid,
    index,
    mint,
    isCancelled,
    isActive
  } = props;
  const {
    publicKey
  } = (0,wallet_adapter_react_.useWallet)();
  const bidder = bid.info.bidderPubkey;
  const isme = (publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58()) === bidder; // Get Twitter Handle from address

  const connection = (0,lib.useConnection)();
  const {
    0: bidderTwitterHandle,
    1: setBidderTwitterHandle
  } = (0,external_react_.useState)('');
  (0,external_react_.useEffect)(() => {
    const getTwitterHandle = async (connection, bidder) => {
      try {
        const [twitterHandle] = await (0,spl_name_service_.getHandleAndRegistryKey)(connection, (0,lib.toPublicKey)(bidder));
        setBidderTwitterHandle(twitterHandle);
      } catch (err) {
        console.warn(`err`);
        return undefined;
      }
    };

    getTwitterHandle(connection, bidder);
  }, [bidderTwitterHandle]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
    style: auction_objectSpread({
      width: '100%',
      alignItems: 'center',
      padding: '3px 0',
      position: 'relative',
      opacity: isActive ? undefined : 0.5
    }, isme ? {
      backgroundColor: '#ffffff21'
    } : {}),
    children: [isCancelled && /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        position: 'absolute',
        left: 0,
        width: '100%',
        height: 1,
        background: 'grey',
        top: 'calc(50% - 1px)',
        zIndex: 2
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
      span: 2,
      style: {
        textAlign: 'right',
        paddingRight: 10
      },
      children: !isCancelled && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          opacity: 0.8,
          fontWeight: 700
        },
        children: [isme && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CheckOutlined, {}), "\xA0"]
        }), index + 1]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
      span: 16,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(lib.Identicon, {
          style: {
            width: 24,
            height: 24,
            marginRight: 10,
            marginTop: 2
          },
          address: bidder
        }), ' ', bidderTwitterHandle ? /*#__PURE__*/jsx_runtime_.jsx("a", {
          target: "_blank",
          title: (0,lib.shortenAddress)(bidder),
          href: `https://twitter.com/${bidderTwitterHandle}`,
          children: `@${bidderTwitterHandle}`
        }) : (0,lib.shortenAddress)(bidder), isme && /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            color: '#6479f6'
          },
          children: "\xA0(you)"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
      span: 6,
      style: {
        textAlign: 'right'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        title: (0,lib.fromLamports)(bid.info.lastBid, mint).toString(),
        children: ["\u25CE", (0,lib.formatTokenAmount)(bid.info.lastBid, mint)]
      })
    })]
  });
};

const AuctionBids = ({
  auctionView
}) => {
  const bids = useBidsForAuction_useBidsForAuction((auctionView === null || auctionView === void 0 ? void 0 : auctionView.auction.pubkey) || '');
  const mint = (0,lib.useMint)(auctionView === null || auctionView === void 0 ? void 0 : auctionView.auction.info.tokenMint);
  const {
    width
  } = useWindowDimensions();
  const {
    0: showHistoryModal,
    1: setShowHistoryModal
  } = (0,external_react_.useState)(false);
  const winnersCount = (auctionView === null || auctionView === void 0 ? void 0 : auctionView.auction.info.bidState.max.toNumber()) || 0;
  const activeBids = (auctionView === null || auctionView === void 0 ? void 0 : auctionView.auction.info.bidState.bids) || [];
  const activeBidders = (0,external_react_.useMemo)(() => {
    return new Set(activeBids.map(b => b.key));
  }, [activeBids]);
  const auctionState = auctionView ? auctionView.auction.info.state : lib.AuctionState.Created;
  const bidLines = (0,external_react_.useMemo)(() => {
    let activeBidIndex = 0;
    return bids.map((bid, index) => {
      let isCancelled = index < winnersCount && !!bid.info.cancelled || auctionState !== lib.AuctionState.Ended && !!bid.info.cancelled;

      let line = /*#__PURE__*/jsx_runtime_.jsx(BidLine, {
        bid: bid,
        index: activeBidIndex,
        mint: mint,
        isCancelled: isCancelled,
        isActive: !bid.info.cancelled
      }, index);

      if (!isCancelled) {
        activeBidIndex++;
      }

      return line;
    });
  }, [auctionState, bids, activeBidders]);
  if (!auctionView || bids.length < 1) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
    style: {
      width: '100%'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
      children: "Bid History"
    }), bidLines.slice(0, 10), bids.length > 10 && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "full-history",
      onClick: () => setShowHistoryModal(true),
      style: {
        cursor: 'pointer'
      },
      children: "View full history"
    }), /*#__PURE__*/jsx_runtime_.jsx(lib.MetaplexModal, {
      visible: showHistoryModal,
      onCancel: () => setShowHistoryModal(false),
      title: "Bid history",
      bodyStyle: {
        background: 'unset',
        boxShadow: 'unset',
        borderRadius: 0
      },
      centered: true,
      width: width < 768 ? width - 10 : 600,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          maxHeight: 600,
          overflowY: 'scroll',
          width: '100%'
        },
        children: bidLines
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/views/auctionCreate/artSelector.tsx




function artSelector_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = artSelector_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function artSelector_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ArtSelector = props => {
  const {
    selected,
    setSelected,
    allowMultiple
  } = props,
        rest = artSelector_objectWithoutProperties(props, ["selected", "setSelected", "allowMultiple"]);

  let items = useUserArts();
  if (props.filter) items = items.filter(props.filter);
  const selectedItems = (0,external_react_.useMemo)(() => new Set(selected.map(item => item.metadata.pubkey)), [selected]);
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(false);

  const open = () => {
    clear();
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  const clear = () => {
    setSelected([]);
  };

  const confirm = () => {
    close();
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_masonry_css_default()), {
      breakpointCols: breakpointColumnsObj,
      className: "my-masonry-grid",
      columnClassName: "my-masonry-grid_column",
      children: [selected.map(m => {
        let key = (m === null || m === void 0 ? void 0 : m.metadata.pubkey) || '';
        return /*#__PURE__*/jsx_runtime_.jsx(ArtCard, {
          pubkey: m.metadata.pubkey,
          preview: false,
          onClick: open,
          close: () => {
            setSelected(selected.filter(_ => _.metadata.pubkey !== key));
            confirm();
          }
        }, key);
      }), (allowMultiple || selectedItems.size === 0) && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ant-card ant-card-bordered ant-card-hoverable art-card",
        style: {
          width: 200,
          height: 300,
          display: 'flex'
        },
        onClick: open,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-center",
          children: "Add an NFT"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Modal, {
      visible: visible,
      onCancel: close,
      onOk: confirm,
      width: 1100,
      footer: null,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        className: "call-to-action",
        style: {
          marginBottom: 0
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Select the NFT you want to sell"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          style: {
            fontSize: '1.2rem'
          },
          children: "Select the NFT that you want to sell copy/copies of."
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        className: "content-action",
        style: {
          overflowY: 'auto',
          height: '50vh'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_masonry_css_default()), {
          breakpointCols: breakpointColumnsObj,
          className: "my-masonry-grid",
          columnClassName: "my-masonry-grid_column",
          children: items.map(m => {
            const id = m.metadata.pubkey;
            const isSelected = selectedItems.has(id);

            const onSelect = () => {
              let list = [...selectedItems.keys()];

              if (allowMultiple) {
                list = [];
              }

              const newSet = isSelected ? new Set(list.filter(item => item !== id)) : new Set([...list, id]);
              let selected = items.filter(item => newSet.has(item.metadata.pubkey));
              setSelected(selected);

              if (!allowMultiple) {
                confirm();
              }
            };

            return /*#__PURE__*/jsx_runtime_.jsx(ArtCard, {
              pubkey: m.metadata.pubkey,
              preview: false,
              onClick: onSelect,
              className: isSelected ? 'selected-card' : 'not-selected-card'
            }, id);
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          type: "primary",
          size: "large",
          onClick: confirm,
          className: "action-btn",
          children: "Confirm"
        })
      })]
    })]
  });
};
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3804);
;// CONCATENATED MODULE: ./src/actions/addTokensToVault.ts




const {
  createTokenAccount: addTokensToVault_createTokenAccount,
  addTokenToInactiveVault,
  VAULT_PREFIX: addTokensToVault_VAULT_PREFIX
} = lib.actions;
const {
  approve: addTokensToVault_approve
} = lib.models;
const addTokensToVault_BATCH_SIZE = 1; // This command batches out adding tokens to a vault using a prefilled payer account, and then activates and combines
// the vault for use. It issues a series of transaction instructions and signers for the sendTransactions batch.

async function addTokensToVault(connection, wallet, vault, nfts) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = lib.utils.programIds();
  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  const vaultAuthority = (await (0,lib.findProgramAddress)([Buffer.from(addTokensToVault_VAULT_PREFIX), (0,lib.toPublicKey)(PROGRAM_IDS.vault).toBuffer(), (0,lib.toPublicKey)(vault).toBuffer()], (0,lib.toPublicKey)(PROGRAM_IDS.vault)))[0];
  let batchCounter = 0;
  const signers = [];
  const instructions = [];
  const newStores = [];
  let currSigners = [];
  let currInstructions = [];

  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];

    if (nft.box.tokenAccount) {
      const newStoreAccount = addTokensToVault_createTokenAccount(currInstructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(nft.box.tokenMint), (0,lib.toPublicKey)(vaultAuthority), currSigners);
      newStores.push(newStoreAccount.toBase58());
      const transferAuthority = addTokensToVault_approve(currInstructions, [], (0,lib.toPublicKey)(nft.box.tokenAccount), wallet.publicKey, nft.box.amount.toNumber());
      currSigners.push(transferAuthority);
      await addTokenToInactiveVault(nft.draft.masterEdition && nft.draft.masterEdition.info.key === lib.MetadataKey.MasterEditionV2 ? new (external_bn_js_default())(1) : nft.box.amount, nft.box.tokenMint, nft.box.tokenAccount, newStoreAccount.toBase58(), vault, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), transferAuthority.publicKey.toBase58(), currInstructions);

      if (batchCounter === addTokensToVault_BATCH_SIZE) {
        signers.push(currSigners);
        instructions.push(currInstructions);
        batchCounter = 0;
        currSigners = [];
        currInstructions = [];
      }

      batchCounter++;
    }
  }

  if (instructions[instructions.length - 1] !== currInstructions) {
    signers.push(currSigners);
    instructions.push(currInstructions);
  }

  return {
    signers,
    instructions,
    safetyDepositTokenStores: newStores
  };
}
;// CONCATENATED MODULE: ./src/actions/createExternalPriceAccount.ts





const {
  updateExternalPriceAccount,
  ExternalPriceAccount,
  MAX_EXTERNAL_ACCOUNT_SIZE
} = lib.actions; // This command creates the external pricing oracle

async function createExternalPriceAccount(connection, wallet) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = lib.utils.programIds();
  const signers = [];
  const instructions = [];
  const epaRentExempt = await connection.getMinimumBalanceForRentExemption(MAX_EXTERNAL_ACCOUNT_SIZE);
  const externalPriceAccount = web3_js_.Keypair.generate();
  const key = externalPriceAccount.publicKey.toBase58();
  const epaStruct = new ExternalPriceAccount({
    pricePerShare: new (external_bn_js_default())(0),
    priceMint: QUOTE_MINT.toBase58(),
    allowedToCombine: true
  });
  const uninitializedEPA = web3_js_.SystemProgram.createAccount({
    fromPubkey: wallet.publicKey,
    newAccountPubkey: externalPriceAccount.publicKey,
    lamports: epaRentExempt,
    space: MAX_EXTERNAL_ACCOUNT_SIZE,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.vault)
  });
  instructions.push(uninitializedEPA);
  signers.push(externalPriceAccount);
  await updateExternalPriceAccount(key, epaStruct, instructions);
  return {
    externalPriceAccount: key,
    priceMint: QUOTE_MINT.toBase58(),
    instructions,
    signers
  };
}
;// CONCATENATED MODULE: ./src/models/metaplex/deprecatedValidateParticipation.ts





async function deprecatedValidateParticipation(auctionManager, openEditionMetadata, openEditionMasterAccount, printingAuthorizationHoldingAccount, auctionManagerAuthority, whitelistedCreatorEntry, store, safetyDepositBox, safetyDepositBoxTokenStore, vault, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const value = new DeprecatedValidateParticipationArgs();
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManager),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(openEditionMetadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(openEditionMasterAccount),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(printingAuthorizationHoldingAccount),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionManagerAuthority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(whitelistedCreatorEntry || web3_js_.SystemProgram.programId),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositBox),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositBoxTokenStore),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/actions/deprecatedCreateReservationListsForTokens.ts



const deprecatedCreateReservationListsForTokens_BATCH_SIZE = 10; // This command batches out creating reservation lists for those tokens who are being sold in PrintingV1 mode.
// Reservation lists are used to insure printing order among limited editions.

async function deprecatedCreateReservationListForTokens(wallet, auctionManager, safetyDepositInstructionTemplates) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  let batchCounter = 0;
  const signers = [];
  const instructions = [];
  let currSigners = [];
  let currInstructions = [];

  for (let i = 0; i < safetyDepositInstructionTemplates.length; i++) {
    const safetyDeposit = safetyDepositInstructionTemplates[i];
    if (safetyDeposit.config.winningConfigType === WinningConfigType.PrintingV1 && safetyDeposit.draft.masterEdition) await (0,lib.deprecatedCreateReservationList)(safetyDeposit.draft.metadata.pubkey, safetyDeposit.draft.masterEdition.pubkey, auctionManager, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), currInstructions);

    if (batchCounter === deprecatedCreateReservationListsForTokens_BATCH_SIZE) {
      signers.push(currSigners);
      instructions.push(currInstructions);
      batchCounter = 0;
      currSigners = [];
      currInstructions = [];
    }

    batchCounter++;
  }

  if (instructions[instructions.length - 1] !== currInstructions) {
    signers.push(currSigners);
    instructions.push(currInstructions);
  }

  return {
    signers,
    instructions
  };
}
;// CONCATENATED MODULE: ./src/actions/deprecatedPopulatePrintingTokens.ts



const deprecatedPopulatePrintingTokens_BATCH_SIZE = 4; // Printing tokens are minted on the fly as needed. We need to pre-mint them to give to the vault
// for all relevant NFTs.

async function deprecatedPopulatePrintingTokens(connection, wallet, safetyDepositConfigs) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = lib.utils.programIds();
  let batchCounter = 0;
  const signers = [];
  const instructions = [];
  let currSigners = [];
  let currInstructions = [];

  for (let i = 0; i < safetyDepositConfigs.length; i++) {
    var _nft$draft$masterEdit, _nft$draft$masterEdit2;

    const nft = safetyDepositConfigs[i];

    if (((_nft$draft$masterEdit = nft.draft.masterEdition) === null || _nft$draft$masterEdit === void 0 ? void 0 : _nft$draft$masterEdit.info.key) != lib.MetadataKey.MasterEditionV1) {
      continue;
    }

    const printingMint = (_nft$draft$masterEdit2 = nft.draft.masterEdition) === null || _nft$draft$masterEdit2 === void 0 ? void 0 : _nft$draft$masterEdit2.info.printingMint;

    if (nft.box.tokenMint === printingMint && !nft.box.tokenAccount) {
      const holdingKey = (await (0,lib.findProgramAddress)([wallet.publicKey.toBuffer(), PROGRAM_IDS.token.toBuffer(), (0,lib.toPublicKey)(printingMint).toBuffer()], PROGRAM_IDS.associatedToken))[0];
      (0,lib.createAssociatedTokenAccountInstruction)(currInstructions, (0,lib.toPublicKey)(holdingKey), wallet.publicKey, wallet.publicKey, (0,lib.toPublicKey)(printingMint));
      console.log('Making atas');
      nft.draft.printingMintHolding = holdingKey;
      nft.box.tokenAccount = holdingKey;
    }

    if (nft.box.tokenAccount && nft.box.tokenMint === printingMint) {
      let balance = 0;

      try {
        balance = (await connection.getTokenAccountBalance((0,lib.toPublicKey)(nft.box.tokenAccount))).value.uiAmount || 0;
      } catch (e) {
        console.error(e);
      }

      if (balance < nft.box.amount.toNumber() && nft.draft.masterEdition) await (0,lib.deprecatedMintPrintingTokens)(nft.box.tokenAccount, nft.box.tokenMint, wallet.publicKey.toBase58(), nft.draft.metadata.pubkey, nft.draft.masterEdition.pubkey, new (external_bn_js_default())(nft.box.amount.toNumber() - balance), currInstructions);
      batchCounter++;
    }

    if (batchCounter === deprecatedPopulatePrintingTokens_BATCH_SIZE) {
      signers.push(currSigners);
      instructions.push(currInstructions);
      batchCounter = 0;
      currSigners = [];
      currInstructions = [];
    }
  }

  if (instructions[instructions.length - 1] !== currInstructions) {
    signers.push(currSigners);
    instructions.push(currInstructions);
  }

  return {
    signers,
    instructions,
    safetyDepositConfigs
  };
}
;// CONCATENATED MODULE: ./src/actions/setVaultAndAuctionAuthorities.ts

 // This command sets the authorities on the vault and auction to be the newly created auction manager.

async function setVaultAndAuctionAuthorities(wallet, vault, auction, auctionManager) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const signers = [];
  const instructions = [];
  await (0,lib.setAuctionAuthority)(auction, wallet.publicKey.toBase58(), auctionManager, instructions);
  await (0,lib.setVaultAuthority)(vault, wallet.publicKey.toBase58(), auctionManager, instructions);
  return {
    instructions,
    signers
  };
}
;// CONCATENATED MODULE: ./src/actions/markItemsThatArentMineAsSold.ts


const SALE_TRANSACTION_SIZE = 10;
async function markItemsThatArentMineAsSold(wallet, safetyDepositDrafts) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const publicKey = wallet.publicKey.toBase58();
  const signers = [];
  const instructions = [];
  let markSigners = [];
  let markInstructions = []; // TODO replace all this with payer account so user doesnt need to click approve several times.

  for (let i = 0; i < safetyDepositDrafts.length; i++) {
    var _item$info$data$creat;

    const item = safetyDepositDrafts[i].metadata;

    if (!((_item$info$data$creat = item.info.data.creators) !== null && _item$info$data$creat !== void 0 && _item$info$data$creat.find(c => c.address === publicKey)) && !item.info.primarySaleHappened) {
      console.log('For token', item.info.data.name, 'marking it sold because i didnt make it but i want to keep proceeds');
      await (0,lib.updatePrimarySaleHappenedViaToken)(item.pubkey, publicKey, safetyDepositDrafts[i].holding, markInstructions);

      if (markInstructions.length === SALE_TRANSACTION_SIZE) {
        signers.push(markSigners);
        instructions.push(markInstructions);
        markSigners = [];
        markInstructions = [];
      }
    }
  }

  if (markInstructions.length < SALE_TRANSACTION_SIZE && markInstructions.length > 0) {
    signers.push(markSigners);
    instructions.push(markInstructions);
  }

  return {
    instructions,
    signers
  };
}
;// CONCATENATED MODULE: ./src/models/metaplex/validateSafetyDepositBoxV2.ts




async function validateSafetyDepositBoxV2(vault, metadata, safetyDepositBox, safetyDepositTokenStore, tokenMint, auctionManagerAuthority, metadataAuthority, payer, instructions, edition, whitelistedCreator, store, safetyDepositConfig) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const originalAuthorityLookup = await metaplex_getOriginalAuthority(auctionKey, metadata);
  const safetyDepositConfigKey = await getSafetyDepositConfig(auctionManagerKey, safetyDepositBox);
  const tokenTracker = await getAuctionWinnerTokenTypeTracker(auctionManagerKey);
  const value = new ValidateSafetyDepositBoxV2Args(safetyDepositConfig);
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(safetyDepositConfigKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(tokenTracker),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(metadata),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(originalAuthorityLookup),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(whitelistedCreator || web3_js_.SystemProgram.programId),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositBox),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(safetyDepositTokenStore),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(tokenMint),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(edition),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionManagerAuthority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(metadataAuthority),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(PROGRAM_IDS.metadata),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/models/metaplex/initAuctionManagerV2.ts




async function initAuctionManagerV2(vault, auctionManagerAuthority, payer, acceptPaymentAccount, store, amountType, lengthType, maxRanges, instructions) {
  const PROGRAM_IDS = (0,lib.programIds)();
  const {
    auctionKey,
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const value = new InitAuctionManagerV2Args({
    amountType,
    lengthType,
    maxRanges
  });
  const tokenTracker = await getAuctionWinnerTokenTypeTracker(auctionManagerKey);
  const data = Buffer.from((0,external_borsh_.serialize)(metaplex_SCHEMA, value));
  const keys = [{
    pubkey: (0,lib.toPublicKey)(auctionManagerKey),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(tokenTracker),
    isSigner: false,
    isWritable: true
  }, {
    pubkey: (0,lib.toPublicKey)(vault),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionKey),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(auctionManagerAuthority),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(payer),
    isSigner: true,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(acceptPaymentAccount),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: (0,lib.toPublicKey)(store),
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: web3_js_.SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  instructions.push(new web3_js_.TransactionInstruction({
    keys,
    programId: (0,lib.toPublicKey)(PROGRAM_IDS.metaplex),
    data
  }));
}
;// CONCATENATED MODULE: ./src/actions/createAuctionManager.ts


















const {
  createTokenAccount: createAuctionManager_createTokenAccount
} = lib.actions;
// This is a super command that executes many transactions to create a Vault, Auction, and AuctionManager starting
// from some AuctionManagerSettings.
async function createAuctionManager(connection, wallet, whitelistedCreatorsByCreator, auctionSettings, safetyDepositDrafts, participationSafetyDepositDraft, paymentMint) {
  var _participationSafetyD, _lookup$deprecatedBui, _lookup$deprecatedVal, _lookup$deprecatedBui2, _lookup$deprecatedVal2;

  const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_.AccountLayout.span);
  const {
    externalPriceAccount,
    priceMint,
    instructions: epaInstructions,
    signers: epaSigners
  } = await createExternalPriceAccount(connection, wallet);
  const {
    instructions: createVaultInstructions,
    signers: createVaultSigners,
    vault,
    fractionalMint,
    redeemTreasury,
    fractionTreasury
  } = await createVault(connection, wallet, priceMint, externalPriceAccount);
  const {
    instructions: makeAuctionInstructions,
    signers: makeAuctionSigners,
    auction
  } = await makeAuction(wallet, vault, auctionSettings);
  const safetyDepositConfigsWithPotentiallyUnsetTokens = await buildSafetyDepositArray(wallet, safetyDepositDrafts, participationSafetyDepositDraft); // Only creates for PrintingV1 deprecated configs

  const {
    instructions: populateInstr,
    signers: populateSigners,
    safetyDepositConfigs
  } = await deprecatedPopulatePrintingTokens(connection, wallet, safetyDepositConfigsWithPotentiallyUnsetTokens);
  const {
    instructions: auctionManagerInstructions,
    signers: auctionManagerSigners,
    auctionManager
  } = await setupAuctionManagerInstructions(wallet, vault, paymentMint, accountRentExempt, safetyDepositConfigs, auctionSettings);
  const {
    instructions: addTokenInstructions,
    signers: addTokenSigners,
    safetyDepositTokenStores
  } = await addTokensToVault(connection, wallet, vault, safetyDepositConfigs); // Only creates for deprecated PrintingV1 configs

  const {
    instructions: createReservationInstructions,
    signers: createReservationSigners
  } = await deprecatedCreateReservationListForTokens(wallet, auctionManager, safetyDepositConfigs);
  const lookup = {
    markItemsThatArentMineAsSold: await markItemsThatArentMineAsSold(wallet, safetyDepositDrafts),
    externalPriceAccount: {
      instructions: epaInstructions,
      signers: epaSigners
    },
    createVault: {
      instructions: createVaultInstructions,
      signers: createVaultSigners
    },
    closeVault: await closeVault(connection, wallet, vault, fractionalMint, fractionTreasury, redeemTreasury, priceMint, externalPriceAccount),
    addTokens: {
      instructions: addTokenInstructions,
      signers: addTokenSigners
    },
    deprecatedCreateReservationList: {
      instructions: createReservationInstructions,
      signers: createReservationSigners
    },
    makeAuction: {
      instructions: makeAuctionInstructions,
      signers: makeAuctionSigners
    },
    initAuctionManager: {
      instructions: auctionManagerInstructions,
      signers: auctionManagerSigners
    },
    setVaultAndAuctionAuthorities: await setVaultAndAuctionAuthorities(wallet, vault, auction, auctionManager),
    startAuction: await setupStartAuction(wallet, vault),
    deprecatedValidateParticipation: participationSafetyDepositDraft ? await deprecatedValidateParticipationHelper(wallet, auctionManager, whitelistedCreatorsByCreator, vault, safetyDepositTokenStores[safetyDepositTokenStores.length - 1], // The last one is always the participation
    participationSafetyDepositDraft, accountRentExempt) : undefined,
    deprecatedBuildAndPopulateOneTimeAuthorizationAccount: participationSafetyDepositDraft ? await deprecatedBuildAndPopulateOneTimeAuthorizationAccount(connection, wallet, participationSafetyDepositDraft === null || participationSafetyDepositDraft === void 0 ? void 0 : (_participationSafetyD = participationSafetyDepositDraft.masterEdition) === null || _participationSafetyD === void 0 ? void 0 : _participationSafetyD.info.oneTimePrintingAuthorizationMint) : undefined,
    validateBoxes: await validateBoxes(wallet, whitelistedCreatorsByCreator, vault, // Participation NFTs validate differently, with above
    safetyDepositConfigs.filter(c => {
      var _participationSafetyD2, _participationSafetyD3;

      return !participationSafetyDepositDraft || // Only V1s need to skip normal validation and use special endpoint
      ((_participationSafetyD2 = participationSafetyDepositDraft.masterEdition) === null || _participationSafetyD2 === void 0 ? void 0 : _participationSafetyD2.info.key) == lib.MetadataKey.MasterEditionV1 && c.draft.metadata.pubkey !== participationSafetyDepositDraft.metadata.pubkey || ((_participationSafetyD3 = participationSafetyDepositDraft.masterEdition) === null || _participationSafetyD3 === void 0 ? void 0 : _participationSafetyD3.info.key) == lib.MetadataKey.MasterEditionV2;
    }), safetyDepositTokenStores),
    deprecatedPopulatePrintingTokens: {
      instructions: populateInstr,
      signers: populateSigners
    }
  };
  const signers = [...lookup.markItemsThatArentMineAsSold.signers, lookup.externalPriceAccount.signers, ((_lookup$deprecatedBui = lookup.deprecatedBuildAndPopulateOneTimeAuthorizationAccount) === null || _lookup$deprecatedBui === void 0 ? void 0 : _lookup$deprecatedBui.signers) || [], ...lookup.deprecatedPopulatePrintingTokens.signers, lookup.createVault.signers, ...lookup.addTokens.signers, ...lookup.deprecatedCreateReservationList.signers, lookup.closeVault.signers, lookup.makeAuction.signers, lookup.initAuctionManager.signers, lookup.setVaultAndAuctionAuthorities.signers, ((_lookup$deprecatedVal = lookup.deprecatedValidateParticipation) === null || _lookup$deprecatedVal === void 0 ? void 0 : _lookup$deprecatedVal.signers) || [], ...lookup.validateBoxes.signers, lookup.startAuction.signers];
  const toRemoveSigners = {};
  let instructions = [...lookup.markItemsThatArentMineAsSold.instructions, lookup.externalPriceAccount.instructions, ((_lookup$deprecatedBui2 = lookup.deprecatedBuildAndPopulateOneTimeAuthorizationAccount) === null || _lookup$deprecatedBui2 === void 0 ? void 0 : _lookup$deprecatedBui2.instructions) || [], ...lookup.deprecatedPopulatePrintingTokens.instructions, lookup.createVault.instructions, ...lookup.addTokens.instructions, ...lookup.deprecatedCreateReservationList.instructions, lookup.closeVault.instructions, lookup.makeAuction.instructions, lookup.initAuctionManager.instructions, lookup.setVaultAndAuctionAuthorities.instructions, ((_lookup$deprecatedVal2 = lookup.deprecatedValidateParticipation) === null || _lookup$deprecatedVal2 === void 0 ? void 0 : _lookup$deprecatedVal2.instructions) || [], ...lookup.validateBoxes.instructions, lookup.startAuction.instructions].filter((instr, i) => {
    if (instr.length > 0) {
      return true;
    } else {
      toRemoveSigners[i] = true;
      return false;
    }
  });
  let filteredSigners = signers.filter((_, i) => !toRemoveSigners[i]);
  let stopPoint = 0;
  let tries = 0;
  let lastInstructionsLength = null;

  while (stopPoint < instructions.length && tries < 3) {
    instructions = instructions.slice(stopPoint, instructions.length);
    filteredSigners = filteredSigners.slice(stopPoint, filteredSigners.length);
    if (instructions.length === lastInstructionsLength) tries = tries + 1;else tries = 0;

    try {
      if (instructions.length === 1) {
        await (0,lib.sendTransactionWithRetry)(connection, wallet, instructions[0], filteredSigners[0], 'single');
        stopPoint = 1;
      } else {
        stopPoint = await (0,lib.sendTransactions)(connection, wallet, instructions, filteredSigners, lib.SequenceType.StopOnFailure, 'single');
      }
    } catch (e) {
      console.error(e);
    }

    console.log('Died on ', stopPoint, 'retrying from instruction', instructions[stopPoint], 'instructions length is', instructions.length);
    lastInstructionsLength = instructions.length;
  }

  if (stopPoint < instructions.length) throw new Error('Failed to create');
  return {
    vault,
    auction,
    auctionManager
  };
}

async function buildSafetyDepositArray(wallet, safetyDeposits, participationSafetyDepositDraft) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const safetyDepositTemplates = [];
  safetyDeposits.forEach((s, i) => {
    var _s$masterEdition;

    const maxAmount = [...s.amountRanges.map(a => a.amount)].sort().reverse()[0];
    const maxLength = [...s.amountRanges.map(a => a.length)].sort().reverse()[0];
    safetyDepositTemplates.push({
      box: {
        tokenAccount: s.winningConfigType !== WinningConfigType.PrintingV1 ? s.holding : s.printingMintHolding,
        tokenMint: s.winningConfigType !== WinningConfigType.PrintingV1 ? s.metadata.info.mint : (_s$masterEdition = s.masterEdition) === null || _s$masterEdition === void 0 ? void 0 : _s$masterEdition.info.printingMint,
        amount: s.winningConfigType == WinningConfigType.PrintingV2 || s.winningConfigType == WinningConfigType.FullRightsTransfer ? new (external_bn_js_default())(1) : new (external_bn_js_default())(s.amountRanges.reduce((acc, r) => acc.add(r.amount.mul(r.length)), new (external_bn_js_default())(0)))
      },
      config: new SafetyDepositConfig({
        directArgs: {
          auctionManager: web3_js_.SystemProgram.programId.toBase58(),
          order: new (external_bn_js_default())(i),
          amountRanges: s.amountRanges,
          amountType: maxAmount.gte(new (external_bn_js_default())(254)) ? TupleNumericType.U16 : TupleNumericType.U8,
          lengthType: maxLength.gte(new (external_bn_js_default())(254)) ? TupleNumericType.U16 : TupleNumericType.U8,
          winningConfigType: s.winningConfigType,
          participationConfig: null,
          participationState: null
        }
      }),
      draft: s
    });
  });

  if (participationSafetyDepositDraft && participationSafetyDepositDraft.masterEdition) {
    const maxAmount = [...participationSafetyDepositDraft.amountRanges.map(s => s.amount)].sort().reverse()[0];
    const maxLength = [...participationSafetyDepositDraft.amountRanges.map(s => s.length)].sort().reverse()[0];
    const config = new SafetyDepositConfig({
      directArgs: {
        auctionManager: web3_js_.SystemProgram.programId.toBase58(),
        order: new (external_bn_js_default())(safetyDeposits.length),
        amountRanges: participationSafetyDepositDraft.amountRanges,
        amountType: maxAmount !== null && maxAmount !== void 0 && maxAmount.gte(new (external_bn_js_default())(255)) ? TupleNumericType.U32 : TupleNumericType.U8,
        lengthType: maxLength !== null && maxLength !== void 0 && maxLength.gte(new (external_bn_js_default())(255)) ? TupleNumericType.U32 : TupleNumericType.U8,
        winningConfigType: WinningConfigType.Participation,
        participationConfig: participationSafetyDepositDraft.participationConfig || null,
        participationState: new ParticipationStateV2({
          collectedToAcceptPayment: new (external_bn_js_default())(0)
        })
      }
    });

    if (participationSafetyDepositDraft.masterEdition.info.key == lib.MetadataKey.MasterEditionV1) {
      const me = participationSafetyDepositDraft.masterEdition;
      safetyDepositTemplates.push({
        box: {
          tokenAccount: (await (0,lib.findProgramAddress)([wallet.publicKey.toBuffer(), (0,lib.programIds)().token.toBuffer(), (0,lib.toPublicKey)(me === null || me === void 0 ? void 0 : me.info.oneTimePrintingAuthorizationMint).toBuffer()], (0,lib.programIds)().associatedToken))[0],
          tokenMint: me === null || me === void 0 ? void 0 : me.info.oneTimePrintingAuthorizationMint,
          amount: new (external_bn_js_default())(1)
        },
        config,
        draft: participationSafetyDepositDraft
      });
    } else {
      safetyDepositTemplates.push({
        box: {
          tokenAccount: participationSafetyDepositDraft.holding,
          tokenMint: participationSafetyDepositDraft.metadata.info.mint,
          amount: new (external_bn_js_default())(1)
        },
        config,
        draft: participationSafetyDepositDraft
      });
    }
  }

  console.log('Temps', safetyDepositTemplates);
  return safetyDepositTemplates;
}

async function setupAuctionManagerInstructions(wallet, vault, paymentMint, accountRentExempt, safetyDeposits, auctionSettings) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const store = (0,lib.programIds)().store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const signers = [];
  const instructions = [];
  const {
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault);
  const acceptPayment = createAuctionManager_createTokenAccount(instructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(paymentMint), (0,lib.toPublicKey)(auctionManagerKey), signers).toBase58();
  let maxRanges = [auctionSettings.winners.usize.toNumber(), safetyDeposits.length, 100].sort()[0];

  if (maxRanges < 10) {
    maxRanges = 10;
  }

  await initAuctionManagerV2(vault, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), acceptPayment, store, safetyDeposits.length >= 254 ? TupleNumericType.U16 : TupleNumericType.U8, auctionSettings.winners.usize.toNumber() >= 254 ? TupleNumericType.U16 : TupleNumericType.U8, new (external_bn_js_default())(maxRanges), instructions);
  return {
    instructions,
    signers,
    auctionManager: auctionManagerKey
  };
}

async function setupStartAuction(wallet, vault) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const signers = [];
  const instructions = [];
  await startAuction(vault, wallet.publicKey.toBase58(), instructions);
  return {
    instructions,
    signers
  };
}

async function deprecatedValidateParticipationHelper(wallet, auctionManager, whitelistedCreatorsByCreator, vault, tokenStore, participationSafetyDepositDraft, accountRentExempt) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const store = (0,lib.programIds)().store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const instructions = [];
  const signers = [];
  const whitelistedCreator = participationSafetyDepositDraft.metadata.info.data.creators ? await findValidWhitelistedCreator(whitelistedCreatorsByCreator, //@ts-ignore
  participationSafetyDepositDraft.metadata.info.data.creators) : undefined;
  const {
    auctionManagerKey
  } = await metaplex_getAuctionKeys(vault); // V2s do not need to call this special endpoint.

  if (participationSafetyDepositDraft.masterEdition && participationSafetyDepositDraft.masterEdition.info.key == lib.MetadataKey.MasterEditionV1) {
    var _participationSafetyD4;

    const me = participationSafetyDepositDraft.masterEdition;
    const printingTokenHoldingAccount = createAuctionManager_createTokenAccount(instructions, wallet.publicKey, accountRentExempt, (0,lib.toPublicKey)(me.info.printingMint), (0,lib.toPublicKey)(auctionManagerKey), signers).toBase58();
    await deprecatedValidateParticipation(auctionManager, participationSafetyDepositDraft.metadata.pubkey, (_participationSafetyD4 = participationSafetyDepositDraft.masterEdition) === null || _participationSafetyD4 === void 0 ? void 0 : _participationSafetyD4.pubkey, printingTokenHoldingAccount, wallet.publicKey.toBase58(), whitelistedCreator, store, await (0,lib.getSafetyDepositBoxAddress)(vault, me.info.oneTimePrintingAuthorizationMint), tokenStore, vault, instructions);
  }

  return {
    instructions,
    signers
  };
}

async function findValidWhitelistedCreator(whitelistedCreatorsByCreator, creators) {
  var _creators$;

  for (let i = 0; i < creators.length; i++) {
    var _whitelistedCreatorsB;

    const creator = creators[i];
    if ((_whitelistedCreatorsB = whitelistedCreatorsByCreator[creator.address]) !== null && _whitelistedCreatorsB !== void 0 && _whitelistedCreatorsB.info.activated) return whitelistedCreatorsByCreator[creator.address].pubkey;
  }

  return await metaplex_getWhitelistedCreator((_creators$ = creators[0]) === null || _creators$ === void 0 ? void 0 : _creators$.address);
}

async function validateBoxes(wallet, whitelistedCreatorsByCreator, vault, safetyDeposits, safetyDepositTokenStores) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const store = (0,lib.programIds)().store;

  if (!store) {
    throw new Error('Store not initialized');
  }

  const signers = [];
  const instructions = [];

  for (let i = 0; i < safetyDeposits.length; i++) {
    const tokenSigners = [];
    const tokenInstructions = [];
    let safetyDepositBox;
    const me = safetyDeposits[i].draft.masterEdition;

    if (safetyDeposits[i].config.winningConfigType === WinningConfigType.PrintingV1 && me && me.info.printingMint) {
      safetyDepositBox = await (0,lib.getSafetyDepositBox)(vault, //@ts-ignore
      safetyDeposits[i].draft.masterEdition.info.printingMint);
    } else {
      safetyDepositBox = await (0,lib.getSafetyDepositBox)(vault, safetyDeposits[i].draft.metadata.info.mint);
    }

    const edition = await (0,lib.getEdition)(safetyDeposits[i].draft.metadata.info.mint);
    const whitelistedCreator = safetyDeposits[i].draft.metadata.info.data.creators ? await findValidWhitelistedCreator(whitelistedCreatorsByCreator, //@ts-ignore
    safetyDeposits[i].draft.metadata.info.data.creators) : undefined;
    await validateSafetyDepositBoxV2(vault, safetyDeposits[i].draft.metadata.pubkey, safetyDepositBox, safetyDepositTokenStores[i], safetyDeposits[i].config.winningConfigType === WinningConfigType.PrintingV1 ? me === null || me === void 0 ? void 0 : me.info.printingMint : safetyDeposits[i].draft.metadata.info.mint, wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), wallet.publicKey.toBase58(), tokenInstructions, edition, whitelistedCreator, store, safetyDeposits[i].config);
    signers.push(tokenSigners);
    instructions.push(tokenInstructions);
  }

  return {
    instructions,
    signers
  };
}

async function deprecatedBuildAndPopulateOneTimeAuthorizationAccount(connection, wallet, oneTimePrintingAuthorizationMint) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  if (!oneTimePrintingAuthorizationMint) return {
    instructions: [],
    signers: []
  };
  const signers = [];
  const instructions = [];
  const recipientKey = (await (0,lib.findProgramAddress)([wallet.publicKey.toBuffer(), (0,lib.programIds)().token.toBuffer(), (0,lib.toPublicKey)(oneTimePrintingAuthorizationMint).toBuffer()], (0,lib.programIds)().associatedToken))[0];

  if (!(await connection.getAccountInfo((0,lib.toPublicKey)(recipientKey)))) {
    (0,lib.createAssociatedTokenAccountInstruction)(instructions, (0,lib.toPublicKey)(recipientKey), wallet.publicKey, wallet.publicKey, (0,lib.toPublicKey)(oneTimePrintingAuthorizationMint));
  }

  instructions.push(spl_token_.Token.createMintToInstruction((0,lib.programIds)().token, (0,lib.toPublicKey)(oneTimePrintingAuthorizationMint), (0,lib.toPublicKey)(recipientKey), wallet.publicKey, [], 1));
  return {
    instructions,
    signers
  };
}
;// CONCATENATED MODULE: ./src/components/DateTimePicker/index.tsx




function DateTimePicker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DateTimePicker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DateTimePicker_ownKeys(Object(source), true).forEach(function (key) { DateTimePicker_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DateTimePicker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DateTimePicker_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DateTimePicker = props => {
  const {
    momentObj,
    setMomentObj,
    datePickerProps = {},
    timePickerProps = {}
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.DatePicker, DateTimePicker_objectSpread({
      className: "field-date",
      size: "large",
      value: momentObj,
      onChange: value => {
        if (!value) return;
        if (!momentObj) return setMomentObj(value);
        const currentMoment = momentObj.clone();
        currentMoment.year(value.year());
        currentMoment.month(value.month());
        currentMoment.date(value.date());
        setMomentObj(currentMoment);
      }
    }, datePickerProps)), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.TimePicker, DateTimePicker_objectSpread({
      className: "field-date",
      size: "large",
      value: momentObj,
      onChange: value => {
        if (!value) return;
        if (!momentObj) return setMomentObj(value);
        const currentMoment = momentObj.clone();
        currentMoment.hour(value.hour());
        currentMoment.minute(value.minute());
        currentMoment.second(value.second());
        setMomentObj(currentMoment);
      }
    }, timePickerProps))]
  });
};
;// CONCATENATED MODULE: ./src/views/auctionCreate/index.tsx




function auctionCreate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auctionCreate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auctionCreate_ownKeys(Object(source), true).forEach(function (key) { auctionCreate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auctionCreate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auctionCreate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const {
  Option
} = external_antd_.Select;
const {
  Step: auctionCreate_Step
} = external_antd_.Steps;
const {
  ZERO
} = lib.constants;
let AuctionCategory;

(function (AuctionCategory) {
  AuctionCategory[AuctionCategory["Limited"] = 0] = "Limited";
  AuctionCategory[AuctionCategory["Single"] = 1] = "Single";
  AuctionCategory[AuctionCategory["Open"] = 2] = "Open";
  AuctionCategory[AuctionCategory["Tiered"] = 3] = "Tiered";
})(AuctionCategory || (AuctionCategory = {}));

const AuctionCreateView = () => {
  const connection = (0,lib.useConnection)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const {
    whitelistedCreatorsByCreator
  } = meta_useMeta();
  const {
    step_param
  } = (0,external_react_router_dom_.useParams)();
  const history = (0,external_react_router_dom_.useHistory)();
  const mint = (0,lib.useMint)(QUOTE_MINT);
  const {
    width
  } = useWindowDimensions();
  const {
    0: step,
    1: setStep
  } = (0,external_react_.useState)(0);
  const {
    0: stepsVisible,
    1: setStepsVisible
  } = (0,external_react_.useState)(true);
  const {
    0: auctionObj,
    1: setAuctionObj
  } = (0,external_react_.useState)(undefined);
  const {
    0: attributes,
    1: setAttributes
  } = (0,external_react_.useState)({
    reservationPrice: 0,
    items: [],
    category: AuctionCategory.Open,
    saleType: 'auction',
    auctionDurationType: 'minutes',
    gapTimeType: 'minutes',
    winnersCount: 1,
    startSaleTS: undefined,
    startListTS: undefined
  });
  const {
    0: tieredAttributes,
    1: setTieredAttributes
  } = (0,external_react_.useState)({
    items: [],
    tiers: []
  });
  (0,external_react_.useEffect)(() => {
    if (step_param) setStep(parseInt(step_param));else gotoNextStep(0);
  }, [step_param]);

  const gotoNextStep = _step => {
    const nextStep = _step === undefined ? step + 1 : _step;
    history.push(`/auction/create/${nextStep.toString()}`);
  };

  const createAuction = async () => {
    let winnerLimit;

    if (attributes.category === AuctionCategory.Open) {
      if (attributes.items.length > 0 && attributes.items[0].participationConfig) {
        attributes.items[0].participationConfig.fixedPrice = new (external_bn_js_default())((0,lib.toLamports)(attributes.participationFixedPrice, mint) || 0);
      }

      winnerLimit = new lib.WinnerLimit({
        type: lib.WinnerLimitType.Unlimited,
        usize: ZERO
      });
    } else if (attributes.category === AuctionCategory.Limited || attributes.category === AuctionCategory.Single) {
      if (attributes.items.length > 0) {
        const item = attributes.items[0];

        if (attributes.category == AuctionCategory.Single && item.masterEdition) {
          item.winningConfigType = item.metadata.info.updateAuthority === ((wallet === null || wallet === void 0 ? void 0 : wallet.publicKey) || web3_js_.SystemProgram.programId).toBase58() ? WinningConfigType.FullRightsTransfer : WinningConfigType.TokenOnlyTransfer;
        }

        item.amountRanges = [new AmountRange({
          amount: new (external_bn_js_default())(1),
          length: attributes.category === AuctionCategory.Single ? new (external_bn_js_default())(1) : new (external_bn_js_default())(attributes.editions || 1)
        })];
      }

      winnerLimit = new lib.WinnerLimit({
        type: lib.WinnerLimitType.Capped,
        usize: attributes.category === AuctionCategory.Single ? new (external_bn_js_default())(1) : new (external_bn_js_default())(attributes.editions || 1)
      });

      if (attributes.participationNFT && attributes.participationNFT.participationConfig) {
        attributes.participationNFT.participationConfig.fixedPrice = new (external_bn_js_default())((0,lib.toLamports)(attributes.participationFixedPrice, mint) || 0);
      }
    } else {
      const tiers = tieredAttributes.tiers;
      tiers.forEach(c => c.items = c.items.filter(i => i.winningConfigType !== undefined));
      let filteredTiers = tiers.filter(i => i.items.length > 0 && i.winningSpots.length > 0);
      tieredAttributes.items.forEach((config, index) => {
        let ranges = [];
        filteredTiers.forEach(tier => {
          const tierRangeLookup = {};
          const tierRanges = [];
          const item = tier.items.find(i => i.safetyDepositBoxIndex == index);

          if (item) {
            config.winningConfigType = item.winningConfigType;
            const sorted = tier.winningSpots.sort();
            sorted.forEach((spot, i) => {
              if (tierRangeLookup[spot - 1]) {
                tierRangeLookup[spot] = tierRangeLookup[spot - 1];
                tierRangeLookup[spot].length = tierRangeLookup[spot].length.add(new (external_bn_js_default())(1));
              } else {
                tierRangeLookup[spot] = new AmountRange({
                  amount: new (external_bn_js_default())(item.amount),
                  length: new (external_bn_js_default())(1)
                }); // If the first spot with anything is winner spot 1, you want a section of 0 covering winning
                // spot 0.
                // If we have a gap, we want a gap area covered with zeroes.

                const zeroLength = i - 1 > 0 ? spot - sorted[i - 1] - 1 : spot;

                if (zeroLength > 0) {
                  tierRanges.push(new AmountRange({
                    amount: new (external_bn_js_default())(0),
                    length: new (external_bn_js_default())(zeroLength)
                  }));
                }

                tierRanges.push(tierRangeLookup[spot]);
              }
            }); // Ok now we have combined ranges from this tier range. Now we merge them into the ranges
            // at the top level.

            let oldRanges = ranges;
            ranges = [];
            let oldRangeCtr = 0,
                tierRangeCtr = 0;

            while (oldRangeCtr < oldRanges.length || tierRangeCtr < tierRanges.length) {
              let toAdd = new (external_bn_js_default())(0);

              if (tierRangeCtr < tierRanges.length && tierRanges[tierRangeCtr].amount.gt(new (external_bn_js_default())(0))) {
                toAdd = tierRanges[tierRangeCtr].amount;
              }

              if (oldRangeCtr == oldRanges.length) {
                ranges.push(new AmountRange({
                  amount: toAdd,
                  length: tierRanges[tierRangeCtr].length
                }));
                tierRangeCtr++;
              } else if (tierRangeCtr == tierRanges.length) {
                ranges.push(oldRanges[oldRangeCtr]);
                oldRangeCtr++;
              } else if (oldRanges[oldRangeCtr].length.gt(tierRanges[tierRangeCtr].length)) {
                oldRanges[oldRangeCtr].length = oldRanges[oldRangeCtr].length.sub(tierRanges[tierRangeCtr].length);
                ranges.push(new AmountRange({
                  amount: oldRanges[oldRangeCtr].amount.add(toAdd),
                  length: tierRanges[tierRangeCtr].length
                }));
                tierRangeCtr += 1; // dont increment oldRangeCtr since i still have length to give
              } else if (tierRanges[tierRangeCtr].length.gt(oldRanges[oldRangeCtr].length)) {
                tierRanges[tierRangeCtr].length = tierRanges[tierRangeCtr].length.sub(oldRanges[oldRangeCtr].length);
                ranges.push(new AmountRange({
                  amount: oldRanges[oldRangeCtr].amount.add(toAdd),
                  length: oldRanges[oldRangeCtr].length
                }));
                oldRangeCtr += 1; // dont increment tierRangeCtr since they still have length to give
              } else if (tierRanges[tierRangeCtr].length.eq(oldRanges[oldRangeCtr].length)) {
                ranges.push(new AmountRange({
                  amount: oldRanges[oldRangeCtr].amount.add(toAdd),
                  length: oldRanges[oldRangeCtr].length
                })); // Move them both in this degen case

                oldRangeCtr++;
                tierRangeCtr++;
              }
            }
          }
        });
        console.log('Ranges');
        config.amountRanges = ranges;
      });
      winnerLimit = new lib.WinnerLimit({
        type: lib.WinnerLimitType.Capped,
        usize: new (external_bn_js_default())(attributes.winnersCount)
      });

      if (attributes.participationNFT && attributes.participationNFT.participationConfig) {
        attributes.participationNFT.participationConfig.fixedPrice = new (external_bn_js_default())((0,lib.toLamports)(attributes.participationFixedPrice, mint) || 0);
      }

      console.log('Tiered settings', tieredAttributes.items);
    }

    const auctionSettings = {
      winners: winnerLimit,
      endAuctionAt: new (external_bn_js_default())((attributes.auctionDuration || 0) * (attributes.auctionDurationType == 'days' ? 60 * 60 * 24 // 1 day in seconds
      : attributes.auctionDurationType == 'hours' ? 60 * 60 // 1 hour in seconds
      : 60)),
      // endAuctionAt is actually auction duration, poorly named, in seconds
      auctionGap: new (external_bn_js_default())((attributes.gapTime || 0) * (attributes.gapTimeType == 'days' ? 60 * 60 * 24 // 1 day in seconds
      : attributes.gapTimeType == 'hours' ? 60 * 60 // 1 hour in seconds
      : 60)),
      priceFloor: new lib.PriceFloor({
        type: attributes.priceFloor ? lib.PriceFloorType.Minimum : lib.PriceFloorType.None,
        minPrice: new (external_bn_js_default())((attributes.priceFloor || 0) * web3_js_.LAMPORTS_PER_SOL)
      }),
      tokenMint: QUOTE_MINT.toBase58(),
      gapTickSizePercentage: attributes.tickSizeEndingPhase || null,
      tickSize: attributes.priceTick ? new (external_bn_js_default())(attributes.priceTick * web3_js_.LAMPORTS_PER_SOL) : null
    };

    const _auctionObj = await createAuctionManager(connection, wallet, whitelistedCreatorsByCreator, auctionSettings, attributes.category === AuctionCategory.Open ? [] : attributes.category !== AuctionCategory.Tiered ? attributes.items : tieredAttributes.items, attributes.category === AuctionCategory.Open ? attributes.items[0] : attributes.participationNFT, QUOTE_MINT.toBase58());

    setAuctionObj(_auctionObj);
  };

  const categoryStep = /*#__PURE__*/jsx_runtime_.jsx(auctionCreate_CategoryStep, {
    confirm: category => {
      setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, attributes), {}, {
        category
      }));
      gotoNextStep();
    }
  });

  const copiesStep = /*#__PURE__*/jsx_runtime_.jsx(CopiesStep, {
    attributes: attributes,
    setAttributes: setAttributes,
    confirm: () => gotoNextStep()
  });

  const winnersStep = /*#__PURE__*/jsx_runtime_.jsx(NumberOfWinnersStep, {
    attributes: attributes,
    setAttributes: setAttributes,
    confirm: () => gotoNextStep()
  });

  const typeStep = /*#__PURE__*/jsx_runtime_.jsx(SaleTypeStep, {
    attributes: attributes,
    setAttributes: setAttributes,
    confirm: () => gotoNextStep()
  });

  const priceStep = /*#__PURE__*/jsx_runtime_.jsx(PriceStep, {
    attributes: attributes,
    setAttributes: setAttributes,
    confirm: () => gotoNextStep()
  });

  const initialStep = /*#__PURE__*/jsx_runtime_.jsx(InitialPhaseStep, {
    attributes: attributes,
    setAttributes: setAttributes,
    confirm: () => gotoNextStep()
  });

  const endingStep = /*#__PURE__*/jsx_runtime_.jsx(EndingPhaseStep, {
    attributes: attributes,
    setAttributes: setAttributes,
    confirm: () => gotoNextStep()
  });

  const participationStep = /*#__PURE__*/jsx_runtime_.jsx(ParticipationStep, {
    attributes: attributes,
    setAttributes: setAttributes,
    confirm: () => gotoNextStep()
  });

  const tierTableStep = /*#__PURE__*/jsx_runtime_.jsx(TierTableStep, {
    attributes: tieredAttributes,
    setAttributes: setTieredAttributes,
    maxWinners: attributes.winnersCount,
    confirm: () => gotoNextStep()
  });

  const reviewStep = /*#__PURE__*/jsx_runtime_.jsx(ReviewStep, {
    attributes: attributes,
    setAttributes: setAttributes,
    confirm: () => {
      setStepsVisible(false);
      gotoNextStep();
    },
    connection: connection
  });

  const waitStep = /*#__PURE__*/jsx_runtime_.jsx(auctionCreate_WaitingStep, {
    createAuction: createAuction,
    confirm: () => gotoNextStep()
  });

  const congratsStep = /*#__PURE__*/jsx_runtime_.jsx(auctionCreate_Congrats, {
    auction: auctionObj
  });

  const stepsByCategory = {
    [AuctionCategory.Limited]: [['Category', categoryStep], ['Copies', copiesStep], ['Sale Type', typeStep], ['Price', priceStep], ['Initial Phase', initialStep], ['Ending Phase', endingStep], ['Participation NFT', participationStep], ['Review', reviewStep], ['Publish', waitStep], [undefined, congratsStep]],
    [AuctionCategory.Single]: [['Category', categoryStep], ['Copies', copiesStep], ['Price', priceStep], ['Initial Phase', initialStep], ['Ending Phase', endingStep], ['Participation NFT', participationStep], ['Review', reviewStep], ['Publish', waitStep], [undefined, congratsStep]],
    [AuctionCategory.Open]: [['Category', categoryStep], ['Copies', copiesStep], ['Price', priceStep], ['Initial Phase', initialStep], ['Ending Phase', endingStep], ['Review', reviewStep], ['Publish', waitStep], [undefined, congratsStep]],
    [AuctionCategory.Tiered]: [['Category', categoryStep], ['Winners', winnersStep], ['Tiers', tierTableStep], ['Price', priceStep], ['Initial Phase', initialStep], ['Ending Phase', endingStep], ['Participation NFT', participationStep], ['Review', reviewStep], ['Publish', waitStep], [undefined, congratsStep]]
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      style: {
        paddingTop: 50
      },
      children: [stepsVisible && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 24,
        md: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Steps, {
          progressDot: true,
          direction: width < 768 ? 'horizontal' : 'vertical',
          current: step,
          style: {
            width: 'fit-content',
            margin: '0 auto 30px auto',
            overflowX: 'auto',
            maxWidth: '100%'
          },
          children: stepsByCategory[attributes.category].filter(_ => !!_[0]).map((step, idx) => /*#__PURE__*/jsx_runtime_.jsx(auctionCreate_Step, {
            title: step[0]
          }, idx))
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, auctionCreate_objectSpread(auctionCreate_objectSpread({
        span: 24
      }, stepsVisible ? {
        md: 20
      } : {
        md: 24
      }), {}, {
        children: [stepsByCategory[attributes.category][step][1], 0 < step && stepsVisible && /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            margin: 'auto',
            width: 'fit-content'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            onClick: () => gotoNextStep(step - 1),
            children: "Back"
          })
        })]
      }))]
    })
  });
};

const auctionCreate_CategoryStep = props => {
  const {
    width
  } = useWindowDimensions();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "List an item"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["First time listing on Metaplex? ", /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Read our sellers' guide."
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: width < 768 ? 'center' : 'start',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            className: "type-btn",
            size: "large",
            onClick: () => props.confirm(AuctionCategory.Limited),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Limited Edition"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "type-btn-description",
                children: "Sell a limited copy or copies of a single Master NFT"
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            className: "type-btn",
            size: "large",
            onClick: () => props.confirm(AuctionCategory.Open),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Open Edition"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "type-btn-description",
                children: "Sell unlimited copies of a single Master NFT"
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            className: "type-btn",
            size: "large",
            onClick: () => props.confirm(AuctionCategory.Tiered),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Tiered Auction"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "type-btn-description",
                children: "Participants get unique rewards based on their leaderboard rank"
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            className: "type-btn",
            size: "large",
            onClick: () => props.confirm(AuctionCategory.Single),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Sell an Existing Item"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "type-btn-description",
                children: "Sell an existing item in your NFT collection, including Master NFTs"
              })]
            })
          })
        })]
      })
    })]
  });
};

const CopiesStep = props => {
  let artistFilter = i => !(i.metadata.info.data.creators || []).find(c => !c.verified);

  let filter = i => true;

  if (props.attributes.category === AuctionCategory.Limited) {
    filter = i => !!i.masterEdition && !!i.masterEdition.info.maxSupply;
  } else if (props.attributes.category === AuctionCategory.Open) {
    filter = i => !!(i.masterEdition && (i.masterEdition.info.maxSupply === undefined || i.masterEdition.info.maxSupply === null));
  }

  let overallFilter = i => filter(i) && artistFilter(i);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      style: {
        marginBottom: 0
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Select which item to sell"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        style: {
          fontSize: '1.2rem'
        },
        children: "Select the item(s) that you want to list."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        xl: 24,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ArtSelector, {
          filter: overallFilter,
          selected: props.attributes.items,
          setSelected: items => {
            props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              items
            }));
          },
          allowMultiple: false,
          children: "Select NFT"
        }), props.attributes.category === AuctionCategory.Limited && /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "How many copies do you want to create?"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "Each copy will be given unique edition number e.g. 1 of 30"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            autoFocus: true,
            className: "input",
            placeholder: "Enter number of copies sold",
            allowClear: true,
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              editions: parseInt(info.target.value)
            }))
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: () => {
          props.confirm();
        },
        className: "action-btn",
        children: "Continue to Terms"
      })
    })]
  });
};

const NumberOfWinnersStep = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Tiered Auction"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Create a Tiered Auction"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        className: "section",
        xl: 24,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "How many participants can win the auction?"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "This is the number of spots in the leaderboard."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            autoFocus: true,
            className: "input",
            placeholder: "Number of spots in the leaderboard",
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              winnersCount: parseInt(info.target.value)
            }))
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue"
      })
    })]
  });
};

const SaleTypeStep = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Sale Type"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Sell a limited copy or copies of a single Master NFT."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        className: "section",
        xl: 24,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "How do you want to sell your NFT(s)?"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Radio.Group, {
            defaultValue: props.attributes.saleType,
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              saleType: info.target.value
            })),
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Radio, {
              className: "radio-field",
              value: "auction",
              children: "Auction"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "radio-subtitle",
              children: "Allow bidding on your NFT(s)."
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue"
      })
    })]
  });
};

const PriceStep = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: props.attributes.saleType === 'auction' ? /*#__PURE__*/jsx_runtime_.jsx(PriceAuction, auctionCreate_objectSpread({}, props)) : /*#__PURE__*/jsx_runtime_.jsx(PriceSale, auctionCreate_objectSpread({}, props))
  });
};

const PriceSale = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Price"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Set the price for your auction."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        className: "action-field",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "field-title",
          children: "Sale price"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "field-info",
          children: "This is the starting bid price for your auction."
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
          type: "number",
          min: 0,
          autoFocus: true,
          className: "input",
          placeholder: "Price",
          prefix: "\u25CE",
          suffix: "SOL",
          onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
            price: parseFloat(info.target.value) || undefined
          }))
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue"
      })
    })]
  });
};

const PriceAuction = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Price"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Set the price for your auction."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        className: "section",
        xl: 24,
        children: [props.attributes.category === AuctionCategory.Open && /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Price"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "This is the fixed price that everybody will pay for your Participation NFT."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            min: 0,
            autoFocus: true,
            className: "input",
            placeholder: "Fixed Price",
            prefix: "\u25CE",
            suffix: "SOL",
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              // Do both, since we know this is the only item being sold.
              participationFixedPrice: parseFloat(info.target.value),
              priceFloor: parseFloat(info.target.value)
            }))
          })]
        }), props.attributes.category !== AuctionCategory.Open && /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Price Floor"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "This is the starting bid price for your auction."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            min: 0,
            autoFocus: true,
            className: "input",
            placeholder: "Price",
            prefix: "\u25CE",
            suffix: "SOL",
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              priceFloor: parseFloat(info.target.value)
            }))
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Tick Size"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "All bids must fall within this price increment."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            min: 0,
            className: "input",
            placeholder: "Tick size in SOL",
            prefix: "\u25CE",
            suffix: "SOL",
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              priceTick: parseFloat(info.target.value)
            }))
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue"
      })
    })]
  });
};

const InitialPhaseStep = props => {
  const {
    0: startNow,
    1: setStartNow
  } = (0,external_react_.useState)(true);
  const {
    0: listNow,
    1: setListNow
  } = (0,external_react_.useState)(true);
  const {
    0: saleMoment,
    1: setSaleMoment
  } = (0,external_react_.useState)(props.attributes.startSaleTS ? external_moment_default().unix(props.attributes.startSaleTS) : undefined);
  const {
    0: listMoment,
    1: setListMoment
  } = (0,external_react_.useState)(props.attributes.startListTS ? external_moment_default().unix(props.attributes.startListTS) : undefined);
  (0,external_react_.useEffect)(() => {
    props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
      startSaleTS: saleMoment && saleMoment.unix()
    }));
  }, [saleMoment]);
  (0,external_react_.useEffect)(() => {
    props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
      startListTS: listMoment && listMoment.unix()
    }));
  }, [listMoment]);
  (0,external_react_.useEffect)(() => {
    if (startNow) {
      setSaleMoment(undefined);
      setListNow(true);
    } else {
      setSaleMoment(external_moment_default()());
    }
  }, [startNow]);
  (0,external_react_.useEffect)(() => {
    if (listNow) setListMoment(undefined);else setListMoment(external_moment_default()());
  }, [listNow]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Initial Phase"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Set the terms for your ", props.attributes.saleType, "."]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        className: "section",
        xl: 24,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "field-title",
            children: ["When do you want the ", props.attributes.saleType, " to begin?"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Radio.Group, {
            defaultValue: "now",
            onChange: info => setStartNow(info.target.value === 'now'),
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Radio, {
              className: "radio-field",
              value: "now",
              children: "Immediately"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "radio-subtitle",
              children: "Participants can buy the NFT as soon as you finish setting up the auction."
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Radio, {
              className: "radio-field",
              value: "later",
              children: "At a specified date"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "radio-subtitle",
              children: "Participants can start buying the NFT at a specified date."
            })]
          })]
        }), !startNow && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            className: "action-field",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "field-title",
              children: [(0,external_lodash_.capitalize)(props.attributes.saleType), " Start Date"]
            }), saleMoment && /*#__PURE__*/jsx_runtime_.jsx(DateTimePicker, {
              momentObj: saleMoment,
              setMomentObj: setSaleMoment,
              datePickerProps: {
                disabledDate: current => current && current < external_moment_default()().endOf('day')
              }
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            className: "action-field",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "field-title",
              children: "When do you want the listing to go live?"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Radio.Group, {
              defaultValue: "now",
              onChange: info => setListNow(info.target.value === 'now'),
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Radio, {
                className: "radio-field",
                value: "now",
                defaultChecked: true,
                children: "Immediately"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "radio-subtitle",
                children: "Participants will be able to view the listing with a countdown to the start date as soon as you finish setting up the sale."
              }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Radio, {
                className: "radio-field",
                value: "later",
                children: "At a specified date"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "radio-subtitle",
                children: "Participants will be able to view the listing with a countdown to the start date at the specified date."
              })]
            })]
          }), !listNow && /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
            className: "action-field",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "field-title",
              children: "Preview Start Date"
            }), listMoment && /*#__PURE__*/jsx_runtime_.jsx(DateTimePicker, {
              momentObj: listMoment,
              setMomentObj: setListMoment,
              datePickerProps: {
                disabledDate: current => current && saleMoment && (current < external_moment_default()().endOf('day') || current > saleMoment)
              }
            })]
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue"
      })
    })]
  });
};

const EndingPhaseStep = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: props.attributes.saleType === 'auction' ? /*#__PURE__*/jsx_runtime_.jsx(EndingPhaseAuction, auctionCreate_objectSpread({}, props)) : /*#__PURE__*/jsx_runtime_.jsx(EndingPhaseSale, auctionCreate_objectSpread({}, props))
  });
};

const EndingPhaseAuction = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Ending Phase"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Set the terms for your auction."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        className: "section",
        xl: 24,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Auction Duration"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "This is how long the auction will last for."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            addonAfter: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Select, {
              defaultValue: props.attributes.auctionDurationType,
              onChange: value => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
                auctionDurationType: value
              })),
              children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: "minutes",
                children: "Minutes"
              }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: "hours",
                children: "Hours"
              }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: "days",
                children: "Days"
              })]
            }),
            autoFocus: true,
            type: "number",
            className: "input",
            placeholder: "Set the auction duration",
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              auctionDuration: parseInt(info.target.value)
            }))
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Gap Time"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "The final phase of the auction will begin when there is this much time left on the countdown. Any bids placed during the final phase will extend the end time by this same duration."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            addonAfter: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Select, {
              defaultValue: props.attributes.gapTimeType,
              onChange: value => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
                gapTimeType: value
              })),
              children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: "minutes",
                children: "Minutes"
              }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: "hours",
                children: "Hours"
              }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: "days",
                children: "Days"
              })]
            }),
            type: "number",
            className: "input",
            placeholder: "Set the gap time",
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              gapTime: parseInt(info.target.value)
            }))
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Tick Size for Ending Phase"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "In order for winners to move up in the auction, they must place a bid that\u2019s at least this percentage higher than the next highest bid."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            className: "input",
            placeholder: "Percentage",
            suffix: "%",
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              tickSizeEndingPhase: parseInt(info.target.value)
            }))
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue"
      })
    })]
  });
};

const EndingPhaseSale = props => {
  const startMoment = props.attributes.startSaleTS ? external_moment_default().unix(props.attributes.startSaleTS) : external_moment_default()();
  const {
    0: untilSold,
    1: setUntilSold
  } = (0,external_react_.useState)(true);
  const {
    0: endMoment,
    1: setEndMoment
  } = (0,external_react_.useState)(props.attributes.endTS ? external_moment_default().unix(props.attributes.endTS) : undefined);
  (0,external_react_.useEffect)(() => {
    props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
      endTS: endMoment && endMoment.unix()
    }));
  }, [endMoment]);
  (0,external_react_.useEffect)(() => {
    if (untilSold) setEndMoment(undefined);else setEndMoment(startMoment);
  }, [untilSold]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Ending Phase"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Set the terms for your sale."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        className: "section",
        xl: 24,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "When do you want the sale to end?"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Radio.Group, {
            defaultValue: "now",
            onChange: info => setUntilSold(info.target.value === 'now'),
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Radio, {
              className: "radio-field",
              value: "now",
              children: "Until sold"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "radio-subtitle",
              children: "The sale will end once the supply goes to zero."
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Radio, {
              className: "radio-field",
              value: "later",
              children: "At a specified date"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "radio-subtitle",
              children: "The sale will end at this date, regardless if there is remaining supply."
            })]
          })]
        }), !untilSold && /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "End Date"
          }), endMoment && /*#__PURE__*/jsx_runtime_.jsx(DateTimePicker, {
            momentObj: endMoment,
            setMomentObj: setEndMoment,
            datePickerProps: {
              disabledDate: current => current && current < startMoment
            }
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue"
      })
    })]
  });
};

const TierTableStep = props => {
  const newImmutableTiers = tiers => {
    return tiers.map(wc => ({
      items: [...wc.items.map(it => auctionCreate_objectSpread({}, it))],
      winningSpots: [...wc.winningSpots]
    }));
  };

  let artistFilter = i => !(i.metadata.info.data.creators || []).find(c => !c.verified);

  const options = [];

  for (let i = 0; i < props.maxWinners; i++) {
    options.push({
      label: `Winner ${i + 1}`,
      value: i
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Add Winning Tiers and Their Prizes"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Each row represents a tier. You can choose which winning spots get which tiers."
      })]
    }), props.attributes.tiers.map((wcg, configIndex) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "content-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        xl: 24,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
          children: ["Tier #", configIndex + 1, " Basket"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Checkbox.Group, {
        options: options,
        onChange: value => {
          const newTiers = newImmutableTiers(props.attributes.tiers);
          const myNewTier = newTiers[configIndex];
          myNewTier.winningSpots = value.map(i => i.valueOf());
          props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
            tiers: newTiers
          }));
        }
      }), wcg.items.map((i, itemIndex) => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        className: "section",
        xl: 8,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Card, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ArtSelector, {
            filter: artistFilter,
            selected: i.safetyDepositBoxIndex !== undefined ? [props.attributes.items[i.safetyDepositBoxIndex]] : [],
            setSelected: items => {
              const newItems = [...props.attributes.items.map(it => auctionCreate_objectSpread({}, it))];
              const newTiers = newImmutableTiers(props.attributes.tiers);

              if (items[0]) {
                const existing = props.attributes.items.find(it => it.metadata.pubkey === items[0].metadata.pubkey);
                if (!existing) newItems.push(items[0]);
                const index = newItems.findIndex(it => it.metadata.pubkey === items[0].metadata.pubkey);
                const myNewTier = newTiers[configIndex].items[itemIndex];
                myNewTier.safetyDepositBoxIndex = index;

                if (items[0].masterEdition && items[0].masterEdition.info.key == lib.MetadataKey.MasterEditionV1) {
                  myNewTier.winningConfigType = WinningConfigType.PrintingV1;
                } else if (items[0].masterEdition && items[0].masterEdition.info.key == lib.MetadataKey.MasterEditionV2) {
                  myNewTier.winningConfigType = WinningConfigType.PrintingV2;
                } else {
                  myNewTier.winningConfigType = WinningConfigType.TokenOnlyTransfer;
                }

                myNewTier.amount = 1;
              } else if (i.safetyDepositBoxIndex !== undefined) {
                const myNewTier = newTiers[configIndex];
                myNewTier.items.splice(itemIndex, 1);
                if (myNewTier.items.length === 0) newTiers.splice(configIndex, 1);
                const othersWithSameItem = newTiers.find(c => c.items.find(it => it.safetyDepositBoxIndex === i.safetyDepositBoxIndex));

                if (!othersWithSameItem) {
                  for (let j = i.safetyDepositBoxIndex + 1; j < props.attributes.items.length; j++) {
                    newTiers.forEach(c => c.items.forEach(it => {
                      if (it.safetyDepositBoxIndex === j) it.safetyDepositBoxIndex--;
                    }));
                  }

                  newItems.splice(i.safetyDepositBoxIndex, 1);
                }
              }

              props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
                items: newItems,
                tiers: newTiers
              }));
            },
            allowMultiple: false,
            children: "Select item"
          }), i.winningConfigType !== undefined && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Select, {
              defaultValue: i.winningConfigType,
              style: {
                width: 120
              },
              onChange: value => {
                var _props$attributes$ite;

                const newTiers = newImmutableTiers(props.attributes.tiers);
                const myNewTier = newTiers[configIndex].items[itemIndex]; // Legacy hack...

                if (value == WinningConfigType.PrintingV2 && myNewTier.safetyDepositBoxIndex && ((_props$attributes$ite = props.attributes.items[myNewTier.safetyDepositBoxIndex].masterEdition) === null || _props$attributes$ite === void 0 ? void 0 : _props$attributes$ite.info.key) == lib.MetadataKey.MasterEditionV1) {
                  value = WinningConfigType.PrintingV1;
                }

                myNewTier.winningConfigType = value;
                props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
                  tiers: newTiers
                }));
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: WinningConfigType.FullRightsTransfer,
                children: "Full Rights Transfer"
              }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: WinningConfigType.TokenOnlyTransfer,
                children: "Token Only Transfer"
              }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: WinningConfigType.PrintingV2,
                children: "Printing V2"
              }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
                value: WinningConfigType.PrintingV1,
                children: "Printing V1"
              })]
            }), (i.winningConfigType === WinningConfigType.PrintingV1 || i.winningConfigType === WinningConfigType.PrintingV2) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              className: "action-field",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "field-title",
                children: "How many copies do you want to create for each winner? If you put 2, then each winner will get 2 copies."
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "field-info",
                children: "Each copy will be given unique edition number e.g. 1 of 30"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                autoFocus: true,
                className: "input",
                placeholder: "Enter number of copies sold",
                allowClear: true,
                onChange: info => {
                  const newTiers = newImmutableTiers(props.attributes.tiers);
                  const myNewTier = newTiers[configIndex].items[itemIndex];
                  myNewTier.amount = parseInt(info.target.value);
                  props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
                    tiers: newTiers
                  }));
                }
              })]
            })]
          })]
        })
      }, itemIndex)), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        xl: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          type: "primary",
          size: "large",
          onClick: () => {
            const newTiers = newImmutableTiers(props.attributes.tiers);
            const myNewTier = newTiers[configIndex];
            myNewTier.items.push({});
            props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              tiers: newTiers
            }));
          },
          className: "action-btn",
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})
        })
      })]
    }, configIndex)), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        xl: 24,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          type: "primary",
          size: "large",
          onClick: () => {
            const newTiers = newImmutableTiers(props.attributes.tiers);
            newTiers.push({
              items: [],
              winningSpots: []
            });
            props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              tiers: newTiers
            }));
          },
          className: "action-btn",
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue to Review"
      })
    })]
  });
};

const ParticipationStep = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Participation NFT"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Provide NFT that will be awarded as an Open Edition NFT for auction participation."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      className: "content-action",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        className: "section",
        xl: 24,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ArtSelector, {
          filter: i => !!i.masterEdition && i.masterEdition.info.maxSupply === undefined,
          selected: props.attributes.participationNFT ? [props.attributes.participationNFT] : [],
          setSelected: items => {
            props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              participationNFT: items[0]
            }));
          },
          allowMultiple: false,
          children: "Select Participation NFT"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "action-field",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-title",
            children: "Price"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "field-info",
            children: "This is an optional fixed price that non-winners will pay for your Participation NFT."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            min: 0,
            autoFocus: true,
            className: "input",
            placeholder: "Fixed Price",
            prefix: "\u25CE",
            suffix: "SOL",
            onChange: info => props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
              participationFixedPrice: parseFloat(info.target.value)
            }))
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: props.confirm,
        className: "action-btn",
        children: "Continue to Review"
      })
    })]
  });
};

const ReviewStep = props => {
  var _props$attributes$ite2;

  const {
    0: cost,
    1: setCost
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    const rentCall = Promise.all([props.connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span), props.connection.getMinimumBalanceForRentExemption(lib.MAX_METADATA_LEN)]); // TODO: add
  }, [setCost]);
  let item = (_props$attributes$ite2 = props.attributes.items) === null || _props$attributes$ite2 === void 0 ? void 0 : _props$attributes$ite2[0];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "call-to-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Review and list"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Review your listing before publishing."
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: "content-action",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        xl: 12,
        children: (item === null || item === void 0 ? void 0 : item.metadata.info) && /*#__PURE__*/jsx_runtime_.jsx(ArtCard, {
          pubkey: item.metadata.pubkey,
          small: true
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
        className: "section",
        xl: 12,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Statistic, {
          className: "create-statistic",
          title: "Copies",
          value: props.attributes.editions === undefined ? 'Unique' : props.attributes.editions
        }), cost ? /*#__PURE__*/jsx_runtime_.jsx(AmountLabel_AmountLabel, {
          title: "Cost to Create",
          amount: cost
        }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {})]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      style: {
        display: 'block'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Statistic, {
        className: "create-statistic",
        title: "Start date",
        value: props.attributes.startSaleTS ? external_moment_default().unix(props.attributes.startSaleTS).format('dddd, MMMM Do YYYY, h:mm a') : 'Right after successfully published'
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), props.attributes.startListTS && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Statistic, {
        className: "create-statistic",
        title: "Listing go live date",
        value: external_moment_default().unix(props.attributes.startListTS).format('dddd, MMMM Do YYYY, h:mm a')
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Statistic, {
        className: "create-statistic",
        title: "Sale ends",
        value: props.attributes.endTS ? external_moment_default().unix(props.attributes.endTS).format('dddd, MMMM Do YYYY, h:mm a') : 'Until sold'
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        onClick: () => {
          props.setAttributes(auctionCreate_objectSpread(auctionCreate_objectSpread({}, props.attributes), {}, {
            startListTS: props.attributes.startListTS || external_moment_default()().unix(),
            startSaleTS: props.attributes.startSaleTS || external_moment_default()().unix()
          }));
          props.confirm();
        },
        className: "action-btn",
        children: "Publish Auction"
      })
    })]
  });
};

const auctionCreate_WaitingStep = props => {
  const {
    0: progress,
    1: setProgress
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    const func = async () => {
      const inte = setInterval(() => setProgress(prog => Math.min(prog + 1, 99)), 600);
      await props.createAuction();
      clearInterval(inte);
      props.confirm();
    };

    func();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      marginTop: 70,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Progress, {
      type: "circle",
      percent: progress
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "waiting-title",
      children: "Your creation is being listed with Metaplex..."
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "waiting-subtitle",
      children: "This can take up to 30 seconds."
    })]
  });
};

const auctionCreate_Congrats = props => {
  const history = (0,external_react_router_dom_.useHistory)();

  const newTweetURL = () => {
    var _props$auction;

    const params = {
      text: "I've created a new NFT auction on Metaplex, check it out!",
      url: `${window.location.origin}/#/auction/${(_props$auction = props.auction) === null || _props$auction === void 0 ? void 0 : _props$auction.auction.toString()}`,
      hashtags: 'NFT,Crypto,Metaplex',
      // via: "Metaplex",
      related: 'Metaplex,Solana'
    };
    const queryParams = new URLSearchParams(params).toString();
    return `https://twitter.com/intent/tweet?${queryParams}`;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        marginTop: 70,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "waiting-title",
        children: "Congratulations! Your auction is now live."
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "congrats-button-container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
          className: "metaplex-button",
          onClick: _ => window.open(newTweetURL(), '_blank'),
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Share it on Twitter"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: ">"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
          className: "metaplex-button",
          onClick: _ => {
            var _props$auction2;

            return history.push(`/auction/${(_props$auction2 = props.auction) === null || _props$auction2 === void 0 ? void 0 : _props$auction2.auction.toString()}`);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "See it in your auctions"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: ">"
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Confetti, {})]
  });
};
;// CONCATENATED MODULE: ./src/views/artworks/index.tsx











const {
  TabPane: artworks_TabPane
} = external_antd_.Tabs;
const {
  Content: artworks_Content
} = external_antd_.Layout;
let ArtworkViewState;

(function (ArtworkViewState) {
  ArtworkViewState["Metaplex"] = "0";
  ArtworkViewState["Owned"] = "1";
  ArtworkViewState["Created"] = "2";
})(ArtworkViewState || (ArtworkViewState = {}));

const ArtworksView = () => {
  const {
    connected,
    publicKey
  } = (0,wallet_adapter_react_.useWallet)();
  const ownedMetadata = useUserArts();
  const createdMetadata = useCreatorArts((publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58()) || '');
  const {
    metadata,
    isLoading
  } = meta_useMeta();
  const {
    0: activeKey,
    1: setActiveKey
  } = (0,external_react_.useState)(ArtworkViewState.Metaplex);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  const items = activeKey === ArtworkViewState.Owned ? ownedMetadata.map(m => m.metadata) : activeKey === ArtworkViewState.Created ? createdMetadata : metadata;
  (0,external_react_.useEffect)(() => {
    if (connected) {
      setActiveKey(ArtworkViewState.Owned);
    } else {
      setActiveKey(ArtworkViewState.Metaplex);
    }
  }, [connected, setActiveKey]);

  const artworkGrid = /*#__PURE__*/jsx_runtime_.jsx((external_react_masonry_css_default()), {
    breakpointCols: breakpointColumnsObj,
    className: "my-masonry-grid",
    columnClassName: "my-masonry-grid_column",
    children: !isLoading ? items.map((m, idx) => {
      const id = m.pubkey;
      return /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
        to: `/art/${id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(ArtCard, {
          pubkey: m.pubkey,
          preview: false,
          height: 250,
          width: 250
        }, id)
      }, idx);
    }) : [...Array(10)].map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(MyLoader_CardLoader, {}, idx))
  });

  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Layout, {
    style: {
      margin: 0,
      marginTop: 30
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(artworks_Content, {
      style: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        style: {
          width: '100%',
          marginTop: 10
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Tabs, {
            activeKey: activeKey,
            onTabClick: key => setActiveKey(key),
            children: [/*#__PURE__*/jsx_runtime_.jsx(artworks_TabPane, {
              tab: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "tab-title",
                children: "All"
              }),
              children: artworkGrid
            }, ArtworkViewState.Metaplex), connected && /*#__PURE__*/jsx_runtime_.jsx(artworks_TabPane, {
              tab: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "tab-title",
                children: "Owned"
              }),
              children: artworkGrid
            }, ArtworkViewState.Owned), connected && /*#__PURE__*/jsx_runtime_.jsx(artworks_TabPane, {
              tab: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "tab-title",
                children: "Created"
              }),
              children: artworkGrid
            }, ArtworkViewState.Created)]
          })
        })
      })
    })
  });
};
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(8182);
;// CONCATENATED MODULE: ./src/views/analytics/index.tsx



function analytics_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function analytics_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { analytics_ownKeys(Object(source), true).forEach(function (key) { analytics_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { analytics_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function analytics_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const {
  Content: analytics_Content
} = external_antd_.Layout;
const AnalyticsView = () => {
  const mint = (0,lib.useMint)(QUOTE_MINT);
  return mint ? /*#__PURE__*/jsx_runtime_.jsx(InnerAnalytics, {
    mint: mint
  }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {});
};
var AuctionType;

(function (AuctionType) {
  AuctionType[AuctionType["Open"] = 0] = "Open";
  AuctionType[AuctionType["Limited"] = 1] = "Limited";
  AuctionType[AuctionType["Tiered"] = 2] = "Tiered";
  AuctionType[AuctionType["OneOfKind"] = 3] = "OneOfKind";
})(AuctionType || (AuctionType = {}));

const LOOKUP = {};

const rerun = async ({
  auctionViews,
  auctionManagersByAuction,
  usersEngaged,
  auctionDataExtended,
  bidderPotsByAuctionAndBidder,
  metadata,
  setByType,
  setAverageBids,
  setUsersPublished,
  setAverageSale,
  setHighestSale,
  setSortedSales,
  setUsersWithMetadata,
  setUsersBid,
  setUsersEngaged
}) => {
  let averageBidders = 0;
  let newAverageSale = 0;
  let newHighestSale = 0;
  let totalAuctions = 0;
  const newByType = {
    [AuctionType.Open]: 0,
    [AuctionType.Limited]: 0,
    [AuctionType.Tiered]: 0,
    [AuctionType.OneOfKind]: 0
  };
  const newUsersPublished = {};

  const existingUsersEngaged = analytics_objectSpread({}, usersEngaged);

  let newSortedSales = [];
  const PROGRAM_IDS = (0,lib.programIds)();

  for (let i = 0; i < auctionViews.length; i++) {
    const auction = auctionViews[i]; // Not entirely correct because we're not covering open edition auction bids
    // and their amounts which are super hard to track, but I think they
    // are probably a minority anyway.

    if (auction.auction.info.ended() && auction.auction.info.tokenMint === QUOTE_MINT.toBase58()) {
      if (!LOOKUP[auction.auction.pubkey]) {
        LOOKUP[auction.auction.pubkey] = await (0,lib.getAuctionExtended)({
          auctionProgramId: PROGRAM_IDS.auction,
          resource: auction.vault.pubkey
        });
      }

      const extended = auctionDataExtended[LOOKUP[auction.auction.pubkey]];

      if (extended && extended.info.totalUncancelledBids.toNumber() > 0) {
        totalAuctions++;
        averageBidders += extended.info.totalUncancelledBids.toNumber();
        const bids = auction.auction.info.bidState;
        let highestBid = bids.getAmountAt(0);

        if (highestBid && highestBid.toNumber() > newHighestSale) {
          newHighestSale = highestBid.toNumber();
        }

        const allWinningBids = bids.bids.slice(bids.bids.length - bids.max.toNumber()).map(i => i.amount.toNumber());
        newAverageSale += allWinningBids.reduce((acc, r) => acc += r, 0);
        newSortedSales = newSortedSales.concat(allWinningBids);
      }
    }

    newUsersPublished[auction.auctionManager.authority] = true;
    existingUsersEngaged[auction.auctionManager.authority] = true;
    let type = undefined;

    if (auction.items.find(set => set.length > 1)) {
      type = AuctionType.Tiered;
    } else if (auction.items.length && auction.items[0].length) {
      type = auction.items[0][0].winningConfigType == WinningConfigType.TokenOnlyTransfer ? AuctionType.OneOfKind : AuctionType.Limited;
    } else {
      type = AuctionType.Open;
    }

    newByType[type]++;
  }

  const newUsersBid = {};
  Object.values(bidderPotsByAuctionAndBidder).forEach(acct => {
    if (auctionManagersByAuction[acct.info.auctionAct]) {
      newUsersBid[acct.info.bidderAct] = true;
      existingUsersEngaged[acct.info.bidderAct] = true;
    }
  });
  const newBuild = {};
  metadata.forEach(acct => {
    var _acct$info$data$creat;

    newBuild[acct.info.updateAuthority] = true;
    existingUsersEngaged[acct.info.updateAuthority] = true;
    (_acct$info$data$creat = acct.info.data.creators) === null || _acct$info$data$creat === void 0 ? void 0 : _acct$info$data$creat.forEach(c => {
      newBuild[c.address] = true;
      existingUsersEngaged[c.address] = true;
    });
  });
  setByType(newByType);
  setAverageBids(averageBidders / totalAuctions);
  setUsersPublished(newUsersPublished);
  setAverageSale(newAverageSale / totalAuctions);
  setHighestSale(newHighestSale);
  setSortedSales(newSortedSales.sort());
  setUsersWithMetadata(newBuild);
  setUsersBid(newUsersBid);
  setUsersEngaged(engaged => analytics_objectSpread(analytics_objectSpread({}, engaged), existingUsersEngaged));
};

const MemoizedBar = /*#__PURE__*/external_react_default().memo(props => {
  const histogrammedData = {
    0: 0,
    5: 0,
    20: 0,
    50: 0,
    100: 0,
    500: 0,
    1000: 0,
    10000: 0
  };
  const asArray = [0, 5, 20, 50, 100, 500, 1000, 10000];

  for (let i = 0; i < asArray.length; i++) {
    const currRange = asArray[i];

    if (i < asArray.length - 1) {
      const nextRange = asArray[i + 1];
      histogrammedData[currRange] = props.sortedSales.filter(s => (0,lib.fromLamports)(s, props.mint) >= currRange && (0,lib.fromLamports)(s, props.mint) < nextRange).length;
    } else {
      histogrammedData[currRange] = props.sortedSales.filter(s => (0,lib.fromLamports)(s, props.mint) >= currRange).length;
    }
  }

  const histoData = {
    labels: ['◎ [0 - 5)', '◎ [5 - 20)', '◎ [20 - 50)', '◎ [50 - 100)', '◎ [100 - 500)', '◎ [500 - 1000)', '◎ [1000 - 10000)', '◎ [10000 -'],
    datasets: [{
      label: '# bids in these bins',
      data: asArray.map(a => histogrammedData[a]),
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 139, 24, 0.2)', 'rgba(212, 39, 24, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 139, 24, 1)', 'rgba(212, 39, 24, 1)'],
      borderWidth: 1
    }]
  };
  const histoOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_chartjs_2_.Bar, {
    data: histoData,
    options: histoOptions
  });
});
const MemoizedPie = /*#__PURE__*/external_react_default().memo(props => {
  const pieData = {
    labels: ['Open', 'Limited', 'Tiered', 'One of a Kind'],
    datasets: [{
      label: '#',
      data: [props.byType[AuctionType.Open], props.byType[AuctionType.Limited], props.byType[AuctionType.Tiered], props.byType[AuctionType.OneOfKind]],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
      borderWidth: 1
    }]
  };
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_chartjs_2_.Pie, {
    data: pieData
  });
});

function InnerAnalytics({
  mint
}) {
  const {
    0: usersWithMetadata,
    1: setUsersWithMetadata
  } = (0,external_react_.useState)({});
  const {
    0: usersPublished,
    1: setUsersPublished
  } = (0,external_react_.useState)({});
  const {
    0: usersBid,
    1: setUsersBid
  } = (0,external_react_.useState)({});
  const {
    0: usersEngaged,
    1: setUsersEngaged
  } = (0,external_react_.useState)({});
  const {
    0: byType,
    1: setByType
  } = (0,external_react_.useState)({
    [AuctionType.Open]: 0,
    [AuctionType.Limited]: 0,
    [AuctionType.Tiered]: 0,
    [AuctionType.OneOfKind]: 0
  });
  const {
    0: averageBids,
    1: setAverageBids
  } = (0,external_react_.useState)(0);
  const {
    0: averageSale,
    1: setAverageSale
  } = (0,external_react_.useState)(0);
  const {
    0: highestSale,
    1: setHighestSale
  } = (0,external_react_.useState)(0);
  const {
    0: sortedSales,
    1: setSortedSales
  } = (0,external_react_.useState)([]);
  const {
    metadata,
    stores,
    auctionManagersByAuction,
    bidderPotsByAuctionAndBidder,
    auctionDataExtended
  } = meta_useMeta();
  const totalNFTs = metadata.length;
  const totalMarketplaces = Object.values(stores).length;
  const auctionViews = useAuctions_useAuctions();
  return /*#__PURE__*/jsx_runtime_.jsx(analytics_Content, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
      style: {
        marginTop: 10
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        size: "large",
        className: "action-btn",
        onClick: () => rerun({
          auctionViews,
          auctionManagersByAuction,
          usersEngaged,
          auctionDataExtended,
          bidderPotsByAuctionAndBidder,
          metadata,
          setByType,
          setAverageBids,
          setUsersPublished,
          setAverageSale,
          setHighestSale,
          setSortedSales,
          setUsersWithMetadata,
          setUsersBid,
          setUsersEngaged
        }),
        children: "RERUN CALCULATION"
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Overview"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Total NFTs: ", totalNFTs, " Total Marketplaces: ", totalMarketplaces]
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "User Breakdown"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Any Engagement: ", Object.values(usersEngaged).length]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["That bid: ", Object.values(usersBid).length]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["That sold items: ", Object.values(usersPublished).length]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["That minted NFTs: ", Object.values(usersWithMetadata).length]
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Sale Info"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Total Sales: \u25CE", (0,lib.fromLamports)(sortedSales.reduce((acc, r) => acc += r, 0), mint)]
      }), /*#__PURE__*/jsx_runtime_.jsx(MemoizedBar, {
        sortedSales: sortedSales,
        mint: mint
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Highest Sale: \u25CE ", (0,lib.fromLamports)(highestSale, mint)]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Average Sale: \u25CE ", (0,lib.fromLamports)(averageSale, mint)]
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Auction Info"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        children: ["Average Bids per Auction: ", averageBids]
      }), /*#__PURE__*/jsx_runtime_.jsx(MemoizedPie, {
        byType: byType
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/components/ProjectDetails/project-details.module.css
var project_details_module = __webpack_require__(9336);
var project_details_module_default = /*#__PURE__*/__webpack_require__.n(project_details_module);
;// CONCATENATED MODULE: ./src/components/ProjectDetails/index.jsx




const {
  userAccounts,
  accountByMint
} = useUserAccounts();

const ProjectDetails = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (project_details_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (project_details_module_default()).header,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (project_details_module_default()).title,
        children: "Project Details"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (project_details_module_default()).title,
        children: "Join Raffle"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (project_details_module_default()).detailsContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (project_details_module_default()).detailsBox,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Total NFTs:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "1000"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Price:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "1000 USD"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "TWebsite:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "www.loremipsum.com"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Description:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a massa ac sem ornare cursus ac ac risus. Aenean varius aliquam est vestibulum placerat. Phasellus at ante convallis, ultrices risus id, sodales felis. Morbi imperdiet ut urna id varius. Nullam sit amet urna urna. Morbi sed egestas metus, ultrices tincidunt elit. Maecenas nunc nibh, ornare vel sapien quis, lobortis scelerisque magna. Ut ac viverra eros. Morbi vulputate eros ac"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (project_details_module_default()).detailsBox,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              width: "160px",
              children: "Your Stakes ATLAS:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "1000"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Your eligible Tickets:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "1000 USD"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Your eligible Tickets:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "www.loremipsum.com"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Description:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a massa ac sem ornare cursus ac ac risus. Aenean varius aliquam est vestibulum placerat. Phasellus at ante convallis, ultrices risus id, sodales felis. Morbi imperdiet ut urna id varius. Nullam sit amet urna urna. Morbi sed egestas metus, ultrices tincidunt elit. eros ac"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("tr", {
            children: /*#__PURE__*/jsx_runtime_.jsx("td", {
              colSpan: "2",
              style: {
                display: "table-cell"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: (project_details_module_default()).button,
                children: "Join Raffle"
              })
            })
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ var components_ProjectDetails = (ProjectDetails);
// EXTERNAL MODULE: ./src/components/Timer/Timer.module.css
var Timer_module = __webpack_require__(3081);
var Timer_module_default = /*#__PURE__*/__webpack_require__.n(Timer_module);
;// CONCATENATED MODULE: ./src/components/Timer/index.jsx






const Timer = () => {
  const {
    0: hour,
    1: setHour
  } = (0,external_react_.useState)(23);
  const {
    0: minute,
    1: setMinute
  } = (0,external_react_.useState)(5);
  const {
    0: second,
    1: setSecond
  } = (0,external_react_.useState)(10);
  const Ref = (0,external_react_.useRef)(null);

  const clearTimer = e => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    var deadline = new Date();
    var startDate = new Date();
    var endDate = new Date(startDate.getTime() + 1000 * 60 * 60 * 10);
    deadline.setSeconds((endDate.getTime() - startDate.getTime()) / 1000);
    return deadline;
  };

  (0,external_react_.useEffect)(async () => {
    clearTimer(getDeadTime());
  }, []);

  const startTimer = e => {
    getTimeRemaining(e);
  };

  const getTimeRemaining = e => {
    const total = Date.parse(e) - Date.parse(new Date());

    if (total > 0) {
      const seconds = Math.floor(total / 1000 % 60);
      const minutes = Math.floor(total / 1000 / 60 % 60);
      const hours = Math.floor(total / 1000 / 60 / 60 % 24);
      setSecond(seconds);
      setMinute(minutes);
      setHour(hours);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Timer_module_default()).timer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Timer_module_default()).timerBoxContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Timer_module_default()).timerBox,
        children: hour >= 10 ? hour : '0' + hour
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Timer_module_default()).text,
        children: "hours"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Timer_module_default()).timerColon,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: ":"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Timer_module_default()).timerBoxContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Timer_module_default()).timerBox,
        children: minute >= 10 ? minute : '0' + minute
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Timer_module_default()).text,
        children: "mins"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Timer_module_default()).timerColon,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: ":"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Timer_module_default()).timerBoxContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Timer_module_default()).timerBox,
        children: second >= 10 ? second : '0' + second
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Timer_module_default()).text,
        children: "sec"
      })]
    })]
  });
};

/* harmony default export */ var components_Timer = (Timer);
// EXTERNAL MODULE: external "react-spring-3d-carousel"
var external_react_spring_3d_carousel_ = __webpack_require__(3109);
var external_react_spring_3d_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_spring_3d_carousel_);
// EXTERNAL MODULE: ../../node_modules/react-icons/gr/index.esm.js
var index_esm = __webpack_require__(3022);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__(6821);
// EXTERNAL MODULE: ./src/components/ArtCard-Atlas/ArtCard.module.css
var ArtCard_module = __webpack_require__(6882);
var ArtCard_module_default = /*#__PURE__*/__webpack_require__.n(ArtCard_module);
;// CONCATENATED MODULE: ./src/components/ArtCard-Atlas/index.jsx






const ArtCard_Atlas_ArtCard = ({
  img
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (ArtCard_module_default()).card,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ArtCard_module_default()).cardImageContainer // style={{ backgroundImage: `url(${img})` }}
        ,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: img.src,
          style: {
            width: '100' + '%',
            objectFit: 'contain'
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (ArtCard_module_default()).contentContaier,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Lorem ipsum dolor"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt commodo est non mattis."
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          children: "Preview"
        })]
      })]
    })
  });
};

/* harmony default export */ var ArtCard_Atlas = (ArtCard_Atlas_ArtCard);
;// CONCATENATED MODULE: ../../assets/face.png
/* harmony default export */ var face = ({"src":"/_next/static/image/_/_/assets/face.a378b1d2d1cc00255a68e736338dcc77.png","height":264,"width":352,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Aezu8vqZj40FtZ6t/ygcFQFRaVgAKDlE/xcbHAEDAwL7AdnW2v9aOUH/Dl9rAXcJ+/8HMyEA49/mAfQbJ/9dVE0BAebm6f5oS0wB8DtC/xfV0AEyKyQAIzEt/+Tl7QFaY2P/Afr8//7SyMoBlHef/70I7wEzBu8AMykq/yUxNQFFSkv/AfT1+f8ICQb/2dHdAX9xev+swKoAj5CVAWxsav/7+/wBAfX2+voDAQAF6/wB/6unqQHJeFwAdLzS/zIwLQH29vn7X/dgCez6pIQAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ../../assets/horror.png
/* harmony default export */ var horror = ({"src":"/_next/static/image/_/_/assets/horror.ff02260bfad2e5c1e0a1430af454963d.png","height":168,"width":246,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AVxEk/bE1MEJKBor/xoYGAAA+wgA9PL3APcB7QENDA33AWxYnP/R5Ln/GRAhAQf3If8SG/8AGiP8AdTP6/8F/xUBAVtSeP4xNhIBCQgK//v+/ADu7esBCwoJ/7q+zQH58BX/ASckT/81OA7/QDw9ASsrKv/a2dsA5OXnAXt/r/8jJSEBATAvYPbQ0aAJdXN4/0pIRADW1dcALzAuAKertAHKyun3JPpJmpDUurAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ../../assets/fire.png
/* harmony default export */ var fire = ({"src":"/_next/static/image/_/_/assets/fire.5e408dc73f92e89222a91eacf84aab66.png","height":168,"width":246,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAk0lEQVR42gVAQQ7BQBT9789o+xFEJMIBRGLvCm7hEG7pCtKFBQkLmwat6cw8wemw+V7rZKsRGU0l5ULOzygv7XFkbtUhWkiJ4oE+VLJfZNmtDfCeJbNpyomPn2I4Lhg1yM0RAwnclRWSgL5UwXJmvLwVzSfyXivnCkwnjkWq4CHWLstolyawixC6LJXz3EqHkWn7B74hRXkQ8hpBAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./src/components/Slider/Slider.module.css
var Slider_module = __webpack_require__(5596);
var Slider_module_default = /*#__PURE__*/__webpack_require__.n(Slider_module);
;// CONCATENATED MODULE: ./src/components/Slider/index.jsx



function Slider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Slider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Slider_ownKeys(Object(source), true).forEach(function (key) { Slider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Slider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Slider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Slider extends external_react_.Component {
  constructor(...args) {
    super(...args);

    Slider_defineProperty(this, "state", {
      goToSlide: 0,
      offsetRadius: 1,
      showNavigation: true,
      config: external_react_spring_.config.gentle
    });

    Slider_defineProperty(this, "slides", [{
      key: (0,external_uuid_.v4)(),
      content: /*#__PURE__*/jsx_runtime_.jsx(ArtCard_Atlas, {
        img: face
      })
    }, {
      key: (0,external_uuid_.v4)(),
      content: /*#__PURE__*/jsx_runtime_.jsx(ArtCard_Atlas, {
        img: horror
      })
    }, {
      key: (0,external_uuid_.v4)(),
      content: /*#__PURE__*/jsx_runtime_.jsx(ArtCard_Atlas, {
        img: fire
      })
    }, {
      key: (0,external_uuid_.v4)(),
      content: /*#__PURE__*/jsx_runtime_.jsx(ArtCard_Atlas, {
        img: face
      })
    }, {
      key: (0,external_uuid_.v4)(),
      content: /*#__PURE__*/jsx_runtime_.jsx(ArtCard_Atlas, {
        img: fire
      })
    }, {
      key: (0,external_uuid_.v4)(),
      content: /*#__PURE__*/jsx_runtime_.jsx(ArtCard_Atlas, {
        img: horror
      })
    }].map((slide, index) => {
      return Slider_objectSpread(Slider_objectSpread({}, slide), {}, {
        onClick: () => this.setState({
          goToSlide: index
        })
      });
    }));

    Slider_defineProperty(this, "onChangeInput", e => {
      this.setState({
        [e.target.name]: parseInt(e.target.value, 10) || 0
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Slider_module_default()).sliderContainer,
      style: {
        width: "60%",
        height: "500px",
        margin: "40px auto"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_spring_3d_carousel_default()), {
        slides: this.slides,
        goToSlide: this.state.goToSlide,
        offsetRadius: this.state.offsetRadius,
        showNavigation: this.state.showNavigation,
        animationConfig: this.state.config
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: (Slider_module_default()).btnPrev,
            onClick: () => {
              this.setState({
                goToSlide: this.state.goToSlide - 1
              });
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* GrPrevious */.Ugn, {})
          }), "\xA0 \xA0 \xA0 \xA0", /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: (Slider_module_default()).btnNext,
            onClick: () => {
              this.setState({
                goToSlide: this.state.goToSlide + 1
              });
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* GrNext */.ULj, {})
          })]
        })
      })]
    });
  }

}
;// CONCATENATED MODULE: ./src/components/JoinRaffle/index.tsx







function JoinRaffle() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "join-raffle",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Timer, {}), /*#__PURE__*/jsx_runtime_.jsx(Slider, {}), /*#__PURE__*/jsx_runtime_.jsx(components_ProjectDetails, {})]
  });
}

/* harmony default export */ var components_JoinRaffle = (JoinRaffle);
;// CONCATENATED MODULE: ./src/views/joinraffle/index.tsx



const JoinRaffleView = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(components_JoinRaffle, {});
};
;// CONCATENATED MODULE: ./src/views/index.tsx










;// CONCATENATED MODULE: ./src/actions/convertMasterEditions.ts



const convertMasterEditions_BATCH_SIZE = 10;
const CONVERT_TRANSACTION_SIZE = 10;
async function filterMetadata(connection, metadata, masterEditions, accountsByMint) {
  const available = [];
  const unavailable = [];
  let batchWaitCounter = 0;

  for (let i = 0; i < metadata.length; i++) {
    const md = metadata[i];
    const masterEdition = masterEditions[md.info.masterEdition || ''];

    if (masterEdition && (masterEdition === null || masterEdition === void 0 ? void 0 : masterEdition.info.key) == lib.MetadataKey.MasterEditionV1) {
      if (batchWaitCounter == 10) {
        console.log('Waiting 10s before continuing to avoid rate limits');
        await new Promise(resolve => setTimeout(resolve, 10000));
        batchWaitCounter = 0;
      }

      console.log('Reviewing', masterEdition.pubkey);
      let printingBal = 0;

      try {
        const printingBalResp = await connection.getTokenSupply((0,lib.toPublicKey)(masterEdition.info.printingMint));
        printingBal = printingBalResp.value.uiAmount || 0;
      } catch (e) {
        console.error(e);
      }

      const myAcct = accountsByMint.get(masterEdition.info.printingMint);

      if (myAcct) {
        console.log('Existing print account subtracts', myAcct.info.amount.toNumber(), 'from', printingBal);
        printingBal -= myAcct.info.amount.toNumber();
      }

      if (printingBal > 0) {
        console.log('Reject', masterEdition.pubkey, 'due to printing bal of', printingBal);
        unavailable.push(masterEdition);
      } else {
        let oneTimeBal = 0;

        try {
          const oneTimeBalResp = await connection.getTokenSupply((0,lib.toPublicKey)(masterEdition.info.oneTimePrintingAuthorizationMint));
          oneTimeBal = oneTimeBalResp.value.uiAmount || 0;
        } catch (e) {
          console.error(e);
        }

        const myAcct = accountsByMint.get(masterEdition.info.oneTimePrintingAuthorizationMint);

        if (myAcct) {
          console.log('Existing one time account subtracts', myAcct.info.amount.toNumber(), 'from', oneTimeBal);
          oneTimeBal -= myAcct.info.amount.toNumber();
        }

        if (oneTimeBal > 0) {
          console.log('Reject', masterEdition.pubkey, 'due to one time auth bal of', oneTimeBal);
          unavailable.push(masterEdition);
        } else {
          available.push(masterEdition);
        }
      }

      batchWaitCounter++;
    }
  }

  return {
    available,
    unavailable
  };
} // Given a vault you own, unwind all the tokens out of it.

async function convertMasterEditions(connection, wallet, masterEditions, accountsByMint) {
  if (!wallet.publicKey) throw new wallet_adapter_base_.WalletNotConnectedError();
  const PROGRAM_IDS = (0,lib.programIds)();
  const signers = [];
  const instructions = [];
  let currSignerBatch = [];
  let currInstrBatch = [];
  let convertSigners = [];
  let convertInstructions = []; // TODO replace all this with payer account so user doesnt need to click approve several times.

  for (let i = 0; i < masterEditions.length; i++) {
    const masterEdition = masterEditions[i];
    console.log('Converting', masterEdition.pubkey);
    const printingMintAcct = accountsByMint.get(masterEdition.info.printingMint);
    const oneTimeAuthMintAcct = accountsByMint.get(masterEdition.info.oneTimePrintingAuthorizationMint);

    if (printingMintAcct) {
      if (printingMintAcct.info.amount.toNumber() > 0) {
        convertInstructions.push(spl_token_.Token.createBurnInstruction(PROGRAM_IDS.token, (0,lib.toPublicKey)(masterEdition.info.printingMint), (0,lib.toPublicKey)(printingMintAcct.pubkey), wallet.publicKey, [], printingMintAcct.info.amount));
      }

      convertInstructions.push(spl_token_.Token.createCloseAccountInstruction(PROGRAM_IDS.token, (0,lib.toPublicKey)(printingMintAcct.pubkey), wallet.publicKey, wallet.publicKey, []));
    }

    if (oneTimeAuthMintAcct) {
      if (oneTimeAuthMintAcct.info.amount.toNumber() > 0) {
        convertInstructions.push(spl_token_.Token.createBurnInstruction(PROGRAM_IDS.token, (0,lib.toPublicKey)(masterEdition.info.oneTimePrintingAuthorizationMint), (0,lib.toPublicKey)(oneTimeAuthMintAcct.pubkey), wallet.publicKey, [], oneTimeAuthMintAcct.info.amount));
      }

      convertInstructions.push(spl_token_.Token.createCloseAccountInstruction(PROGRAM_IDS.token, (0,lib.toPublicKey)(oneTimeAuthMintAcct.pubkey), wallet.publicKey, wallet.publicKey, []));
    }

    await (0,lib.convertMasterEditionV1ToV2)(masterEdition.pubkey, masterEdition.info.oneTimePrintingAuthorizationMint, masterEdition.info.printingMint, convertInstructions);

    if (convertInstructions.length === CONVERT_TRANSACTION_SIZE) {
      currSignerBatch.push(convertSigners);
      currInstrBatch.push(convertInstructions);
      convertSigners = [];
      convertInstructions = [];
    }

    if (currInstrBatch.length === convertMasterEditions_BATCH_SIZE) {
      signers.push(currSignerBatch);
      instructions.push(currInstrBatch);
      currSignerBatch = [];
      currInstrBatch = [];
    }
  }

  if (convertInstructions.length < CONVERT_TRANSACTION_SIZE && convertInstructions.length > 0) {
    currSignerBatch.push(convertSigners);
    currInstrBatch.push(convertInstructions);
  }

  if (currInstrBatch.length <= convertMasterEditions_BATCH_SIZE && currInstrBatch.length > 0) {
    // add the last one on
    signers.push(currSignerBatch);
    instructions.push(currInstrBatch);
  }

  console.log('Instructions', instructions);

  for (let i = 0; i < instructions.length; i++) {
    const instructionBatch = instructions[i];
    const signerBatch = signers[i];
    console.log('Running batch', i);
    if (instructionBatch.length >= 2) // Pump em through!
      await (0,lib.sendTransactions)(connection, wallet, instructionBatch, signerBatch, lib.SequenceType.StopOnFailure, 'single');else await (0,lib.sendTransactionWithRetry)(connection, wallet, instructionBatch[0], signerBatch[0], 'single');
    console.log('Done');
  }
}
;// CONCATENATED MODULE: ./src/views/admin/index.tsx




function admin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function admin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { admin_ownKeys(Object(source), true).forEach(function (key) { admin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { admin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function admin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  Content: admin_Content
} = external_antd_.Layout;
const AdminView = () => {
  var _wallet$publicKey;

  const {
    store,
    whitelistedCreatorsByCreator,
    isLoading
  } = meta_useMeta();
  const connection = (0,lib.useConnection)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const {
    setVisible
  } = (0,lib.useWalletModal)();
  const connect = (0,external_react_.useCallback)(() => wallet.wallet ? wallet.connect().catch() : setVisible(true), [wallet.wallet, wallet.connect, setVisible]);
  const {
    storeAddress,
    setStoreForOwner,
    isConfigured
  } = (0,lib.useStore)();
  (0,external_react_.useEffect)(() => {
    if (!store && !storeAddress && wallet.publicKey) {
      setStoreForOwner(wallet.publicKey.toBase58());
    }
  }, [store, storeAddress, wallet.publicKey]);
  console.log('@admin', wallet.connected, storeAddress, isLoading, store);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: !wallet.connected ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        type: "primary",
        className: "app-btn",
        onClick: connect,
        children: "Connect"
      }), ' ', "to admin store."]
    }) : !storeAddress || isLoading ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {}) : store && wallet ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(InnerAdminView, {
        store: store,
        whitelistedCreatorsByCreator: whitelistedCreatorsByCreator,
        connection: connection,
        wallet: wallet,
        connected: wallet.connected
      }), !isConfigured && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["To finish initialization please copy config below into", ' ', /*#__PURE__*/jsx_runtime_.jsx("b", {
            children: "packages/web/.env"
          }), " and restart yarn or redeploy"]
        }), /*#__PURE__*/jsx_runtime_.jsx(SetupVariables_SetupVariables, {
          storeAddress: storeAddress,
          storeOwnerAddress: (_wallet$publicKey = wallet.publicKey) === null || _wallet$publicKey === void 0 ? void 0 : _wallet$publicKey.toBase58()
        })]
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Store is not initialized"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Link, {
        to: `/`,
        children: "Go to initialize"
      })]
    })
  });
};

function ArtistModal({
  setUpdatedCreators,
  uniqueCreatorsWithUpdates
}) {
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const {
    0: modalAddress,
    1: setModalAddress
  } = (0,external_react_.useState)('');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      title: "Add New Artist Address",
      visible: modalOpen,
      onOk: () => {
        const addressToAdd = modalAddress;
        setModalAddress('');
        setModalOpen(false);

        if (uniqueCreatorsWithUpdates[addressToAdd]) {
          (0,lib.notify)({
            message: 'Artist already added!',
            type: 'error'
          });
          return;
        }

        let address;

        try {
          address = addressToAdd;
          setUpdatedCreators(u => admin_objectSpread(admin_objectSpread({}, u), {}, {
            [modalAddress]: new metaplex_WhitelistedCreator({
              address,
              activated: true
            })
          }));
        } catch {
          (0,lib.notify)({
            message: 'Only valid Solana addresses are supported',
            type: 'error'
          });
        }
      },
      onCancel: () => {
        setModalAddress('');
        setModalOpen(false);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
        value: modalAddress,
        onChange: e => setModalAddress(e.target.value)
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
      onClick: () => setModalOpen(true),
      children: "Add Creator"
    })]
  });
}

function InnerAdminView({
  store,
  whitelistedCreatorsByCreator,
  connection,
  wallet,
  connected
}) {
  const {
    0: newStore,
    1: setNewStore
  } = (0,external_react_.useState)(store && store.info && new Store(store.info));
  const {
    0: updatedCreators,
    1: setUpdatedCreators
  } = (0,external_react_.useState)({});
  const {
    0: filteredMetadata,
    1: setFilteredMetadata
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)();
  const {
    metadata,
    masterEditions
  } = meta_useMeta();
  const {
    accountByMint
  } = (0,lib.useUserAccounts)();
  (0,external_react_.useMemo)(() => {
    const fn = async () => {
      setFilteredMetadata(await filterMetadata(connection, metadata, masterEditions, accountByMint));
    };

    fn();
  }, [connected]);
  const uniqueCreators = Object.values(whitelistedCreatorsByCreator).reduce((acc, e) => {
    acc[e.info.address] = e.info;
    return acc;
  }, {});

  const uniqueCreatorsWithUpdates = admin_objectSpread(admin_objectSpread({}, uniqueCreators), updatedCreators);

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Address',
    dataIndex: 'address',
    render: val => /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: val
    }),
    key: 'address'
  }, {
    title: 'Activated',
    dataIndex: 'activated',
    key: 'activated',
    render: (value, record) => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Switch, {
      checkedChildren: "Active",
      unCheckedChildren: "Inactive",
      checked: value,
      onChange: val => setUpdatedCreators(u => admin_objectSpread(admin_objectSpread({}, u), {}, {
        [record.key]: new metaplex_WhitelistedCreator({
          activated: val,
          address: record.address
        })
      }))
    })
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(admin_Content, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
      style: {
        marginTop: 10
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          span: 21,
          children: [/*#__PURE__*/jsx_runtime_.jsx(ArtistModal, {
            setUpdatedCreators: setUpdatedCreators,
            uniqueCreatorsWithUpdates: uniqueCreatorsWithUpdates
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            onClick: async () => {
              (0,lib.notify)({
                message: 'Saving...',
                type: 'info'
              });
              await saveAdmin_saveAdmin(connection, wallet, newStore.public, Object.values(updatedCreators));
              (0,lib.notify)({
                message: 'Saved',
                type: 'success'
              });
            },
            type: "primary",
            children: "Submit"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          span: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Switch, {
            checkedChildren: "Public",
            unCheckedChildren: "Whitelist Only",
            checked: newStore.public,
            onChange: val => {
              setNewStore(_ => {
                const newS = new Store(store.info);
                newS.public = val;
                return newS;
              });
            }
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Table, {
          className: "artist-whitelist-table",
          columns: columns,
          dataSource: Object.keys(uniqueCreatorsWithUpdates).map(key => ({
            key,
            address: uniqueCreatorsWithUpdates[key].address,
            activated: uniqueCreatorsWithUpdates[key].activated,
            name: uniqueCreatorsWithUpdates[key].name || (0,lib.shortenAddress)(uniqueCreatorsWithUpdates[key].address),
            image: uniqueCreatorsWithUpdates[key].image
          }))
        })
      })]
    }), !store.info.public && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: ["You have ", filteredMetadata === null || filteredMetadata === void 0 ? void 0 : filteredMetadata.available.length, " MasterEditionV1s that can be converted right now and", ' ', filteredMetadata === null || filteredMetadata === void 0 ? void 0 : filteredMetadata.unavailable.length, " still in unfinished auctions that cannot be converted yet."]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            disabled: loading,
            onClick: async () => {
              setLoading(true);
              await convertMasterEditions(connection, wallet, (filteredMetadata === null || filteredMetadata === void 0 ? void 0 : filteredMetadata.available) || [], accountByMint);
              setLoading(false);
            },
            children: loading ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {}) : /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Convert Eligible Master Editions"
            })
          })
        })
      }), ' ']
    })]
  });
}
;// CONCATENATED MODULE: ./src/views/auction/billing.tsx




function billing_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function billing_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { billing_ownKeys(Object(source), true).forEach(function (key) { billing_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { billing_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function billing_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  Content: billing_Content
} = external_antd_.Layout;
const BillingView = () => {
  const {
    id
  } = (0,external_react_router_dom_.useParams)();
  const auctionView = useAuction(id);
  const connection = (0,lib.useConnection)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const mint = (0,lib.useMint)(auctionView === null || auctionView === void 0 ? void 0 : auctionView.auction.info.tokenMint);
  return auctionView && wallet && connection && mint ? /*#__PURE__*/jsx_runtime_.jsx(InnerBillingView, {
    auctionView: auctionView,
    connection: connection,
    wallet: wallet,
    mint: mint
  }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {});
};

function getLosingParticipationPrice(el, auctionView) {
  var _auctionView$auctionM, _auctionView$auctionM2, _auctionView$auctionM3;

  const nonWinnerConstraint = (_auctionView$auctionM = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM === void 0 ? void 0 : _auctionView$auctionM.nonWinningConstraint;
  if (nonWinnerConstraint === NonWinningConstraint.GivenForFixedPrice) return ((_auctionView$auctionM2 = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM2 === void 0 ? void 0 : (_auctionView$auctionM3 = _auctionView$auctionM2.fixedPrice) === null || _auctionView$auctionM3 === void 0 ? void 0 : _auctionView$auctionM3.toNumber()) || 0;else if (nonWinnerConstraint === NonWinningConstraint.GivenForBidPrice) return el.info.lastBid.toNumber() || 0;else return 0;
}

function useWinnerPotsByBidderKey(auctionView) {
  const {
    0: pots,
    1: setPots
  } = (0,external_react_.useState)({});
  const PROGRAM_IDS = (0,lib.programIds)();
  const winnersLength = auctionView.auctionManager.numWinners.toNumber();
  const auction = auctionView.auction;
  const winners = auction.info.bidState.bids;
  const truWinners = (0,external_react_.useMemo)(() => {
    return [...winners].reverse().slice(0, winnersLength);
  }, [winners, winnersLength]);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const promises = truWinners.map(winner => (0,lib.getBidderPotKey)({
        auctionProgramId: PROGRAM_IDS.auction,
        auctionKey: auction.pubkey,
        bidderPubkey: winner.key
      }).then(key => ({
        key,
        winner
      })));
      const values = await Promise.all(promises);
      const newPots = values.reduce((agg, value) => {
        const el = lib.cache.get(value.key);

        if (el) {
          agg[value.winner.key] = el;
        }

        return agg;
      }, {});
      setPots(newPots);
    })();
  }, [truWinners, setPots]);
  return pots;
}

function usePayoutTickets(auctionView) {
  const {
    payoutTickets
  } = meta_useMeta();
  const {
    0: foundPayoutTickets,
    1: setFoundPayoutTickets
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(() => {
    if (auctionView.items.flat().map(i => i.metadata).filter(i => !i).length) {
      return;
    }

    const currFound = billing_objectSpread({}, foundPayoutTickets); // items are in exact order of winningConfigs + order of bid winners
    // when we moved to tiered auctions items will be array of arrays, remember this...
    // this becomes triple loop


    const prizeArrays = [...auctionView.items, ...(auctionView.participationItem ? [[auctionView.participationItem]] : [])];
    const payoutPromises = [];
    let total = 0;

    for (let i = 0; i < prizeArrays.length; i++) {
      const items = prizeArrays[i];

      for (let j = 0; j < items.length; j++) {
        var _item$metadata, _item$metadata$info, _item$metadata$info$d;

        const item = items[j];
        const creators = ((_item$metadata = item.metadata) === null || _item$metadata === void 0 ? void 0 : (_item$metadata$info = _item$metadata.info) === null || _item$metadata$info === void 0 ? void 0 : (_item$metadata$info$d = _item$metadata$info.data) === null || _item$metadata$info$d === void 0 ? void 0 : _item$metadata$info$d.creators) || [];
        const recipientAddresses = creators ? creators.map(c => c.address).concat([auctionView.auctionManager.authority]) : [auctionView.auctionManager.authority];

        for (let k = 0; k < recipientAddresses.length; k++) {
          // Ensure no clashes with tickets from other safety deposits in other winning configs even if from same creator by making long keys
          const key = `${auctionView.auctionManager.pubkey}-${i}-${j}-${item.safetyDeposit.pubkey}-${recipientAddresses[k]}-${k}`;

          if (!currFound[key]) {
            payoutPromises.push({
              key,
              promise: getPayoutTicket(auctionView.auctionManager.pubkey, item === auctionView.participationItem ? null : i, item === auctionView.participationItem ? null : j, k < recipientAddresses.length - 1 ? k : null, item.safetyDeposit.pubkey, recipientAddresses[k])
            });
            total += 1;
          }
        }
      }
    }

    Promise.all(payoutPromises.map(p => p.promise)).then(payoutKeys => {
      payoutKeys.forEach((payoutKey, i) => {
        if (payoutTickets[payoutKey]) currFound[payoutPromises[i].key] = payoutTickets[payoutKey];
      });
      setFoundPayoutTickets(pt => billing_objectSpread(billing_objectSpread({}, pt), currFound));
    });
  }, [Object.values(payoutTickets).length, auctionView.items.flat().map(i => i.metadata).filter(i => !!i).length]);
  return Object.values(foundPayoutTickets).reduce((acc, el) => {
    if (!acc[el.info.recipient]) {
      acc[el.info.recipient] = {
        sum: 0,
        tickets: []
      };
    }

    acc[el.info.recipient].tickets.push(el);
    acc[el.info.recipient].sum += el.info.amountPaid.toNumber();
    return acc;
  }, {});
}

function useBillingInfo({
  auctionView
}) {
  var _auctionView$auctionM4, _auctionView$auctionM5;

  const {
    bidRedemptions,
    bidderMetadataByAuctionAndBidder
  } = meta_useMeta();
  const auctionKey = auctionView.auction.pubkey;
  const {
    0: participationBidRedemptionKeys,
    1: setParticipationBidRedemptionKeys
  } = (0,external_react_.useState)({});
  const bids = useBidsForAuction_useBidsForAuction(auctionView.auction.pubkey);
  const payoutTickets = usePayoutTickets(auctionView);
  const winners = [...auctionView.auction.info.bidState.bids].reverse().slice(0, auctionView.auctionManager.numWinners.toNumber());
  const winnerPotsByBidderKey = useWinnerPotsByBidderKey(auctionView); // Uncancelled bids or bids that were cancelled for refunds but only after redeemed
  // for participation

  const usableBids = bids.filter(b => {
    var _bidRedemptions$parti, _auctionView$particip;

    return !b.info.cancelled || ((_bidRedemptions$parti = bidRedemptions[participationBidRedemptionKeys[b.pubkey]]) === null || _bidRedemptions$parti === void 0 ? void 0 : _bidRedemptions$parti.info.getBidRedeemed(((_auctionView$particip = auctionView.participationItem) === null || _auctionView$particip === void 0 ? void 0 : _auctionView$particip.safetyDeposit.info.order) || 0));
  });
  let hasParticipation = auctionView.auctionManager.participationConfig !== undefined && auctionView.auctionManager.participationConfig !== null;
  let participationEligible = hasParticipation ? usableBids : [];
  (0,external_react_.useMemo)(async () => {
    const newKeys = {};

    for (let i = 0; i < bids.length; i++) {
      const o = bids[i];

      if (!participationBidRedemptionKeys[o.pubkey]) {
        newKeys[o.pubkey] = (await getBidderKeys(auctionView.auction.pubkey, o.info.bidderPubkey)).bidRedemption;
      }
    }

    setParticipationBidRedemptionKeys(billing_objectSpread(billing_objectSpread({}, participationBidRedemptionKeys), newKeys));
  }, [bids.length]);
  if (((_auctionView$auctionM4 = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM4 === void 0 ? void 0 : _auctionView$auctionM4.winnerConstraint) === WinningConstraint.NoParticipationPrize) // Filter winners out of the open edition eligible
    participationEligible = participationEligible.filter( // winners are stored by pot key, not bidder key, so we translate
    b => !winnerPotsByBidderKey[b.info.bidderPubkey]);
  const nonWinnerConstraint = (_auctionView$auctionM5 = auctionView.auctionManager.participationConfig) === null || _auctionView$auctionM5 === void 0 ? void 0 : _auctionView$auctionM5.nonWinningConstraint;
  const participationEligibleUnredeemable = [];
  participationEligible.forEach(o => {
    const isWinner = winnerPotsByBidderKey[o.info.bidderPubkey]; // Winners automatically pay nothing for open editions, and are getting claimed anyway right now
    // so no need to add them to list

    if (isWinner) {
      return;
    }

    if (nonWinnerConstraint === NonWinningConstraint.GivenForFixedPrice || nonWinnerConstraint === NonWinningConstraint.GivenForBidPrice) {
      const key = participationBidRedemptionKeys[o.pubkey];

      if (key) {
        var _auctionView$particip2;

        const redemption = bidRedemptions[key];
        if (!redemption || !redemption.info.getBidRedeemed(((_auctionView$particip2 = auctionView.participationItem) === null || _auctionView$particip2 === void 0 ? void 0 : _auctionView$particip2.safetyDeposit.info.order) || 0)) participationEligibleUnredeemable.push(o);
      } else participationEligibleUnredeemable.push(o);
    }
  });
  const participationUnredeemedTotal = participationEligibleUnredeemable.reduce((acc, el) => acc += getLosingParticipationPrice(el, auctionView), 0); // Winners always get it for free so pay zero for them - figure out among all
  // eligible open edition winners what is the total possible for display.

  const participationPossibleTotal = participationEligible.reduce((acc, el) => {
    const isWinner = winnerPotsByBidderKey[el.info.bidderPubkey];
    let price = 0;
    if (!isWinner) price = getLosingParticipationPrice(el, auctionView);
    return acc += price;
  }, 0);
  const totalWinnerPayments = winners.reduce((acc, w) => acc += w.amount.toNumber(), 0);
  const winnersThatCanBeEmptied = Object.values(winnerPotsByBidderKey).filter(p => !p.info.emptied);
  const bidsToClaim = [...winnersThatCanBeEmptied.map(pot => ({
    metadata: bidderMetadataByAuctionAndBidder[`${auctionKey}-${pot.info.bidderAct}`],
    pot
  }))];
  return {
    bidsToClaim,
    totalWinnerPayments,
    payoutTickets,
    participationEligible,
    participationPossibleTotal,
    participationUnredeemedTotal,
    hasParticipation
  };
}
const InnerBillingView = ({
  auctionView,
  wallet,
  connection,
  mint
}) => {
  const id = auctionView.thumbnail.metadata.pubkey;
  const art = useArt_useArt(id);
  const balance = useUserBalance(auctionView.auction.info.tokenMint);
  const {
    0: escrowBalance,
    1: setEscrowBalance
  } = (0,external_react_.useState)();
  const {
    whitelistedCreatorsByCreator
  } = meta_useMeta();
  const {
    0: escrowBalanceRefreshCounter,
    1: setEscrowBalanceRefreshCounter
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    connection.getTokenAccountBalance((0,lib.toPublicKey)(auctionView.auctionManager.acceptPayment)).then(resp => {
      if (resp.value.uiAmount !== undefined && resp.value.uiAmount !== null) setEscrowBalance(resp.value.uiAmount);
    });
  }, [escrowBalanceRefreshCounter]);
  const myPayingAccount = balance.accounts[0];
  const {
    accountByMint
  } = (0,lib.useUserAccounts)();
  const {
    bidsToClaim,
    totalWinnerPayments,
    payoutTickets,
    participationPossibleTotal,
    participationUnredeemedTotal,
    hasParticipation
  } = useBillingInfo({
    auctionView
  });
  return /*#__PURE__*/jsx_runtime_.jsx(billing_Content, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        style: {
          margin: '0 30px',
          textAlign: 'left',
          fontSize: '1.4rem'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          span: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(ArtContent_ArtContent, {
            pubkey: id,
            className: "artwork-image",
            allowMeshRender: true
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          span: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              fontWeight: 700
            },
            children: art.title
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-header",
            children: "TOTAL AUCTION VALUE"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "escrow",
            children: ["\u25CE", (0,lib.fromLamports)(totalWinnerPayments + participationPossibleTotal, mint)]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-header",
            children: "TOTAL AUCTION REDEEMED VALUE"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "escrow",
            children: ["\u25CE", (0,lib.fromLamports)(totalWinnerPayments + participationPossibleTotal - participationUnredeemedTotal, mint)]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-header",
            children: "TOTAL COLLECTED BY ARTISTS AND AUCTIONEER"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "escrow",
            children: ["\u25CE", (0,lib.fromLamports)(Object.values(payoutTickets).reduce((acc, el) => acc += el.sum, 0), mint)]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-header",
            children: "TOTAL UNSETTLED"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "escrow",
            children: ["\u25CE", (0,lib.fromLamports)(bidsToClaim.reduce((acc, el) => acc += el.metadata.info.lastBid.toNumber(), 0), mint)]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-header",
            children: "TOTAL IN ESCROW"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "escrow",
            children: escrowBalance !== undefined ? `◎${escrowBalance}` : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), hasParticipation && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "info-header",
              children: "TOTAL UNREDEEMED PARTICIPATION FEES OUTSTANDING"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "outstanding-open-editions",
              children: ["\u25CE", (0,lib.fromLamports)(participationUnredeemedTotal, mint)]
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            type: "primary",
            size: "large",
            className: "action-btn",
            onClick: async () => {
              await settle(connection, wallet, auctionView, bidsToClaim.map(b => b.pot), myPayingAccount.pubkey, accountByMint);
              setEscrowBalanceRefreshCounter(ctr => ctr + 1);
            },
            children: "SETTLE OUTSTANDING"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Table, {
          style: {
            width: '100%'
          },
          columns: [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
          }, {
            title: 'Amount Paid',
            dataIndex: 'amountPaid',
            render: val => /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["\u25CE", (0,lib.fromLamports)(val, mint)]
            }),
            key: 'amountPaid'
          }],
          dataSource: Object.keys(payoutTickets).map(t => {
            var _whitelistedCreatorsB, _whitelistedCreatorsB2;

            return {
              key: t,
              name: ((_whitelistedCreatorsB = whitelistedCreatorsByCreator[t]) === null || _whitelistedCreatorsB === void 0 ? void 0 : (_whitelistedCreatorsB2 = _whitelistedCreatorsB.info) === null || _whitelistedCreatorsB2 === void 0 ? void 0 : _whitelistedCreatorsB2.name) || 'N/A',
              address: t,
              amountPaid: payoutTickets[t].sum
            };
          })
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/views/lotteryStore/index.tsx











const CreateLotteryStoreView = () => {
  const [form] = external_antd_.Form.useForm();
  const connection = (0,lib.useConnection)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const mint = (0,lib.useMint)(QUOTE_MINT);
  const {
    width
  } = useWindowDimensions();
  const {
    0: storeID,
    1: setStoreID
  } = (0,external_react_.useState)('');
  const {
    0: mintCount,
    1: setMintCount
  } = (0,external_react_.useState)(0);
  const {
    0: mintAddress,
    1: setMintAddress
  } = (0,external_react_.useState)('');
  const {
    0: nfturi,
    1: setNFTUri
  } = (0,external_react_.useState)('');
  const {
    0: nftname,
    1: setNFTName
  } = (0,external_react_.useState)('');
  const {
    0: nftsymbol,
    1: setNFTSymbol
  } = (0,external_react_.useState)('');

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  async function createStore() {
    let storeid = '';
    const storeProgramId = (0,lib.programIds)().store;
    const STORE_PREFIX = 'store';
    makeStore(connection, wallet).then(({
      txid,
      slot,
      store
    }) => {
      console.log(txid);
      console.log(slot);
      storeid = store;
    }).catch(reason => {
      console.log(reason);
    }).finally(async () => {
      if (storeid != "") {
        try {
          console.log("store id", storeid);
          setStoreID(storeid);
          await loadAccount(connection, (0,lib.toPublicKey)(storeid), (0,lib.toPublicKey)((0,lib.programIds)().store));
        } catch (err) {
          console.log(err);
        }
      }
    });
    setMintCount(0);
    setMintAddress('');
    setNFTUri('');
    setNFTName('');
    setNFTSymbol('');
  }

  async function loadAccount(connection, address, programId) {
    const accountInfo = await connection.getAccountInfo(address);

    if (accountInfo === null) {
      throw new Error('Failed to find account');
    }

    if (!accountInfo.owner.equals(programId)) {
      throw new Error(`Invalid owner: ${JSON.stringify(accountInfo.owner)}`);
    }

    return Buffer.from(accountInfo.data);
  }

  async function mintNFT() {
    let mintAdd = '';

    if (nfturi == '' || nftname == '' || nftsymbol == '') {
      return;
    }

    const storeProgramId = (0,lib.programIds)().store;
    const STORE_PREFIX = 'store';
    let [, nonce] = await web3_js_.PublicKey.findProgramAddress([Buffer.from(STORE_PREFIX), (0,lib.toPublicKey)(storeProgramId).toBuffer()], (0,lib.toPublicKey)(storeProgramId));
    mintNFTStore(connection, wallet, storeID, new lib.MintNFTArgs({
      name: nftname,
      symbol: nftsymbol,
      uri: nfturi,
      bump: nonce
    })).then(({
      txid,
      slot,
      mint
    }) => {
      console.log(txid);
      mintAdd = mint;
    }).catch(reason => {
      console.log(reason);
    }).finally(async () => {
      if (mintAdd != "") {
        try {
          console.log("mint address", mintAdd);
          setMintAddress(mintAdd);
          await loadAccount(connection, (0,lib.toPublicKey)(mintAdd), (0,lib.toPublicKey)((0,lib.programIds)().store));
          setMintCount(mintCount + 1);
          setNFTUri('');
          setNFTName('');
          setNFTSymbol('');
          form.resetFields();
        } catch (err) {
          console.log(err);
        }
      }
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        className: "btn-create-lottery",
        onClick: e => createStore(),
        children: "Create Store"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), storeID == '' ? '' : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: ["Store ID: ", storeID]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: ["Mint Count: ", mintCount]
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Mint new nft"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
          form: form,
          name: "basic",
          labelCol: {
            span: 8
          },
          wrapperCol: {
            span: 16
          },
          initialValues: {
            remember: true
          },
          autoComplete: "off",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
            label: "URI",
            name: "uri",
            rules: [{
              required: true,
              message: 'Please input uri!'
            }],
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
              value: nfturi,
              onChange: e => setNFTUri(e.target.value)
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
            label: "Name",
            name: "name",
            rules: [{
              required: true,
              message: 'Please input name!'
            }],
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
              value: nftname,
              onChange: e => setNFTName(e.target.value)
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
            label: "Symbol",
            name: "symbol",
            rules: [{
              required: true,
              message: 'Please input symbol!'
            }],
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
              value: nftsymbol,
              onChange: e => setNFTSymbol(e.target.value)
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
            wrapperCol: {
              offset: 8,
              span: 16
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
              htmlType: "submit",
              onClick: e => mintNFT(),
              children: "Mint NFT"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), mintAddress == '' ? '' : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mint-address",
          children: ["Mint Address: ", mintAddress]
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/views/lotteryNFT/index.tsx












const CreateLotteryNFTView = () => {
  const [form] = external_antd_.Form.useForm();
  const connection = (0,lib.useConnection)();
  const wallet = (0,wallet_adapter_react_.useWallet)();
  const mint = (0,lib.useMint)(QUOTE_MINT);
  const {
    width
  } = useWindowDimensions();
  const {
    0: storeID,
    1: setStoreID
  } = (0,external_react_.useState)('2Pgj2xq6G1oNcziFdHbt88hbmWaW1GQPdhcXPkNzZk42');
  const {
    0: createdLottery,
    1: setCreatedLottery
  } = (0,external_react_.useState)('');
  const {
    0: mintAddress,
    1: setMintAddress
  } = (0,external_react_.useState)(QUOTE_MINT.toBase58());
  const {
    0: enddate,
    1: setEndDate
  } = (0,external_react_.useState)(external_moment_default()().unix() + 7 * 24 * 3600);
  const {
    0: ticketPrice,
    1: setTicketPrice
  } = (0,external_react_.useState)(1);
  const {
    0: ticketAmount,
    1: setTicketAmount
  } = (0,external_react_.useState)(10);
  const {
    0: nftAmount,
    1: setNftAmount
  } = (0,external_react_.useState)(100);

  async function createNFT() {
    if (enddate == 0 || ticketPrice == 0 || ticketAmount == 0) {
      return;
    }

    setCreatedLottery("");
    let lotteryId = "";
    makeLottery(connection, wallet, storeID, mintAddress, new lib.CreateLotteryArgs({
      endLotteryAt: new (external_bn_js_default())(enddate),
      ticketPrice: new (external_bn_js_default())(ticketPrice),
      ticketAmount: ticketAmount,
      nftAmount: nftAmount
    })).then(({
      txid,
      slot,
      lottery
    }) => {
      console.log(txid);
      lotteryId = lottery;
    }).catch(reason => {
      console.log(reason);
    }).finally(async () => {
      // find lottery
      if (lotteryId != "") {
        try {
          console.log("lottery id", lotteryId);
          await loadAccount(connection, (0,lib.toPublicKey)(lotteryId), (0,lib.toPublicKey)((0,lib.programIds)().lottery));
          setCreatedLottery(lotteryId);
        } catch (err) {
          console.log(err);
        }
      }
    });
  }

  async function loadAccount(connection, address, programId) {
    const accountInfo = await connection.getAccountInfo(address);

    if (accountInfo === null) {
      throw new Error('Failed to find account');
    }

    if (!accountInfo.owner.equals(programId)) {
      throw new Error(`Invalid owner: ${JSON.stringify(accountInfo.owner)}`);
    }

    return Buffer.from(accountInfo.data);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
        className: "create-lottery-nft",
        form: form,
        name: "basic",
        labelCol: {
          span: 8
        },
        wrapperCol: {
          span: 16
        },
        initialValues: {
          remember: true
        },
        autoComplete: "off",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          label: "Store ID",
          name: "storeid",
          rules: [{
            required: false,
            message: 'Please input store id!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            value: storeID,
            defaultValue: storeID,
            onChange: e => setStoreID(e.target.value)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          label: "Token Mint Address",
          name: "tokenmintaddress",
          rules: [{
            required: false,
            message: 'Please input Token Mint Address!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            value: mintAddress,
            defaultValue: mintAddress,
            onChange: e => setMintAddress(e.target.value)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          label: "End Date",
          name: "enddate",
          rules: [{
            required: false,
            message: 'Please input End Date!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            value: enddate,
            defaultValue: enddate,
            onChange: e => setEndDate(parseInt(e.target.value))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          label: "Ticket Price",
          name: "ticketprice",
          rules: [{
            required: false,
            message: 'Please input Ticket Price!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            value: ticketPrice,
            defaultValue: ticketPrice,
            onChange: e => setTicketPrice(parseInt(e.target.value))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          label: "Ticket Amount",
          name: "tokenamount",
          rules: [{
            required: false,
            message: 'Please input Token Amount!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            value: ticketAmount,
            defaultValue: ticketAmount,
            onChange: e => setTicketAmount(parseInt(e.target.value))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          label: "NFT Amount",
          name: "nftamount",
          rules: [{
            required: false,
            message: 'Please input NFT Amount!'
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            type: "number",
            value: nftAmount,
            defaultValue: nftAmount,
            onChange: e => setNftAmount(parseInt(e.target.value))
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form.Item, {
          wrapperCol: {
            offset: 8,
            span: 16
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            htmlType: "submit",
            onClick: e => createNFT(),
            children: "Create Lottery NFT"
          }), createdLottery != '' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "created lottery account address: ", createdLottery]
          }) : '']
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/routes.tsx










function Routes() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.HashRouter, {
      basename: '/',
      children: /*#__PURE__*/jsx_runtime_.jsx(Providers, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_router_dom_.Switch, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/admin",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(AdminView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/join-raffle",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(JoinRaffleView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/create-lottery-store",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(CreateLotteryStoreView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/create-lottery",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(CreateLotteryNFTView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/analytics",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(AnalyticsView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/art/create/:step_param?",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(ArtCreateView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/artworks/:id?",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(ArtworksView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/art/:id",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(ArtView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/artists/:id",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(ArtistView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/artists",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(ArtistsView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/auction/create/:step_param?",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(AuctionCreateView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/auction/:id",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(AuctionView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            exact: true,
            path: "/auction/:id/billing",
            component: () => /*#__PURE__*/jsx_runtime_.jsx(BillingView, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_.Route, {
            path: "/",
            component: () => /*#__PURE__*/jsx_runtime_.jsx("div", {})
          })]
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/App.tsx




function App() {
  return /*#__PURE__*/jsx_runtime_.jsx(Routes, {});
}

/* harmony default export */ var src_App = (App);

/***/ }),

/***/ 6882:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "ArtCard_card__bs8mb",
	"cardImageContainer": "ArtCard_cardImageContainer__2MkcG",
	"contentContaier": "ArtCard_contentContaier__1ofjf"
};


/***/ }),

/***/ 9336:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "project-details_container__2yjfO",
	"header": "project-details_header__RXSL2",
	"title": "project-details_title__xI5mp",
	"detailsContainer": "project-details_detailsContainer__3rvGf",
	"detailsBox": "project-details_detailsBox__1qh-S",
	"button": "project-details_button__2f52B"
};


/***/ }),

/***/ 5596:
/***/ (function(module) {

// Exports
module.exports = {
	"sliderContainer": "Slider_sliderContainer__1JtZg",
	"btnPrev": "Slider_btnPrev__3mv9s",
	"btnNext": "Slider_btnNext__33AdZ"
};


/***/ }),

/***/ 3081:
/***/ (function(module) {

// Exports
module.exports = {
	"timer": "Timer_timer__T727u",
	"timerBoxContainer": "Timer_timerBoxContainer__22mip",
	"timerBox": "Timer_timerBox__MAR88",
	"text": "Timer_text__1MIyN",
	"timerColon": "Timer_timerColon__3xeHG"
};


/***/ }),

/***/ 8839:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findOrCreateAccountByMint = exports.ensureWrappedAccount = exports.createTokenAccount = exports.createMint = exports.createAssociatedTokenAccountInstruction = exports.createUninitializedAccount = exports.createUninitializedMint = exports.createTempMemoryAccount = exports.DEFAULT_TEMP_MEM_SPACE = exports.ensureSplAccount = void 0;
const spl_token_1 = __webpack_require__(4541);
const web3_js_1 = __webpack_require__(5681);
const ids_1 = __webpack_require__(9556);
const programIds_1 = __webpack_require__(6120);
const accounts_1 = __webpack_require__(9026);
function ensureSplAccount(instructions, cleanupInstructions, toCheck, payer, amount, signers) {
    if (!toCheck.info.isNative) {
        return toCheck.pubkey;
    }
    const account = createUninitializedAccount(instructions, payer, amount, signers);
    instructions.push(spl_token_1.Token.createInitAccountInstruction(ids_1.TOKEN_PROGRAM_ID, ids_1.WRAPPED_SOL_MINT, account, payer));
    cleanupInstructions.push(spl_token_1.Token.createCloseAccountInstruction(ids_1.TOKEN_PROGRAM_ID, account, payer, payer, []));
    return account;
}
exports.ensureSplAccount = ensureSplAccount;
exports.DEFAULT_TEMP_MEM_SPACE = 65548;
function createTempMemoryAccount(instructions, payer, signers, owner, space = exports.DEFAULT_TEMP_MEM_SPACE) {
    const account = web3_js_1.Keypair.generate();
    instructions.push(web3_js_1.SystemProgram.createAccount({
        fromPubkey: payer,
        newAccountPubkey: account.publicKey,
        // 0 will evict/close account since it cannot pay rent
        lamports: 0,
        space: space,
        programId: owner,
    }));
    signers.push(account);
    return account.publicKey;
}
exports.createTempMemoryAccount = createTempMemoryAccount;
function createUninitializedMint(instructions, payer, amount, signers) {
    const account = web3_js_1.Keypair.generate();
    instructions.push(web3_js_1.SystemProgram.createAccount({
        fromPubkey: payer,
        newAccountPubkey: account.publicKey,
        lamports: amount,
        space: spl_token_1.MintLayout.span,
        programId: ids_1.TOKEN_PROGRAM_ID,
    }));
    signers.push(account);
    return account.publicKey;
}
exports.createUninitializedMint = createUninitializedMint;
function createUninitializedAccount(instructions, payer, amount, signers) {
    const account = web3_js_1.Keypair.generate();
    instructions.push(web3_js_1.SystemProgram.createAccount({
        fromPubkey: payer,
        newAccountPubkey: account.publicKey,
        lamports: amount,
        space: spl_token_1.AccountLayout.span,
        programId: ids_1.TOKEN_PROGRAM_ID,
    }));
    signers.push(account);
    return account.publicKey;
}
exports.createUninitializedAccount = createUninitializedAccount;
function createAssociatedTokenAccountInstruction(instructions, associatedTokenAddress, payer, walletAddress, splTokenMintAddress) {
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: ids_1.TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: ids_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([]),
    }));
}
exports.createAssociatedTokenAccountInstruction = createAssociatedTokenAccountInstruction;
function createMint(instructions, payer, mintRentExempt, decimals, owner, freezeAuthority, signers) {
    const account = createUninitializedMint(instructions, payer, mintRentExempt, signers);
    instructions.push(spl_token_1.Token.createInitMintInstruction(ids_1.TOKEN_PROGRAM_ID, account, decimals, owner, freezeAuthority));
    return account;
}
exports.createMint = createMint;
function createTokenAccount(instructions, payer, accountRentExempt, mint, owner, signers) {
    const account = createUninitializedAccount(instructions, payer, accountRentExempt, signers);
    instructions.push(spl_token_1.Token.createInitAccountInstruction(ids_1.TOKEN_PROGRAM_ID, mint, account, owner));
    return account;
}
exports.createTokenAccount = createTokenAccount;
function ensureWrappedAccount(instructions, cleanupInstructions, toCheck, payer, amount, signers) {
    if (toCheck && !toCheck.info.isNative) {
        return toCheck.pubkey;
    }
    const TOKEN_PROGRAM_ID = programIds_1.programIds().token;
    const account = web3_js_1.Keypair.generate();
    instructions.push(web3_js_1.SystemProgram.createAccount({
        fromPubkey: payer,
        newAccountPubkey: account.publicKey,
        lamports: amount,
        space: spl_token_1.AccountLayout.span,
        programId: TOKEN_PROGRAM_ID,
    }));
    instructions.push(spl_token_1.Token.createInitAccountInstruction(TOKEN_PROGRAM_ID, ids_1.WRAPPED_SOL_MINT, account.publicKey, payer));
    cleanupInstructions.push(spl_token_1.Token.createCloseAccountInstruction(TOKEN_PROGRAM_ID, account.publicKey, payer, payer, []));
    signers.push(account);
    return account.publicKey.toBase58();
}
exports.ensureWrappedAccount = ensureWrappedAccount;
// TODO: check if one of to accounts needs to be native sol ... if yes unwrap it ...
function findOrCreateAccountByMint(payer, owner, instructions, cleanupInstructions, accountRentExempt, mint, // use to identify same type
signers, excluded) {
    const accountToFind = mint.toBase58();
    const ownerKey = owner.toBase58();
    const account = accounts_1.cache
        .byParser(accounts_1.TokenAccountParser)
        .map(id => accounts_1.cache.get(id))
        .find(acc => acc !== undefined &&
        acc.info.mint.toBase58() === accountToFind &&
        acc.info.owner.toBase58() === ownerKey &&
        (excluded === undefined || !excluded.has(acc.pubkey)));
    const isWrappedSol = accountToFind === ids_1.WRAPPED_SOL_MINT.toBase58();
    let toAccount;
    if (account && !isWrappedSol) {
        toAccount = new web3_js_1.PublicKey(account.pubkey);
    }
    else {
        // creating depositor pool account
        toAccount = createTokenAccount(instructions, payer, accountRentExempt, mint, owner, signers);
        if (isWrappedSol) {
            cleanupInstructions.push(spl_token_1.Token.createCloseAccountInstruction(ids_1.TOKEN_PROGRAM_ID, toAccount, payer, payer, []));
        }
    }
    return toAccount;
}
exports.findOrCreateAccountByMint = findOrCreateAccountByMint;
//# sourceMappingURL=account.js.map

/***/ }),

/***/ 4400:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cancelBid = exports.getAuctionExtended = exports.getBidderPotKey = exports.placeBid = exports.setAuctionAuthority = exports.startAuction = exports.createAuction = exports.decodeAuctionData = exports.AUCTION_SCHEMA = exports.CreateAuctionArgs = exports.WinnerLimit = exports.WinnerLimitType = exports.BidderPot = exports.BIDDER_POT_LEN = exports.BidderMetadata = exports.BIDDER_METADATA_LEN = exports.AuctionData = exports.AuctionDataExtended = exports.PriceFloor = exports.PriceFloorType = exports.BASE_AUCTION_DATA_SIZE = exports.decodeBidderMetadata = exports.BidderMetadataParser = exports.decodeAuctionDataExtended = exports.AuctionDataExtendedParser = exports.decodeBidderPot = exports.BidderPotParser = exports.decodeAuction = exports.AuctionParser = exports.BidState = exports.Bid = exports.BidStateType = exports.AuctionState = exports.MAX_AUCTION_DATA_EXTENDED_SIZE = exports.EXTENDED = exports.METADATA = exports.AUCTION_PREFIX = void 0;
const web3_js_1 = __webpack_require__(5681);
const programIds_1 = __webpack_require__(6120);
const borsh_1 = __webpack_require__(7384);
const bn_js_1 = __importDefault(__webpack_require__(2416));
const moment_1 = __importDefault(__webpack_require__(2470));
const utils_1 = __webpack_require__(398);
exports.AUCTION_PREFIX = 'auction';
exports.METADATA = 'metadata';
exports.EXTENDED = 'extended';
exports.MAX_AUCTION_DATA_EXTENDED_SIZE = 8 + 9 + 2 + 200;
var AuctionState;
(function (AuctionState) {
    AuctionState[AuctionState["Created"] = 0] = "Created";
    AuctionState[AuctionState["Started"] = 1] = "Started";
    AuctionState[AuctionState["Ended"] = 2] = "Ended";
})(AuctionState = exports.AuctionState || (exports.AuctionState = {}));
var BidStateType;
(function (BidStateType) {
    BidStateType[BidStateType["EnglishAuction"] = 0] = "EnglishAuction";
    BidStateType[BidStateType["OpenEdition"] = 1] = "OpenEdition";
})(BidStateType = exports.BidStateType || (exports.BidStateType = {}));
class Bid {
    constructor(args) {
        this.key = args.key;
        this.amount = args.amount;
    }
}
exports.Bid = Bid;
class BidState {
    constructor(args) {
        this.type = args.type;
        this.bids = args.bids;
        this.max = args.max;
    }
    getWinnerAt(winnerIndex) {
        const convertedIndex = this.bids.length - winnerIndex - 1;
        if (convertedIndex >= 0 && convertedIndex < this.bids.length) {
            return this.bids[convertedIndex].key;
        }
        else {
            return null;
        }
    }
    getAmountAt(winnerIndex) {
        const convertedIndex = this.bids.length - winnerIndex - 1;
        if (convertedIndex >= 0 && convertedIndex < this.bids.length) {
            return this.bids[convertedIndex].amount;
        }
        else {
            return null;
        }
    }
    getWinnerIndex(bidder) {
        if (!this.bids)
            return null;
        const index = this.bids.findIndex(b => b.key === bidder);
        // auction stores data in reverse order
        if (index !== -1) {
            const zeroBased = this.bids.length - index - 1;
            return zeroBased < this.max.toNumber() ? zeroBased : null;
        }
        else
            return null;
    }
}
exports.BidState = BidState;
const AuctionParser = (pubkey, account) => ({
    pubkey,
    account,
    info: exports.decodeAuction(account.data),
});
exports.AuctionParser = AuctionParser;
const decodeAuction = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.AUCTION_SCHEMA, AuctionData, buffer);
};
exports.decodeAuction = decodeAuction;
const BidderPotParser = (pubkey, account) => ({
    pubkey,
    account,
    info: exports.decodeBidderPot(account.data),
});
exports.BidderPotParser = BidderPotParser;
const decodeBidderPot = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.AUCTION_SCHEMA, BidderPot, buffer);
};
exports.decodeBidderPot = decodeBidderPot;
const AuctionDataExtendedParser = (pubkey, account) => ({
    pubkey,
    account,
    info: exports.decodeAuctionDataExtended(account.data),
});
exports.AuctionDataExtendedParser = AuctionDataExtendedParser;
const decodeAuctionDataExtended = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.AUCTION_SCHEMA, AuctionDataExtended, buffer);
};
exports.decodeAuctionDataExtended = decodeAuctionDataExtended;
const BidderMetadataParser = (pubkey, account) => ({
    pubkey,
    account,
    info: exports.decodeBidderMetadata(account.data),
});
exports.BidderMetadataParser = BidderMetadataParser;
const decodeBidderMetadata = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.AUCTION_SCHEMA, BidderMetadata, buffer);
};
exports.decodeBidderMetadata = decodeBidderMetadata;
exports.BASE_AUCTION_DATA_SIZE = 32 + 32 + 32 + 9 + 9 + 9 + 9 + 1 + 32 + 1 + 8 + 8;
var PriceFloorType;
(function (PriceFloorType) {
    PriceFloorType[PriceFloorType["None"] = 0] = "None";
    PriceFloorType[PriceFloorType["Minimum"] = 1] = "Minimum";
    PriceFloorType[PriceFloorType["BlindedPrice"] = 2] = "BlindedPrice";
})(PriceFloorType = exports.PriceFloorType || (exports.PriceFloorType = {}));
class PriceFloor {
    constructor(args) {
        this.type = args.type;
        this.hash = args.hash || new Uint8Array(32);
        if (this.type === PriceFloorType.Minimum) {
            if (args.minPrice) {
                this.hash.set(args.minPrice.toArrayLike(Buffer, 'le', 8), 0);
            }
            else {
                this.minPrice = new bn_js_1.default((args.hash || new Uint8Array(0)).slice(0, 8), 'le');
            }
        }
    }
}
exports.PriceFloor = PriceFloor;
class AuctionDataExtended {
    constructor(args) {
        this.totalUncancelledBids = args.totalUncancelledBids;
        this.tickSize = args.tickSize;
        this.gapTickSizePercentage = args.gapTickSizePercentage;
    }
}
exports.AuctionDataExtended = AuctionDataExtended;
class AuctionData {
    constructor(args) {
        this.authority = args.authority;
        this.tokenMint = args.tokenMint;
        this.lastBid = args.lastBid;
        this.endedAt = args.endedAt;
        this.endAuctionAt = args.endAuctionAt;
        this.auctionGap = args.auctionGap;
        this.priceFloor = args.priceFloor;
        this.state = args.state;
        this.bidState = args.bidState;
    }
    timeToEnd() {
        var _a;
        const now = moment_1.default().unix();
        const ended = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        let endAt = ((_a = this.endedAt) === null || _a === void 0 ? void 0 : _a.toNumber()) || 0;
        if (this.auctionGap && this.lastBid) {
            endAt = Math.max(endAt, this.auctionGap.toNumber() + this.lastBid.toNumber());
        }
        let delta = endAt - now;
        if (!endAt || delta <= 0)
            return ended;
        const days = Math.floor(delta / 86400);
        delta -= days * 86400;
        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        const seconds = Math.floor(delta % 60);
        return { days, hours, minutes, seconds };
    }
    ended() {
        const now = moment_1.default().unix();
        if (!this.endedAt)
            return false;
        if (this.endedAt.toNumber() > now)
            return false;
        if (this.endedAt.toNumber() < now) {
            if (this.auctionGap && this.lastBid) {
                const newEnding = this.auctionGap.toNumber() + this.lastBid.toNumber();
                return newEnding < now;
            }
            else
                return true;
        }
    }
}
exports.AuctionData = AuctionData;
exports.BIDDER_METADATA_LEN = 32 + 32 + 8 + 8 + 1;
class BidderMetadata {
    constructor(args) {
        this.bidderPubkey = args.bidderPubkey;
        this.auctionPubkey = args.auctionPubkey;
        this.lastBid = args.lastBid;
        this.lastBidTimestamp = args.lastBidTimestamp;
        this.cancelled = args.cancelled;
    }
}
exports.BidderMetadata = BidderMetadata;
exports.BIDDER_POT_LEN = 32 + 32 + 32 + 1;
class BidderPot {
    constructor(args) {
        this.bidderPot = args.bidderPot;
        this.bidderAct = args.bidderAct;
        this.auctionAct = args.auctionAct;
        this.emptied = args.emptied;
    }
}
exports.BidderPot = BidderPot;
var WinnerLimitType;
(function (WinnerLimitType) {
    WinnerLimitType[WinnerLimitType["Unlimited"] = 0] = "Unlimited";
    WinnerLimitType[WinnerLimitType["Capped"] = 1] = "Capped";
})(WinnerLimitType = exports.WinnerLimitType || (exports.WinnerLimitType = {}));
class WinnerLimit {
    constructor(args) {
        this.type = args.type;
        this.usize = args.usize;
    }
}
exports.WinnerLimit = WinnerLimit;
class CreateAuctionArgs {
    constructor(args) {
        this.instruction = 1;
        this.winners = args.winners;
        this.endAuctionAt = args.endAuctionAt;
        this.auctionGap = args.auctionGap;
        this.tokenMint = args.tokenMint;
        this.authority = args.authority;
        this.resource = args.resource;
        this.priceFloor = args.priceFloor;
        this.tickSize = args.tickSize;
        this.gapTickSizePercentage = args.gapTickSizePercentage;
    }
}
exports.CreateAuctionArgs = CreateAuctionArgs;
class StartAuctionArgs {
    constructor(args) {
        this.instruction = 4;
        this.resource = args.resource;
    }
}
class PlaceBidArgs {
    constructor(args) {
        this.instruction = 6;
        this.resource = args.resource;
        this.amount = args.amount;
    }
}
class CancelBidArgs {
    constructor(args) {
        this.instruction = 0;
        this.resource = args.resource;
    }
}
class SetAuthorityArgs {
    constructor() {
        this.instruction = 5;
    }
}
exports.AUCTION_SCHEMA = new Map([
    [
        CreateAuctionArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['winners', WinnerLimit],
                ['endAuctionAt', { kind: 'option', type: 'u64' }],
                ['auctionGap', { kind: 'option', type: 'u64' }],
                ['tokenMint', 'pubkeyAsString'],
                ['authority', 'pubkeyAsString'],
                ['resource', 'pubkeyAsString'],
                ['priceFloor', PriceFloor],
                ['tickSize', { kind: 'option', type: 'u64' }],
                ['gapTickSizePercentage', { kind: 'option', type: 'u8' }],
            ],
        },
    ],
    [
        WinnerLimit,
        {
            kind: 'struct',
            fields: [
                ['type', 'u8'],
                ['usize', 'u64'],
            ],
        },
    ],
    [
        StartAuctionArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['resource', 'pubkeyAsString'],
            ],
        },
    ],
    [
        PlaceBidArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['amount', 'u64'],
                ['resource', 'pubkeyAsString'],
            ],
        },
    ],
    [
        CancelBidArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['resource', 'pubkeyAsString'],
            ],
        },
    ],
    [
        SetAuthorityArgs,
        {
            kind: 'struct',
            fields: [['instruction', 'u8']],
        },
    ],
    [
        AuctionData,
        {
            kind: 'struct',
            fields: [
                ['authority', 'pubkeyAsString'],
                ['tokenMint', 'pubkeyAsString'],
                ['lastBid', { kind: 'option', type: 'u64' }],
                ['endedAt', { kind: 'option', type: 'u64' }],
                ['endAuctionAt', { kind: 'option', type: 'u64' }],
                ['auctionGap', { kind: 'option', type: 'u64' }],
                ['priceFloor', PriceFloor],
                ['state', 'u8'],
                ['bidState', BidState],
            ],
        },
    ],
    [
        AuctionDataExtended,
        {
            kind: 'struct',
            fields: [
                ['totalUncancelledBids', 'u64'],
                ['tickSize', { kind: 'option', type: 'u64' }],
                ['gapTickSizePercentage', { kind: 'option', type: 'u8' }],
            ],
        },
    ],
    [
        PriceFloor,
        {
            kind: 'struct',
            fields: [
                ['type', 'u8'],
                ['hash', [32]],
            ],
        },
    ],
    [
        BidState,
        {
            kind: 'struct',
            fields: [
                ['type', 'u8'],
                ['bids', [Bid]],
                ['max', 'u64'],
            ],
        },
    ],
    [
        Bid,
        {
            kind: 'struct',
            fields: [
                ['key', 'pubkeyAsString'],
                ['amount', 'u64'],
            ],
        },
    ],
    [
        BidderMetadata,
        {
            kind: 'struct',
            fields: [
                ['bidderPubkey', 'pubkeyAsString'],
                ['auctionPubkey', 'pubkeyAsString'],
                ['lastBid', 'u64'],
                ['lastBidTimestamp', 'u64'],
                ['cancelled', 'u8'],
            ],
        },
    ],
    [
        BidderPot,
        {
            kind: 'struct',
            fields: [
                ['bidderPot', 'pubkeyAsString'],
                ['bidderAct', 'pubkeyAsString'],
                ['auctionAct', 'pubkeyAsString'],
                ['emptied', 'u8'],
            ],
        },
    ],
]);
const decodeAuctionData = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.AUCTION_SCHEMA, AuctionData, buffer);
};
exports.decodeAuctionData = decodeAuctionData;
async function createAuction(settings, creator, instructions) {
    const auctionProgramId = programIds_1.programIds().auction;
    const data = Buffer.from(borsh_1.serialize(exports.AUCTION_SCHEMA, settings));
    const auctionKey = (await utils_1.findProgramAddress([
        Buffer.from(exports.AUCTION_PREFIX),
        utils_1.toPublicKey(auctionProgramId).toBuffer(),
        utils_1.toPublicKey(settings.resource).toBuffer(),
    ], utils_1.toPublicKey(auctionProgramId)))[0];
    const keys = [
        {
            pubkey: utils_1.toPublicKey(creator),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(auctionKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(await getAuctionExtended({
                auctionProgramId,
                resource: settings.resource,
            })),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(auctionProgramId),
        data: data,
    }));
}
exports.createAuction = createAuction;
async function startAuction(resource, creator, instructions) {
    const auctionProgramId = programIds_1.programIds().auction;
    const data = Buffer.from(borsh_1.serialize(exports.AUCTION_SCHEMA, new StartAuctionArgs({
        resource,
    })));
    const auctionKey = (await utils_1.findProgramAddress([
        Buffer.from(exports.AUCTION_PREFIX),
        utils_1.toPublicKey(auctionProgramId).toBuffer(),
        utils_1.toPublicKey(resource).toBuffer(),
    ], utils_1.toPublicKey(auctionProgramId)))[0];
    const keys = [
        {
            pubkey: utils_1.toPublicKey(creator),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(auctionKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(auctionProgramId),
        data: data,
    }));
}
exports.startAuction = startAuction;
async function setAuctionAuthority(auction, currentAuthority, newAuthority, instructions) {
    const auctionProgramId = programIds_1.programIds().auction;
    const data = Buffer.from(borsh_1.serialize(exports.AUCTION_SCHEMA, new SetAuthorityArgs()));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(auction),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(currentAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(newAuthority),
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(auctionProgramId),
        data: data,
    }));
}
exports.setAuctionAuthority = setAuctionAuthority;
async function placeBid(bidderPubkey, bidderTokenPubkey, bidderPotTokenPubkey, tokenMintPubkey, transferAuthority, payer, resource, amount, instructions) {
    const auctionProgramId = programIds_1.programIds().auction;
    const data = Buffer.from(borsh_1.serialize(exports.AUCTION_SCHEMA, new PlaceBidArgs({
        resource,
        amount,
    })));
    const auctionKey = (await utils_1.findProgramAddress([
        Buffer.from(exports.AUCTION_PREFIX),
        utils_1.toPublicKey(auctionProgramId).toBuffer(),
        utils_1.toPublicKey(resource).toBuffer(),
    ], utils_1.toPublicKey(auctionProgramId)))[0];
    const bidderPotKey = await getBidderPotKey({
        auctionProgramId,
        auctionKey,
        bidderPubkey,
    });
    const bidderMetaKey = (await utils_1.findProgramAddress([
        Buffer.from(exports.AUCTION_PREFIX),
        utils_1.toPublicKey(auctionProgramId).toBuffer(),
        utils_1.toPublicKey(auctionKey).toBuffer(),
        utils_1.toPublicKey(bidderPubkey).toBuffer(),
        Buffer.from('metadata'),
    ], utils_1.toPublicKey(auctionProgramId)))[0];
    const keys = [
        {
            pubkey: utils_1.toPublicKey(bidderPubkey),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(bidderTokenPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(bidderPotKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(bidderPotTokenPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(bidderMetaKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(auctionKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(await getAuctionExtended({ auctionProgramId, resource })),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenMintPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(transferAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(payer),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(auctionProgramId),
        data: data,
    }));
    return {
        amount,
    };
}
exports.placeBid = placeBid;
async function getBidderPotKey({ auctionProgramId, auctionKey, bidderPubkey, }) {
    return (await utils_1.findProgramAddress([
        Buffer.from(exports.AUCTION_PREFIX),
        utils_1.toPublicKey(auctionProgramId).toBuffer(),
        utils_1.toPublicKey(auctionKey).toBuffer(),
        utils_1.toPublicKey(bidderPubkey).toBuffer(),
    ], utils_1.toPublicKey(auctionProgramId)))[0];
}
exports.getBidderPotKey = getBidderPotKey;
async function getAuctionExtended({ auctionProgramId, resource, }) {
    return (await utils_1.findProgramAddress([
        Buffer.from(exports.AUCTION_PREFIX),
        utils_1.toPublicKey(auctionProgramId).toBuffer(),
        utils_1.toPublicKey(resource).toBuffer(),
        Buffer.from(exports.EXTENDED),
    ], utils_1.toPublicKey(auctionProgramId)))[0];
}
exports.getAuctionExtended = getAuctionExtended;
async function cancelBid(bidderPubkey, bidderTokenPubkey, bidderPotTokenPubkey, tokenMintPubkey, resource, instructions) {
    const auctionProgramId = programIds_1.programIds().auction;
    const data = Buffer.from(borsh_1.serialize(exports.AUCTION_SCHEMA, new CancelBidArgs({
        resource,
    })));
    const auctionKey = (await utils_1.findProgramAddress([
        Buffer.from(exports.AUCTION_PREFIX),
        utils_1.toPublicKey(auctionProgramId).toBuffer(),
        utils_1.toPublicKey(resource).toBuffer(),
    ], utils_1.toPublicKey(auctionProgramId)))[0];
    const bidderPotKey = await getBidderPotKey({
        auctionProgramId,
        auctionKey,
        bidderPubkey,
    });
    const bidderMetaKey = (await utils_1.findProgramAddress([
        Buffer.from(exports.AUCTION_PREFIX),
        utils_1.toPublicKey(auctionProgramId).toBuffer(),
        utils_1.toPublicKey(auctionKey).toBuffer(),
        utils_1.toPublicKey(bidderPubkey).toBuffer(),
        Buffer.from('metadata'),
    ], utils_1.toPublicKey(auctionProgramId)))[0];
    const keys = [
        {
            pubkey: utils_1.toPublicKey(bidderPubkey),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(bidderTokenPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(bidderPotKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(bidderPotTokenPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(bidderMetaKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(auctionKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(await getAuctionExtended({ auctionProgramId, resource })),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenMintPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(auctionProgramId),
        data: data,
    }));
}
exports.cancelBid = cancelBid;
//# sourceMappingURL=auction.js.map

/***/ }),

/***/ 6618:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8839), exports);
__exportStar(__webpack_require__(4215), exports);
__exportStar(__webpack_require__(5620), exports);
__exportStar(__webpack_require__(4400), exports);
__exportStar(__webpack_require__(6876), exports);
__exportStar(__webpack_require__(8633), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6876:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTicket = exports.setLotteryAuthority = exports.startLottery = exports.createLottery = exports.decodeLotteryData = exports.LOTTERY_SCHEMA = exports.CreateLotteryArgs = exports.LotteryData = exports.decodeLottery = exports.LotteryParser = exports.Ticket = exports.TicketState = exports.LotteryState = exports.LOTTERY_PREFIX = void 0;
const web3_js_1 = __webpack_require__(5681);
const programIds_1 = __webpack_require__(6120);
const borsh_1 = __webpack_require__(7384);
const moment_1 = __importDefault(__webpack_require__(2470));
const utils_1 = __webpack_require__(398);
exports.LOTTERY_PREFIX = 'lottery';
var LotteryState;
(function (LotteryState) {
    LotteryState[LotteryState["Created"] = 0] = "Created";
    LotteryState[LotteryState["Started"] = 1] = "Started";
    LotteryState[LotteryState["Ended"] = 2] = "Ended";
})(LotteryState = exports.LotteryState || (exports.LotteryState = {}));
var TicketState;
(function (TicketState) {
    TicketState[TicketState["Bought"] = 0] = "Bought";
    TicketState[TicketState["Winned"] = 1] = "Winned";
    TicketState[TicketState["NotWinned"] = 2] = "NotWinned";
    TicketState[TicketState["Claimed"] = 3] = "Claimed";
})(TicketState = exports.TicketState || (exports.TicketState = {}));
class Ticket {
    constructor(args) {
        this.owner = args.owner;
        this.state = args.state;
        this.winnedNFTNumber = args.winnedNFTNumber;
    }
}
exports.Ticket = Ticket;
const LotteryParser = (pubkey, account) => ({
    pubkey,
    account,
    info: exports.decodeLottery(account.data),
});
exports.LotteryParser = LotteryParser;
const decodeLottery = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.LOTTERY_SCHEMA, LotteryData, buffer);
};
exports.decodeLottery = decodeLottery;
class LotteryData {
    constructor(args) {
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
        this.soldAmount = args.soldAmount;
    }
    timeToEnd() {
        var _a;
        const now = moment_1.default().unix();
        const ended = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        const endAt = ((_a = this.endedAt) === null || _a === void 0 ? void 0 : _a.toNumber()) || 0;
        let delta = endAt - now;
        if (!endAt || delta <= 0)
            return ended;
        const days = Math.floor(delta / 86400);
        delta -= days * 86400;
        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        const seconds = Math.floor(delta % 60);
        return { days, hours, minutes, seconds };
    }
    ended() {
        const now = moment_1.default().unix();
        if (!this.endedAt)
            return false;
        if (this.endedAt.toNumber() > now)
            return false;
        if (this.endedAt.toNumber() < now) {
            return true;
        }
    }
}
exports.LotteryData = LotteryData;
class CreateLotteryArgs {
    constructor(args) {
        this.instruction = 0;
        this.endLotteryAt = args.endLotteryAt;
        this.ticketPrice = args.ticketPrice;
        this.ticketAmount = args.ticketAmount;
        this.nftAmount = args.nftAmount;
    }
}
exports.CreateLotteryArgs = CreateLotteryArgs;
exports.LOTTERY_SCHEMA = new Map([
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
                ['soldAmount', 'u64'],
            ],
        },
    ],
    [
        Ticket,
        {
            kind: 'struct',
            fields: [
                ['owner', 'pubkeyAsString'],
                ['state', 'u8'],
                ['winnedNFTAmount', 'u64'],
            ],
        },
    ],
]);
const decodeLotteryData = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.LOTTERY_SCHEMA, LotteryData, buffer);
};
exports.decodeLotteryData = decodeLotteryData;
async function createLottery(settings, creator, lotteryStoreId, tokenMint, authority, tokenPoolKey, instructions) {
    const lotteryProgramId = programIds_1.programIds().lottery;
    const tokenProgramId = programIds_1.programIds().token;
    const data = Buffer.from(borsh_1.serialize(exports.LOTTERY_SCHEMA, settings));
    const lotteryKey = (await utils_1.findProgramAddress([
        Buffer.from(exports.LOTTERY_PREFIX),
        utils_1.toPublicKey(lotteryProgramId).toBuffer(),
        utils_1.toPublicKey(lotteryStoreId).toBuffer(),
    ], utils_1.toPublicKey(lotteryProgramId)))[0];
    const keys = [
        {
            pubkey: utils_1.toPublicKey(creator),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(lotteryKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(lotteryStoreId),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenPoolKey),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(authority),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenProgramId),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(lotteryProgramId),
        data: data,
    }));
}
exports.createLottery = createLottery;
async function startLottery(creator, lotteryStore, instructions) {
    const lotteryProgramId = programIds_1.programIds().lottery;
    const data = Buffer.from([2]);
    const lotteryKey = (await utils_1.findProgramAddress([
        Buffer.from(exports.LOTTERY_PREFIX),
        utils_1.toPublicKey(lotteryProgramId).toBuffer(),
        utils_1.toPublicKey(lotteryStore).toBuffer(),
    ], utils_1.toPublicKey(lotteryProgramId)))[0];
    const keys = [
        {
            pubkey: utils_1.toPublicKey(creator),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(lotteryKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(lotteryProgramId),
        data: data,
    }));
}
exports.startLottery = startLottery;
async function setLotteryAuthority(lottery, currentAuthority, newAuthority, instructions) {
    const lotteryProgramId = programIds_1.programIds().lottery;
    const data = Buffer.from([1]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(lottery),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(currentAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(newAuthority),
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(lotteryProgramId),
        data: data,
    }));
}
exports.setLotteryAuthority = setLotteryAuthority;
async function getTicket(ticket, bidderPubkey, bidderTokenPubkey, poolTokenPubkey, tokenMintPubkey, transferAuthority, lottery, instructions) {
    const lotteryProgramId = programIds_1.programIds().lottery;
    const data = Buffer.from([3]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(lottery),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(ticket),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(bidderPubkey),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(bidderTokenPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(poolTokenPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenMintPubkey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(transferAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(lotteryProgramId),
        data: data,
    }));
}
exports.getTicket = getTicket;
//# sourceMappingURL=lottery.js.map

/***/ }),

/***/ 4215:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEditionMarkPda = exports.deprecatedGetReservationList = exports.getMetadata = exports.getEdition = exports.convertMasterEditionV1ToV2 = exports.deprecatedMintPrintingTokens = exports.signMetadata = exports.deprecatedCreateReservationList = exports.updatePrimarySaleHappenedViaToken = exports.mintNewEditionFromMasterEditionViaToken = exports.deprecatedMintNewEditionFromMasterEditionViaPrintingToken = exports.createMasterEdition = exports.createMetadata = exports.updateMetadata = exports.decodeMasterEdition = exports.decodeEdition = exports.decodeEditionMarker = exports.decodeMetadata = exports.METADATA_SCHEMA = exports.Metadata = exports.Data = exports.Creator = exports.Edition = exports.EditionMarker = exports.MasterEditionV2 = exports.MasterEditionV1 = exports.MetadataCategory = exports.MetadataKey = exports.EDITION_MARKER_BIT_SIZE = exports.MAX_EDITION_LEN = exports.MAX_METADATA_LEN = exports.MAX_CREATOR_LEN = exports.MAX_CREATOR_LIMIT = exports.MAX_URI_LENGTH = exports.MAX_SYMBOL_LENGTH = exports.MAX_NAME_LENGTH = exports.RESERVATION = exports.EDITION = exports.METADATA_PREFIX = void 0;
const web3_js_1 = __webpack_require__(5681);
const programIds_1 = __webpack_require__(6120);
const borsh_1 = __webpack_require__(7384);
const utils_1 = __webpack_require__(398);
exports.METADATA_PREFIX = 'metadata';
exports.EDITION = 'edition';
exports.RESERVATION = 'reservation';
exports.MAX_NAME_LENGTH = 32;
exports.MAX_SYMBOL_LENGTH = 10;
exports.MAX_URI_LENGTH = 200;
exports.MAX_CREATOR_LIMIT = 5;
exports.MAX_CREATOR_LEN = 32 + 1 + 1;
exports.MAX_METADATA_LEN = 1 +
    32 +
    32 +
    exports.MAX_NAME_LENGTH +
    exports.MAX_SYMBOL_LENGTH +
    exports.MAX_URI_LENGTH +
    exports.MAX_CREATOR_LIMIT * exports.MAX_CREATOR_LEN +
    2 +
    1 +
    1 +
    198;
exports.MAX_EDITION_LEN = 1 + 32 + 8 + 200;
exports.EDITION_MARKER_BIT_SIZE = 248;
var MetadataKey;
(function (MetadataKey) {
    MetadataKey[MetadataKey["Uninitialized"] = 0] = "Uninitialized";
    MetadataKey[MetadataKey["MetadataV1"] = 4] = "MetadataV1";
    MetadataKey[MetadataKey["EditionV1"] = 1] = "EditionV1";
    MetadataKey[MetadataKey["MasterEditionV1"] = 2] = "MasterEditionV1";
    MetadataKey[MetadataKey["MasterEditionV2"] = 6] = "MasterEditionV2";
    MetadataKey[MetadataKey["EditionMarker"] = 7] = "EditionMarker";
})(MetadataKey = exports.MetadataKey || (exports.MetadataKey = {}));
var MetadataCategory;
(function (MetadataCategory) {
    MetadataCategory["Audio"] = "audio";
    MetadataCategory["Video"] = "video";
    MetadataCategory["Image"] = "image";
    MetadataCategory["VR"] = "vr";
})(MetadataCategory = exports.MetadataCategory || (exports.MetadataCategory = {}));
class MasterEditionV1 {
    constructor(args) {
        this.key = MetadataKey.MasterEditionV1;
        this.supply = args.supply;
        this.maxSupply = args.maxSupply;
        this.printingMint = args.printingMint;
        this.oneTimePrintingAuthorizationMint =
            args.oneTimePrintingAuthorizationMint;
    }
}
exports.MasterEditionV1 = MasterEditionV1;
class MasterEditionV2 {
    constructor(args) {
        this.key = MetadataKey.MasterEditionV2;
        this.supply = args.supply;
        this.maxSupply = args.maxSupply;
    }
}
exports.MasterEditionV2 = MasterEditionV2;
class EditionMarker {
    constructor(args) {
        this.key = MetadataKey.EditionMarker;
        this.ledger = args.ledger;
    }
    editionTaken(edition) {
        const editionOffset = edition % exports.EDITION_MARKER_BIT_SIZE;
        const indexOffset = Math.floor(editionOffset / 8);
        if (indexOffset > 30) {
            throw Error('bad index for edition');
        }
        const positionInBitsetFromRight = 7 - (editionOffset % 8);
        const mask = Math.pow(2, positionInBitsetFromRight);
        const appliedMask = this.ledger[indexOffset] & mask;
        return appliedMask != 0;
    }
}
exports.EditionMarker = EditionMarker;
class Edition {
    constructor(args) {
        this.key = MetadataKey.EditionV1;
        this.parent = args.parent;
        this.edition = args.edition;
    }
}
exports.Edition = Edition;
class Creator {
    constructor(args) {
        this.address = args.address;
        this.verified = args.verified;
        this.share = args.share;
    }
}
exports.Creator = Creator;
class Data {
    constructor(args) {
        this.name = args.name;
        this.symbol = args.symbol;
        this.uri = args.uri;
        this.sellerFeeBasisPoints = args.sellerFeeBasisPoints;
        this.creators = args.creators;
    }
}
exports.Data = Data;
class Metadata {
    constructor(args) {
        this.key = MetadataKey.MetadataV1;
        this.updateAuthority = args.updateAuthority;
        this.mint = args.mint;
        this.data = args.data;
        this.primarySaleHappened = args.primarySaleHappened;
        this.isMutable = args.isMutable;
        this.editionNonce = args.editionNonce;
    }
    async init() {
        const edition = await getEdition(this.mint);
        this.edition = edition;
        this.masterEdition = edition;
    }
}
exports.Metadata = Metadata;
class CreateMetadataArgs {
    constructor(args) {
        this.instruction = 0;
        this.data = args.data;
        this.isMutable = args.isMutable;
    }
}
class UpdateMetadataArgs {
    constructor(args) {
        this.instruction = 1;
        this.data = args.data ? args.data : null;
        this.updateAuthority = args.updateAuthority ? args.updateAuthority : null;
        this.primarySaleHappened = args.primarySaleHappened;
    }
}
class CreateMasterEditionArgs {
    constructor(args) {
        this.instruction = 10;
        this.maxSupply = args.maxSupply;
    }
}
class MintPrintingTokensArgs {
    constructor(args) {
        this.instruction = 9;
        this.supply = args.supply;
    }
}
exports.METADATA_SCHEMA = new Map([
    [
        CreateMetadataArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['data', Data],
                ['isMutable', 'u8'], // bool
            ],
        },
    ],
    [
        UpdateMetadataArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['data', { kind: 'option', type: Data }],
                ['updateAuthority', { kind: 'option', type: 'pubkeyAsString' }],
                ['primarySaleHappened', { kind: 'option', type: 'u8' }],
            ],
        },
    ],
    [
        CreateMasterEditionArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['maxSupply', { kind: 'option', type: 'u64' }],
            ],
        },
    ],
    [
        MintPrintingTokensArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['supply', 'u64'],
            ],
        },
    ],
    [
        MasterEditionV1,
        {
            kind: 'struct',
            fields: [
                ['key', 'u8'],
                ['supply', 'u64'],
                ['maxSupply', { kind: 'option', type: 'u64' }],
                ['printingMint', 'pubkeyAsString'],
                ['oneTimePrintingAuthorizationMint', 'pubkeyAsString'],
            ],
        },
    ],
    [
        MasterEditionV2,
        {
            kind: 'struct',
            fields: [
                ['key', 'u8'],
                ['supply', 'u64'],
                ['maxSupply', { kind: 'option', type: 'u64' }],
            ],
        },
    ],
    [
        Edition,
        {
            kind: 'struct',
            fields: [
                ['key', 'u8'],
                ['parent', 'pubkeyAsString'],
                ['edition', 'u64'],
            ],
        },
    ],
    [
        Data,
        {
            kind: 'struct',
            fields: [
                ['name', 'string'],
                ['symbol', 'string'],
                ['uri', 'string'],
                ['sellerFeeBasisPoints', 'u16'],
                ['creators', { kind: 'option', type: [Creator] }],
            ],
        },
    ],
    [
        Creator,
        {
            kind: 'struct',
            fields: [
                ['address', 'pubkeyAsString'],
                ['verified', 'u8'],
                ['share', 'u8'],
            ],
        },
    ],
    [
        Metadata,
        {
            kind: 'struct',
            fields: [
                ['key', 'u8'],
                ['updateAuthority', 'pubkeyAsString'],
                ['mint', 'pubkeyAsString'],
                ['data', Data],
                ['primarySaleHappened', 'u8'],
                ['isMutable', 'u8'], // bool
            ],
        },
    ],
    [
        EditionMarker,
        {
            kind: 'struct',
            fields: [
                ['key', 'u8'],
                ['ledger', [31]],
            ],
        },
    ],
]);
// eslint-disable-next-line no-control-regex
const METADATA_REPLACE = new RegExp('\u0000', 'g');
const decodeMetadata = (buffer) => {
    const metadata = borsh_1.deserializeUnchecked(exports.METADATA_SCHEMA, Metadata, buffer);
    metadata.data.name = metadata.data.name.replace(METADATA_REPLACE, '');
    metadata.data.uri = metadata.data.uri.replace(METADATA_REPLACE, '');
    metadata.data.symbol = metadata.data.symbol.replace(METADATA_REPLACE, '');
    return metadata;
};
exports.decodeMetadata = decodeMetadata;
const decodeEditionMarker = (buffer) => {
    const editionMarker = borsh_1.deserializeUnchecked(exports.METADATA_SCHEMA, EditionMarker, buffer);
    return editionMarker;
};
exports.decodeEditionMarker = decodeEditionMarker;
const decodeEdition = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.METADATA_SCHEMA, Edition, buffer);
};
exports.decodeEdition = decodeEdition;
const decodeMasterEdition = (buffer) => {
    if (buffer[0] == MetadataKey.MasterEditionV1) {
        return borsh_1.deserializeUnchecked(exports.METADATA_SCHEMA, MasterEditionV1, buffer);
    }
    else {
        return borsh_1.deserializeUnchecked(exports.METADATA_SCHEMA, MasterEditionV2, buffer);
    }
};
exports.decodeMasterEdition = decodeMasterEdition;
async function updateMetadata(data, newUpdateAuthority, primarySaleHappened, mintKey, updateAuthority, instructions, metadataAccount) {
    const metadataProgramId = programIds_1.programIds().metadata;
    metadataAccount =
        metadataAccount ||
            (await utils_1.findProgramAddress([
                Buffer.from('metadata'),
                utils_1.toPublicKey(metadataProgramId).toBuffer(),
                utils_1.toPublicKey(mintKey).toBuffer(),
            ], utils_1.toPublicKey(metadataProgramId)))[0];
    const value = new UpdateMetadataArgs({
        data,
        updateAuthority: !newUpdateAuthority ? undefined : newUpdateAuthority,
        primarySaleHappened: primarySaleHappened === null || primarySaleHappened === undefined
            ? null
            : primarySaleHappened,
    });
    const txnData = Buffer.from(borsh_1.serialize(exports.METADATA_SCHEMA, value));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(metadataAccount),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(updateAuthority),
            isSigner: true,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data: txnData,
    }));
    return metadataAccount;
}
exports.updateMetadata = updateMetadata;
async function createMetadata(data, updateAuthority, mintKey, mintAuthorityKey, instructions, payer) {
    const metadataProgramId = programIds_1.programIds().metadata;
    const metadataAccount = (await utils_1.findProgramAddress([
        Buffer.from('metadata'),
        utils_1.toPublicKey(metadataProgramId).toBuffer(),
        utils_1.toPublicKey(mintKey).toBuffer(),
    ], utils_1.toPublicKey(metadataProgramId)))[0];
    console.log('Data', data);
    const value = new CreateMetadataArgs({ data, isMutable: true });
    const txnData = Buffer.from(borsh_1.serialize(exports.METADATA_SCHEMA, value));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(metadataAccount),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(mintKey),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(mintAuthorityKey),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(payer),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(updateAuthority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data: txnData,
    }));
    return metadataAccount;
}
exports.createMetadata = createMetadata;
async function createMasterEdition(maxSupply, mintKey, updateAuthorityKey, mintAuthorityKey, payer, instructions) {
    const metadataProgramId = programIds_1.programIds().metadata;
    const metadataAccount = (await utils_1.findProgramAddress([
        Buffer.from(exports.METADATA_PREFIX),
        utils_1.toPublicKey(metadataProgramId).toBuffer(),
        utils_1.toPublicKey(mintKey).toBuffer(),
    ], utils_1.toPublicKey(metadataProgramId)))[0];
    const editionAccount = (await utils_1.findProgramAddress([
        Buffer.from(exports.METADATA_PREFIX),
        utils_1.toPublicKey(metadataProgramId).toBuffer(),
        utils_1.toPublicKey(mintKey).toBuffer(),
        Buffer.from(exports.EDITION),
    ], utils_1.toPublicKey(metadataProgramId)))[0];
    const value = new CreateMasterEditionArgs({ maxSupply: maxSupply || null });
    const data = Buffer.from(borsh_1.serialize(exports.METADATA_SCHEMA, value));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(editionAccount),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(mintKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(updateAuthorityKey),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(mintAuthorityKey),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(payer),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(metadataAccount),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data,
    }));
}
exports.createMasterEdition = createMasterEdition;
async function deprecatedMintNewEditionFromMasterEditionViaPrintingToken(newMint, tokenMint, newMintAuthority, printingMint, authorizationTokenHoldingAccount, burnAuthority, updateAuthorityOfMaster, reservationList, instructions, payer) {
    const metadataProgramId = programIds_1.programIds().metadata;
    const newMetadataKey = await getMetadata(newMint);
    const masterMetadataKey = await getMetadata(tokenMint);
    const newEdition = await getEdition(newMint);
    const masterEdition = await getEdition(tokenMint);
    const data = Buffer.from([3]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(newMetadataKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(newEdition),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(masterEdition),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(newMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(newMintAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(printingMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(authorizationTokenHoldingAccount),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(burnAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(payer),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(updateAuthorityOfMaster),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(masterMetadataKey),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    if (reservationList) {
        keys.push({
            pubkey: utils_1.toPublicKey(reservationList),
            isSigner: false,
            isWritable: true,
        });
    }
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data,
    }));
}
exports.deprecatedMintNewEditionFromMasterEditionViaPrintingToken = deprecatedMintNewEditionFromMasterEditionViaPrintingToken;
async function mintNewEditionFromMasterEditionViaToken(newMint, tokenMint, newMintAuthority, newUpdateAuthority, tokenOwner, tokenAccount, instructions, payer, edition) {
    const metadataProgramId = programIds_1.programIds().metadata;
    const newMetadataKey = await getMetadata(newMint);
    const masterMetadataKey = await getMetadata(tokenMint);
    const newEdition = await getEdition(newMint);
    const masterEdition = await getEdition(tokenMint);
    const editionMarkPda = await getEditionMarkPda(tokenMint, edition);
    const data = Buffer.from([11, ...edition.toArray('le', 8)]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(newMetadataKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(newEdition),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(masterEdition),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(newMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(editionMarkPda),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(newMintAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(payer),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(tokenOwner),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(tokenAccount),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(newUpdateAuthority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(masterMetadataKey),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data,
    }));
}
exports.mintNewEditionFromMasterEditionViaToken = mintNewEditionFromMasterEditionViaToken;
async function updatePrimarySaleHappenedViaToken(metadata, owner, tokenAccount, instructions) {
    const metadataProgramId = programIds_1.programIds().metadata;
    const data = Buffer.from([4]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(metadata),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(owner),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(tokenAccount),
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data,
    }));
}
exports.updatePrimarySaleHappenedViaToken = updatePrimarySaleHappenedViaToken;
async function deprecatedCreateReservationList(metadata, masterEdition, resource, updateAuthority, payer, instructions) {
    const metadataProgramId = programIds_1.programIds().metadata;
    const reservationList = await deprecatedGetReservationList(masterEdition, resource);
    const data = Buffer.from([6]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(reservationList),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(payer),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(updateAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(masterEdition),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(resource),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(metadata),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data,
    }));
}
exports.deprecatedCreateReservationList = deprecatedCreateReservationList;
async function signMetadata(metadata, creator, instructions) {
    const metadataProgramId = programIds_1.programIds().metadata;
    const data = Buffer.from([7]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(metadata),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(creator),
            isSigner: true,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data,
    }));
}
exports.signMetadata = signMetadata;
async function deprecatedMintPrintingTokens(destination, printingMint, updateAuthority, metadata, masterEdition, supply, instructions) {
    const PROGRAM_IDS = programIds_1.programIds();
    const metadataProgramId = PROGRAM_IDS.metadata;
    const value = new MintPrintingTokensArgs({ supply });
    const data = Buffer.from(borsh_1.serialize(exports.METADATA_SCHEMA, value));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(destination),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(printingMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(updateAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(metadata),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(masterEdition),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: PROGRAM_IDS.token,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data,
    }));
}
exports.deprecatedMintPrintingTokens = deprecatedMintPrintingTokens;
async function convertMasterEditionV1ToV2(masterEdition, oneTimeAuthMint, printingMint, instructions) {
    const metadataProgramId = programIds_1.programIds().metadata;
    const data = Buffer.from([12]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(masterEdition),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(oneTimeAuthMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(printingMint),
            isSigner: false,
            isWritable: true,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(metadataProgramId),
        data,
    }));
}
exports.convertMasterEditionV1ToV2 = convertMasterEditionV1ToV2;
async function getEdition(tokenMint) {
    const PROGRAM_IDS = programIds_1.programIds();
    return (await utils_1.findProgramAddress([
        Buffer.from(exports.METADATA_PREFIX),
        utils_1.toPublicKey(PROGRAM_IDS.metadata).toBuffer(),
        utils_1.toPublicKey(tokenMint).toBuffer(),
        Buffer.from(exports.EDITION),
    ], utils_1.toPublicKey(PROGRAM_IDS.metadata)))[0];
}
exports.getEdition = getEdition;
async function getMetadata(tokenMint) {
    const PROGRAM_IDS = programIds_1.programIds();
    return (await utils_1.findProgramAddress([
        Buffer.from(exports.METADATA_PREFIX),
        utils_1.toPublicKey(PROGRAM_IDS.metadata).toBuffer(),
        utils_1.toPublicKey(tokenMint).toBuffer(),
    ], utils_1.toPublicKey(PROGRAM_IDS.metadata)))[0];
}
exports.getMetadata = getMetadata;
async function deprecatedGetReservationList(masterEdition, resource) {
    const PROGRAM_IDS = programIds_1.programIds();
    return (await utils_1.findProgramAddress([
        Buffer.from(exports.METADATA_PREFIX),
        utils_1.toPublicKey(PROGRAM_IDS.metadata).toBuffer(),
        utils_1.toPublicKey(masterEdition).toBuffer(),
        Buffer.from(exports.RESERVATION),
        utils_1.toPublicKey(resource).toBuffer(),
    ], utils_1.toPublicKey(PROGRAM_IDS.metadata)))[0];
}
exports.deprecatedGetReservationList = deprecatedGetReservationList;
async function getEditionMarkPda(mint, edition) {
    const PROGRAM_IDS = programIds_1.programIds();
    const editionNumber = Math.floor(edition.toNumber() / 248);
    return (await utils_1.findProgramAddress([
        Buffer.from(exports.METADATA_PREFIX),
        utils_1.toPublicKey(PROGRAM_IDS.metadata).toBuffer(),
        utils_1.toPublicKey(mint).toBuffer(),
        Buffer.from(exports.EDITION),
        Buffer.from(editionNumber.toString()),
    ], utils_1.toPublicKey(PROGRAM_IDS.metadata)))[0];
}
exports.getEditionMarkPda = getEditionMarkPda;
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ 8633:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mintNFT = exports.createStore = exports.decodeNFTMetaData = exports.decodeStoreData = exports.MINT_NFT_SCHEMA = exports.STORE_SCHEMA = exports.MintNFTArgs = exports.CreateStoreArgs = exports.NFTMeta = exports.StoreData = exports.decodeStore = exports.StoreParser = exports.STORE_PREFIX = void 0;
const web3_js_1 = __webpack_require__(5681);
const programIds_1 = __webpack_require__(6120);
const borsh_1 = __webpack_require__(7384);
const utils_1 = __webpack_require__(398);
// import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
exports.STORE_PREFIX = 'store';
const StoreParser = (pubkey, account) => ({
    pubkey,
    account,
    info: exports.decodeStore(account.data),
});
exports.StoreParser = StoreParser;
const decodeStore = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.STORE_SCHEMA, StoreData, buffer);
};
exports.decodeStore = decodeStore;
class StoreData {
    constructor(args) {
        this.authority = args.authority;
        this.nftAmount = args.nftAmount;
        this.bump = args.bump;
    }
}
exports.StoreData = StoreData;
class NFTMeta {
    constructor(args) {
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
exports.NFTMeta = NFTMeta;
class CreateStoreArgs {
    /// End time is the cut-off point that the store is forced to end by. See StoreData.
    constructor(args) {
        this.instruction = 0;
        this.bump = args.bump;
    }
}
exports.CreateStoreArgs = CreateStoreArgs;
class MintNFTArgs {
    /// End time is the cut-off point that the store is forced to end by. See StoreData.
    constructor(args) {
        this.instruction = 1;
        this.name = args.name;
        this.symbol = args.symbol;
        this.uri = args.uri;
        this.bump = args.bump;
    }
}
exports.MintNFTArgs = MintNFTArgs;
exports.STORE_SCHEMA = new Map([
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
exports.MINT_NFT_SCHEMA = new Map([
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
        NFTMeta,
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
const decodeStoreData = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.STORE_SCHEMA, StoreData, buffer);
};
exports.decodeStoreData = decodeStoreData;
const decodeNFTMetaData = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.MINT_NFT_SCHEMA, NFTMeta, buffer);
};
exports.decodeNFTMetaData = decodeNFTMetaData;
async function createStore(settings, creator, storeid, authority, instructions) {
    const storeProgramId = programIds_1.programIds().store;
    const data = Buffer.from(borsh_1.serialize(exports.STORE_SCHEMA, settings));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(creator),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(storeid),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(authority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(storeProgramId),
        data: data,
    }));
}
exports.createStore = createStore;
async function mintNFT(settings, creator, nftmeta, authority, storeid, tokenMint, tokenPoolKey, instructions) {
    const storeProgramId = programIds_1.programIds().store;
    const tokenProgramId = programIds_1.programIds().token;
    const data = Buffer.from(borsh_1.serialize(exports.MINT_NFT_SCHEMA, settings));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(creator),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(nftmeta),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(authority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(storeid),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenPoolKey),
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenProgramId),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(storeProgramId),
        data: data,
    }));
}
exports.mintNFT = mintNFT;
//# sourceMappingURL=store.js.map

/***/ }),

/***/ 5620:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSafetyDepositBoxAddress = exports.updateExternalPriceAccount = exports.withdrawTokenFromSafetyDepositBox = exports.combineVault = exports.activateVault = exports.addTokenToInactiveVault = exports.getSafetyDepositBox = exports.initVault = exports.setVaultAuthority = exports.decodeSafetyDeposit = exports.decodeExternalPriceAccount = exports.decodeVault = exports.VAULT_SCHEMA = exports.ExternalPriceAccount = exports.SafetyDepositBox = exports.Vault = exports.MAX_EXTERNAL_ACCOUNT_SIZE = exports.MAX_VAULT_SIZE = exports.VaultState = exports.VaultKey = exports.VAULT_PREFIX = void 0;
const web3_js_1 = __webpack_require__(5681);
const programIds_1 = __webpack_require__(6120);
const borsh_1 = __webpack_require__(7384);
const utils_1 = __webpack_require__(398);
exports.VAULT_PREFIX = 'vault';
var VaultKey;
(function (VaultKey) {
    VaultKey[VaultKey["Uninitialized"] = 0] = "Uninitialized";
    VaultKey[VaultKey["VaultV1"] = 3] = "VaultV1";
    VaultKey[VaultKey["SafetyDepositBoxV1"] = 1] = "SafetyDepositBoxV1";
    VaultKey[VaultKey["ExternalPriceAccountV1"] = 2] = "ExternalPriceAccountV1";
})(VaultKey = exports.VaultKey || (exports.VaultKey = {}));
var VaultState;
(function (VaultState) {
    VaultState[VaultState["Inactive"] = 0] = "Inactive";
    VaultState[VaultState["Active"] = 1] = "Active";
    VaultState[VaultState["Combined"] = 2] = "Combined";
    VaultState[VaultState["Deactivated"] = 3] = "Deactivated";
})(VaultState = exports.VaultState || (exports.VaultState = {}));
exports.MAX_VAULT_SIZE = 1 + 32 + 32 + 32 + 32 + 1 + 32 + 1 + 32 + 1 + 1 + 8;
exports.MAX_EXTERNAL_ACCOUNT_SIZE = 1 + 8 + 32 + 1;
class Vault {
    constructor(args) {
        this.key = VaultKey.VaultV1;
        this.tokenProgram = args.tokenProgram;
        this.fractionMint = args.fractionMint;
        this.authority = args.authority;
        this.fractionTreasury = args.fractionTreasury;
        this.redeemTreasury = args.redeemTreasury;
        this.allowFurtherShareCreation = args.allowFurtherShareCreation;
        this.pricingLookupAddress = args.pricingLookupAddress;
        this.tokenTypeCount = args.tokenTypeCount;
        this.state = args.state;
        this.lockedPricePerShare = args.lockedPricePerShare;
    }
}
exports.Vault = Vault;
class SafetyDepositBox {
    constructor(args) {
        this.key = VaultKey.SafetyDepositBoxV1;
        this.vault = args.vault;
        this.tokenMint = args.tokenMint;
        this.store = args.store;
        this.order = args.order;
    }
}
exports.SafetyDepositBox = SafetyDepositBox;
class ExternalPriceAccount {
    constructor(args) {
        this.key = VaultKey.ExternalPriceAccountV1;
        this.pricePerShare = args.pricePerShare;
        this.priceMint = args.priceMint;
        this.allowedToCombine = args.allowedToCombine;
    }
}
exports.ExternalPriceAccount = ExternalPriceAccount;
class InitVaultArgs {
    constructor(args) {
        this.instruction = 0;
        this.allowFurtherShareCreation = false;
        this.allowFurtherShareCreation = args.allowFurtherShareCreation;
    }
}
class AmountArgs {
    constructor(args) {
        this.instruction = args.instruction;
        this.amount = args.amount;
    }
}
class NumberOfShareArgs {
    constructor(args) {
        this.instruction = args.instruction;
        this.numberOfShares = args.numberOfShares;
    }
}
class UpdateExternalPriceAccountArgs {
    constructor(args) {
        this.instruction = 9;
        this.externalPriceAccount = args.externalPriceAccount;
    }
}
exports.VAULT_SCHEMA = new Map([
    [
        InitVaultArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['allowFurtherShareCreation', 'u8'],
            ],
        },
    ],
    [
        AmountArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['amount', 'u64'],
            ],
        },
    ],
    [
        NumberOfShareArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['numberOfShares', 'u64'],
            ],
        },
    ],
    [
        UpdateExternalPriceAccountArgs,
        {
            kind: 'struct',
            fields: [
                ['instruction', 'u8'],
                ['externalPriceAccount', ExternalPriceAccount],
            ],
        },
    ],
    [
        Vault,
        {
            kind: 'struct',
            fields: [
                ['key', 'u8'],
                ['tokenProgram', 'pubkeyAsString'],
                ['fractionMint', 'pubkeyAsString'],
                ['authority', 'pubkeyAsString'],
                ['fractionTreasury', 'pubkeyAsString'],
                ['redeemTreasury', 'pubkeyAsString'],
                ['allowFurtherShareCreation', 'u8'],
                ['pricingLookupAddress', 'pubkeyAsString'],
                ['tokenTypeCount', 'u8'],
                ['state', 'u8'],
                ['lockedPricePerShare', 'u64'],
            ],
        },
    ],
    [
        SafetyDepositBox,
        {
            kind: 'struct',
            fields: [
                ['key', 'u8'],
                ['vault', 'pubkeyAsString'],
                ['tokenMint', 'pubkeyAsString'],
                ['store', 'pubkeyAsString'],
                ['order', 'u8'],
            ],
        },
    ],
    [
        ExternalPriceAccount,
        {
            kind: 'struct',
            fields: [
                ['key', 'u8'],
                ['pricePerShare', 'u64'],
                ['priceMint', 'pubkeyAsString'],
                ['allowedToCombine', 'u8'],
            ],
        },
    ],
]);
const decodeVault = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.VAULT_SCHEMA, Vault, buffer);
};
exports.decodeVault = decodeVault;
const decodeExternalPriceAccount = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.VAULT_SCHEMA, ExternalPriceAccount, buffer);
};
exports.decodeExternalPriceAccount = decodeExternalPriceAccount;
const decodeSafetyDeposit = (buffer) => {
    return borsh_1.deserializeUnchecked(exports.VAULT_SCHEMA, SafetyDepositBox, buffer);
};
exports.decodeSafetyDeposit = decodeSafetyDeposit;
async function setVaultAuthority(vault, currentAuthority, newAuthority, instructions) {
    const vaultProgramId = programIds_1.programIds().vault;
    const data = Buffer.from([10]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(vault),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(currentAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(newAuthority),
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(vaultProgramId),
        data: data,
    }));
}
exports.setVaultAuthority = setVaultAuthority;
async function initVault(allowFurtherShareCreation, fractionalMint, redeemTreasury, fractionalTreasury, vault, vaultAuthority, pricingLookupAddress, instructions) {
    const vaultProgramId = programIds_1.programIds().vault;
    const data = Buffer.from(borsh_1.serialize(exports.VAULT_SCHEMA, new InitVaultArgs({ allowFurtherShareCreation })));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(fractionalMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(redeemTreasury),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(fractionalTreasury),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(vault),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(vaultAuthority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(pricingLookupAddress),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(vaultProgramId),
        data: data,
    }));
}
exports.initVault = initVault;
async function getSafetyDepositBox(vault, tokenMint) {
    const vaultProgramId = programIds_1.programIds().vault;
    return (await utils_1.findProgramAddress([
        Buffer.from(exports.VAULT_PREFIX),
        utils_1.toPublicKey(vault).toBuffer(),
        utils_1.toPublicKey(tokenMint).toBuffer(),
    ], utils_1.toPublicKey(vaultProgramId)))[0];
}
exports.getSafetyDepositBox = getSafetyDepositBox;
async function addTokenToInactiveVault(amount, tokenMint, tokenAccount, tokenStoreAccount, vault, vaultAuthority, payer, transferAuthority, instructions) {
    const vaultProgramId = programIds_1.programIds().vault;
    const safetyDepositBox = await getSafetyDepositBox(vault, tokenMint);
    const value = new AmountArgs({
        instruction: 1,
        amount,
    });
    const data = Buffer.from(borsh_1.serialize(exports.VAULT_SCHEMA, value));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(safetyDepositBox),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenAccount),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(tokenStoreAccount),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(vault),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(vaultAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(payer),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(transferAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(vaultProgramId),
        data,
    }));
}
exports.addTokenToInactiveVault = addTokenToInactiveVault;
async function activateVault(numberOfShares, vault, fractionMint, fractionTreasury, vaultAuthority, instructions) {
    const vaultProgramId = programIds_1.programIds().vault;
    const fractionMintAuthority = (await utils_1.findProgramAddress([
        Buffer.from(exports.VAULT_PREFIX),
        utils_1.toPublicKey(vaultProgramId).toBuffer(),
        utils_1.toPublicKey(vault).toBuffer(),
    ], utils_1.toPublicKey(vaultProgramId)))[0];
    const value = new NumberOfShareArgs({ instruction: 2, numberOfShares });
    const data = Buffer.from(borsh_1.serialize(exports.VAULT_SCHEMA, value));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(vault),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(fractionMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(fractionTreasury),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(fractionMintAuthority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(vaultAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(vaultProgramId),
        data,
    }));
}
exports.activateVault = activateVault;
async function combineVault(vault, outstandingShareTokenAccount, payingTokenAccount, fractionMint, fractionTreasury, redeemTreasury, newVaultAuthority, vaultAuthority, transferAuthority, externalPriceAccount, instructions) {
    const vaultProgramId = programIds_1.programIds().vault;
    const burnAuthority = (await utils_1.findProgramAddress([
        Buffer.from(exports.VAULT_PREFIX),
        utils_1.toPublicKey(vaultProgramId).toBuffer(),
        utils_1.toPublicKey(vault).toBuffer(),
    ], utils_1.toPublicKey(vaultProgramId)))[0];
    const data = Buffer.from([3]);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(vault),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(outstandingShareTokenAccount),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(payingTokenAccount),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(fractionMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(fractionTreasury),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(redeemTreasury),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(newVaultAuthority || vaultAuthority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(vaultAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(transferAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(burnAuthority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(externalPriceAccount),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(vaultProgramId),
        data,
    }));
}
exports.combineVault = combineVault;
async function withdrawTokenFromSafetyDepositBox(amount, destination, safetyDepositBox, storeKey, vault, fractionMint, vaultAuthority, instructions) {
    const vaultProgramId = programIds_1.programIds().vault;
    const transferAuthority = (await utils_1.findProgramAddress([
        Buffer.from(exports.VAULT_PREFIX),
        utils_1.toPublicKey(vaultProgramId).toBuffer(),
        utils_1.toPublicKey(vault).toBuffer(),
    ], utils_1.toPublicKey(vaultProgramId)))[0];
    const value = new AmountArgs({ instruction: 5, amount });
    const data = Buffer.from(borsh_1.serialize(exports.VAULT_SCHEMA, value));
    const keys = [
        {
            pubkey: utils_1.toPublicKey(destination),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(safetyDepositBox),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(storeKey),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(vault),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(fractionMint),
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: utils_1.toPublicKey(vaultAuthority),
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: utils_1.toPublicKey(transferAuthority),
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: programIds_1.programIds().token,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(vaultProgramId),
        data,
    }));
}
exports.withdrawTokenFromSafetyDepositBox = withdrawTokenFromSafetyDepositBox;
async function updateExternalPriceAccount(externalPriceAccountKey, externalPriceAccount, instructions) {
    const vaultProgramId = programIds_1.programIds().vault;
    const value = new UpdateExternalPriceAccountArgs({ externalPriceAccount });
    const data = Buffer.from(borsh_1.serialize(exports.VAULT_SCHEMA, value));
    console.log('Data', data);
    const keys = [
        {
            pubkey: utils_1.toPublicKey(externalPriceAccountKey),
            isSigner: false,
            isWritable: true,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId: utils_1.toPublicKey(vaultProgramId),
        data,
    }));
}
exports.updateExternalPriceAccount = updateExternalPriceAccount;
async function getSafetyDepositBoxAddress(vault, tokenMint) {
    const PROGRAM_IDS = programIds_1.programIds();
    return (await utils_1.findProgramAddress([
        Buffer.from(exports.VAULT_PREFIX),
        utils_1.toPublicKey(vault).toBuffer(),
        utils_1.toPublicKey(tokenMint).toBuffer(),
    ], utils_1.toPublicKey(PROGRAM_IDS.vault)))[0];
}
exports.getSafetyDepositBoxAddress = getSafetyDepositBoxAddress;
//# sourceMappingURL=vault.js.map

/***/ }),

/***/ 630:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionConfirmation = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
const constants_1 = __webpack_require__(7093);
const react_router_dom_1 = __webpack_require__(2146);
const ActionConfirmation = (props) => {
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        } },
        react_1.default.createElement("h2", null, "Congratulations!"),
        react_1.default.createElement("div", null, "Your action has been successfully executed"),
        react_1.default.createElement("div", { className: "success-icon" }),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/dashboard" },
            react_1.default.createElement(antd_1.Button, { type: "primary" }, constants_1.LABELS.DASHBOARD_ACTION)),
        react_1.default.createElement(antd_1.Button, { type: "text", onClick: props.onClose }, constants_1.LABELS.GO_BACK_ACTION)));
};
exports.ActionConfirmation = ActionConfirmation;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9777:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppBar = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
const CurrentUserBadge_1 = __webpack_require__(4565);
const icons_1 = __webpack_require__(2372);
const Settings_1 = __webpack_require__(4483);
const labels_1 = __webpack_require__(9270);
const __1 = __webpack_require__(2878);
const wallet_adapter_react_1 = __webpack_require__(5772);
const AppBar = (props) => {
    const { connected } = wallet_adapter_react_1.useWallet();
    const TopBar = (react_1.default.createElement("div", { className: "App-Bar-right" },
        props.left,
        connected ? (react_1.default.createElement(CurrentUserBadge_1.CurrentUserBadge, null)) : (react_1.default.createElement(__1.ConnectButton, { type: "text", size: "large", style: { color: '#2abdd2' }, allowWalletChange: true })),
        react_1.default.createElement(antd_1.Popover, { placement: "topRight", title: labels_1.LABELS.SETTINGS_TOOLTIP, content: react_1.default.createElement(Settings_1.Settings, { additionalSettings: props.additionalSettings }), trigger: "click" },
            react_1.default.createElement(antd_1.Button, { shape: "circle", size: "large", type: "text", icon: react_1.default.createElement(icons_1.SettingOutlined, null) })),
        props.right));
    return TopBar;
};
exports.AppBar = AppBar;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 791:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackButton = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
const constants_1 = __webpack_require__(7093);
const react_router_dom_1 = __webpack_require__(2146);
const BackButton = () => {
    const history = react_router_dom_1.useHistory();
    return (react_1.default.createElement(antd_1.Button, { type: "text", onClick: history.goBack }, constants_1.LABELS.GO_BACK_ACTION));
};
exports.BackButton = BackButton;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3752:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectButton = void 0;
const antd_1 = __webpack_require__(953);
const react_1 = __importStar(__webpack_require__(9297));
const wallet_adapter_react_1 = __webpack_require__(5772);
const contexts_1 = __webpack_require__(3049);
const ConnectButton = (props) => {
    const { onClick, children, disabled, allowWalletChange, ...rest } = props;
    const { wallet, connect, connected } = wallet_adapter_react_1.useWallet();
    const { setVisible } = contexts_1.useWalletModal();
    const open = react_1.useCallback(() => setVisible(true), [setVisible]);
    const handleClick = react_1.useCallback(() => (wallet ? connect().catch(() => { }) : open()), [wallet, connect, open]);
    // only show if wallet selected or user connected
    if (!wallet || !allowWalletChange) {
        return (react_1.default.createElement(antd_1.Button, { ...rest, onClick: handleClick, disabled: connected && disabled }, connected ? props.children : 'Connect'));
    }
    return (react_1.default.createElement(antd_1.Dropdown.Button, { onClick: handleClick, disabled: connected && disabled, overlay: react_1.default.createElement(antd_1.Menu, null,
            react_1.default.createElement(antd_1.Menu.Item, { onClick: open }, "Change Wallet")) }, "Connect"));
};
exports.ConnectButton = ConnectButton;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4565:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUserBadge = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const web3_js_1 = __webpack_require__(5681);
const wallet_adapter_react_1 = __webpack_require__(5772);
const accounts_1 = __webpack_require__(9026);
const utils_1 = __webpack_require__(398);
const antd_1 = __webpack_require__(953);
const Settings_1 = __webpack_require__(4483);
const CurrentUserBadge = (props) => {
    const { wallet, publicKey } = wallet_adapter_react_1.useWallet();
    const { account } = accounts_1.useNativeAccount();
    if (!wallet || !publicKey) {
        return null;
    }
    const iconStyle = props.showAddress
        ? {
            marginLeft: '0.5rem',
            display: 'flex',
            width: props.iconSize || 20,
            borderRadius: 50,
        }
        : {
            display: 'flex',
            width: props.iconSize || 20,
            paddingLeft: 0,
            borderRadius: 50,
        };
    const baseWalletKey = {
        height: props.iconSize,
        cursor: 'pointer',
        userSelect: 'none',
    };
    const walletKeyStyle = props.showAddress
        ? baseWalletKey
        : { ...baseWalletKey, paddingLeft: 0 };
    return (react_1.default.createElement("div", { className: "wallet-wrapper" },
        props.showBalance && (react_1.default.createElement("span", null,
            utils_1.formatNumber.format(((account === null || account === void 0 ? void 0 : account.lamports) || 0) / web3_js_1.LAMPORTS_PER_SOL),
            " SOL")),
        react_1.default.createElement(antd_1.Popover, { placement: "topRight", title: "Settings", content: react_1.default.createElement(Settings_1.Settings, null), trigger: "click" },
            react_1.default.createElement("div", { className: "wallet-key", style: walletKeyStyle },
                react_1.default.createElement("span", { style: { marginRight: '0.5rem' } }, wallet.name),
                react_1.default.createElement("img", { src: wallet.icon, style: iconStyle })))));
};
exports.CurrentUserBadge = CurrentUserBadge;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 628:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EtherscanLink = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
const utils_1 = __webpack_require__(7392);
const EtherscanLink = (props) => {
    var _a;
    const { type, code } = props;
    const address = props.address;
    if (!address) {
        return null;
    }
    const length = (_a = props.length) !== null && _a !== void 0 ? _a : 9;
    return (react_1.default.createElement("a", { href: `https://etherscan.io/${type}/${address}`, 
        // eslint-disable-next-line react/jsx-no-target-blank
        target: "_blank", title: address, style: props.style }, code ? (react_1.default.createElement(antd_1.Typography.Text, { style: props.style, code: true }, utils_1.shortenAddress(address, length))) : (utils_1.shortenAddress(address, length))));
};
exports.EtherscanLink = EtherscanLink;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4548:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExplorerLink = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
const utils_1 = __webpack_require__(7392);
const ExplorerLink = (props) => {
    var _a, _b;
    const { type, code } = props;
    const address = typeof props.address === 'string'
        ? props.address
        : (_a = props.address) === null || _a === void 0 ? void 0 : _a.toBase58();
    if (!address) {
        return null;
    }
    const length = (_b = props.length) !== null && _b !== void 0 ? _b : 9;
    return (react_1.default.createElement("a", { href: `https://explorer.solana.com/${type}/${address}`, 
        // eslint-disable-next-line react/jsx-no-target-blank
        target: "_blank", title: address, style: props.style }, code ? (react_1.default.createElement(antd_1.Typography.Text, { style: props.style, code: true }, utils_1.shortenAddress(address, length))) : (utils_1.shortenAddress(address, length))));
};
exports.ExplorerLink = ExplorerLink;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7160:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Info = void 0;
const antd_1 = __webpack_require__(953);
const react_1 = __importDefault(__webpack_require__(9297));
const icons_1 = __webpack_require__(2372);
const Info = (props) => {
    return (react_1.default.createElement(antd_1.Popover, { trigger: "hover", content: react_1.default.createElement("div", { style: { width: 300 } }, props.text) },
        react_1.default.createElement(antd_1.Button, { type: "text", shape: "circle" },
            react_1.default.createElement(icons_1.InfoCircleOutlined, { style: props.style }))));
};
exports.Info = Info;
//# sourceMappingURL=info.js.map

/***/ }),

/***/ 8128:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Identicon = void 0;
const react_1 = __importStar(__webpack_require__(9297));
const jazzicon_1 = __importDefault(__webpack_require__(351));
const bs58_1 = __importDefault(__webpack_require__(2815));
const Identicon = (props) => {
    var _a;
    const { style, className, alt } = props;
    const address = typeof props.address === 'string'
        ? props.address
        : (_a = props.address) === null || _a === void 0 ? void 0 : _a.toBase58();
    const ref = react_1.useRef();
    react_1.useEffect(() => {
        if (address && ref.current) {
            try {
                ref.current.innerHTML = '';
                ref.current.className = className || '';
                ref.current.appendChild(jazzicon_1.default((style === null || style === void 0 ? void 0 : style.width) || 16, parseInt(bs58_1.default.decode(address).toString('hex').slice(5, 15), 16)));
            }
            catch (err) {
                // TODO
            }
        }
    }, [address, style, className]);
    return (react_1.default.createElement("div", { className: "identicon-wrapper", title: alt, ref: ref, style: props.style }));
};
exports.Identicon = Identicon;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9630:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumericInput = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
class NumericInput extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onChange = (e) => {
            const { value } = e.target;
            const reg = /^-?\d*(\.\d*)?$/;
            if (reg.test(value) || value === '' || value === '-') {
                this.props.onChange(value);
            }
        };
        // '.' at the end or only '-' in the input box.
        this.onBlur = () => {
            const { value, onBlur, onChange } = this.props;
            let valueTemp = value;
            if (value === undefined || value === null)
                return;
            if (value.charAt &&
                (value.charAt(value.length - 1) === '.' || value === '-')) {
                valueTemp = value.slice(0, -1);
            }
            if (value.startsWith && (value.startsWith('.') || value.startsWith('-.'))) {
                valueTemp = valueTemp.replace('.', '0.');
            }
            if (valueTemp.replace)
                onChange === null || onChange === void 0 ? void 0 : onChange(valueTemp.replace(/0*(\d+)/, '$1'));
            if (onBlur) {
                onBlur();
            }
        };
    }
    render() {
        return (react_1.default.createElement(antd_1.Input, { ...this.props, onChange: this.onChange, onBlur: this.onBlur, maxLength: 25 }));
    }
}
exports.NumericInput = NumericInput;
//# sourceMappingURL=numeric.js.map

/***/ }),

/***/ 9128:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetaplexModal = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
const MetaplexModal = (props) => {
    const { children, bodyStyle, ...rest } = props;
    return (react_1.default.createElement(antd_1.Modal, { bodyStyle: {
            background: '#2F2F2F',
            boxShadow: '0px 6px 12px 8px rgba(0, 0, 0, 0.3)',
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            ...bodyStyle,
        }, footer: null, width: 400, ...rest }, children));
};
exports.MetaplexModal = MetaplexModal;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9973:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetaplexOverlay = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
const MetaplexOverlay = (props) => {
    const { children, ...rest } = props;
    const content = (react_1.default.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pointerEvents: 'auto',
            justifyContent: 'center',
        } }, children));
    return (react_1.default.createElement(antd_1.Modal, { centered: true, modalRender: () => content, width: '100vw', mask: false, ...rest }));
};
exports.MetaplexOverlay = MetaplexOverlay;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4483:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Settings = void 0;
const react_1 = __importStar(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
const wallet_adapter_react_1 = __webpack_require__(5772);
const connection_1 = __webpack_require__(8877);
const contexts_1 = __webpack_require__(3049);
const utils_1 = __webpack_require__(398);
const icons_1 = __webpack_require__(2372);
const Settings = ({ additionalSettings, }) => {
    const { connected, disconnect, publicKey } = wallet_adapter_react_1.useWallet();
    const { endpoint, setEndpoint } = connection_1.useConnectionConfig();
    const { setVisible } = contexts_1.useWalletModal();
    const open = react_1.useCallback(() => setVisible(true), [setVisible]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: 'grid' } },
            "Network:",
            ' ',
            react_1.default.createElement(antd_1.Select, { onSelect: setEndpoint, value: endpoint, style: { marginBottom: 20 } }, connection_1.ENDPOINTS.map(({ name, endpoint }) => (react_1.default.createElement(antd_1.Select.Option, { value: endpoint, key: endpoint }, name)))),
            connected && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", null, "Wallet:"),
                publicKey && (react_1.default.createElement(antd_1.Button, { style: { marginBottom: 5 }, onClick: async () => {
                        if (publicKey) {
                            await navigator.clipboard.writeText(publicKey.toBase58());
                            utils_1.notify({
                                message: 'Wallet update',
                                description: 'Address copied to clipboard',
                            });
                        }
                    } },
                    react_1.default.createElement(icons_1.CopyOutlined, null),
                    utils_1.shortenAddress(publicKey.toBase58()))),
                react_1.default.createElement(antd_1.Button, { onClick: open, style: { marginBottom: 5 } }, "Change"),
                react_1.default.createElement(antd_1.Button, { type: "primary", onClick: () => disconnect().catch(), style: { marginBottom: 5 } }, "Disconnect"))),
            additionalSettings)));
};
exports.Settings = Settings;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7296:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenDisplay = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const accounts_1 = __webpack_require__(9026);
const hooks_1 = __webpack_require__(5902);
const TokenIcon_1 = __webpack_require__(3106);
const TokenDisplay = (props) => {
    const { showBalance, mintAddress, name, icon } = props;
    const tokenMint = accounts_1.useMint(mintAddress);
    const tokenAccount = hooks_1.useAccountByMint(mintAddress);
    let balance = 0;
    let hasBalance = false;
    if (showBalance) {
        if (tokenAccount && tokenMint) {
            balance =
                tokenAccount.info.amount.toNumber() / Math.pow(10, tokenMint.decimals);
            hasBalance = balance > 0;
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { title: mintAddress, key: mintAddress, style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            } },
            react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                icon || react_1.default.createElement(TokenIcon_1.TokenIcon, { mintAddress: mintAddress }),
                name),
            showBalance ? (react_1.default.createElement("span", { title: balance.toString(), key: mintAddress, className: "token-balance" },
                "\u00A0",
                ' ',
                hasBalance
                    ? balance < 0.001
                        ? '<0.001'
                        : balance.toFixed(3)
                    : '-')) : null)));
};
exports.TokenDisplay = TokenDisplay;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3106:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoolIcon = exports.TokenIcon = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const utils_1 = __webpack_require__(398);
const connection_1 = __webpack_require__(8877);
const Identicon_1 = __webpack_require__(8128);
const TokenIcon = (props) => {
    var _a, _b;
    let icon = '';
    if (props.tokenMap) {
        icon = utils_1.getTokenIcon(props.tokenMap, props.mintAddress);
    }
    else {
        const { tokenMap } = connection_1.useConnectionConfig();
        icon = utils_1.getTokenIcon(tokenMap, props.mintAddress);
    }
    const size = props.size || 20;
    if (icon) {
        return (react_1.default.createElement("img", { alt: "Token icon", className: props.className, key: icon, width: ((_a = props.style) === null || _a === void 0 ? void 0 : _a.width) || size.toString(), height: ((_b = props.style) === null || _b === void 0 ? void 0 : _b.height) || size.toString(), src: icon, style: {
                marginRight: '0.5rem',
                marginTop: '0.11rem',
                borderRadius: '10rem',
                backgroundColor: 'white',
                backgroundClip: 'padding-box',
                ...props.style,
            } }));
    }
    return (react_1.default.createElement(Identicon_1.Identicon, { address: props.mintAddress, style: {
            marginRight: '0.5rem',
            width: size,
            height: size,
            marginTop: 2,
            ...props.style,
        } }));
};
exports.TokenIcon = TokenIcon;
const PoolIcon = (props) => {
    return (react_1.default.createElement("div", { className: props.className, style: { display: 'flex' } },
        react_1.default.createElement(exports.TokenIcon, { mintAddress: props.mintA, style: { marginRight: '-0.5rem', ...props.style } }),
        react_1.default.createElement(exports.TokenIcon, { mintAddress: props.mintB })));
};
exports.PoolIcon = PoolIcon;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2878:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetaplexOverlay = exports.MetaplexModal = exports.EtherscanLink = exports.TokenDisplay = exports.TokenIcon = exports.BackButton = exports.ActionConfirmation = exports.Settings = exports.AppBar = exports.NumericInput = exports.Info = exports.Identicon = exports.CurrentUserBadge = exports.ConnectButton = exports.ExplorerLink = void 0;
var index_1 = __webpack_require__(4548);
Object.defineProperty(exports, "ExplorerLink", ({ enumerable: true, get: function () { return index_1.ExplorerLink; } }));
var index_2 = __webpack_require__(3752);
Object.defineProperty(exports, "ConnectButton", ({ enumerable: true, get: function () { return index_2.ConnectButton; } }));
var index_3 = __webpack_require__(4565);
Object.defineProperty(exports, "CurrentUserBadge", ({ enumerable: true, get: function () { return index_3.CurrentUserBadge; } }));
var index_4 = __webpack_require__(8128);
Object.defineProperty(exports, "Identicon", ({ enumerable: true, get: function () { return index_4.Identicon; } }));
var info_1 = __webpack_require__(7160);
Object.defineProperty(exports, "Info", ({ enumerable: true, get: function () { return info_1.Info; } }));
var numeric_1 = __webpack_require__(9630);
Object.defineProperty(exports, "NumericInput", ({ enumerable: true, get: function () { return numeric_1.NumericInput; } }));
var index_5 = __webpack_require__(9777);
Object.defineProperty(exports, "AppBar", ({ enumerable: true, get: function () { return index_5.AppBar; } }));
var index_6 = __webpack_require__(4483);
Object.defineProperty(exports, "Settings", ({ enumerable: true, get: function () { return index_6.Settings; } }));
var index_7 = __webpack_require__(630);
Object.defineProperty(exports, "ActionConfirmation", ({ enumerable: true, get: function () { return index_7.ActionConfirmation; } }));
var index_8 = __webpack_require__(791);
Object.defineProperty(exports, "BackButton", ({ enumerable: true, get: function () { return index_8.BackButton; } }));
var TokenIcon_1 = __webpack_require__(3106);
Object.defineProperty(exports, "TokenIcon", ({ enumerable: true, get: function () { return TokenIcon_1.TokenIcon; } }));
var TokenDisplay_1 = __webpack_require__(7296);
Object.defineProperty(exports, "TokenDisplay", ({ enumerable: true, get: function () { return TokenDisplay_1.TokenDisplay; } }));
var EtherscanLink_1 = __webpack_require__(628);
Object.defineProperty(exports, "EtherscanLink", ({ enumerable: true, get: function () { return EtherscanLink_1.EtherscanLink; } }));
var MetaplexModal_1 = __webpack_require__(9128);
Object.defineProperty(exports, "MetaplexModal", ({ enumerable: true, get: function () { return MetaplexModal_1.MetaplexModal; } }));
var MetaplexOverlay_1 = __webpack_require__(9973);
Object.defineProperty(exports, "MetaplexOverlay", ({ enumerable: true, get: function () { return MetaplexOverlay_1.MetaplexOverlay; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7093:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2193), exports);
__exportStar(__webpack_require__(9270), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9270:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LABELS = void 0;
exports.LABELS = {
    CONNECT_LABEL: 'Connect Wallet',
    AUDIT_WARNING: 'Oyster is an unaudited software project used for internal purposes at the Solana Foundation. This app is not for public use.',
    FOOTER: 'This page was produced by the Solana Foundation ("SF") for internal educational and inspiration purposes only. SF does not encourage, induce or sanction the deployment, integration or use of Oyster or any similar application (including its code) in violation of applicable laws or regulations and hereby prohibits any such deployment, integration or use. Anyone using this code or a derivation thereof must comply with applicable laws and regulations when releasing related software.',
    MENU_HOME: 'Home',
    MENU_DASHBOARD: 'Dashboard',
    CONNECT_BUTTON: 'Connect',
    WALLET_TOOLTIP: 'Wallet public key',
    WALLET_BALANCE: 'Wallet balance',
    SETTINGS_TOOLTIP: 'Settings',
    DASHBOARD_ACTION: 'Go to dashboard',
    GO_BACK_ACTION: 'Go back',
};
//# sourceMappingURL=labels.js.map

/***/ }),

/***/ 2193:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZERO = exports.RAY = exports.WAD = exports.HALF_WAD = exports.TEN = void 0;
const bn_js_1 = __importDefault(__webpack_require__(2416));
exports.TEN = new bn_js_1.default(10);
exports.HALF_WAD = exports.TEN.pow(new bn_js_1.default(18));
exports.WAD = exports.TEN.pow(new bn_js_1.default(18));
exports.RAY = exports.TEN.pow(new bn_js_1.default(27));
exports.ZERO = new bn_js_1.default(0);
//# sourceMappingURL=math.js.map

/***/ }),

/***/ 9026:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeMint = exports.deserializeAccount = exports.useAccount = exports.useMint = exports.getMultipleAccounts = exports.useNativeAccount = exports.AccountsProvider = exports.getCachedAccount = exports.useAccountsContext = exports.cache = exports.keyToAccountParser = exports.GenericAccountParser = exports.TokenAccountParser = exports.MintParser = void 0;
const react_1 = __importStar(__webpack_require__(9297));
const connection_1 = __webpack_require__(8877);
const wallet_adapter_react_1 = __webpack_require__(5772);
const web3_js_1 = __webpack_require__(5681);
const spl_token_1 = __webpack_require__(4541);
const utils_1 = __webpack_require__(7392);
const eventEmitter_1 = __webpack_require__(9757);
const ids_1 = __webpack_require__(9556);
const programIds_1 = __webpack_require__(6120);
const AccountsContext = react_1.default.createContext(null);
const pendingCalls = new Map();
const genericCache = new Map();
const pendingMintCalls = new Map();
const mintCache = new Map();
const getMintInfo = async (connection, pubKey) => {
    const info = await connection.getAccountInfo(pubKey);
    if (info === null) {
        throw new Error('Failed to find mint account');
    }
    const data = Buffer.from(info.data);
    return exports.deserializeMint(data);
};
const MintParser = (pubKey, info) => {
    const buffer = Buffer.from(info.data);
    const data = exports.deserializeMint(buffer);
    const details = {
        pubkey: pubKey,
        account: {
            ...info,
        },
        info: data,
    };
    return details;
};
exports.MintParser = MintParser;
const TokenAccountParser = (pubKey, info) => {
    // Sometimes a wrapped sol account gets closed, goes to 0 length,
    // triggers an update over wss which triggers this guy to get called
    // since your UI already logged that pubkey as a token account. Check for length.
    if (info.data.length > 0) {
        const buffer = Buffer.from(info.data);
        const data = exports.deserializeAccount(buffer);
        const details = {
            pubkey: pubKey,
            account: {
                ...info,
            },
            info: data,
        };
        return details;
    }
};
exports.TokenAccountParser = TokenAccountParser;
const GenericAccountParser = (pubKey, info) => {
    const buffer = Buffer.from(info.data);
    const details = {
        pubkey: pubKey,
        account: {
            ...info,
        },
        info: buffer,
    };
    return details;
};
exports.GenericAccountParser = GenericAccountParser;
exports.keyToAccountParser = new Map();
exports.cache = {
    emitter: new eventEmitter_1.EventEmitter(),
    query: async (connection, pubKey, parser) => {
        let id;
        if (typeof pubKey === 'string') {
            id = new web3_js_1.PublicKey(pubKey);
        }
        else {
            id = pubKey;
        }
        const address = id.toBase58();
        let account = genericCache.get(address);
        if (account) {
            return account;
        }
        let query = pendingCalls.get(address);
        if (query) {
            return query;
        }
        // TODO: refactor to use multiple accounts query with flush like behavior
        query = connection.getAccountInfo(id).then(data => {
            if (!data) {
                throw new Error('Account not found');
            }
            return exports.cache.add(id, data, parser);
        });
        pendingCalls.set(address, query);
        return query;
    },
    add: (id, obj, parser, isActive) => {
        const address = typeof id === 'string' ? id : id === null || id === void 0 ? void 0 : id.toBase58();
        const deserialize = parser ? parser : exports.keyToAccountParser.get(address);
        if (!deserialize) {
            throw new Error('Deserializer needs to be registered or passed as a parameter');
        }
        exports.cache.registerParser(id, deserialize);
        pendingCalls.delete(address);
        const account = deserialize(address, obj);
        if (!account) {
            return;
        }
        if (isActive === undefined)
            isActive = true;
        else if (isActive instanceof Function)
            isActive = isActive(account);
        const isNew = !genericCache.has(address);
        genericCache.set(address, account);
        exports.cache.emitter.raiseCacheUpdated(address, isNew, deserialize, isActive);
        return account;
    },
    get: (pubKey) => {
        let key;
        if (typeof pubKey !== 'string') {
            key = pubKey.toBase58();
        }
        else {
            key = pubKey;
        }
        return genericCache.get(key);
    },
    delete: (pubKey) => {
        let key;
        if (typeof pubKey !== 'string') {
            key = pubKey.toBase58();
        }
        else {
            key = pubKey;
        }
        if (genericCache.get(key)) {
            genericCache.delete(key);
            exports.cache.emitter.raiseCacheDeleted(key);
            return true;
        }
        return false;
    },
    byParser: (parser) => {
        const result = [];
        for (const id of exports.keyToAccountParser.keys()) {
            if (exports.keyToAccountParser.get(id) === parser) {
                result.push(id);
            }
        }
        return result;
    },
    registerParser: (pubkey, parser) => {
        if (pubkey) {
            const address = typeof pubkey === 'string' ? pubkey : pubkey === null || pubkey === void 0 ? void 0 : pubkey.toBase58();
            exports.keyToAccountParser.set(address, parser);
        }
        return pubkey;
    },
    queryMint: async (connection, pubKey) => {
        let id;
        if (typeof pubKey === 'string') {
            id = new web3_js_1.PublicKey(pubKey);
        }
        else {
            id = pubKey;
        }
        const address = id.toBase58();
        let mint = mintCache.get(address);
        if (mint) {
            return mint;
        }
        let query = pendingMintCalls.get(address);
        if (query) {
            return query;
        }
        query = getMintInfo(connection, id).then(data => {
            pendingMintCalls.delete(address);
            mintCache.set(address, data);
            return data;
        });
        pendingMintCalls.set(address, query);
        return query;
    },
    getMint: (pubKey) => {
        let key;
        if (typeof pubKey !== 'string') {
            key = pubKey.toBase58();
        }
        else {
            key = pubKey;
        }
        return mintCache.get(key);
    },
    addMint: (pubKey, obj) => {
        const mint = exports.deserializeMint(obj.data);
        const id = pubKey.toBase58();
        mintCache.set(id, mint);
        return mint;
    },
};
const useAccountsContext = () => {
    const context = react_1.useContext(AccountsContext);
    return context;
};
exports.useAccountsContext = useAccountsContext;
function wrapNativeAccount(pubkey, account) {
    if (!account) {
        return undefined;
    }
    const key = new web3_js_1.PublicKey(pubkey);
    return {
        pubkey: pubkey,
        account,
        info: {
            address: key,
            mint: ids_1.WRAPPED_SOL_MINT,
            owner: key,
            amount: new spl_token_1.u64(account.lamports),
            delegate: null,
            delegatedAmount: new spl_token_1.u64(0),
            isInitialized: true,
            isFrozen: false,
            isNative: true,
            rentExemptReserve: null,
            closeAuthority: null,
        },
    };
}
const getCachedAccount = (predicate) => {
    for (const account of genericCache.values()) {
        if (predicate(account)) {
            return account;
        }
    }
};
exports.getCachedAccount = getCachedAccount;
const UseNativeAccount = () => {
    const connection = connection_1.useConnection();
    const { publicKey } = wallet_adapter_react_1.useWallet();
    const [nativeAccount, setNativeAccount] = react_1.useState();
    const updateCache = react_1.useCallback(account => {
        if (publicKey) {
            const wrapped = wrapNativeAccount(publicKey.toBase58(), account);
            if (wrapped !== undefined) {
                const id = publicKey.toBase58();
                exports.cache.registerParser(id, exports.TokenAccountParser);
                genericCache.set(id, wrapped);
                exports.cache.emitter.raiseCacheUpdated(id, false, exports.TokenAccountParser, true);
            }
        }
    }, [publicKey]);
    react_1.useEffect(() => {
        let subId = 0;
        const updateAccount = (account) => {
            if (account) {
                updateCache(account);
                setNativeAccount(account);
            }
        };
        (async () => {
            if (!connection || !publicKey) {
                return;
            }
            const account = await connection.getAccountInfo(publicKey);
            updateAccount(account);
            subId = connection.onAccountChange(publicKey, updateAccount);
        })();
        return () => {
            if (subId) {
                connection.removeAccountChangeListener(subId);
            }
        };
    }, [setNativeAccount, publicKey, connection, updateCache]);
    return { nativeAccount };
};
const PRECACHED_OWNERS = new Set();
const precacheUserTokenAccounts = async (connection, owner) => {
    if (!owner) {
        return;
    }
    // used for filtering account updates over websocket
    PRECACHED_OWNERS.add(owner.toBase58());
    // user accounts are updated via ws subscription
    const accounts = await connection.getTokenAccountsByOwner(owner, {
        programId: programIds_1.programIds().token,
    });
    accounts.value.forEach(info => {
        exports.cache.add(info.pubkey.toBase58(), info.account, exports.TokenAccountParser);
    });
};
function AccountsProvider({ children = null }) {
    const connection = connection_1.useConnection();
    const { publicKey } = wallet_adapter_react_1.useWallet();
    const [tokenAccounts, setTokenAccounts] = react_1.useState([]);
    const [userAccounts, setUserAccounts] = react_1.useState([]);
    const { nativeAccount } = UseNativeAccount();
    const walletKey = publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58();
    const selectUserAccounts = react_1.useCallback(() => {
        return exports.cache
            .byParser(exports.TokenAccountParser)
            .map(id => exports.cache.get(id))
            .filter(a => a && a.info.owner.toBase58() === walletKey)
            .map(a => a);
    }, [walletKey]);
    react_1.useEffect(() => {
        const accounts = selectUserAccounts().filter(a => a !== undefined);
        setUserAccounts(accounts);
    }, [nativeAccount, tokenAccounts, selectUserAccounts]);
    react_1.useEffect(() => {
        const subs = [];
        exports.cache.emitter.onCache(args => {
            if (args.isNew && args.isActive) {
                let id = args.id;
                let deserialize = args.parser;
                connection.onAccountChange(new web3_js_1.PublicKey(id), info => {
                    exports.cache.add(id, info, deserialize);
                });
            }
        });
        return () => {
            subs.forEach(id => connection.removeAccountChangeListener(id));
        };
    }, [connection]);
    react_1.useEffect(() => {
        if (!connection || !publicKey) {
            setTokenAccounts([]);
        }
        else {
            precacheUserTokenAccounts(connection, publicKey).then(() => {
                setTokenAccounts(selectUserAccounts());
            });
            // This can return different types of accounts: token-account, mint, multisig
            // TODO: web3.js expose ability to filter.
            // this should use only filter syntax to only get accounts that are owned by user
            const tokenSubID = connection.onProgramAccountChange(programIds_1.programIds().token, info => {
                // TODO: fix type in web3.js
                const id = info.accountId;
                // TODO: do we need a better way to identify layout (maybe a enum identifing type?)
                if (info.accountInfo.data.length === spl_token_1.AccountLayout.span) {
                    const data = exports.deserializeAccount(info.accountInfo.data);
                    if (PRECACHED_OWNERS.has(data.owner.toBase58())) {
                        exports.cache.add(id, info.accountInfo, exports.TokenAccountParser);
                        setTokenAccounts(selectUserAccounts());
                    }
                }
            }, 'singleGossip');
            return () => {
                connection.removeProgramAccountChangeListener(tokenSubID);
            };
        }
    }, [connection, publicKey, selectUserAccounts]);
    return (react_1.default.createElement(AccountsContext.Provider, { value: {
            userAccounts,
            nativeAccount,
        } }, children));
}
exports.AccountsProvider = AccountsProvider;
function useNativeAccount() {
    const context = react_1.useContext(AccountsContext);
    return {
        account: context.nativeAccount,
    };
}
exports.useNativeAccount = useNativeAccount;
const getMultipleAccounts = async (connection, keys, commitment) => {
    const result = await Promise.all(utils_1.chunks(keys, 99).map(chunk => getMultipleAccountsCore(connection, chunk, commitment)));
    const array = result
        .map(a => a.array.map(acc => {
        if (!acc) {
            return undefined;
        }
        const { data, ...rest } = acc;
        const obj = {
            ...rest,
            data: Buffer.from(data[0], 'base64'),
        };
        return obj;
    }))
        .flat();
    return { keys, array };
};
exports.getMultipleAccounts = getMultipleAccounts;
const getMultipleAccountsCore = async (connection, keys, commitment) => {
    const args = connection._buildArgs([keys], commitment, 'base64');
    const unsafeRes = await connection._rpcRequest('getMultipleAccounts', args);
    if (unsafeRes.error) {
        throw new Error('failed to get info about account ' + unsafeRes.error.message);
    }
    if (unsafeRes.result.value) {
        const array = unsafeRes.result.value;
        return { keys, array };
    }
    // TODO: fix
    throw new Error();
};
function useMint(key) {
    const connection = connection_1.useConnection();
    const [mint, setMint] = react_1.useState();
    const id = typeof key === 'string' ? key : key === null || key === void 0 ? void 0 : key.toBase58();
    react_1.useEffect(() => {
        if (!id) {
            return;
        }
        exports.cache
            .query(connection, id, exports.MintParser)
            .then(acc => setMint(acc.info))
            .catch(err => console.log(err));
        const dispose = exports.cache.emitter.onCache(e => {
            const event = e;
            if (event.id === id) {
                exports.cache
                    .query(connection, id, exports.MintParser)
                    .then(mint => setMint(mint.info));
            }
        });
        return () => {
            dispose();
        };
    }, [connection, id]);
    return mint;
}
exports.useMint = useMint;
function useAccount(pubKey) {
    const connection = connection_1.useConnection();
    const [account, setAccount] = react_1.useState();
    const key = pubKey === null || pubKey === void 0 ? void 0 : pubKey.toBase58();
    react_1.useEffect(() => {
        const query = async () => {
            try {
                if (!key) {
                    return;
                }
                const acc = await exports.cache
                    .query(connection, key, exports.TokenAccountParser)
                    .catch(err => console.log(err));
                if (acc) {
                    setAccount(acc);
                }
            }
            catch (err) {
                console.error(err);
            }
        };
        query();
        const dispose = exports.cache.emitter.onCache(e => {
            const event = e;
            if (event.id === key) {
                query();
            }
        });
        return () => {
            dispose();
        };
    }, [connection, key]);
    return account;
}
exports.useAccount = useAccount;
// TODO: expose in spl package
const deserializeAccount = (data) => {
    const accountInfo = spl_token_1.AccountLayout.decode(data);
    accountInfo.mint = new web3_js_1.PublicKey(accountInfo.mint);
    accountInfo.owner = new web3_js_1.PublicKey(accountInfo.owner);
    accountInfo.amount = spl_token_1.u64.fromBuffer(accountInfo.amount);
    if (accountInfo.delegateOption === 0) {
        accountInfo.delegate = null;
        accountInfo.delegatedAmount = new spl_token_1.u64(0);
    }
    else {
        accountInfo.delegate = new web3_js_1.PublicKey(accountInfo.delegate);
        accountInfo.delegatedAmount = spl_token_1.u64.fromBuffer(accountInfo.delegatedAmount);
    }
    accountInfo.isInitialized = accountInfo.state !== 0;
    accountInfo.isFrozen = accountInfo.state === 2;
    if (accountInfo.isNativeOption === 1) {
        accountInfo.rentExemptReserve = spl_token_1.u64.fromBuffer(accountInfo.isNative);
        accountInfo.isNative = true;
    }
    else {
        accountInfo.rentExemptReserve = null;
        accountInfo.isNative = false;
    }
    if (accountInfo.closeAuthorityOption === 0) {
        accountInfo.closeAuthority = null;
    }
    else {
        accountInfo.closeAuthority = new web3_js_1.PublicKey(accountInfo.closeAuthority);
    }
    return accountInfo;
};
exports.deserializeAccount = deserializeAccount;
// TODO: expose in spl package
const deserializeMint = (data) => {
    if (data.length !== spl_token_1.MintLayout.span) {
        throw new Error('Not a valid Mint');
    }
    const mintInfo = spl_token_1.MintLayout.decode(data);
    if (mintInfo.mintAuthorityOption === 0) {
        mintInfo.mintAuthority = null;
    }
    else {
        mintInfo.mintAuthority = new web3_js_1.PublicKey(mintInfo.mintAuthority);
    }
    mintInfo.supply = spl_token_1.u64.fromBuffer(mintInfo.supply);
    mintInfo.isInitialized = mintInfo.isInitialized !== 0;
    if (mintInfo.freezeAuthorityOption === 0) {
        mintInfo.freezeAuthority = null;
    }
    else {
        mintInfo.freezeAuthority = new web3_js_1.PublicKey(mintInfo.freezeAuthority);
    }
    return mintInfo;
};
exports.deserializeMint = deserializeMint;
//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 8877:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendSignedTransaction = exports.getUnixTs = exports.sendTransactionWithRetry = exports.sendTransaction = exports.sendTransactions = exports.sendTransactionsWithManualRetry = exports.SequenceType = exports.getErrorForTransaction = exports.useConnectionConfig = exports.useConnection = exports.ConnectionProvider = exports.ENDPOINTS = void 0;
const utils_1 = __webpack_require__(7392);
const web3_js_1 = __webpack_require__(5681);
const react_1 = __importStar(__webpack_require__(9297));
const notifications_1 = __webpack_require__(5858);
const ExplorerLink_1 = __webpack_require__(4548);
const spl_token_registry_1 = __webpack_require__(4590);
const wallet_adapter_base_1 = __webpack_require__(384);
exports.ENDPOINTS = [
    {
        name: 'mainnet-beta',
        endpoint: 'https://api.metaplex.solana.com/',
        ChainId: spl_token_registry_1.ENV.MainnetBeta,
    },
    {
        name: 'mainnet-beta (Solana)',
        endpoint: 'https://api.mainnet-beta.solana.com',
        ChainId: spl_token_registry_1.ENV.MainnetBeta,
    },
    {
        name: 'mainnet-beta (Serum)',
        endpoint: 'https://solana-api.projectserum.com/',
        ChainId: spl_token_registry_1.ENV.MainnetBeta,
    },
    {
        name: 'testnet',
        endpoint: web3_js_1.clusterApiUrl('testnet'),
        ChainId: spl_token_registry_1.ENV.Testnet,
    },
    {
        name: 'devnet',
        endpoint: web3_js_1.clusterApiUrl('devnet'),
        ChainId: spl_token_registry_1.ENV.Devnet,
    },
];
const DEFAULT = exports.ENDPOINTS[0].endpoint;
const ConnectionContext = react_1.default.createContext({
    endpoint: DEFAULT,
    setEndpoint: () => { },
    connection: new web3_js_1.Connection(DEFAULT, 'recent'),
    env: exports.ENDPOINTS[0].name,
    tokens: [],
    tokenMap: new Map(),
});
function ConnectionProvider({ children = undefined }) {
    var _a;
    const [endpoint, setEndpoint] = utils_1.useLocalStorageState('connectionEndpoint', exports.ENDPOINTS[0].endpoint);
    const connection = react_1.useMemo(() => new web3_js_1.Connection(endpoint, 'recent'), [endpoint]);
    const env = ((_a = exports.ENDPOINTS.find(end => end.endpoint === endpoint)) === null || _a === void 0 ? void 0 : _a.name) || exports.ENDPOINTS[0].name;
    const [tokens, setTokens] = react_1.useState([]);
    const [tokenMap, setTokenMap] = react_1.useState(new Map());
    react_1.useEffect(() => {
        // fetch token files
        new spl_token_registry_1.TokenListProvider().resolve().then(container => {
            var _a;
            const list = container
                .excludeByTag('nft')
                .filterByChainId(((_a = exports.ENDPOINTS.find(end => end.endpoint === endpoint)) === null || _a === void 0 ? void 0 : _a.ChainId) ||
                spl_token_registry_1.ENV.MainnetBeta)
                .getList();
            const knownMints = [...list].reduce((map, item) => {
                map.set(item.address, item);
                return map;
            }, new Map());
            setTokenMap(knownMints);
            setTokens(list);
        });
    }, [env]);
    // The websocket library solana/web3.js uses closes its websocket connection when the subscription list
    // is empty after opening its first time, preventing subsequent subscriptions from receiving responses.
    // This is a hack to prevent the list from every getting empty
    react_1.useEffect(() => {
        const id = connection.onAccountChange(web3_js_1.Keypair.generate().publicKey, () => { });
        return () => {
            connection.removeAccountChangeListener(id);
        };
    }, [connection]);
    react_1.useEffect(() => {
        const id = connection.onSlotChange(() => null);
        return () => {
            connection.removeSlotChangeListener(id);
        };
    }, [connection]);
    return (react_1.default.createElement(ConnectionContext.Provider, { value: {
            endpoint,
            setEndpoint,
            connection,
            tokens,
            tokenMap,
            env,
        } }, children));
}
exports.ConnectionProvider = ConnectionProvider;
function useConnection() {
    return react_1.useContext(ConnectionContext).connection;
}
exports.useConnection = useConnection;
function useConnectionConfig() {
    const context = react_1.useContext(ConnectionContext);
    return {
        endpoint: context.endpoint,
        setEndpoint: context.setEndpoint,
        env: context.env,
        tokens: context.tokens,
        tokenMap: context.tokenMap,
    };
}
exports.useConnectionConfig = useConnectionConfig;
const getErrorForTransaction = async (connection, txid) => {
    // wait for all confirmation before geting transaction
    await connection.confirmTransaction(txid, 'max');
    const tx = await connection.getParsedConfirmedTransaction(txid);
    const errors = [];
    if ((tx === null || tx === void 0 ? void 0 : tx.meta) && tx.meta.logMessages) {
        tx.meta.logMessages.forEach(log => {
            const regex = /Error: (.*)/gm;
            let m;
            while ((m = regex.exec(log)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                if (m.length > 1) {
                    errors.push(m[1]);
                }
            }
        });
    }
    return errors;
};
exports.getErrorForTransaction = getErrorForTransaction;
var SequenceType;
(function (SequenceType) {
    SequenceType[SequenceType["Sequential"] = 0] = "Sequential";
    SequenceType[SequenceType["Parallel"] = 1] = "Parallel";
    SequenceType[SequenceType["StopOnFailure"] = 2] = "StopOnFailure";
})(SequenceType = exports.SequenceType || (exports.SequenceType = {}));
async function sendTransactionsWithManualRetry(connection, wallet, instructions, signers) {
    let stopPoint = 0;
    let tries = 0;
    let lastInstructionsLength = null;
    let toRemoveSigners = {};
    instructions = instructions.filter((instr, i) => {
        if (instr.length > 0) {
            return true;
        }
        else {
            toRemoveSigners[i] = true;
            return false;
        }
    });
    let filteredSigners = signers.filter((_, i) => !toRemoveSigners[i]);
    while (stopPoint < instructions.length && tries < 3) {
        instructions = instructions.slice(stopPoint, instructions.length);
        filteredSigners = filteredSigners.slice(stopPoint, filteredSigners.length);
        if (instructions.length === lastInstructionsLength)
            tries = tries + 1;
        else
            tries = 0;
        try {
            if (instructions.length === 1) {
                await exports.sendTransactionWithRetry(connection, wallet, instructions[0], filteredSigners[0], 'single');
                stopPoint = 1;
            }
            else {
                stopPoint = await exports.sendTransactions(connection, wallet, instructions, filteredSigners, SequenceType.StopOnFailure, 'single');
            }
        }
        catch (e) {
            console.error(e);
        }
        console.log('Died on ', stopPoint, 'retrying from instruction', instructions[stopPoint], 'instructions length is', instructions.length);
        lastInstructionsLength = instructions.length;
    }
}
exports.sendTransactionsWithManualRetry = sendTransactionsWithManualRetry;
const sendTransactions = async (connection, wallet, instructionSet, signersSet, sequenceType = SequenceType.Parallel, commitment = 'singleGossip', successCallback = (txid, ind) => { }, failCallback = (txid, ind) => false, block) => {
    if (!wallet.publicKey)
        throw new wallet_adapter_base_1.WalletNotConnectedError();
    const unsignedTxns = [];
    if (!block) {
        block = await connection.getRecentBlockhash(commitment);
    }
    for (let i = 0; i < instructionSet.length; i++) {
        const instructions = instructionSet[i];
        const signers = signersSet[i];
        if (instructions.length === 0) {
            continue;
        }
        let transaction = new web3_js_1.Transaction();
        instructions.forEach(instruction => transaction.add(instruction));
        transaction.recentBlockhash = block.blockhash;
        transaction.setSigners(
        // fee payed by the wallet owner
        wallet.publicKey, ...signers.map(s => s.publicKey));
        if (signers.length > 0) {
            transaction.partialSign(...signers);
        }
        unsignedTxns.push(transaction);
    }
    const signedTxns = await wallet.signAllTransactions(unsignedTxns);
    const pendingTxns = [];
    let breakEarlyObject = { breakEarly: false, i: 0 };
    console.log('Signed txns length', signedTxns.length, 'vs handed in length', instructionSet.length);
    for (let i = 0; i < signedTxns.length; i++) {
        const signedTxnPromise = sendSignedTransaction({
            connection,
            signedTransaction: signedTxns[i],
        });
        signedTxnPromise
            .then(({ txid, slot }) => {
            successCallback(txid, i);
        })
            .catch(reason => {
            // @ts-ignore
            failCallback(signedTxns[i], i);
            if (sequenceType === SequenceType.StopOnFailure) {
                breakEarlyObject.breakEarly = true;
                breakEarlyObject.i = i;
            }
        });
        if (sequenceType !== SequenceType.Parallel) {
            try {
                await signedTxnPromise;
            }
            catch (e) {
                console.log('Caught failure', e);
                if (breakEarlyObject.breakEarly) {
                    console.log('Died on ', breakEarlyObject.i);
                    return breakEarlyObject.i; // Return the txn we failed on by index
                }
            }
        }
        else {
            pendingTxns.push(signedTxnPromise);
        }
    }
    if (sequenceType !== SequenceType.Parallel) {
        await Promise.all(pendingTxns);
    }
    return signedTxns.length;
};
exports.sendTransactions = sendTransactions;
const sendTransaction = async (connection, wallet, instructions, signers, awaitConfirmation = true, commitment = 'singleGossip', includesFeePayer = false, block) => {
    if (!wallet.publicKey)
        throw new wallet_adapter_base_1.WalletNotConnectedError();
    let transaction = new web3_js_1.Transaction();
    instructions.forEach(instruction => transaction.add(instruction));
    transaction.recentBlockhash = (block || (await connection.getRecentBlockhash(commitment))).blockhash;
    if (includesFeePayer) {
        transaction.setSigners(...signers.map(s => s.publicKey));
    }
    else {
        transaction.setSigners(
        // fee payed by the wallet owner
        wallet.publicKey, ...signers.map(s => s.publicKey));
    }
    if (signers.length > 0) {
        transaction.partialSign(...signers);
    }
    if (!includesFeePayer) {
        transaction = await wallet.signTransaction(transaction);
    }
    const rawTransaction = transaction.serialize();
    let options = {
        skipPreflight: true,
        commitment,
    };
    const txid = await connection.sendRawTransaction(rawTransaction, options);
    let slot = 0;
    if (awaitConfirmation) {
        const confirmation = await awaitTransactionSignatureConfirmation(txid, DEFAULT_TIMEOUT, connection, commitment);
        if (!confirmation)
            throw new Error('Timed out awaiting confirmation on transaction');
        slot = (confirmation === null || confirmation === void 0 ? void 0 : confirmation.slot) || 0;
        if (confirmation === null || confirmation === void 0 ? void 0 : confirmation.err) {
            const errors = await exports.getErrorForTransaction(connection, txid);
            notifications_1.notify({
                message: 'Transaction failed...',
                description: (react_1.default.createElement(react_1.default.Fragment, null,
                    errors.map(err => (react_1.default.createElement("div", null, err))),
                    react_1.default.createElement(ExplorerLink_1.ExplorerLink, { address: txid, type: "transaction" }))),
                type: 'error',
            });
            throw new Error(`Raw transaction ${txid} failed (${JSON.stringify(status)})`);
        }
    }
    return { txid, slot };
};
exports.sendTransaction = sendTransaction;
const sendTransactionWithRetry = async (connection, wallet, instructions, signers, commitment = 'singleGossip', includesFeePayer = false, block, beforeSend) => {
    if (!wallet.publicKey)
        throw new wallet_adapter_base_1.WalletNotConnectedError();
    let transaction = new web3_js_1.Transaction();
    instructions.forEach(instruction => transaction.add(instruction));
    transaction.recentBlockhash = (block || (await connection.getRecentBlockhash(commitment))).blockhash;
    if (includesFeePayer) {
        transaction.setSigners(...signers.map(s => s.publicKey));
    }
    else {
        transaction.setSigners(
        // fee payed by the wallet owner
        wallet.publicKey, ...signers.map(s => s.publicKey));
    }
    if (signers.length > 0) {
        transaction.partialSign(...signers);
    }
    if (!includesFeePayer) {
        transaction = await wallet.signTransaction(transaction);
    }
    if (beforeSend) {
        beforeSend();
    }
    const { txid, slot } = await sendSignedTransaction({
        connection,
        signedTransaction: transaction,
    });
    return { txid, slot };
};
exports.sendTransactionWithRetry = sendTransactionWithRetry;
const getUnixTs = () => {
    return new Date().getTime() / 1000;
};
exports.getUnixTs = getUnixTs;
const DEFAULT_TIMEOUT = 15000;
async function sendSignedTransaction({ signedTransaction, connection, timeout = DEFAULT_TIMEOUT, }) {
    const rawTransaction = signedTransaction.serialize();
    const startTime = exports.getUnixTs();
    let slot = 0;
    const txid = await connection.sendRawTransaction(rawTransaction, {
        skipPreflight: true,
    });
    console.log('Started awaiting confirmation for', txid);
    let done = false;
    (async () => {
        while (!done && exports.getUnixTs() - startTime < timeout) {
            connection.sendRawTransaction(rawTransaction, {
                skipPreflight: true,
            });
            await utils_1.sleep(500);
        }
    })();
    try {
        const confirmation = await awaitTransactionSignatureConfirmation(txid, timeout, connection, 'recent', true);
        if (!confirmation)
            throw new Error('Timed out awaiting confirmation on transaction');
        if (confirmation.err) {
            console.error(confirmation.err);
            throw new Error('Transaction failed: Custom instruction error');
        }
        slot = (confirmation === null || confirmation === void 0 ? void 0 : confirmation.slot) || 0;
    }
    catch (err) {
        console.error('Timeout Error caught', err);
        if (err.timeout) {
            throw new Error('Timed out awaiting confirmation on transaction');
        }
        let simulateResult = null;
        try {
            simulateResult = (await simulateTransaction(connection, signedTransaction, 'single')).value;
        }
        catch (e) { }
        if (simulateResult && simulateResult.err) {
            if (simulateResult.logs) {
                for (let i = simulateResult.logs.length - 1; i >= 0; --i) {
                    const line = simulateResult.logs[i];
                    if (line.startsWith('Program log: ')) {
                        throw new Error('Transaction failed: ' + line.slice('Program log: '.length));
                    }
                }
            }
            throw new Error(JSON.stringify(simulateResult.err));
        }
        // throw new Error('Transaction failed');
    }
    finally {
        done = true;
    }
    console.log('Latency', txid, exports.getUnixTs() - startTime);
    return { txid, slot };
}
exports.sendSignedTransaction = sendSignedTransaction;
async function simulateTransaction(connection, transaction, commitment) {
    // @ts-ignore
    transaction.recentBlockhash = await connection._recentBlockhash(
    // @ts-ignore
    connection._disableBlockhashCaching);
    const signData = transaction.serializeMessage();
    // @ts-ignore
    const wireTransaction = transaction._serialize(signData);
    const encodedTransaction = wireTransaction.toString('base64');
    const config = { encoding: 'base64', commitment };
    const args = [encodedTransaction, config];
    // @ts-ignore
    const res = await connection._rpcRequest('simulateTransaction', args);
    if (res.error) {
        throw new Error('failed to simulate transaction: ' + res.error.message);
    }
    return res.result;
}
async function awaitTransactionSignatureConfirmation(txid, timeout, connection, commitment = 'recent', queryStatus = false) {
    let done = false;
    let status = {
        slot: 0,
        confirmations: 0,
        err: null,
    };
    let subId = 0;
    status = await new Promise(async (resolve, reject) => {
        setTimeout(() => {
            if (done) {
                return;
            }
            done = true;
            console.log('Rejecting for timeout...');
            reject({ timeout: true });
        }, timeout);
        try {
            subId = connection.onSignature(txid, (result, context) => {
                done = true;
                status = {
                    err: result.err,
                    slot: context.slot,
                    confirmations: 0,
                };
                if (result.err) {
                    console.log('Rejected via websocket', result.err);
                    reject(status);
                }
                else {
                    console.log('Resolved via websocket', result);
                    resolve(status);
                }
            }, commitment);
        }
        catch (e) {
            done = true;
            console.error('WS error in setup', txid, e);
        }
        while (!done && queryStatus) {
            // eslint-disable-next-line no-loop-func
            (async () => {
                try {
                    const signatureStatuses = await connection.getSignatureStatuses([
                        txid,
                    ]);
                    status = signatureStatuses && signatureStatuses.value[0];
                    if (!done) {
                        if (!status) {
                            console.log('REST null result for', txid, status);
                        }
                        else if (status.err) {
                            console.log('REST error for', txid, status);
                            done = true;
                            reject(status.err);
                        }
                        else if (!status.confirmations) {
                            console.log('REST no confirmations for', txid, status);
                        }
                        else {
                            console.log('REST confirmation for', txid, status);
                            done = true;
                            resolve(status);
                        }
                    }
                }
                catch (e) {
                    if (!done) {
                        console.log('REST connection error: txid', txid, e);
                    }
                }
            })();
            await utils_1.sleep(2000);
        }
    });
    //@ts-ignore
    if (connection._signatureSubscriptions[subId])
        connection.removeSignatureListener(subId);
    done = true;
    console.log('Returning status', status);
    return status;
}
//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 3049:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Store = exports.Wallet = exports.Connection = exports.Accounts = void 0;
exports.Accounts = __importStar(__webpack_require__(9026));
__exportStar(__webpack_require__(9026), exports);
exports.Connection = __importStar(__webpack_require__(8877));
__exportStar(__webpack_require__(8877), exports);
exports.Wallet = __importStar(__webpack_require__(3115));
__exportStar(__webpack_require__(3115), exports);
exports.Store = __importStar(__webpack_require__(7646));
__exportStar(__webpack_require__(7646), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7646:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useStore = exports.StoreProvider = exports.StoreContext = void 0;
const react_1 = __importStar(__webpack_require__(9297));
const utils_1 = __webpack_require__(398);
const hooks_1 = __webpack_require__(5902);
exports.StoreContext = react_1.createContext(null);
const StoreProvider = ({ children, ownerAddress, storeAddress }) => {
    const searchParams = hooks_1.useQuerySearch();
    const ownerAddressFromQuery = searchParams.get('store');
    const initOwnerAddress = ownerAddressFromQuery || ownerAddress;
    const initStoreAddress = !ownerAddressFromQuery ? storeAddress : undefined;
    const isConfigured = Boolean(initStoreAddress || initOwnerAddress);
    const [store, setStore] = react_1.useState({
        storeAddress: initStoreAddress,
        isReady: Boolean(!initOwnerAddress || initStoreAddress),
    });
    const setStoreForOwner = react_1.useMemo(() => async (ownerAddress) => {
        const storeAddress = await utils_1.getStoreID(ownerAddress);
        utils_1.setProgramIds(storeAddress); // fallback
        setStore({ storeAddress, isReady: true });
        console.log(`CUSTOM STORE: ${storeAddress}`);
        return storeAddress;
    }, []);
    react_1.useEffect(() => {
    }, [initOwnerAddress]);
    return (react_1.default.createElement(exports.StoreContext.Provider, { value: { ...store, setStoreForOwner, isConfigured } }, children));
};
exports.StoreProvider = StoreProvider;
const useStore = () => {
    return react_1.useContext(exports.StoreContext);
};
exports.useStore = useStore;
//# sourceMappingURL=store.js.map

/***/ }),

/***/ 3115:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletProvider = exports.WalletModalProvider = exports.WalletModal = exports.useWalletModal = exports.WalletModalContext = void 0;
const wallet_adapter_react_1 = __webpack_require__(5772);
const wallet_adapter_wallets_1 = __webpack_require__(965);
const antd_1 = __webpack_require__(953);
const react_1 = __importStar(__webpack_require__(9297));
const utils_1 = __webpack_require__(398);
const components_1 = __webpack_require__(2878);
exports.WalletModalContext = react_1.createContext({});
function useWalletModal() {
    return react_1.useContext(exports.WalletModalContext);
}
exports.useWalletModal = useWalletModal;
const WalletModal = () => {
    const { wallets, wallet: selected, select } = wallet_adapter_react_1.useWallet();
    const { visible, setVisible } = useWalletModal();
    const [showWallets, setShowWallets] = react_1.useState(false);
    const close = react_1.useCallback(() => {
        setVisible(false);
        setShowWallets(false);
    }, [setVisible, setShowWallets]);
    return (react_1.default.createElement(components_1.MetaplexModal, { visible: visible, onCancel: close },
        react_1.default.createElement("div", { style: {
                background: 'linear-gradient(180deg, #D329FC 0%, #8F6DDE 49.48%, #19E6AD 100%)',
                borderRadius: 36,
                width: 50,
                height: 50,
                textAlign: 'center',
                verticalAlign: 'middle',
                fontWeight: 700,
                fontSize: '1.3rem',
                lineHeight: 2.4,
                marginBottom: 10,
            } }, "M"),
        react_1.default.createElement("h2", null, selected ? 'Change provider' : 'Welcome to Metaplex'),
        react_1.default.createElement("p", null, selected
            ? 'Feel free to switch wallet provider'
            : 'You must be signed in to place a bid'),
        react_1.default.createElement("br", null),
        selected || showWallets ? (wallets.map(wallet => {
            return (react_1.default.createElement(antd_1.Button, { key: wallet.name, size: "large", type: wallet === selected ? 'primary' : 'ghost', onClick: () => {
                    select(wallet.name);
                    close();
                }, icon: react_1.default.createElement("img", { alt: `${wallet.name}`, width: 20, height: 20, src: wallet.icon, style: { marginRight: 8 } }), style: {
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    marginBottom: 8,
                } }, wallet.name));
        })) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Button, { className: "metaplex-button", style: {
                    width: '80%',
                    fontWeight: 'unset',
                }, onClick: () => {
                    select(wallet_adapter_wallets_1.WalletName.Phantom);
                    close();
                } },
                react_1.default.createElement("span", null,
                    react_1.default.createElement("img", { src: "https://www.phantom.app/img/logo.png", style: { width: '1.2rem' } }),
                    "\u00A0Sign in with Phantom"),
                react_1.default.createElement("span", null, ">")),
            react_1.default.createElement("p", { onClick: () => setShowWallets(true), style: { cursor: 'pointer', marginTop: 10 } }, "Select a different Solana wallet")))));
};
exports.WalletModal = WalletModal;
const WalletModalProvider = ({ children, }) => {
    const { publicKey } = wallet_adapter_react_1.useWallet();
    const [connected, setConnected] = react_1.useState(!!publicKey);
    const [visible, setVisible] = react_1.useState(false);
    react_1.useEffect(() => {
        if (publicKey) {
            const base58 = publicKey.toBase58();
            const keyToDisplay = base58.length > 20
                ? `${base58.substring(0, 7)}.....${base58.substring(base58.length - 7, base58.length)}`
                : base58;
            utils_1.notify({
                message: 'Wallet update',
                description: 'Connected to wallet ' + keyToDisplay,
            });
        }
    }, [publicKey]);
    react_1.useEffect(() => {
        if (!publicKey && connected) {
            utils_1.notify({
                message: 'Wallet update',
                description: 'Disconnected from wallet',
            });
        }
        setConnected(!!publicKey);
    }, [publicKey, connected, setConnected]);
    return (react_1.default.createElement(exports.WalletModalContext.Provider, { value: {
            visible,
            setVisible,
        } },
        children,
        react_1.default.createElement(exports.WalletModal, null)));
};
exports.WalletModalProvider = WalletModalProvider;
const WalletProvider = ({ children }) => {
    const wallets = react_1.useMemo(() => [
        wallet_adapter_wallets_1.getPhantomWallet(),
        wallet_adapter_wallets_1.getSolflareWallet(),
        wallet_adapter_wallets_1.getTorusWallet({
            options: {
                // @FIXME: this should be changed for Metaplex, and by each Metaplex storefront
                clientId: 'BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ',
            },
        }),
        wallet_adapter_wallets_1.getLedgerWallet(),
        wallet_adapter_wallets_1.getSolongWallet(),
        wallet_adapter_wallets_1.getMathWallet(),
        wallet_adapter_wallets_1.getSolletWallet(),
    ], []);
    const onError = react_1.useCallback((error) => {
        console.error(error);
        utils_1.notify({
            message: 'Wallet error',
            description: error.message,
        });
    }, []);
    return (react_1.default.createElement(wallet_adapter_react_1.WalletProvider, { wallets: wallets, onError: onError, autoConnect: true },
        react_1.default.createElement(exports.WalletModalProvider, null, children)));
};
exports.WalletProvider = WalletProvider;
//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 5902:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8911), exports);
__exportStar(__webpack_require__(3801), exports);
__exportStar(__webpack_require__(6531), exports);
__exportStar(__webpack_require__(1114), exports);
__exportStar(__webpack_require__(8991), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAccountByMint = void 0;
const useUserAccounts_1 = __webpack_require__(8911);
const useAccountByMint = (mint) => {
    const { userAccounts } = useUserAccounts_1.useUserAccounts();
    const mintAddress = typeof mint === 'string' ? mint : mint === null || mint === void 0 ? void 0 : mint.toBase58();
    const index = userAccounts.findIndex(acc => acc.info.mint.toBase58() === mintAddress);
    if (index !== -1) {
        return userAccounts[index];
    }
    return;
};
exports.useAccountByMint = useAccountByMint;
//# sourceMappingURL=useAccountByMint.js.map

/***/ }),

/***/ 8991:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useQuerySearch = void 0;
const react_router_dom_1 = __webpack_require__(2146);
function useQuerySearch() {
    return new URLSearchParams(react_router_dom_1.useLocation().search);
}
exports.useQuerySearch = useQuerySearch;
//# sourceMappingURL=useQuerySearch.js.map

/***/ }),

/***/ 1114:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useThatState = void 0;
const react_1 = __webpack_require__(9297);
// Extends useState() hook with async getThatState getter which can be used to get state value in contexts (ex. async callbacks) where up to date state is not available
function useThatState(initialState) {
    const [state, setState] = react_1.useState(initialState);
    const getThatState = () => new Promise(resolve => {
        // Use NOP setState call to retrieve current state value
        setState(s => {
            resolve(s);
            return s;
        });
    });
    return [state, setState, getThatState];
}
exports.useThatState = useThatState;
//# sourceMappingURL=useThatState.js.map

/***/ }),

/***/ 6531:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTokenName = void 0;
const connection_1 = __webpack_require__(8877);
const utils_1 = __webpack_require__(7392);
function useTokenName(mintAddress) {
    const { tokenMap } = connection_1.useConnectionConfig();
    const address = typeof mintAddress === 'string' ? mintAddress : mintAddress === null || mintAddress === void 0 ? void 0 : mintAddress.toBase58();
    return utils_1.getTokenName(tokenMap, address);
}
exports.useTokenName = useTokenName;
//# sourceMappingURL=useTokenName.js.map

/***/ }),

/***/ 8911:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useUserAccounts = void 0;
const accounts_1 = __webpack_require__(9026);
function useUserAccounts() {
    const context = accounts_1.useAccountsContext();
    const accountByMint = context.userAccounts.reduce((prev, acc) => {
        prev.set(acc.info.mint.toBase58(), acc);
        return prev;
    }, new Map());
    return {
        userAccounts: context.userAccounts,
        accountByMint,
    };
}
exports.useUserAccounts = useUserAccounts;
//# sourceMappingURL=useUserAccounts.js.map

/***/ }),

/***/ 9819:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.utils = exports.models = exports.contexts = exports.hooks = exports.constants = exports.components = exports.actions = void 0;
exports.actions = __importStar(__webpack_require__(6618));
__exportStar(__webpack_require__(6618), exports);
exports.components = __importStar(__webpack_require__(2878));
__exportStar(__webpack_require__(2878), exports);
exports.constants = __importStar(__webpack_require__(7093));
__exportStar(__webpack_require__(7093), exports);
exports.hooks = __importStar(__webpack_require__(5902));
__exportStar(__webpack_require__(5902), exports);
exports.contexts = __importStar(__webpack_require__(3049));
__exportStar(__webpack_require__(3049), exports);
exports.models = __importStar(__webpack_require__(5460));
__exportStar(__webpack_require__(5460), exports);
exports.utils = __importStar(__webpack_require__(398));
__exportStar(__webpack_require__(398), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1161:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.approve = exports.ParsedDataLayout = void 0;
const web3_js_1 = __webpack_require__(5681);
const spl_token_1 = __webpack_require__(4541);
const ids_1 = __webpack_require__(9556);
const buffer_layout_1 = __importDefault(__webpack_require__(2949));
exports.ParsedDataLayout = buffer_layout_1.default.struct([
    buffer_layout_1.default.blob(32, 'amount'),
    buffer_layout_1.default.u8('toChain'),
    buffer_layout_1.default.blob(32, 'sourceAddress'),
    buffer_layout_1.default.blob(32, 'targetAddress'),
    buffer_layout_1.default.blob(32, 'assetAddress'),
    buffer_layout_1.default.u8('assetChain'),
    buffer_layout_1.default.u8('assetDecimals'),
    buffer_layout_1.default.seq(buffer_layout_1.default.u8(), 1),
    buffer_layout_1.default.u32('nonce'),
    buffer_layout_1.default.blob(1001, 'vaa'),
    buffer_layout_1.default.seq(buffer_layout_1.default.u8(), 3),
    buffer_layout_1.default.u32('vaaTime'),
    buffer_layout_1.default.u32('lockupTime'),
    buffer_layout_1.default.u8('pokeCounter'),
    buffer_layout_1.default.blob(32, 'signatureAccount'),
    buffer_layout_1.default.u8('initialized'),
]);
function approve(instructions, cleanupInstructions, account, owner, amount, autoRevoke = true, 
// if delegate is not passed ephemeral transfer authority is used
delegate, existingTransferAuthority) {
    const tokenProgram = ids_1.TOKEN_PROGRAM_ID;
    const transferAuthority = existingTransferAuthority || web3_js_1.Keypair.generate();
    //const delegateKey = delegate ?? transferAuthority.publicKey;
    instructions.push(spl_token_1.Token.createApproveInstruction(tokenProgram, account, delegate !== null && delegate !== void 0 ? delegate : transferAuthority.publicKey, owner, [], amount));
    if (autoRevoke) {
        cleanupInstructions.push(spl_token_1.Token.createRevokeInstruction(tokenProgram, account, owner, []));
    }
    return transferAuthority;
}
exports.approve = approve;
//# sourceMappingURL=account.js.map

/***/ }),

/***/ 5460:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1161), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7094:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extendBorsh = void 0;
const web3_js_1 = __webpack_require__(5681);
const borsh_1 = __webpack_require__(7384);
const bs58_1 = __importDefault(__webpack_require__(2815));
const extendBorsh = () => {
    borsh_1.BinaryReader.prototype.readPubkey = function () {
        const reader = this;
        const array = reader.readFixedArray(32);
        return new web3_js_1.PublicKey(array);
    };
    borsh_1.BinaryWriter.prototype.writePubkey = function (value) {
        const writer = this;
        writer.writeFixedArray(value.toBuffer());
    };
    borsh_1.BinaryReader.prototype.readPubkeyAsString = function () {
        const reader = this;
        const array = reader.readFixedArray(32);
        return bs58_1.default.encode(array);
    };
    borsh_1.BinaryWriter.prototype.writePubkeyAsString = function (value) {
        const writer = this;
        writer.writeFixedArray(bs58_1.default.decode(value));
    };
};
exports.extendBorsh = extendBorsh;
exports.extendBorsh();
//# sourceMappingURL=borsh.js.map

/***/ }),

/***/ 9757:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventEmitter = exports.MarketUpdateEvent = exports.CacheDeleteEvent = exports.CacheUpdateEvent = void 0;
const eventemitter3_1 = __webpack_require__(9553);
class CacheUpdateEvent {
    constructor(id, isNew, parser, isActive) {
        this.id = id;
        this.parser = parser;
        this.isNew = isNew;
        this.isActive = isActive;
    }
}
exports.CacheUpdateEvent = CacheUpdateEvent;
CacheUpdateEvent.type = 'CacheUpdate';
class CacheDeleteEvent {
    constructor(id) {
        this.id = id;
    }
}
exports.CacheDeleteEvent = CacheDeleteEvent;
CacheDeleteEvent.type = 'CacheUpdate';
class MarketUpdateEvent {
    constructor(ids) {
        this.ids = ids;
    }
}
exports.MarketUpdateEvent = MarketUpdateEvent;
MarketUpdateEvent.type = 'MarketUpdate';
class EventEmitter {
    constructor() {
        this.emitter = new eventemitter3_1.EventEmitter();
    }
    onMarket(callback) {
        this.emitter.on(MarketUpdateEvent.type, callback);
        return () => this.emitter.removeListener(MarketUpdateEvent.type, callback);
    }
    onCache(callback) {
        this.emitter.on(CacheUpdateEvent.type, callback);
        return () => this.emitter.removeListener(CacheUpdateEvent.type, callback);
    }
    raiseMarketUpdated(ids) {
        this.emitter.emit(MarketUpdateEvent.type, new MarketUpdateEvent(ids));
    }
    raiseCacheUpdated(id, isNew, parser, isActive) {
        this.emitter.emit(CacheUpdateEvent.type, new CacheUpdateEvent(id, isNew, parser, isActive));
    }
    raiseCacheDeleted(id) {
        this.emitter.emit(CacheDeleteEvent.type, new CacheDeleteEvent(id));
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=eventEmitter.js.map

/***/ }),

/***/ 9556:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SYSTEM = exports.METAPLEX_ID = exports.STORE_ID = exports.LOTTERY_ID = exports.AUCTION_ID = exports.VAULT_ID = exports.METADATA_PROGRAM_ID = exports.MEMO_ID = exports.BPF_UPGRADE_LOADER_ID = exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = exports.TOKEN_PROGRAM_ID = exports.WRAPPED_SOL_MINT = exports.toPublicKey = exports.LazyAccountInfoProxy = void 0;
const web3_js_1 = __webpack_require__(5681);
class LazyAccountInfoProxy {
    constructor() {
        this.executable = false;
        this.owner = '';
        this.lamports = 0;
    }
    get data() {
        //
        return undefined;
    }
}
exports.LazyAccountInfoProxy = LazyAccountInfoProxy;
const PubKeysInternedMap = new Map();
const toPublicKey = (key) => {
    if (typeof key !== 'string') {
        return key;
    }
    let result = PubKeysInternedMap.get(key);
    if (!result) {
        result = new web3_js_1.PublicKey(key);
        PubKeysInternedMap.set(key, result);
    }
    return result;
};
exports.toPublicKey = toPublicKey;
exports.WRAPPED_SOL_MINT = new web3_js_1.PublicKey('So11111111111111111111111111111111111111112');
exports.TOKEN_PROGRAM_ID = new web3_js_1.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3_js_1.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
exports.BPF_UPGRADE_LOADER_ID = new web3_js_1.PublicKey('BPFLoaderUpgradeab1e11111111111111111111111');
exports.MEMO_ID = new web3_js_1.PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');
exports.METADATA_PROGRAM_ID = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
exports.VAULT_ID = 'vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn';
exports.AUCTION_ID = 'auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8';
exports.LOTTERY_ID = '7A897bC18j2bbEwGVJ8PzgLXYNkxovUuNn43N7JfVuet';
exports.STORE_ID = 'C5qPBBJfLWRgwc1TfagihB6kuMnQDZt6S7mTDXHj2umR';
exports.METAPLEX_ID = 'p1exdMJcjVao65QdewkaZRUnU6VPSXhus9n2GzWfh98';
exports.SYSTEM = new web3_js_1.PublicKey('11111111111111111111111111111111');
//# sourceMappingURL=ids.js.map

/***/ }),

/***/ 398:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shortvec = exports.Layout = void 0;
__exportStar(__webpack_require__(9757), exports);
__exportStar(__webpack_require__(9556), exports);
__exportStar(__webpack_require__(6120), exports);
exports.Layout = __importStar(__webpack_require__(2753));
__exportStar(__webpack_require__(5858), exports);
__exportStar(__webpack_require__(7392), exports);
__exportStar(__webpack_require__(5511), exports);
exports.shortvec = __importStar(__webpack_require__(3798));
__exportStar(__webpack_require__(7094), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2753:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rustString = exports.uint128 = exports.uint64 = exports.publicKey = void 0;
const web3_js_1 = __webpack_require__(5681);
const bn_js_1 = __importDefault(__webpack_require__(2416));
const BufferLayout = __importStar(__webpack_require__(2949));
/**
 * Layout for a public key
 */
const publicKey = (property = 'publicKey') => {
    const publicKeyLayout = BufferLayout.blob(32, property);
    const _decode = publicKeyLayout.decode.bind(publicKeyLayout);
    const _encode = publicKeyLayout.encode.bind(publicKeyLayout);
    publicKeyLayout.decode = (buffer, offset) => {
        const data = _decode(buffer, offset);
        return new web3_js_1.PublicKey(data);
    };
    publicKeyLayout.encode = (key, buffer, offset) => {
        return _encode(key.toBuffer(), buffer, offset);
    };
    return publicKeyLayout;
};
exports.publicKey = publicKey;
/**
 * Layout for a 64bit unsigned value
 */
const uint64 = (property = 'uint64') => {
    const layout = BufferLayout.blob(8, property);
    const _decode = layout.decode.bind(layout);
    const _encode = layout.encode.bind(layout);
    layout.decode = (buffer, offset) => {
        const data = _decode(buffer, offset);
        return new bn_js_1.default([...data]
            .reverse()
            .map(i => `00${i.toString(16)}`.slice(-2))
            .join(''), 16);
    };
    layout.encode = (num, buffer, offset) => {
        const a = num.toArray().reverse();
        let b = Buffer.from(a);
        if (b.length !== 8) {
            const zeroPad = Buffer.alloc(8);
            b.copy(zeroPad);
            b = zeroPad;
        }
        return _encode(b, buffer, offset);
    };
    return layout;
};
exports.uint64 = uint64;
// TODO: wrap in BN (what about decimals?)
const uint128 = (property = 'uint128') => {
    const layout = BufferLayout.blob(16, property);
    const _decode = layout.decode.bind(layout);
    const _encode = layout.encode.bind(layout);
    layout.decode = (buffer, offset) => {
        const data = _decode(buffer, offset);
        return new bn_js_1.default([...data]
            .reverse()
            .map(i => `00${i.toString(16)}`.slice(-2))
            .join(''), 16);
    };
    layout.encode = (num, buffer, offset) => {
        const a = num.toArray().reverse();
        let b = Buffer.from(a);
        if (b.length !== 16) {
            const zeroPad = Buffer.alloc(16);
            b.copy(zeroPad);
            b = zeroPad;
        }
        return _encode(b, buffer, offset);
    };
    return layout;
};
exports.uint128 = uint128;
/**
 * Layout for a Rust String type
 */
const rustString = (property = 'string') => {
    const rsl = BufferLayout.struct([
        BufferLayout.u32('length'),
        BufferLayout.u32('lengthPadding'),
        BufferLayout.blob(BufferLayout.offset(BufferLayout.u32(), -8), 'chars'),
    ], property);
    const _decode = rsl.decode.bind(rsl);
    const _encode = rsl.encode.bind(rsl);
    rsl.decode = (buffer, offset) => {
        const data = _decode(buffer, offset);
        return data.chars.toString('utf8');
    };
    rsl.encode = (str, buffer, offset) => {
        const data = {
            chars: Buffer.from(str, 'utf8'),
        };
        return _encode(data, buffer, offset);
    };
    return rsl;
};
exports.rustString = rustString;
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ 5858:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.notify = void 0;
const react_1 = __importDefault(__webpack_require__(9297));
const antd_1 = __webpack_require__(953);
// import Link from '../components/Link';
function notify({ message = '', description = undefined, txid = '', type = 'info', placement = 'bottomLeft', }) {
    if (txid) {
        //   <Link
        //     external
        //     to={'https://explorer.solana.com/tx/' + txid}
        //     style={{ color: '#0000ff' }}
        //   >
        //     View transaction {txid.slice(0, 8)}...{txid.slice(txid.length - 8)}
        //   </Link>
        description = react_1.default.createElement(react_1.default.Fragment, null);
    }
    antd_1.notification[type]({
        message: react_1.default.createElement("span", { style: { color: 'black' } }, message),
        description: (react_1.default.createElement("span", { style: { color: 'black', opacity: 0.5 } }, description)),
        placement,
        style: {
            backgroundColor: 'white',
        },
    });
}
exports.notify = notify;
//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 6120:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.programIds = exports.setProgramIds = exports.getStoreID = void 0;
const utils_1 = __webpack_require__(398);
const ids_1 = __webpack_require__(9556);
const getStoreID = async (storeOwnerAddress) => {
    if (!storeOwnerAddress) {
        return undefined;
    }
    const programs = await utils_1.findProgramAddress([
        Buffer.from('metaplex'),
        ids_1.toPublicKey(ids_1.METAPLEX_ID).toBuffer(),
        ids_1.toPublicKey(storeOwnerAddress).toBuffer(),
    ], ids_1.toPublicKey(ids_1.METAPLEX_ID));
    const storeAddress = programs[0];
    return storeAddress;
};
exports.getStoreID = getStoreID;
const setProgramIds = async (store) => {
    STORE = store ? ids_1.toPublicKey(store) : undefined;
    console.log(STORE);
};
exports.setProgramIds = setProgramIds;
let STORE;
const programIds = () => {
    return {
        token: ids_1.TOKEN_PROGRAM_ID,
        associatedToken: ids_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        bpf_upgrade_loader: ids_1.BPF_UPGRADE_LOADER_ID,
        system: ids_1.SYSTEM,
        metadata: ids_1.METADATA_PROGRAM_ID,
        memo: ids_1.MEMO_ID,
        vault: ids_1.VAULT_ID,
        auction: ids_1.AUCTION_ID,
        lottery: ids_1.LOTTERY_ID,
        store: ids_1.STORE_ID,
        metaplex: ids_1.METAPLEX_ID,
    };
};
exports.programIds = programIds;
//# sourceMappingURL=programIds.js.map

/***/ }),

/***/ 3798:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeLength = exports.decodeLength = void 0;
function decodeLength(bytes) {
    let len = 0;
    let size = 0;
    for (;;) {
        const elem = bytes.shift();
        //@ts-ignore
        len |= (elem & 0x7f) << (size * 7);
        size += 1;
        //@ts-ignore
        if ((elem & 0x80) === 0) {
            break;
        }
    }
    return len;
}
exports.decodeLength = decodeLength;
function encodeLength(bytes, len) {
    let rem_len = len;
    for (;;) {
        let elem = rem_len & 0x7f;
        rem_len >>= 7;
        if (rem_len === 0) {
            bytes.push(elem);
            break;
        }
        else {
            elem |= 0x80;
            bytes.push(elem);
        }
    }
}
exports.encodeLength = encodeLength;
//# sourceMappingURL=shortvec.js.map

/***/ }),

/***/ 5511:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromUTF8Array = exports.toUTF8Array = void 0;
// credit https://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
function toUTF8Array(str) {
    const utf8 = [];
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode < 0x80)
            utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode =
                0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}
exports.toUTF8Array = toUTF8Array;
//courtesy https://gist.github.com/joni/3760795
function fromUTF8Array(data) {
    // array of bytes
    let str = '', i;
    for (i = 0; i < data.length; i++) {
        const value = data[i];
        if (value < 0x80) {
            str += String.fromCharCode(value);
        }
        else if (value > 0xbf && value < 0xe0) {
            str += String.fromCharCode(((value & 0x1f) << 6) | (data[i + 1] & 0x3f));
            i += 1;
        }
        else if (value > 0xdf && value < 0xf0) {
            str += String.fromCharCode(((value & 0x0f) << 12) |
                ((data[i + 1] & 0x3f) << 6) |
                (data[i + 2] & 0x3f));
            i += 2;
        }
        else {
            // surrogate pair
            const charCode = (((value & 0x07) << 18) |
                ((data[i + 1] & 0x3f) << 12) |
                ((data[i + 2] & 0x3f) << 6) |
                (data[i + 3] & 0x3f)) -
                0x010000;
            str += String.fromCharCode((charCode >> 10) | 0xd800, (charCode & 0x03ff) | 0xdc00);
            i += 3;
        }
    }
    return str;
}
exports.fromUTF8Array = fromUTF8Array;
//# sourceMappingURL=strings.js.map

/***/ }),

/***/ 7392:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createProgramAccountIfNotExist = exports.createTokenAccountIfNotExist = exports.createSPLTokenKeypair = exports.createSplKeypair = exports.sleep = exports.convert = exports.formatPct = exports.formatNumber = exports.formatUSD = exports.formatTokenAmount = exports.formatAmount = exports.tryParseKey = exports.fromLamports = exports.wadToLamports = exports.toLamports = exports.chunks = exports.STABLE_COINS = exports.isKnownMint = exports.getTokenIcon = exports.getTokenByName = exports.getVerboseTokenName = exports.getTokenName = exports.shortenAddress = exports.findProgramAddress = exports.useLocalStorageState = exports.formatPriceNumber = void 0;
const react_1 = __webpack_require__(9297);
const spl_token_1 = __webpack_require__(4541);
const web3_js_1 = __webpack_require__(5681);
const bn_js_1 = __importDefault(__webpack_require__(2416));
const constants_1 = __webpack_require__(7093);
const token_instructions_1 = __webpack_require__(9298);
exports.formatPriceNumber = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
});
function useLocalStorageState(key, defaultState) {
    const [state, setState] = react_1.useState(() => {
        // NOTE: Not sure if this is ok
        const storedState = localStorage.getItem(key);
        if (storedState) {
            return JSON.parse(storedState);
        }
        return defaultState;
    });
    const setLocalStorageState = react_1.useCallback(newState => {
        const changed = state !== newState;
        if (!changed) {
            return;
        }
        setState(newState);
        if (newState === null) {
            localStorage.removeItem(key);
        }
        else {
            try {
                localStorage.setItem(key, JSON.stringify(newState));
            }
            catch {
                // ignore
            }
        }
    }, [state, key]);
    return [state, setLocalStorageState];
}
exports.useLocalStorageState = useLocalStorageState;
const findProgramAddress = async (seeds, programId) => {
    const key = 'pda-' +
        seeds.reduce((agg, item) => agg + item.toString('hex'), '') +
        programId.toString();
    const cached = localStorage.getItem(key);
    if (cached) {
        const value = JSON.parse(cached);
        return [value.key, parseInt(value.nonce)];
    }
    const result = await web3_js_1.PublicKey.findProgramAddress(seeds, programId);
    try {
        localStorage.setItem(key, JSON.stringify({
            key: result[0].toBase58(),
            nonce: result[1],
        }));
    }
    catch {
        // ignore
    }
    return [result[0].toBase58(), result[1]];
};
exports.findProgramAddress = findProgramAddress;
// shorten the checksummed version of the input address to have 4 characters at start and end
function shortenAddress(address, chars = 4) {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}
exports.shortenAddress = shortenAddress;
function getTokenName(map, mint, shorten = true) {
    var _a;
    const mintAddress = typeof mint === 'string' ? mint : mint === null || mint === void 0 ? void 0 : mint.toBase58();
    if (!mintAddress) {
        return 'N/A';
    }
    const knownSymbol = (_a = map.get(mintAddress)) === null || _a === void 0 ? void 0 : _a.symbol;
    if (knownSymbol) {
        return knownSymbol;
    }
    return shorten ? `${mintAddress.substring(0, 5)}...` : mintAddress;
}
exports.getTokenName = getTokenName;
function getVerboseTokenName(map, mint, shorten = true) {
    var _a;
    const mintAddress = typeof mint === 'string' ? mint : mint === null || mint === void 0 ? void 0 : mint.toBase58();
    if (!mintAddress) {
        return 'N/A';
    }
    const knownName = (_a = map.get(mintAddress)) === null || _a === void 0 ? void 0 : _a.name;
    if (knownName) {
        return knownName;
    }
    return shorten ? `${mintAddress.substring(0, 5)}...` : mintAddress;
}
exports.getVerboseTokenName = getVerboseTokenName;
function getTokenByName(tokenMap, name) {
    let token = null;
    for (const val of tokenMap.values()) {
        if (val.symbol === name) {
            token = val;
            break;
        }
    }
    return token;
}
exports.getTokenByName = getTokenByName;
function getTokenIcon(map, mintAddress) {
    var _a;
    const address = typeof mintAddress === 'string' ? mintAddress : mintAddress === null || mintAddress === void 0 ? void 0 : mintAddress.toBase58();
    if (!address) {
        return;
    }
    return (_a = map.get(address)) === null || _a === void 0 ? void 0 : _a.logoURI;
}
exports.getTokenIcon = getTokenIcon;
function isKnownMint(map, mintAddress) {
    return !!map.get(mintAddress);
}
exports.isKnownMint = isKnownMint;
exports.STABLE_COINS = new Set(['USDC', 'wUSDC', 'USDT']);
function chunks(array, size) {
    return Array.apply(0, new Array(Math.ceil(array.length / size))).map((_, index) => array.slice(index * size, (index + 1) * size));
}
exports.chunks = chunks;
function toLamports(account, mint) {
    var _a;
    if (!account) {
        return 0;
    }
    const amount = typeof account === 'number' ? account : (_a = account.info.amount) === null || _a === void 0 ? void 0 : _a.toNumber();
    const precision = Math.pow(10, (mint === null || mint === void 0 ? void 0 : mint.decimals) || 0);
    return Math.floor(amount * precision);
}
exports.toLamports = toLamports;
function wadToLamports(amount) {
    return (amount === null || amount === void 0 ? void 0 : amount.div(constants_1.WAD)) || constants_1.ZERO;
}
exports.wadToLamports = wadToLamports;
function fromLamports(account, mint, rate = 1.0) {
    if (!account) {
        return 0;
    }
    const amount = Math.floor(typeof account === 'number'
        ? account
        : bn_js_1.default.isBN(account)
            ? account.toNumber()
            : account.info.amount.toNumber());
    const precision = Math.pow(10, (mint === null || mint === void 0 ? void 0 : mint.decimals) || 9);
    return (amount / precision) * rate;
}
exports.fromLamports = fromLamports;
const tryParseKey = (key) => {
    try {
        return new web3_js_1.PublicKey(key);
    }
    catch (error) {
        return null;
    }
};
exports.tryParseKey = tryParseKey;
const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
const abbreviateNumber = (number, precision) => {
    const tier = (Math.log10(number) / 3) | 0;
    let scaled = number;
    const suffix = SI_SYMBOL[tier];
    if (tier !== 0) {
        const scale = Math.pow(10, tier * 3);
        scaled = number / scale;
    }
    return scaled.toFixed(precision) + suffix;
};
const formatAmount = (val, precision = 2, abbr = true) => (abbr ? abbreviateNumber(val, precision) : val.toFixed(precision));
exports.formatAmount = formatAmount;
function formatTokenAmount(account, mint, rate = 1.0, prefix = '', suffix = '', precision = 2, abbr = false) {
    if (!account) {
        return '';
    }
    return `${[prefix]}${exports.formatAmount(fromLamports(account, mint, rate), precision, abbr)}${suffix}`;
}
exports.formatTokenAmount = formatTokenAmount;
exports.formatUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const numberFormater = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
exports.formatNumber = {
    format: (val) => {
        if (!val) {
            return '--';
        }
        return numberFormater.format(val);
    },
};
exports.formatPct = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
function convert(account, mint, rate = 1.0) {
    var _a;
    if (!account) {
        return 0;
    }
    const amount = typeof account === 'number' ? account : (_a = account.info.amount) === null || _a === void 0 ? void 0 : _a.toNumber();
    const precision = Math.pow(10, (mint === null || mint === void 0 ? void 0 : mint.decimals) || 0);
    const result = (amount / precision) * rate;
    return result;
}
exports.convert = convert;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
function createSplKeypair(instructions, payer, accountRentExempt, mint, owner, space) {
    const keypair = new web3_js_1.Keypair();
    instructions.push(web3_js_1.SystemProgram.createAccount({
        fromPubkey: payer,
        newAccountPubkey: keypair.publicKey,
        lamports: accountRentExempt,
        space,
        programId: spl_token_1.TOKEN_PROGRAM_ID,
    }));
    instructions.push(spl_token_1.Token.createInitAccountInstruction(spl_token_1.TOKEN_PROGRAM_ID, mint, keypair.publicKey, owner));
    return keypair;
}
exports.createSplKeypair = createSplKeypair;
async function createSPLTokenKeypair(instructions, connection, payer, owner, mint) {
    const accountRentExempt = await connection.getMinimumBalanceForRentExemption(spl_token_1.AccountLayout.span);
    const newTokenKeypair = createSplKeypair(instructions, payer, accountRentExempt, mint, owner, spl_token_1.AccountLayout.span);
    return newTokenKeypair;
}
exports.createSPLTokenKeypair = createSPLTokenKeypair;
async function createTokenAccountIfNotExist(connection, account, owner, mintAddress, lamports, instructions, signer) {
    let publicKey;
    if (account) {
        publicKey = new web3_js_1.PublicKey(account);
    }
    else {
        publicKey = await createProgramAccountIfNotExist(connection, account, owner, spl_token_1.TOKEN_PROGRAM_ID, lamports, spl_token_1.AccountLayout, instructions, signer);
        instructions.push(token_instructions_1.initializeAccount({
            account: publicKey,
            mint: new web3_js_1.PublicKey(mintAddress),
            owner,
        }));
    }
    return publicKey;
}
exports.createTokenAccountIfNotExist = createTokenAccountIfNotExist;
async function createProgramAccountIfNotExist(connection, account, owner, programId, lamports, layout, instructions, signer) {
    let publicKey;
    if (account) {
        publicKey = new web3_js_1.PublicKey(account);
    }
    else {
        const newAccount = new web3_js_1.Keypair();
        publicKey = newAccount.publicKey;
        instructions.push(web3_js_1.SystemProgram.createAccount({
            fromPubkey: owner,
            newAccountPubkey: publicKey,
            lamports: lamports !== null && lamports !== void 0 ? lamports : (await connection.getMinimumBalanceForRentExemption(layout.span)),
            space: layout.span,
            programId,
        }));
        signer.push(newAccount);
    }
    return publicKey;
}
exports.createProgramAccountIfNotExist = createProgramAccountIfNotExist;
//# sourceMappingURL=utils.js.map

/***/ })

};
;