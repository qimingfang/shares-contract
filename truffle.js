module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xcfd31d9ffb5bc1b1f4b7af99cd4792f2b11da185",
      network_id: 4,
      gas: 4996317 // Gas limit used for deploys
    }
  }
}
