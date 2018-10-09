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
it("should return undefined since its invalid", () => {
    expect(add("2,3,5", "5\n,7,8")).toBe(undefined);
});
it("should return the negatives and say they are not allowed", () => {
    expect(add("2,3,5", "5,-7,-8")).toBe("Negatives not allowed: -7,-8");
});
it("should return the negatives and say they are not allowed", () => {
    expect(add("2,-3,5", "5,-7,-8,2,5", "5,-9,-10")).toBe("Negatives not allowed: -3,-7,-8,-9,-10");
});
it("should not add the numbers that are above 1000 but should add 1000", () => {
    expect(add("2,3,5000", "5, 6, 1000, 1001")).toBe(1016);
});
it("should add all the numbers with ; between them", () => {
    expect(add("//;\n1;2")).toBe(3);
});
it("should add all the numbers with ; between them", () => {
    expect(add("//;\n1;2;5")).toBe(8);
});