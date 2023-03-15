require("@nomicfoundation/hardhat-toolbox");
 require('dotenv').config();
 const { MNEMONIC,POLYGON_SCAN_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: POLYGON_SCAN_KEY
  },
  networks:{
    ganache:{
      url:"http://127.0.0.1:8545",
      accounts: {
        mnemonic: "axis hood admit crystal long chicken release pizza error flower absurd pole",
      },
    },
    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 80001,
    },
  }
};
