"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
describe('sum', () => {
    it('should add two numbers', () => {
        const result = (0, sum_1.sum)(1, 2);
        expect(result).toBe(3);
    });
});
