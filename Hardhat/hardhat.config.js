const { config: dotenvConfig } = require("dotenv");
require("@nomicfoundation/hardhat-toolbox");

dotenvConfig();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
