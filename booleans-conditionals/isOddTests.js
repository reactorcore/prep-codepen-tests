describe("isOdd", function() {
  it("should return a boolean", function() {
    expect(typeof isOdd(45)).toEqual("boolean");
  });
  it("should return true when input is odd", function() {
    expect(isOdd(21)).toBe(true);
  });
  it("should return false when input is even", function() {
    expect(isOdd(78)).toBe(false);
  });
});
