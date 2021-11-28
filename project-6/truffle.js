module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      websockets: true // taken from : https://github.com/trufflesuite/truffle/issues/1633. Solve "HttpProvider" error
    }
  },
  compilers: {
      solc: {
          version: "^0.4.24"
      }
}
};