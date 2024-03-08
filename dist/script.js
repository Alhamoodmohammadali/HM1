"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUSDTBalance = exports.getLatestBlockNumber = void 0;
const web3_1 = __importDefault(require("web3"));
const apiKey = 'a99dceaed1d046d69c6cbe84d43517db';
const web3 = new web3_1.default(`https://mainnet.infura.io/v3/${apiKey}`);
const tokenAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const tokenABI = [
    {
        "constant": true,
        "inputs": [{ "name": "_owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "type": "function"
    },
];
function getLatestBlockNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const latestBlockNumber = yield web3.eth.getBlockNumber();
        console.log(`The latest block number is: ${latestBlockNumber}`);
    });
}
exports.getLatestBlockNumber = getLatestBlockNumber;
function getUSDTBalance(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const contract = new web3.eth.Contract(tokenABI, tokenAddress);
        const balance = yield contract.methods.balanceOf(address).call();
        const balanceInUSDT = web3.utils.fromWei(balance, 'mwei');
        console.log(`The USDT balance of the address is: ${balanceInUSDT} USDT`);
    });
}
exports.getUSDTBalance = getUSDTBalance;
getLatestBlockNumber();
getUSDTBalance('YOUR_ADDRESS_HERE');
//# sourceMappingURL=script.js.map