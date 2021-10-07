import React, { useState } from 'react';
import {
  Button,
  Form,
} from 'antd';
import {
  useConnection,
  toPublicKey,
  programIds,
  decodeStoreData,
} from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { getFilteredProgramAccounts } from '@solana/spl-name-service';

export const StoreListView = () => {

  const connection = useConnection();
  const wallet = useWallet();

  const [stores, setStores] = useState([]);

  React.useEffect(() => {
    const filters = [
      {
        memcmp: {
          offset: 0,
          bytes: wallet.publicKey?.toBase58()
        }
      },
      
    ];

    if (stores.length == 0) {
      getFilteredProgramAccounts(connection, toPublicKey(programIds().store), filters)
      .then((storeAccounts:{ publicKey: PublicKey; accountInfo: AccountInfo<Buffer>; }[])=>{
        setStores(storeAccounts);
      })
      .catch((error:any)=>{
        console.log(error);
      });
    }
  });

  return (
    <>
      <div>
        { stores.map(store => 
          <div className='store-item'>
            <span>Store {stores.indexOf(store) + 1}</span>
            <div>Total NFTs: {decodeStoreData(store.accountInfo.data).nftAmount.toNumber()} </div>
            <div>Store ID: {store.publicKey.toBase58()}</div>
            <Button className='btn-detail-store' href={'/store-detail/' + store.publicKey.toBase58()}>Detail</Button>
            </div>)}
        <Button className='btn-create-store' href='/create-lottery-store'>Create New Store</Button>
      </div>
    </>
  );
};

