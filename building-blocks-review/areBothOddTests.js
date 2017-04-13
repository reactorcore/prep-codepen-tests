describe("areBothOdd", function() {
  it("should return a boolean", function() {
    expect(typeof areBothOdd(40, 3)).toEqual("boolean");
  });
  it("should return true if both numbers are odd", function() {
    expect(areBothOdd(41, 3)).toBe(true);
  });
  it("should return false if the first number is even", function() {
    expect(areBothOdd(4, 3)).toBe(false);
  });
  it("should return false if the second number is even", function() {
    expect(areBothOdd(4, 30)).toBe(false);
  });
});