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
  const [storeID, setStoreID] = useState('2Pgj2xq6G1oNcziFdHbt88hbmWaW1GQPdhcXPkNzZk42');
  const [createdLottery, setCreatedLottery] = useState('');
  const [mintAddress, setMintAddress] = useState(QUOTE_MINT.toBase58());
  const [enddate, setEndDate] = useState(moment().unix()+7 * 24 * 3600);
  const [ticketPrice, setTicketPrice] = useState(1);
  const [ticketAmount, setTicketAmount] = useState(10);
  const [nftAmount, setNftAmount] = useState(100);


  async function createNFT() {
    if (enddate == 0 || ticketPrice == 0 || ticketAmount == 0) {
      return;
    }
    setCreatedLottery("");

    let lotteryId = "";
    makeLottery(connection, wallet, storeID, mintAddress, new CreateLotteryArgs({
      endLotteryAt: new BN(enddate),
      ticketPrice: new BN(ticketPrice),
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
        <Form
          className='create-lottery-nft'
          form={form} 
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off">
          
          <Form.Item
            label="Store ID"
            name="storeid"
            rules={[
              {
                required: false,
                message: 'Please input store id!',
              },
            ]}
          >
            <Input value={storeID} defaultValue={storeID} onChange={e=> setStoreID(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Token Mint Address"
            name="tokenmintaddress"
            rules={[
              {
                required: false,
                message: 'Please input Token Mint Address!',
              },
            ]}
          >
            <Input value={mintAddress} defaultValue={mintAddress} onChange={e=> setMintAddress(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="End Date"
            name="enddate"
            rules={[
              {
                required: false,
                message: 'Please input End Date!',
              },
            ]}
          >
            <Input type="number" value={enddate} defaultValue={enddate} onChange={e=> setEndDate(parseInt(e.target.value))} />
          </Form.Item>

          <Form.Item
            label="Ticket Price"
            name="ticketprice"
            rules={[
              {
                required: false,
                message: 'Please input Ticket Price!',
              },
            ]}
          >
            <Input type="number" value={ticketPrice} defaultValue={ticketPrice} onChange={e=> setTicketPrice(parseInt(e.target.value))} />
          </Form.Item>
          <Form.Item
            label="Ticket Amount"
            name="tokenamount"
            rules={[
              {
                required: false,
                message: 'Please input Token Amount!',
              },
            ]}
          >
            <Input type="number" value={ticketAmount} defaultValue={ticketAmount} onChange={e=> setTicketAmount(parseInt(e.target.value))} />
          </Form.Item>
          <Form.Item
            label="NFT Amount"
            name="nftamount"
            rules={[
              {
                required: false,
                message: 'Please input NFT Amount!',
              },
            ]}
          >
            <Input type="number" value={nftAmount} defaultValue={nftAmount} onChange={e=> setNftAmount(parseInt(e.target.value))} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit" onClick={e => createNFT()}>
              Create Lottery NFT
            </Button>
            { createdLottery != '' ? 
            <div >
              <br/><br/>
                created lottery account address: {createdLottery}
            </div> : ''
            }
          </Form.Item>
          
        </Form>
        
      </div>
    </>
  );
};

