var Shares = artifacts.require('Shares')

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Shares)
}
