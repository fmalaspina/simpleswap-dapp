/* ---------------- basic config ---------------- */
const SIMPLE_SWAP = "0xCa7Cf29F89ED5f4826f5A51F5f911d8C077C8167";
const TOKEN_A     = "0x3b2f60A8E2d06A8C62Dd40f20c150134BC053F4F";
const TOKEN_B     = "0x90adb40cE3bb333DA14c5e245FD697Ce3f1C0cF6";
const DECIMALS    = 18;

/* Token and SimpleSwap ABIs */
const TOKEN_ABI        = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sym",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "burnFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const SIMPLE_SWAP_ABI  = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountASent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountBSent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }
        ],
        "name": "LiquidityAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountASent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountBSent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }
        ],
        "name": "LiquidityRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenIn",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenOut",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "name": "Swap",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amountADesired",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountBDesired",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountAMin",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountBMin",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "addLiquidity",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountASent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountBSent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "reserveIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "reserveOut",
                "type": "uint256"
            }
        ],
        "name": "getAmountOut",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            }
        ],
        "name": "getPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "pools",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "reserveA",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "reserveB",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalLiquidity",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountAMin",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountBMin",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "removeLiquidity",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountASent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountBSent",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "swapExactTokensForTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

/* ------------------------------------------------------------------
   State variables
------------------------------------------------------------------- */
let provider, signer, swapContract, tokenAContract, tokenBContract;
let decA = 18, decB = 18;    
let listenersHooked = false;   

/* ------------------------------------------------------------------
   HELPERS
------------------------------------------------------------------- */
const $ = id => document.getElementById(id);

/** Solidity key construct replication  */
function pairKey(a, b) {
  const [t0, t1] = a.toLowerCase() < b.toLowerCase() ? [a, b] : [b, a];
  return ethers.utils.solidityKeccak256(["address", "address"], [t0, t1]);
}


const inDecimals  = () => $("direction").value === "AtoB" ? decA : decB;
const outDecimals = () => $("direction").value === "AtoB" ? decB : decA;


const parseAmt = v => ethers.utils.parseUnits(v || "0", inDecimals());

/* ------------------------------------------------------------------
   METAMASK Connection
------------------------------------------------------------------- */
function metaMaskProvider() {
  if (window.ethereum?.providers?.length)
    return window.ethereum.providers.find(p => p.isMetaMask) || null;
  return window.ethereum?.isMetaMask ? window.ethereum : null;
}

async function connectWallet() {
  const mm = metaMaskProvider();
  if (!mm) return alert("MetaMask not detected.");

  await mm.request({ method: "eth_requestAccounts" });

  provider       = new ethers.providers.Web3Provider(mm, "any");
  signer         = provider.getSigner();
  swapContract   = new ethers.Contract(SIMPLE_SWAP, SIMPLE_SWAP_ABI, signer);
  tokenAContract = new ethers.Contract(TOKEN_A, TOKEN_ABI, signer);
  tokenBContract = new ethers.Contract(TOKEN_B, TOKEN_ABI, signer);

  // leemos decimales reales
  decA = await tokenAContract.decimals();
  decB = await tokenBContract.decimals();
  const key = pairKey(TOKEN_A, TOKEN_B);
  const pool = await swapContract.pools(key);
  updateStatus(await signer.getAddress());
  await evaluateAllowance();
  await updatePrices();
  await updatePreview();
  
  if (!listenersHooked) {
    wireUpEvents();          // ← sólo la primera vez
    listenersHooked = true;
  }

}


function disconnect() {
  provider = signer = swapContract = tokenAContract = null;
  updateStatus(null);
  disableActionButtons();
  removeAllListeners(); // limpia
  
}

function updateStatus(addr) {
  $("accountAddress").textContent = addr
    ? `Connected to: ${addr}`
    : "Not connected";
  $("connectBtn").textContent = addr ? "Disconnect" : "Connect";
  $("connectBtn").onclick     = addr ? disconnect   : connectWallet;
}

function disableActionButtons() {
  $("approveBtn").disabled = true;
  $("swapBtn").disabled    = true;
}

const inputTokenAddr     = () => $("direction").value === "AtoB" ? TOKEN_A : TOKEN_B;
const outputTokenAddr    = () => $("direction").value === "AtoB" ? TOKEN_B : TOKEN_A;
const inputTokenContract = () => $("direction").value === "AtoB" ? tokenAContract : tokenBContract;

/* ------------------------------------------------------------------
   Check BALANCE + ALLOWANCE
------------------------------------------------------------------- */
async function evaluateAllowance() {
  if (!signer || !swapContract) return disableActionButtons();

  const amountIn = parseAmt($("amountIn").value.trim());
  if (amountIn.eq(0)) return disableActionButtons();

  const user       = await signer.getAddress();
  const inContract = inputTokenContract();
  const balance    = await inContract.balanceOf(user);
  const allowance  = await inContract.allowance(user, SIMPLE_SWAP);

  $("swapBtn").disabled    = !(balance.gte(amountIn) && allowance.gte(amountIn));
  $("approveBtn").disabled = allowance.gte(amountIn);
}

/* ------------------------------------------------------------------
   Approve
------------------------------------------------------------------- */
async function approveInputToken() {
  try {
    const amount = parseAmt($("amountIn").value.trim());
    const tx     = await inputTokenContract().approve(SIMPLE_SWAP, amount);
    await tx.wait();
    alert("Approve succeeded");
    await evaluateAllowance();
  } catch (err) {
    console.error(err);
    alert(`Approve failed: ${err.message || err}`);
  }
}

/* ------------------------------------------------------------------
*   Expected amount out
------------------------------------------------------------------- */
async function expectedAmountOut(amountIn) {
  const key   = pairKey(TOKEN_A, TOKEN_B);
  const pool  = await swapContract.pools(key);

  const reserveIn  = $("direction").value === "AtoB" ? pool.reserveA : pool.reserveB;
  const reserveOut = $("direction").value === "AtoB" ? pool.reserveB : pool.reserveA;

  if (reserveIn.eq(0) || reserveOut.eq(0))
    return ethers.BigNumber.from(0);

  return amountIn.mul(reserveOut).div(reserveIn.add(amountIn));  // sin fee
}

/* ------------------------------------------------------------------
 *  SWAP
------------------------------------------------------------------- */
async function performSwap() {
  if (!swapContract) return alert("Connect wallet first.");

  const amountStr = $("amountIn").value.trim();
  if (!amountStr || isNaN(+amountStr) || +amountStr <= 0)
    return alert("Enter a valid amount.");

  const amountIn = parseAmt(amountStr);
  const path     = [inputTokenAddr(), outputTokenAddr()];
  const user     = await signer.getAddress();

  try {
    const deadline = Math.floor(Date.now() / 1000) + 600;
    const tx = await swapContract.swapExactTokensForTokens(
      amountIn,
      0,        
      path,
      user,
      deadline,
      { gasLimit: 400_000 }
    );
    await tx.wait();
    alert("Swap completed!");
  } catch (err) {
    if (err.code === "TRANSACTION_REPLACED" && err.replacement && err.receipt) {
      if (err.receipt.status === 1) {     
        alert("Swap completed! (tx repriced)");
        return;                          
      } else {
        alert("Swap reverted (tx repriced)");
        return;
      }
    }
  }

  await evaluateAllowance();
  await updatePreview();
}

/* ------------------------------------------------------------------
   Fetch prices
------------------------------------------------------------------- */
async function fetchPrice(inAddr, outAddr) {
  try {
    const p = await swapContract.getPrice(inAddr, outAddr);
    return Number(ethers.utils.formatUnits(p, DECIMALS)).toPrecision(8);
  } catch (_) {
    return "0";
  }
}

async function updatePrices() {
  const priceAB = await fetchPrice(TOKEN_A, TOKEN_B);
  $("priceAB").textContent = `1 A ≈ ${priceAB} B`;

  const priceBA = priceAB === "0" ? "0" : Number(1 / priceAB).toPrecision(8);
  $("priceBA").textContent = `1 B ≈ ${priceBA} A`;
}

/* ------------------------------------------------------------------
   Dynamic preview or estimated amount to receive
------------------------------------------------------------------- */
async function updatePreview() {
  if (!swapContract) {
    $("preview").textContent = "Amount to receive: —";
    return;
  }

  const amountStr = $("amountIn").value.trim();
  if (!amountStr || isNaN(+amountStr) || +amountStr <= 0) {
    $("preview").textContent = "Amount to receive: —";
    return;
  }

  const amountIn = parseAmt(amountStr);
  const key      = pairKey(TOKEN_A, TOKEN_B);
  const pool     = await swapContract.pools(key);

  const reserveIn  = $("direction").value === "AtoB" ? pool.reserveA : pool.reserveB;
  const reserveOut = $("direction").value === "AtoB" ? pool.reserveB : pool.reserveA;

  if (reserveIn.eq(0) || reserveOut.eq(0)) {
    $("preview").textContent = "Amount to receive: liquidity = 0";
    return;
  }

  const amountOut = amountIn.mul(reserveOut).div(reserveIn.add(amountIn));
  const formatted = Number(
    ethers.utils.formatUnits(amountOut, outDecimals())
  ).toFixed(Math.min(outDecimals(), 6));

  $("preview").textContent =
    `Amount to receive: ${formatted} ${$("direction").value === "AtoB" ? "B" : "A"}`;
}

/* ------------------------------------------------------------------
   EVENT LISTENERS
------------------------------------------------------------------- */
window.addEventListener("load", () => {
  updateStatus(null);
  updatePrices();
  updatePreview();
});

$("amountIn").addEventListener("input", () => {
  evaluateAllowance();
  updatePreview();
});

$("direction").addEventListener("change", () => {
  evaluateAllowance();
  updatePrices();
  updatePreview();
});


/*********************  Consola de eventos  ************************/
const logBox    = document.getElementById('eventLog');
const toggleBtn = document.getElementById('toggleLogBtn');

toggleBtn.addEventListener('click', () => {
  const visible = logBox.style.display === 'none';
  logBox.style.display = visible ? 'block' : 'none';
  toggleBtn.textContent = visible ? 'Hide events' : 'Show events';
});

function appendLog(msg) {
  const ts = new Date().toLocaleTimeString('es-AR');
  logBox.textContent += `[${ts}] ${msg}\n`;
  logBox.scrollTop = logBox.scrollHeight;
}

/*********************  Suscripción a eventos  *********************/
async function wireUpEvents() {
  swapContract.removeAllListeners();

  swapContract.on('LiquidityAdded',
    (sender, tokenA, tokenB, amtA, amtB, liq) => {
      appendLog(
        `LiquidityAdded ▸ ${short(sender)}  A:${short(tokenA)} ${fmt(amtA)}  ` +
        `B:${short(tokenB)} ${fmt(amtB)}  shares ${fmt(liq)}`
      );
    });

  swapContract.on('LiquidityRemoved',
    (recipient, tokenA, tokenB, amtA, amtB, liq) => {
      appendLog(
        `LiquidityRemoved ▸ ${short(recipient)}  A:${short(tokenA)} ${fmt(amtA)}  ` +
        `B:${short(tokenB)} ${fmt(amtB)}  burned ${fmt(liq)}`
      );
    });

  swapContract.on('Swap',
    (sender, recipient, tokenIn, tokenOut, amtIn, amtOut) => {
      appendLog(
        `Swap ▸ ${short(sender)} → ${short(recipient)}  ` +
        `${short(tokenIn)} ${fmt(amtIn)}  →  ${short(tokenOut)} ${fmt(amtOut)}`
      );
    });
}

/* Helpers ---------------------------------------------------------*/
const fmt   = n => ethers.utils.formatUnits(n);          // asume 18 dec.
const short = addr => addr.slice(0, 6) + '…' + addr.slice(-4);




function removeEventListeners() {
  swapContract.removeAllListeners();
  listenersHooked = false;
}

window.connectWallet     = connectWallet;
window.performSwap       = performSwap;
window.approveInputToken = approveInputToken;
window.updatePrices      = updatePrices;