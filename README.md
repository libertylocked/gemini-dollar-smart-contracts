Unofficial Gemini Dollar Smart Contracts
---
GUSD smart contracts in a Truffle project.

# Disclaimer
The contract source code is obtained from Etherscan. The code in this repo is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by Gemini Trust Company, LLC.

# Mainnet Addresses
- ERC20Proxy: `0x056fd409e1d7a124bd7017459dfea2f387b6d5cd`
- ERC20Store: `0xc42B14e49744538e3C239f8ae48A1Eaaf35e68a0`
- ERC20Impl: `0x6704ba24b8640bccee6bf2fd276a6a1b8edf4ade`
- Custodian: `0x9a7b5f6e453d0cda978163cb4a9a88367250a52d`
  - The 6 signers are:
    - `0xd7c14ebd217ce757041dab619a99d740cda02dc5`
    - `0x35d13b3e90ea179cf572945e36aab8b5443bfc69`
    - `0xcf269986da781407b0eeeac3ea79ac1c9d857d38`
    - `0x3dfa83b9cb39d88c6dace9744d0f709532082296`
    - `0xec426164c0a2f89fa70942ca2499decff306ac5a`
    - `0xf43c8e5ca6072505e4cc8f74228e4d37740d2221`
  - Primary: `0xd24400ae8bfebb18ca49be86258a3c749cf46853`

# Verifying Bytecode
- Run `npm run compile`
- You can use `web3.eth.getCode` to get the code from mainnet
- You can go to `build/contracts` folder, find the contract and look for `deployedBytecode`
- The 32 bytes at the end (from -34 to -2) might be different since it is not the exact source. See [Encoding of the Metadata Hash in the Bytecode](https://solidity.readthedocs.io/en/develop/metadata.html#encoding-of-the-metadata-hash-in-the-bytecode) in Solidity docs.
