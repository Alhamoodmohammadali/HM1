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
Object.defineProperty(exports, "__esModule", { value: true });
const script_1 = require("./script");
describe('getLatestBlockNumber', () => {
    it('should return a valid block number', () => __awaiter(void 0, void 0, void 0, function* () {
        const blockNumber = yield (0, script_1.getLatestBlockNumber)();
        expect(blockNumber).toBeGreaterThan(0);
    }));
});
describe('getUSDTBalance', () => {
    it('should return a valid USDT balance', () => __awaiter(void 0, void 0, void 0, function* () {
        const addressToCheck = 'YOUR_ADDRESS_HERE';
        const usdtBalance = yield (0, script_1.getUSDTBalance)(addressToCheck);
        expect(usdtBalance).not.toBeNaN();
    }));
});
//# sourceMappingURL=script.test.js.map