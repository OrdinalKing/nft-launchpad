import React, { useState } from 'react';
import {
  Button,
  Input,
  Form,
  Upload,
  Row,
  Col
} from 'antd';
import {
  useConnection,
  useMint,
  toPublicKey,
  programIds,
  MintNFTArgs,
  decodeStoreData,
  useConnectionConfig,
  decodeMetadata,
  decodeNFTMetaData
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, AccountInfo, PublicKey } from '@solana/web3.js';
import { mintNFTStore } from '../../actions';
import { getFilteredProgramAccounts } from '@solana/spl-name-service';
import { useParams } from 'react-router';
const { Dragger } = Upload;

let init = 0;

export const MintNFTStoreView = () => {
  const [form] = Form.useForm();
  const { env } = useConnectionConfig();

  const connection = useConnection();
  const wallet = useWallet();
  const [storeID, setStoreID] = useState('');
  const [lotteryId, setLotteryId] = useState('');
  const [mintCount, setMintCount] = useState(0);
  const [nfturi, setNFTUri] = useState('');
  const [nftname, setNFTName] = useState('');
  const [nftsymbol, setNFTSymbol] = useState('');
  const [mintAddresses, setMintAddresses] = useState<{publicKey: PublicKey; accountInfo: AccountInfo<Buffer>;}[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [coverFile, setCoverFile] = useState<File | undefined>(
    files?.[0],
  );
  
  const { id } = useParams<{id:string}>();

  React.useEffect(() => {
    setStoreID(id);

    let lotteryid = localStorage.getItem('lotteryid');
    setLotteryId(lotteryid ? lotteryid : '');

    if (mintAddresses.length == 0 && init < 3) {
      loadMints();
      init++;
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
        mints.forEach(mint => {
          console.log(decodeNFTMetaData(mint.accountInfo.data));
        });
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

    setFiles([coverFile].filter(f => f) as File[]);

    if (nftname == '' || nftsymbol == '') {
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
      }),
      files,
      env
      ).then(({ txid, slot, mint }) => {
        console.log(txid);
        mintAdd = mint;
      }).catch((reason) => {
        console.log(reason)
      }).finally(async () => {
        if (mintAdd != "") {
          try {
            debugger;
            var account = await loadAccount(connection, toPublicKey(mintAdd), toPublicKey(storeProgramId));
            var decodedMint = decodeNFTMetaData(account);
            var storeaccount = await loadAccount(connection, toPublicKey(storeID), toPublicKey(storeProgramId));
            var decoded = decodeStoreData(storeaccount);
            console.log(decodedMint);
            setMintCount(decoded.nftAmount.toNumber());
            setNFTUri('');
            setNFTName('');
            setNFTSymbol('');
            form.resetFields();
            setCoverFile(undefined);
            setFiles([]);
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
            <div>Lottery ID: <Input onChange={e => setLotteryId(e.target.value)} /></div>

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
            <div>{decodeNFTMetaData(mint.accountInfo.data).uri}</div>
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

                  {/* <Form.Item
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
                  </Form.Item> */}

                  <Row className="content-action">
                    <h3>Upload a cover image (PNG, JPG, GIF, SVG)</h3>
                    <Dragger
                      accept=".png,.jpg,.gif,.mp4,.svg"
                      style={{ padding: 20 }}
                      multiple={false}
                      customRequest={info => {
                        // dont upload files here, handled outside of the control
                        info?.onSuccess?.({}, null as any);
                      }}
                      fileList={coverFile ? [coverFile as any] : []}
                      onChange={async info => {
                        const file = info.file.originFileObj;
                        if (file) setCoverFile(file);
                      }}
                    >
                      <div className="ant-upload-drag-icon">
                        <h3 style={{ fontWeight: 700 }}>
                          Upload your cover image (PNG, JPG, GIF, SVG)
                        </h3>
                      </div>
                      <p className="ant-upload-text">Drag and drop, or click to browse</p>
                    </Dragger>
                  </Row>

                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input name!',
                      },
                    ]}
                    style={{marginTop:40 + 'px'}}
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

