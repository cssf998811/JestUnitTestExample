// additionCalculator.test.js

const additionCalculator = require("./additionCalculator");

// 把小測試組成群組
// describe(測試用案例的群組名稱, test cases);
describe("additionCalculator's test cases", () => {
    // test(測試的名稱, 期望測試的函數, 可選的Timeout參數);
    test("addition of 4 and 6 to equal 10", () => {
        expect(additionCalculator(4, 6)).toBe(10);
    });

    test("addition of 100, 50, 20, 45 and 30 to equal 245", () => {
        expect(additionCalculator(100, 50, 20, 45, 30)).toBe(245);
    });

    test("addition of 7 to equal 7", () => {
        expect(additionCalculator(7)).toBe(7);
    });

    test("addition of no argument provided to equal 0", () => {
        expect(additionCalculator()).toBe(0);
    });
});