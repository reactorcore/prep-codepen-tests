describe("isGreaterThanTen", function() {
  it("should return a boolean", function() {
    expect(typeof isGreaterThanTen(40)).toEqual("boolean");
  });
  it("should return false for a number less than 10", function() {
    expect(isGreaterThanTen(4)).toBe(false);
  });
  it("should return true for a number greater than 10", function() {
    expect(isGreaterThanTen(40)).toBe(true);
  });
  it("should return false for the number 10", function() {
    expect(isGreaterThanTen(10)).toBe(false);
  });
});