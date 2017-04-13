describe("isEqualTo", function() {
  it("should return a boolean", function() {
    expect(typeof isEqualTo(40, 30)).toEqual("boolean");
  });
  it("should return false if num2 is greater than num1", function() {
    expect(isEqualTo(20, 200)).toBe(false);
  });
  it("should return false if num2 is less than num1", function() {
    expect(isEqualTo(20, 2)).toBe(false);
  });
  it("should return true if the numbers are equal", function() {
    expect(isEqualTo(20, 20)).toBe(true);
  });
});