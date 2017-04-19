describe("isEitherEvenAndLessThan9", function() {
  it("should return a boolean", function() {
    expect(typeof isEitherEvenAndLessThan9(40, 3)).toEqual("boolean");
  });
  it("should return true if the first number is even and both are less than 9", function() {
    expect(isEitherEvenAndLessThan9(4, 3)).toBe(true);
  });
  it("should return true if the second number is even and both are less than 9", function() {
    expect(isEitherEvenAndLessThan9(7, 8)).toBe(true);
  });
  it("should return true if the both numbers are even and both are less than 9", function() {
    expect(isEitherEvenAndLessThan9(2, 4)).toBe(true);
  });
  it("should return false if the both numbers are greater than 9", function() {
    expect(isEitherEvenAndLessThan9(72, 32)).toBe(false);
  });
  it("should return false if the first number is greater than 9", function() {
    expect(isEitherEvenAndLessThan9(72, 2)).toBe(false);
  });
  it("should return false if the second number is greater than 9", function() {
    expect(isEitherEvenAndLessThan9(2, 20)).toBe(false);
  });
  it("should return false if neither is even", function() {
    expect(isEitherEvenAndLessThan9(3, 5)).toBe(false);
  });
});

