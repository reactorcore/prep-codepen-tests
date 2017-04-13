describe("isGreaterThan", function() {
  it("should return a boolean", function() {
    expect(typeof isGreaterThan(40, 30)).toEqual("boolean");
  });
  it("should return whether num2 is greater than num1", function() {
    expect(isGreaterThan(20, 200)).toBe(true);
  });
  it("should return false if the numbers are equal", function() {
    expect(isGreaterThan(20, 20)).toBe(false);
  });
});