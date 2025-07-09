import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const { vars } = require("hardhat/config");
const INFURA_API_KEY = vars.get("INFURA_API_KEY");

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://gas.api.infura.io/v3/${INFURA_API_KEY}",
      accounts: [vars.get("PRIVATE_KEY")]
    }
  }, 
  solidity: {
    
    compilers: [
      {
        version: "0.8.30",
      },
      {
        version: "0.6.27",
      },
    ],
  }
}

export default config;
