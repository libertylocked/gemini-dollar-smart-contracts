module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      gas: 8000000,
      network_id: 5777
    },
  },
  compilers: {
    solc: {
      version: "0.4.21",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}
