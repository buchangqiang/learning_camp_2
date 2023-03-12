require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const mnemonic = process.env.MNEMONIC
const scankey = process.env.ETHERSCAN_API_KEY

module.exports = {
  solidity: "0.8.18",
  hardhat: {
    url:"http://127.0.0.1:8545",
    chainId: 31337,
    gas: 12000000,
    accounts: {
      mnemonic: mnemonic,
    },
  },

  mumbai: {
    url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
    accounts: {
      mnemonic: mnemonic,
    },
    chainId: 80001,
  },

  abiExporter: {
    path: './deployments/abi',
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: true,
  },

  etherscan: {
    apiKey: scankey
  },
};
