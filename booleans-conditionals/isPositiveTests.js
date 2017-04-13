describe("isPositive", function() {
  it("should return a boolean", function() {
    expect(typeof isPositive(45)).toEqual("boolean");
  });
  it("should return true when input is positive", function() {
    expect(isPositive(21)).toBe(true);
  });
  it("should return false when input is negative", function() {
    expect(isPositive(-78)).toBe(false);
  });
});
