import React, { useState } from 'react';
import {
  Button,
  Input,
  Form,
} from 'antd';
import {
  useConnection,
  toPublicKey,
  programIds,
  decodeTicket,
  Ticket,
  TicketState,
  LotteryData,
  decodeLotteryData,
  decodeNFTMetaData,
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import { getFilteredProgramAccounts } from '@solana/spl-name-service';
import { claimDepositedToken } from '../../actions/claimDepositedToken';
import { claimWinnedNFT } from '../../actions/claimWinnedNFT';


export const ClaimView = () => {
  const [form] = Form.useForm();
  
  const connection = useConnection();
  const wallet = useWallet();
  const [lotteryID, setLotteryID] = useState('');
  const [lotteryData, setLotteryData] = useState({} as LotteryData);
  const [tickets, setTickets] = useState([] as any[]);

  async function load() {
    loadLotteryData();
    loadTickets();
  }
  async function loadLotteryData(){
    let lotteryBuffer = await loadAccount(connection,toPublicKey(lotteryID),toPublicKey(programIds().lottery));
    let lotteryData = decodeLotteryData(lotteryBuffer);
    setLotteryData(lotteryData);
  }

  async function loadTickets() {
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
  async function claimNFTOne(ticketId:string, ticketNumber:string) {
    console.log("claimming ...")
    const filters = [
      {
        memcmp: {
          offset: 0,
          bytes: lotteryData.lotteryStoreId
        }
      },
      {
        memcmp: {
          offset: 32,
          bytes: ticketNumber
        }
      },
    ];
    getFilteredProgramAccounts(connection,toPublicKey(programIds().store),filters)
    .then((nftMetaAccounts:{ publicKey: PublicKey; accountInfo: AccountInfo<Buffer>; }[])=>{
      if(nftMetaAccounts.length > 0){
        const nftMetaId = nftMetaAccounts[0].publicKey.toBase58();
        const nftMetaData:any = decodeNFTMetaData(nftMetaAccounts[0].accountInfo.data);

        claimWinnedNFT(
          connection,
          wallet,
          lotteryID,
          lotteryData.lotteryStoreId,
          ticketId,
          nftMetaId,
          nftMetaData
        )
        .then(({txid,slot})=>{
          console.log("claim txid - ",txid);
          loadTickets();
        })
        .catch((error)=>{
          console.log(error);
          loadTickets();
        })
        
      }
      else {
        console.log("not found nft meta");
      }
      
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
      loadTickets();
    })
    .catch((error)=>{
      console.log(error);
      loadTickets();
    })
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
  function getTicketStatus(state:string){
    return state === "0"?"Bought":state === "1"?"Winned":state === "2"?"NotWinned":"Claimed";
  }
  return (
    <>
      <div>
        <Form
          className='claim'
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
            label="Lottery ID"
            name="lotteryid"
            rules={[
              {
                required: false,
                message: 'Please input lottery id!',
              },
            ]}
          >
            <Input value={lotteryID} defaultValue={lotteryID} onChange={e=> setLotteryID(e.target.value)} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit" onClick={e => load()}>
              Load Tickets
            </Button>
            { 
            tickets.map((ticket)=>{
              return(
                <div >
                    <br/>
                    ticket id - {ticket.ticketId}
                    <br/>
                    ticket status - {getTicketStatus(ticket.state.toString())}
                    <br/>
                    {
                      ticket.state === TicketState.Winned ?
                      <div>
                        <br/>
                        winned nft number - {ticket.winnedNFTNumber.toNumber()}
                        <br/>
                        <Button htmlType="submit" onClick={e => claimNFTOne(ticket.ticketId, ticket.winnedNFTNumber.toString())}>
                          Claim NFT
                        </Button>
                      </div>
                      : ticket.state === TicketState.NotWinned ?
                      <Button htmlType="submit" onClick={e => claimTokenOne(ticket.ticketId)}>
                      claim token
                      </Button>
                      : ticket.state === TicketState.Claimed ? "Claimed":"Bought"
                    }
                    <br/>
                    -----------------------------------------------------------
                    <br/>
                </div>
              )
            })
            }
          </Form.Item>

        </Form>
        
      </div>
    </>
  );
};

