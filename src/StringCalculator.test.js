const add = require("./StringCalculator");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return the number when only a number is in the string", () => {
    expect(add("4")).toBe(4);
});
it("should return the sum of the two numbers", () => {
    expect(add("2,3")).toBe(5);
});