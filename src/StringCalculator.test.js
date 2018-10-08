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
it("should return the sum of the two arguments", () => {
    expect(add("2,3", "5,6")).toBe(16);
});
it("should return the sum of the eight arguments", () => {
    expect(add("2,3", "2,3", "2,3", "2,3", "2,3", "2,3", "2,3", "2,3")).toBe(40);
});
it("should return the sum of the two arguments with multiple numbers", () => {
    expect(add("2,3,5", "5,6,7,8")).toBe(36);
});
it("should return the sum of the two arguments with multiple numbers", () => {
    expect(add("2,3,5", "5\n6,7,8")).toBe(36);
});
