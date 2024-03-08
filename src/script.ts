import Web3 from 'web3';
// Initialize web3 instance connected to the Ethereum mainnet

const apiKey: string = 'a99dceaed1d046d69c6cbe84d43517db';
const web3 = new Web3(`https://mainnet.infura.io/v3/${apiKey}`);
// The USDT token contract address
const tokenAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const tokenABI = [
  // Only include the balanceOf function ABI
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  },
];

// Function to get the latest block number
export async function getLatestBlockNumber() {
  const latestBlockNumber = await web3.eth.getBlockNumber();
  console.log(`The latest block number is: ${latestBlockNumber}`);
}

// Function to get the USDT balance of an address
export async function getUSDTBalance(address: string) {
  const contract = new web3.eth.Contract(tokenABI, tokenAddress);
  const  balance:number= await contract.methods.balanceOf(address).call();
  const balanceInUSDT = web3.utils.fromWei(balance, 'mwei'); // USDT has 6 decimal places
  console.log(`The USDT balance of the address is: ${balanceInUSDT} USDT`);
}

// Example usage:
getLatestBlockNumber();
getUSDTBalance('YOUR_ADDRESS_HERE'); // Replace with the actual address
