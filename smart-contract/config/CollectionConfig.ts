import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'WeAreSMTG',
  tokenName: 'We Are SMTG',
  tokenSymbol: 'WASMTG',
  hiddenMetadataUri: 'ipfs://QmY2bHzDtLQcVxS9byksxyxMSF8rqTscfMPtFSCTtTuGfj/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 21,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 28,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 35,
    maxMintAmountPerTx: 8,
  },
  contractAddress: "0xBD1dc5d0fD7edF8233DE8d886A0c616C6e6C009e",
  marketplaceIdentifier: 'We Are SMTG',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
