var morgan = require('morgan')
var express = require('express')
var bodyParser = require('body-parser')

var utils = require('./utils')
var smartcontract = require('./smartcontract')


// Middlewares
var app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())

const asyncHandler = fn => (req, res, next) =>
    Promise
        .resolve(fn(req, res, next))
        .catch(next)


// Routes
app.post('/api/process', (req, res) => {
    let contents = JSON.stringify(req.body, null, 4)
    console.log(contents)
    res.send(contents)
})

app.post('/contrato/new', asyncHandler(async (req, res, next) => {
    // let eventData = req.body
    let eventData = utils.test_data

    // PDF Generation
    let contractHash = await utils.generatePDF(eventData)
    let contractURL = `${req.hostname}static/contratos/${contractHash}_deployed.pdf`

    // Smart contract generation
    smartcontract.deployNewContract(contractHash, contractURL, eventData) // TODO needs to be async

    res.json({
        'legalContractUrl': contractURL,
        'legalContractHash': contractHash
    })
}))


app.listen(3000, () => {
    console.log("Server running on port 3000")
});
