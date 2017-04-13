describe("isEven", function() {
  it("should return a boolean", function() {
    expect(typeof isEven(45)).toEqual("boolean");
  });
  it("should return true when input is even", function() {
    expect(isEven(22)).toBe(true);
  });
  it("should return false when input is odd", function() {
    expect(isEven(77)).toBe(false);
  });
});
