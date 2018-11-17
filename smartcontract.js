const Mallet = require('@iohk/mallet')



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

    // Read contract sourcecode
    // Compile solidity to iele
    // Deploy contract with constructor data

    // Get transaction hash
    // Get contract address

    // Set eventData['ETHContractAddress'] to the contract address
    // Regenerate PDF (as *_deployed.pdf) this time passing the updated eventData

    // Done

    console.log('semi contract deployed')
    console.log(`contractHash: ${contractHash}\ncontractURL: ${contractURL}`)
    console.log(eventData)
}



module.exports.deployNewContract = deployNewContract