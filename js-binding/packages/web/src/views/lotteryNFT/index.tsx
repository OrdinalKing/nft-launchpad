import React, { useState } from 'react';
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
  useMint,
  CreateLotteryArgs,
  toPublicKey,
  programIds,
  useUserAccounts,
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import useWindowDimensions from '../../utils/layout';
import moment from 'moment';
import { makeLottery } from '../../actions';
import BN from 'bn.js';
import { Connection, PublicKey } from '@solana/web3.js';

export const CreateLotteryNFTView = () => {
  const [form] = Form.useForm();
  
  const connection = useConnection();
  const wallet = useWallet();
  const mint = useMint(QUOTE_MINT);
  const { width } = useWindowDimensions();
  const [storeID, setStoreID] = useState('');
  const [createdLottery, setCreatedLottery] = useState('');
  const [mintAddress, setMintAddress] = useState(QUOTE_MINT.toBase58());
  const [enddate, setEndDate] = useState(moment().unix()+2 * 3600);
  const [ticketPrice, setTicketPrice] = useState(1);
  const [ticketAmount, setTicketAmount] = useState(5);
  const [nftAmount, setNftAmount] = useState(3);

  React.useEffect(() => {
    let storeid = localStorage.getItem('storeid');
    setStoreID(storeid ? storeid : '');

    let lotteryid = localStorage.getItem('lotteryid');
    setCreatedLottery(lotteryid ? lotteryid : '');
  });

  async function createNFT() {
    debugger;
    if (enddate == 0 || ticketPrice == 0 || ticketAmount == 0) {
      return;
    }
    setCreatedLottery("");

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
        try{
          console.log("lottery id",lotteryId);
          await loadAccount(connection,toPublicKey(lotteryId),toPublicKey(programIds().lottery));
          setCreatedLottery(lotteryId);
          localStorage.setItem('lotteryid', lotteryId);
        }
        catch(err:any){
          console.log(err);
        }
      }
    });
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

  return (
    <>
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
            <Input type="number" value={nftAmount} defaultValue={nftAmount} onChange={e=> setNftAmount(parseInt(e.target.value))} />
          </div>
          <Button htmlType="submit" style={{marginTop: 30 + 'px'}} onClick={e => createNFT()}>
            Create Lottery NFT
          </Button>
      </div>
    </>
  );
};

