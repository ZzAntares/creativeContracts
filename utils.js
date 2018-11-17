var puppeteer = require('puppeteer')
var nunjucks = require('nunjucks')
var crypto = require('crypto-js')
var fs = require('fs')


async function writePDF(htmlContents) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(htmlContents)

    const pdfContents = await page.pdf({ format: 'A4' })
    await browser.close()

    let legalContractHash = crypto.SHA256(pdfContents).toString()

    fs.writeFile(`static/contratos/${legalContractHash}.pdf`, pdfContents, (err) => {
        if (err) {
            console.log(`Could not save legal contract ${legalContractHash}:`)
            console.log(err)
        }
    })

    return legalContractHash
}


function generatePDF(eventData) {
    let legalContractHTML = nunjucks.render('templates/legal.html', { e: eventData })

    return writePDF(legalContractHTML)  // Returns pdf contract hash (a promise)
}


// Helper to load test data
function test_data() {
    let contents = fs.readFileSync('test_data.json')
    return JSON.parse(contents)
}



module.exports.generatePDF = generatePDF
module.exports.test_data = test_data()