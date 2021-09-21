import React, { useState } from 'react';
import {
  Steps,
  Button,
  Input,
  Form,
  Select,
} from 'antd';
import { QUOTE_MINT } from './../../constants';
import {
  useConnection,
  useMint,
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import useWindowDimensions from '../../utils/layout';

export const CreateLotteryStoreView = () => {
  const [form] = Form.useForm();

  const connection = useConnection();
  const wallet = useWallet();
  const mint = useMint(QUOTE_MINT);
  const { width } = useWindowDimensions();
  const [storeID, setStoreID] = useState('');
  const [mintCount, setMintCount] = useState(0);
  const [mintAddress, setMintAddress] = useState('');
  const [nfturi, setNFTUri] = useState('');
  const [nftname, setNFTName] = useState('');
  const [nftsymbol, setNFTSymbol] = useState('');

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  function createStore() {
    setStoreID('0x' + genRanHex(40));
    setMintCount(0);
    setMintAddress('');
    setNFTUri('');
    setNFTName('');
    setNFTSymbol('');
  }

  function mintNFT() {
    if (nfturi == '' || nftname == '' || nftsymbol == '') {
      return;
    }

    setMintAddress('0x' + genRanHex(40));
    setMintCount(mintCount + 1);
    setNFTUri('');
    setNFTName('');
    setNFTSymbol('');
    form.resetFields();
  }

  return (
    <>
      <div>
        <Button className='btn-create-lottery' onClick={e => createStore()}>Create Store</Button>
        <br/>
        {storeID == '' ? '' : <div>
        <div>Store ID: {storeID}</div>
        <div>Mint Count: {mintCount}</div>
        <br/>

        <h3>Mint new nft</h3>
        
        <Form
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
            label="URI"
            name="uri"
            rules={[
              {
                required: true,
                message: 'Please input uri!',
              },
            ]}
          >
            <Input value={nfturi} onChange={e=> setNFTUri(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input name!',
              },
            ]}
          >
            <Input value={nftname} onChange={e=> setNFTName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Symbol"
            name="symbol"
            rules={[
              {
                required: true,
                message: 'Please input symbol!',
              },
            ]}
          >
            <Input value={nftsymbol} onChange={e=> setNFTSymbol(e.target.value)} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit" onClick={e => mintNFT()}>
              Mint NFT
            </Button>
          </Form.Item>
        </Form>
        <br/>
        {mintAddress == '' ? '' :
        <div className='mint-address'>Mint Address: {mintAddress}</div>}
        </div>}
      </div>
    </>
  );
};

