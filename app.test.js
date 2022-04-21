const { filterOutFalsy } = require("./app.js");

describe("fn to return first input if first input is falsy else second input", () => {
    test("in: 0, 500 out: 0", () => {
        expect(filterOutFalsy(0, 500)).toBe(0);
    });
    test("in: false, 100 out: 0", () => {
        expect(filterOutFalsy(false, 100)).toBe(false);
    });
    test("in: true, 'Dog' out: 0", () => {
        expect(filterOutFalsy(true, "Dog")).toBe("Dog");
    });
});

describe("fn that returns length of array (stupid)", () => {
    test("in: [1,2,3] out: 3", () => {
        expet(arrLength([1, 2, 3])).toBe(3);
    });
    test("in: [5,0,-4,1] out: 4", () => {
        expet(arrLength([5, 0, -4, 1])).toBe(4);
    });
    test("in: [] out: 0", () => {
        expet(arrLength([])).toBe(0);
    });
});
