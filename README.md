El proyecto en vivo: https://www.creativecontracts.org/

# CreativeContracts

Our blockchain startup for creatives

This is a node implementation of the project aimed to run in the
IELE testnet. The original python implementation can be found
[here](https://github.com/elviejo79/creativeContracts) the
REST API is compatible as the endpoints are the same.


## Running

This is a web application build using node and express, `index.js` contains the
HTTP handlers, `utils.js` generates the PDF and `smartcontract.js` makes the
smart contract deployment. Install the application as follows:

```sh
$ npm install
```

Now you can run like this:

```sh
$ npm start
```