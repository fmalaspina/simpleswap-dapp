# 🪙 SimpleSwap Frontend and Backend Dapp

A minimalistic web interface to interact with a smart contract for token swaps (like a simplified Uniswap). This frontend allows users to:

- Connect wallet via MetaMask.
- Approve token transfers.
- Preview amount to receive.
- Swap Token A for Token B.
       Token B for Token A.
- Check the current swap price from A to B and from B to A.

---
```text
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
```
## Access URL
# https://fmalaspina.github.io/simpleswap-dapp/


## Tests
```text
 SimpleSwap · core flows
    ✔ Someone creates pool an receives LT
    ✔ Add liquidity keeping ratio
    ✔ getAmountOut matches x·y=k
    ✔ Exchange TKA by TKB
    ✔ Owner burns LT and receives tokens
    ✔ Revert swap if pool does not exists
    ✔ Revert addLiquidity passing deadline


  7 passing (163ms)

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
|      addLiquidity              ·        109,470  ·      211,468  ·        177,469  ·             3  ·           -  │
·································|·················|···············|·················|················|···············
|      removeLiquidity           ·              -  ·            -  ·         88,928  ·             1  ·           -  │
·································|·················|···············|·················|················|···············
|      swapExactTokensForTokens  ·              -  ·            -  ·         75,275  ·             2  ·           -  │
·································|·················|···············|·················|················|···············
|  Token                         ·                                                                                   │
·································|·················|···············|·················|················|···············
|      approve                   ·         46,952  ·       46,964  ·         46,962  ·             5  ·           -  │
·································|·················|···············|·················|················|···············
|      mint                      ·         34,870  ·       51,982  ·         46,274  ·             6  ·           -  │
·································|·················|···············|·················|················|···············
|  Deployments                                     ·                                 ·  % of limit    ·              │
·································|·················|···············|·················|················|···············
|  SimpleSwap                    ·              -  ·            -  ·      2,378,689  ·         7.9 %  ·           -  │
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
(base) fmalaspina@notebook:~/simpleswap-dapp/backend$ npx hardhat coverage

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
    ✔ Someone creates pool an receives LT
    ✔ Add liquidity keeping ratio (56ms)
    ✔ getAmountOut matches x·y=k
    ✔ Exchange TKA by TKB (38ms)
    ✔ Owner burns LT and receives tokens
    ✔ Revert swap if pool does not exists
    ✔ Revert addLiquidity passing deadline


  7 passing (328ms)

-----------------|----------|----------|----------|----------|----------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------|----------|----------|----------|----------|----------------|
 contracts/      |     88.1 |    55.88 |    88.89 |    87.88 |                |
  SimpleSwap.sol |     87.5 |    55.88 |    85.71 |     87.5 |... 239,241,243 |
  Token.sol      |      100 |      100 |      100 |      100 |                |
-----------------|----------|----------|----------|----------|----------------|
All files        |     88.1 |    55.88 |    88.89 |    87.88 |                |
-----------------|----------|----------|----------|----------|----------------|

```