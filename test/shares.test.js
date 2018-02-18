// web3 is a global variable, injected by Truffle.js
const BigNumber = web3.BigNumber

// artifacts is a global variable, injected by Truffle.js
const SharesContract = artifacts.require('Shares')

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

contract('MyCrowdsale', function (walletAddresses) {
  let me = walletAddresses[0]
  let contract

  beforeEach(async function () {
    contract = await SharesContract.new()
  })

  it('should create contract', async function () {
    contract.should.exist

    const shares = await contract.getShares(me)
    shares.should.be.bignumber.equal(new BigNumber(0))
  })

  it('should updateShares and getShares correctly', async function () {
    // initially i have 0 shares
    let shares = await contract.getShares(me)
    shares.should.be.bignumber.equal(new BigNumber(0))

    await contract.updateShares(1, { from: me })

    shares = await contract.getShares(me)
    shares.should.be.bignumber.equal(new BigNumber(1))
  })
})
