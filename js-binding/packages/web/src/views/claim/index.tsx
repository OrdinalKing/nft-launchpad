import React, { useState } from 'react';
import {
  Button,
  Input,
  Form,
} from 'antd';
import { QUOTE_MINT } from '../../constants';
import {
  useConnection,
  useMint,
  CreateLotteryArgs,
  toPublicKey,
  programIds,
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import moment from 'moment';
import { makeLottery } from '../../actions';
import BN from 'bn.js';
import { Connection, PublicKey } from '@solana/web3.js';


export const ClaimView = () => {
  const [form] = Form.useForm();
  
  const connection = useConnection();
  const wallet = useWallet();
  const [lotteryID, setLotteryID] = useState('');
  const [tickets, setTickets] = useState([]);

  async function loadTickets() {
    
  }
  async function claimNFTOne() {
    
  }
  async function claimTokenOne() {
    
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
            <Button htmlType="submit" onClick={e => loadTickets()}>
              Load Tickets
            </Button>
            { 
            tickets.map((ticket)=>{
                <div >
                    <br/>
                    ticket id - 
                    <br/>
                    ticket status - 
                    <br/>
                    winned nft mint - 
                    <Button htmlType="submit" onClick={e => claimNFTOne()}>
                    claim nft
                    </Button>
                    <Button htmlType="submit" onClick={e => claimTokenOne()}>
                    claim token
                    </Button>
                </div>
            })
            }
          </Form.Item>

        </Form>
        
      </div>
    </>
  );
};

