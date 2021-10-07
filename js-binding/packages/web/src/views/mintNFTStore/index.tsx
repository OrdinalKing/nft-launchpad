import React, { useState } from 'react';
import {
  Button,
  Input,
  Form,
  Row, Col
} from 'antd';
import {
  useConnection,
  useMint,
  toPublicKey,
  programIds,
  MintNFTArgs,
  decodeStoreData,
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, AccountInfo, PublicKey } from '@solana/web3.js';
import { mintNFTStore } from '../../actions';
import { getFilteredProgramAccounts } from '@solana/spl-name-service';
import { useParams } from 'react-router';

let init = true;

export const MintNFTStoreView = () => {
  const [form] = Form.useForm();

  const connection = useConnection();
  const wallet = useWallet();
  const [storeID, setStoreID] = useState('');
  const [lotteryId, setLotteryId] = useState('');
  const [mintCount, setMintCount] = useState(0);
  const [nfturi, setNFTUri] = useState('');
  const [nftname, setNFTName] = useState('');
  const [nftsymbol, setNFTSymbol] = useState('');
  const [mintAddresses, setMintAddresses] = useState([]);

  const { id } = useParams<{id:string}>();

  React.useEffect(() => {
    setStoreID(id);

    let lotteryid = localStorage.getItem('lotteryid');
    setLotteryId(lotteryid ? lotteryid : '');

    if (mintAddresses.length == 0 && init) {
      loadMints();
      init = false;
    }
  });

  function loadMints() {
    const filters = [
      {
        memcmp: {
          offset: 0,
          bytes: id
        }
      },
    ];

    getFilteredProgramAccounts(connection, toPublicKey(programIds().store), filters)
      .then((mints:{ publicKey: PublicKey; accountInfo: AccountInfo<Buffer>; }[])=>{
        console.log(mints);
        setMintAddresses(mints);
        setMintCount(mints.length);
      })
      .catch((error:any)=>{
        console.log(error);
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
            setMintCount(decoded.nftAmount.toNumber());
            setNFTUri('');
            setNFTName('');
            setNFTSymbol('');
            form.resetFields();
            alert("successfully minted");
            loadMints();
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
        {
          <div>
            <div>Store ID: <Input value={storeID} onChange={e => setStoreID(e.target.value)} /></div>
            <div>Lottery ID: <Input value={lotteryId} onChange={e => setLotteryId(e.target.value)} /></div>

            <div>Mint Count: {mintCount}</div>
            <br />

            <Row className="row">
              <Col flex="1 0 70%">
                <div>
                { mintAddresses.map(mint => 
          <div className='store-item'>
            {/* <span>Store {mint.indexOf(mint) + 1}</span> */}
            {/* <div>Total NFTs: {decodeStoreData(mint.accountInfo.data).nftAmount.toNumber()} </div> */}
            <div>Mint Address: {mint.publicKey.toBase58()}</div>
            {/* <Button className='btn-detail-store' href={'/#/store-detail/' + mint.publicKey.toBase58()}>Detail</Button> */}
            </div>)}
                </div>
              </Col>
              <Col flex="1 0 30%">
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
              </Col>
            </Row>
          </div>}
      </div>
    </>
  );
};

