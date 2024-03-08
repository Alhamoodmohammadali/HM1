// script.test.ts

import { getLatestBlockNumber, getUSDTBalance } from './script'; 
describe('getLatestBlockNumber', () => {
    it('should return a valid block number', async () => {
        const blockNumber = await getLatestBlockNumber();
        expect(blockNumber).toBeGreaterThan(0);
    });
});

describe('getUSDTBalance', () => {
    it('should return a valid USDT balance', async () => {
        const addressToCheck = 'YOUR_ADDRESS_HERE'; // استبدل بالعنوان الفعلي
        const usdtBalance = await getUSDTBalance(addressToCheck);
        expect(usdtBalance).not.toBeNaN();
    });
});
