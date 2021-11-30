// const HDWalletProvider = require('truffle-hdwallet-provider');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
      websockets: true // taken from : https://github.com/trufflesuite/truffle/issues/1633. Solve "HttpProvider" error
    },

    rinkeby: {
      // provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/51929b79a0174a839c640f093d5f2b8d`),
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/5dba169144da468d8a641eec8080c1e1`),
      network_id: 4,       // rinkeby's id
      // gas: 9500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 21000000000,
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 500,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: {
      solc: {
          version: "^0.4.24"
      }
}
};