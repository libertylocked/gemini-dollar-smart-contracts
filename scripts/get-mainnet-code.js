#!/bin/node
const addr = process.argv[2]
if (!addr) {
  console.error("Please specify contract address.")
  process.exit(1)
}

const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/metamask'))
console.log(web3.eth.getCode(addr))
