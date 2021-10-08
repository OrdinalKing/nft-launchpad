import React, { useEffect, useState } from 'react';
import {
  Steps,
  Button,
  Input,
  Form,
  Select,
} from 'antd';
import { QUOTE_MINT } from '../../constants';
import {
  useConnection,
  CreateLotteryArgs,
  toPublicKey,
  programIds,
  useUserAccounts,
  LotteryData,
  decodeLotteryData,
  decodeNFTMetaData,
  decodeTicket,
  Ticket,
  LotteryState,
  lotteryTimeToEnd,
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import moment from 'moment';
import { claimDepositedToken, claimGainedNft, getTicketFromLottery, makeLottery, startCreatedLottery } from '../../actions';
import BN from 'bn.js';
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import { getFilteredProgramAccounts } from '@solana/spl-name-service';
import Countdown from '../../components/Countdown';

export const CreateLotteryNFTView = () => {
  const [form] = Form.useForm();
  
  const connection = useConnection();
  const wallet = useWallet();
  const userTokenAccounts = useUserAccounts();
  const [storeID, setStoreID] = useState('');
  const [mintAddress, setMintAddress] = useState(QUOTE_MINT.toBase58());
  const [enddate, setEndDate] = useState(moment().unix()+2 * 3600);
  const [ticketPrice, setTicketPrice] = useState(1);
  const [ticketAmount, setTicketAmount] = useState(5);
  const [nftAmount, setNFTAmount] = useState(3);

  const [lotteryID, setLotteryID] = useState('');
  const [lotteryStatus, setLotteryStatus] = useState('');
  const [lotteryStoreId, setLotteryStoreId] = useState('');
  const [boughtTicketAmount, setBoughtTicketAmount] = useState(0);
  const [lotteryData, setLotteryData] = useState({} as LotteryData);

  const [lotteries, setLotteries] = useState([] as any[]);
  const [tickets, setTickets] = useState([] as any[]);

  const [isListView, setIsListView] = useState(true);
  useEffect(() => {
    if(storeID == ""){
      let storeid = localStorage.getItem('storeid');
      setStoreID(storeid ? storeid : '');
    }
    if(storeID == ""){
      let lotteryid = localStorage.getItem('lotteryid');
      setLotteryID(lotteryid ? lotteryid : '');
    }

    loadLotteries();

  }, [storeID, lotteryID]);

  

  async function createLotteryNFT() {
    if (enddate == 0 || ticketPrice == 0 || ticketAmount == 0) {
      return;
    }
    setLotteryID("");

    let lotteryId = "";
    const decimals = 9;
    makeLottery(connection, wallet, storeID, mintAddress, new CreateLotteryArgs({
      endLotteryAt: new BN(enddate),
      ticketPrice: new BN(ticketPrice * Math.pow(10,9)),
      ticketAmount: ticketAmount,
      nftAmount: nftAmount
    })).then(({txid,slot,lottery})=>{
      console.log(txid);
      lotteryId = lottery;
    }).catch((reason)=>{ 
      console.log(reason)
    }).finally(async ()=>{
      // find lottery
      if(lotteryId != ""){
        console.log("lottery id", lotteryId)
        try{
          await loadAccount(connection,toPublicKey(lotteryId),toPublicKey(programIds().lottery));
          setLotteryID(lotteryId);
        }
        catch(err:any){
          console.log(err);
        }
      }
    });
  }

  function getLotteryStatus(state:string){
    return state === "0"?"Created":state === "1"?"Started":"Ended";
  }
  async function loadLotteryData() {
    console.log("loading ...")
    let lotteryBuffer = await loadAccount(connection,toPublicKey(lotteryID),toPublicKey(programIds().lottery));
    let lotteryData = decodeLotteryData(lotteryBuffer);
    
    setLotteryData(lotteryData);
    setLotteryStatus(getLotteryStatus(lotteryData.state.toString()));
    setLotteryStoreId(lotteryData.lotteryStoreId);
    setNFTAmount(lotteryData.nftAmount.toNumber());
    
    setTicketAmount(lotteryData.ticketAmount.toNumber());
    setTicketPrice(lotteryData.ticketPrice.toNumber() / Math.pow(10,9));

    const filters = [
      {
        dataSize: 80
      },
      {
        memcmp: {
          offset: 0,
          bytes: wallet.publicKey?.toBase58()
        }
      },
      {
        memcmp: {
          offset: 32,
          bytes: lotteryID
        }
      },
    ];
    getFilteredProgramAccounts(connection,toPublicKey(programIds().lottery),filters)
    .then((ticketAccounts:{ publicKey: PublicKey; accountInfo: AccountInfo<Buffer>; }[])=>{
      
      setBoughtTicketAmount(ticketAccounts.length);

    })
    .catch((error:any)=>{
      console.log(error);
    })
  }
  async function getTicketOne() {
    getTicketFromLottery(connection, wallet, lotteryID, lotteryData)
      .then(({txid,slot})=>{
        console.log("txid - ",txid);
        loadLotteries();
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  async function start(storeId:string) {
    startCreatedLottery(connection, wallet, storeId)
    .then(({txid,slot})=>{
      console.log("txid - ",txid);
      loadLotteries();
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  async function loadOfClaim() {
    loadLotteryDataOfClaim();
    loadTicketsOfClaim();
  }
  async function loadLotteryDataOfClaim(){
    let lotteryBuffer = await loadAccount(connection,toPublicKey(lotteryID),toPublicKey(programIds().lottery));
    let lotteryData = decodeLotteryData(lotteryBuffer);
    setLotteryData(lotteryData);
  }

  async function loadLotteries() {
    console.log("loading lotteries ...")
    const filters = [
      {
        dataSize: 184
      }
    ];
    getFilteredProgramAccounts(connection,toPublicKey(programIds().lottery),filters)
    .then((lotteryAccounts:{ publicKey: PublicKey; accountInfo: AccountInfo<Buffer>; }[])=>{
      console.log("lottery amount = ", lotteryAccounts.length);
      let _lotteries:LotteryData[] = [];
      lotteryAccounts.forEach((lottery)=>{
        const lotteryData:any = decodeLotteryData(lottery.accountInfo.data);
        lotteryData.lotteryId = lottery.publicKey.toBase58();

        _lotteries.push(lotteryData);
      })
      setLotteries(_lotteries);
    })
    .catch((error:any)=>{
      console.log(error);
    })
  }
  async function loadTicketsOfClaim() {
    console.log("loading tickets ...")
    const filters = [
      {
        dataSize: 80
      },
      {
        memcmp: {
          offset: 0,
          bytes: wallet.publicKey?.toBase58()
        }
      },
      {
        memcmp: {
          offset: 32,
          bytes: lotteryID
        }
      },
    ];
    getFilteredProgramAccounts(connection,toPublicKey(programIds().lottery),filters)
    .then((ticketAccounts:{ publicKey: PublicKey; accountInfo: AccountInfo<Buffer>; }[])=>{
      console.log("bought ticket amount",ticketAccounts.length)
      let _tickets:Ticket[] = [];
      ticketAccounts.forEach((ticket)=>{
        const ticketData:any = decodeTicket(ticket.accountInfo.data);
        ticketData.ticketId = ticket.publicKey.toBase58();

        _tickets.push(ticketData);
      })
      setTickets(_tickets);
    })
    .catch((error:any)=>{
      console.log(error);
    })
  }
  
  async function claimTokenOne(ticketId:string) {
    console.log("claimming ...")
    claimDepositedToken(
      connection,
      wallet,
      lotteryID,
      ticketId,
      lotteryData
    )
    .then(({txid,slot})=>{
      console.log("claim txid - ",txid);
      loadTicketsOfClaim();
    })
    .catch((error)=>{
      console.log(error);
      loadTicketsOfClaim();
    })
  }
  async function claimNFTOne(ticketId:string, ticketNumber:number) {
    console.log("claimming ...")
    const filters = [
      {
        dataSize: 184,
      },
      {
        memcmp: {
          offset: 0,
          bytes: lotteryData.lotteryStoreId
        }
      },
      
    ];
    const nftMetaAccounts = await getFilteredProgramAccounts(connection,toPublicKey(programIds().store),filters);
    let nftMetaId:any = "";
    let nftMetaData:any= null;

    nftMetaAccounts.forEach((nftMetaAccount)=>{
      const _nftMetaId = nftMetaAccount.publicKey.toBase58();
      const _nftMetaData:any = decodeNFTMetaData(nftMetaAccount.accountInfo.data);
      if(_nftMetaData.nftNumber.toNumber() === ticketNumber){
        nftMetaId = _nftMetaId;
        nftMetaData = _nftMetaData;
      }
    })
    let nftTokenAccount = userTokenAccounts.accountByMint.get(nftMetaData.mint)?.pubkey;
    if(nftMetaId === ""){
      console.log("not found nft meta");
      return;
    }
    
    claimGainedNft(
      connection,
      wallet,
      lotteryID,
      ticketId,
      nftTokenAccount,
      nftMetaId,
      nftMetaData,
      lotteryData
    )
    .then(({txid,slot})=>{
      console.log("claim txid - ",txid);
      loadTicketsOfClaim();
    })
    .catch((error)=>{
      console.log(error);
      loadTicketsOfClaim();
    })
  }
  function getTicketStatus(state:string){
    return state === "0"?"Bought":state === "1"?"Winned":state === "2"?"NotWinned":"Claimed";
  }
  

  async function loadAccount(
    connection: Connection,
    address: PublicKey,
    programId: PublicKey,
  ): Promise<Buffer> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo === null) {
      throw new Error('Failed to find account');
    }
  
    if (!accountInfo.owner.equals(programId)) {
      throw new Error(`Invalid owner: ${JSON.stringify(accountInfo.owner)}`);
    }
  
    return Buffer.from(accountInfo.data);
  }
  function viewLotteries(){
    setIsListView(true);
  }
  function goToCreateLottery(){
    setIsListView(false);
  }





  return (
    <>
      {
        isListView?
        <div>
          { 
            lotteries.map((lottery)=>{
              return(
                <div >
                    <Countdown 
                      timestamp={lottery.endLotteryAt.toNumber()}
                      />
                    <br/>
                    lottery id - {lottery.lotteryId} &nbsp;&nbsp;&nbsp; 
                    <br/>
                    store id - {lottery.lotteryStoreId}
                    <br/>
                    lottery status - {getLotteryStatus(lottery.state.toString())}
                    <br/>
                    {
                      lottery.state === LotteryState.Created ?
                      <div>
                        <Button htmlType="submit" onClick={e => start(lottery.lotteryStoreId)}>
                          Start Lottery
                        </Button>
                      </div>
                      : ""
                    }
                    <br/>
                    -----------------------------------------------------------
                    <br/>
                </div>
              )
            })
            }
          <Button htmlType="submit" style={{marginTop: 30 + 'px'}} onClick={e => goToCreateLottery()}>
            Create Lottery
          </Button>
        </div>
        :
        <div>
            <div>Store ID: 
              <Input value={storeID} defaultValue={storeID} onChange={e=> setStoreID(e.target.value)} />
            </div>
            <div>Token Mint Address: 
              <Input value={mintAddress} defaultValue={mintAddress} onChange={e=> setMintAddress(e.target.value)} />
            </div>

            <div>End Date: 
              <Input type="number" value={enddate} defaultValue={enddate} onChange={e=> setEndDate(parseInt(e.target.value))} />
            </div>

            <div>Ticket Price:
              <Input type="number" value={ticketPrice} defaultValue={ticketPrice} onChange={e=> setTicketPrice(parseInt(e.target.value))} />
            </div>

            <div>Ticket Amount:
              <Input type="number" value={ticketAmount} defaultValue={ticketAmount} onChange={e=> setTicketAmount(parseInt(e.target.value))} />
            </div>

            <div>NFT Amount 
              <Input type="number" value={nftAmount} defaultValue={nftAmount} onChange={e=> setNFTAmount(parseInt(e.target.value))} />
            </div>

            <Button htmlType="submit" style={{marginTop: 30 + 'px'}} onClick={e => createLotteryNFT()}>
              Create Lottery
            </Button>
            <Button htmlType="submit" style={{marginTop: 30 + 'px',marginLeft: 30 + 'px'}} onClick={e => viewLotteries()}>
              View Lotteries
            </Button>
            {
              lotteryID == ""?"":
              <div>
                lottery id - {lotteryID}
              </div>
            }
            
        </div>
        
      }
    </>
  );
};

