describe("isEvenAndGreaterThanTen", function() {
  it("should return a boolean", function() {
    expect(typeof isEvenAndGreaterThanTen(40)).toEqual("boolean");
  });
  it("should return true if the number is even and greater than 10", function() {
    expect(isEvenAndGreaterThanTen(80)).toBe(true);
  });
  it("should return false if the number is odd", function() {
    expect(isEvenAndGreaterThanTen(91)).toBe(false);
  });
  it("should return false if the number is less than 10", function() {
    expect(isEvenAndGreaterThanTen(8)).toBe(false);
  });
  it("should return false if the number is 10", function() {
    expect(isEvenAndGreaterThanTen(10)).toBe(false);
  });
});