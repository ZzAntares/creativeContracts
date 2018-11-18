const Mallet = require('@iohk/mallet')



// TODO currently not working (testnet is down)
function deployNewContract(contractHash, contractURL, eventData) {
    let testnet = 'iele'
    let datadir = '/tmp/mallet-test-datadir'

    const mallet = new Mallet(testnet, datadir)

    // Parse dates to timestamps
    // TODO Do the real parsing of dates (these are mocked)
    eventData['dueDate'] = 1545088620000
    eventData['fechaEvento'] = 1545434220000
    eventData['fechaEnterga'] = 1545779820000


    // Compute oracle fee as an integer (%10 of 'precioFinal')
    oracleFee = Math.round(parseInt(eventData['precioFinal']) * 0.10)
    console.log('DEBUG: Oracle fee is ' + oracleFee)


    // TODO Import new account or create new account?

    mallet.selectAccount(mallet.listAccounts()[0])

    let compiled = mallet.iele.compile('contracts/CreativeContract.sol').bytecode
    // mallet.iele.deployContract({ gas: 1000000, value: 0, code: compiled })  // TODO missing constructor arguments

    // let contractAddress = mallet.getReceipt().contractAddress  // TODO use TX hash?
    // eventData['ETHContractAddress'] = contractAddress

    // TODO Regenerate PDF (as *_deployed.pdf) this time passing the updated eventData

    // Done

    console.log('semi contract deployed')
    console.log(`contractHash: ${contractHash}\ncontractURL: ${contractURL}`)
    console.log(eventData)
}



module.exports.deployNewContract = deployNewContract