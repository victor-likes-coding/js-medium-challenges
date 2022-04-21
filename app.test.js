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
