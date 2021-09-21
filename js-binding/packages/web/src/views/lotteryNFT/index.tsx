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
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import useWindowDimensions from '../../utils/layout';

export const CreateLotteryNFTView = () => {
  const [form] = Form.useForm();

  const connection = useConnection();
  const wallet = useWallet();
  const mint = useMint(QUOTE_MINT);
  const { width } = useWindowDimensions();
  const [storeID, setStoreID] = useState('');
  const [mintAddress, setMintAddress] = useState('');
  const [enddate, setEndDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketAmount, setTicketAmount] = useState('');

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  function createNFT() {
    if (enddate == '' || ticketPrice == '' || ticketAmount == '') {
      return;
    }
    setStoreID('');
    setMintAddress('');
    setEndDate('');
    setTicketPrice('');
    setTicketAmount('');
    form.resetFields();
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
                required: true,
                message: 'Please input store id!',
              },
            ]}
          >
            <Input value={storeID} onChange={e=> setStoreID(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Token Mint Address"
            name="tokenmintaddress"
            rules={[
              {
                required: true,
                message: 'Please input Token Mint Address!',
              },
            ]}
          >
            <Input value={mintAddress} onChange={e=> setMintAddress(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="End Date"
            name="enddate"
            rules={[
              {
                required: true,
                message: 'Please input End Date!',
              },
            ]}
          >
            <Input value={enddate} onChange={e=> setEndDate(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Ticket Price"
            name="ticketprice"
            rules={[
              {
                required: true,
                message: 'Please input Ticket Price!',
              },
            ]}
          >
            <Input value={ticketPrice} onChange={e=> setTicketPrice(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Token Amount"
            name="tokenamount"
            rules={[
              {
                required: true,
                message: 'Please input Token Amount!',
              },
            ]}
          >
            <Input value={ticketAmount} onChange={e=> setTicketAmount(e.target.value)} />
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
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

