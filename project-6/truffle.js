const HDWalletProvider = require('@truffle/hdwallet-provider');
// var mnemonic = "write onion spare boat amount van slow eagle solar spy utility adjust";
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 9545,
   network_id: "*"
  },
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/51929b79a0174a839c640f093d5f2b8d`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/51929b79a0174a839c640f093d5f2b8d`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
//   rinkeby: {
//       provider: function() { 
//        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/51929b79a0174a839c640f093d5f2b8d");
//       },
//       network_id: 4,
//       // gas: 4500000,
//       gas: 5500000,
//       gasPrice: 10000000000
//   }
 },
compilers: {
      solc: {
          version: "^0.4.24"
      }
}
};