# 🪙 SimpleSwap Frontend and Backend Dapp

A minimalistic web interface to interact with a smart contract for token swaps (like a simplified Uniswap). This frontend allows users to:

- Connect their wallet via MetaMask.
- Approve token transfers.
- Swap Token A for Token B.
- Check the current swap price from A to B.

---

## 📁 Project Structure
.
├── backend
│   ├── artifacts
│   ├── cache
│   ├── contracts
│   ├── coverage
│   ├── coverage.json
│   ├── hardhat.config.ts
│   ├── ignition
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── test
│   ├── tsconfig.json
│   └── typechain-types
└── docs // frontend for github pages
    ├── index.html
    ├── script.js
    └── styles.css

## Tests
> npx hardhat test

Compiled 11 Solidity files successfully (evm target: paris).


  SimpleSwap · core flows
    ✔ Owner crea el pool y recibe LP
    ✔ Alice agrega liquidez manteniendo ratio
    ✔ getAmountOut respeta x·y=k
    ✔ Bob intercambia TKA por TKB
    ✔ Owner quema parte de su LP y recibe tokens
    ✔ Rechaza swap si el pool no existe
    ✔ Rechaza addLiquidity con deadline vencido


  7 passing (162ms)

······················································································································
|  Solidity and Network Configuration                                                                                │
·································|·················|···············|·················|································
|  Solidity: 0.8.30              ·  Optim: false   ·  Runs: 200    ·  viaIR: false   ·     Block: 30,000,000 gas     │
·································|·················|···············|·················|································
|  Methods                                                                                                           │
·································|·················|···············|·················|················|···············
|  Contracts / Methods           ·  Min            ·  Max          ·  Avg            ·  # calls       ·  usd (avg)   │
·································|·················|···············|·················|················|···············
|  SimpleSwap                    ·                                                                                   │
·································|·················|···············|·················|················|···············
|      addLiquidity              ·        109,889  ·      211,305  ·        177,500  ·             3  ·           -  │
·································|·················|···············|·················|················|···············
|      removeLiquidity           ·              -  ·            -  ·         89,056  ·             1  ·           -  │
·································|·················|···············|·················|················|···············
|      swapExactTokensForTokens  ·              -  ·            -  ·         75,109  ·             2  ·           -  │
·································|·················|···············|·················|················|···············
|  Token                         ·                                                                                   │
·································|·················|···············|·················|················|···············
|      approve                   ·         46,952  ·       46,964  ·         46,962  ·             5  ·           -  │
·································|·················|···············|·················|················|···············
|      mint                      ·         34,870  ·       51,982  ·         46,274  ·             6  ·           -  │
·································|·················|···············|·················|················|···············
|  Deployments                                     ·                                 ·  % of limit    ·              │
·································|·················|···············|·················|················|···············
|  SimpleSwap                    ·              -  ·            -  ·      2,312,388  ·         7.7 %  ·           -  │
·································|·················|···············|·················|················|···············
|  Token                         ·              -  ·            -  ·      1,077,421  ·         3.6 %  ·           -  │
·································|·················|···············|·················|················|···············
|  Key                                                                                                               │
······················································································································
|  ◯  Execution gas for this method does not include intrinsic gas overhead                                          │
······················································································································
|  △  Cost was non-zero but below the precision setting for the currency display (see options)                       │
······················································································································
|  Toolchain:  hardhat                                                                                               │
······················································································································

> npx hardhat coverage

Version
=======
> solidity-coverage: v0.8.16

Instrumenting for coverage...
=============================

> SimpleSwap.sol
> Token.sol

Compilation:
============

Generating typings for: 13 artifacts in dir: typechain-types for target: ethers-v6
Successfully generated 44 typings!
Compiled 11 Solidity files successfully (evm target: paris).

Network Info
============
> HardhatEVM: v2.25.0
> network:    hardhat



  SimpleSwap · core flows
    ✔ Owner crea el pool y recibe LP
    ✔ Alice agrega liquidez manteniendo ratio (62ms)
    ✔ getAmountOut respeta x·y=k
    ✔ Bob intercambia TKA por TKB
    ✔ Owner quema parte de su LP y recibe tokens
    ✔ Rechaza swap si el pool no existe
    ✔ Rechaza addLiquidity con deadline vencido


  7 passing (328ms)

-----------------|----------|----------|----------|----------|----------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------|----------|----------|----------|----------|----------------|
 contracts/      |     88.1 |    55.88 |    88.89 |     87.3 |                |
  SimpleSwap.sol |     87.5 |    55.88 |    85.71 |    86.89 |... 236,237,239 |
  Token.sol      |      100 |      100 |      100 |      100 |                |
-----------------|----------|----------|----------|----------|----------------|
All files        |     88.1 |    55.88 |    88.89 |     87.3 |                |
-----------------|----------|----------|----------|----------|----------------|

> Istanbul reports written to ./coverage/ and ./coverage.json