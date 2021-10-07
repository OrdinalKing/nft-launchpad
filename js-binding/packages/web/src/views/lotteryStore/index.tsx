import React, { useState } from 'react';
import {
  Button,
  Input,
  Form,
} from 'antd';
import { QUOTE_MINT } from './../../constants';
import {
  useConnection,
  useMint,
  toPublicKey,
  programIds,
  MintNFTArgs,
  decodeStoreData,
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import useWindowDimensions from '../../utils/layout';
import { Connection, PublicKey } from '@solana/web3.js';
import { makeStore, mintNFTStore } from '../../actions';

export const CreateLotteryStoreView = () => {
  const [form] = Form.useForm();

  const connection = useConnection();
  const wallet = useWallet();
  const [storeID, setStoreID] = useState('');
  const [lotteryId, setLotteryId] = useState('');
  const [mintCount, setMintCount] = useState(0);
  const [mintAddress, setMintAddress] = useState('');
  const [nfturi, setNFTUri] = useState('');
  const [nftname, setNFTName] = useState('');
  const [nftsymbol, setNFTSymbol] = useState('');

  React.useEffect(() => {
    let storeid = localStorage.getItem('storeid');
    setStoreID(storeid ? storeid : '');

    let lotteryid = localStorage.getItem('lotteryid');
    setLotteryId(lotteryid ? lotteryid : '');

    const filters = [
      // {
      //   dataSize: 80
      // },
      {
        memcmp: {
          offset: 0,
          bytes: wallet.publicKey?.toBase58()
        }
      },
      
    ];
  });

  async function createStore() {
    let storeid = '';
    const storeProgramId = programIds().store;

    makeStore(connection, wallet).then(({ txid, slot, store }) => {
      console.log(txid);
      console.log(slot);
      storeid = store;
    }).catch((reason) => {
      console.log(reason)
    }).finally(async () => {
      if (storeid != "") {
        try {
          var account = await loadAccount(connection, toPublicKey(storeid), toPublicKey(storeProgramId));
          console.log(account);
          console.log("store id", storeid);
          setStoreID(storeid);
          localStorage.setItem("storeid", storeid);
          setLotteryId('');
          localStorage.setItem("lotteryid", '');
          alert("successfully created store");
        }
        catch (err: any) {
          console.log(err);
          alert("failed created store");
        }
      }
    });

    setMintCount(0);
    setMintAddress('');
    setNFTUri('');
    setNFTName('');
    setNFTSymbol('');
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
    var decoded = decodeStoreData(Buffer.from(accountInfo.data));
    console.log(decoded);
    return Buffer.from(accountInfo.data);
  }

  async function mintNFT() {
    let mintAdd = '';

    if (nfturi == '' || nftname == '' || nftsymbol == '') {
      return;
    }

    const storeProgramId = programIds().store;
    const STORE_PREFIX = 'store';

    let [, nonce] = await PublicKey.findProgramAddress(
      [Buffer.from(STORE_PREFIX), toPublicKey(storeProgramId).toBuffer()],
      toPublicKey(storeProgramId),
    );

    mintNFTStore(
      connection,
      wallet,
      storeID,
      lotteryId,
      new MintNFTArgs({
        name: nftname,
        symbol: nftsymbol,
        uri: nfturi,
        bump: nonce,
      })).then(({ txid, slot, mint }) => {
        console.log(txid);
        mintAdd = mint;
      }).catch((reason) => {
        console.log(reason)
      }).finally(async () => {
        if (mintAdd != "") {
          try {
            var account = await loadAccount(connection, toPublicKey(mintAdd), toPublicKey(storeProgramId));
            var storeaccount = await loadAccount(connection, toPublicKey(storeID), toPublicKey(storeProgramId));
            var decoded = decodeStoreData(storeaccount);
            console.log(decoded);
            console.log("mint address", mintAdd);
            setMintAddress(mintAdd);
            setMintCount(decoded.nftAmount.toNumber());
            setNFTUri('');
            setNFTName('');
            setNFTSymbol('');
            form.resetFields();
            alert("successfully minted");
          }
          catch (err: any) {
            alert("mint failed");
            console.log(err);
          }
        }
      });

  }

  return (
    <>
      <div>
        <Button className='btn-create-store' onClick={e => createStore()}>Create New Store</Button>
        <br />
        {
          <div>
            <div>Store ID: <Input value={storeID} onChange={e => setStoreID(e.target.value)} /></div>
            <div>Lottery ID: <Input value={lotteryId} onChange={e => setLotteryId(e.target.value)} /></div>

            <div>Mint Count: {mintCount}</div>
            <br />

            --------------------------------------------------<br />
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
                <Input value={nfturi} onChange={e => setNFTUri(e.target.value)} />
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
                <Input value={nftname} onChange={e => setNFTName(e.target.value)} />
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
                <Input value={nftsymbol} onChange={e => setNFTSymbol(e.target.value)} />
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
            <br />
            {mintAddress == '' ? '' :
              <div className='mint-address'>Mint Address: {mintAddress}</div>}
          </div>}
      </div>
    </>
  );
};

