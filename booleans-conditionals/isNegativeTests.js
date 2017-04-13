describe("isNegative", function() {
  it("should return a boolean", function() {
    expect(typeof isNegative(-45)).toEqual("boolean");
  });
  it("should return true when input is negative", function() {
    expect(isNegative(-21)).toBe(true);
  });
  it("should return false when input is positive", function() {
    expect(isNegative(78)).toBe(false);
  });
});
