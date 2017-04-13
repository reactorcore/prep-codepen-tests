describe("isLessThan", function() {
  it("should return a boolean", function() {
    expect(typeof isLessThan(40, 30)).toEqual("boolean");
  });
  it("should return whether num2 is less than num1", function() {
    expect(isLessThan(20, 200)).toBe(false);
  });
  it("should return false if the numbers are equal", function() {
    expect(isLessThan(20, 20)).toBe(false);
  });
});