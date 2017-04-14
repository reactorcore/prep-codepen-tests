describe("computePower", function() {
  it("should return a number", function() {
    expect(typeof computePower(2, 4)).toBe("number");
  });
  it("should return a number raised to a given exponent", function() {
    expect(computePower(2, 4)).toBe(16);
  });
  it("should return a negative number raised to a given exponent", function() {
    expect(computePower(-2, 4)).toBe(16);
  });
  it("should return a number raised to 0", function() {
    expect(computePower(-2, 0)).toBe(1);
  });
});