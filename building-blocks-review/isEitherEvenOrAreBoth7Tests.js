describe("isEitherEvenOrAreBoth7", function() {
  it("should return a boolean", function() {
    expect(typeof isEitherEvenOrAreBoth7(40, 3)).toEqual("boolean");
  });
  it("should return true if the first number is even", function() {
    expect(isEitherEvenOrAreBoth7(4, 3)).toBe(true);
  });
  it("should return true if the second number is even", function() {
    expect(isEitherEvenOrAreBoth7(7, 8)).toBe(true);
  });
  it("should return true if the both numbers are even", function() {
    expect(isEitherEvenOrAreBoth7(2, 4)).toBe(true);
  });
  it("should return true if the both numbers are 7", function() {
    expect(isEitherEvenOrAreBoth7(7, 7)).toBe(true);
  });
  it("should return false if the both numbers are odd and not both 7", function() {
    expect(isEitherEvenOrAreBoth7(7, 3)).toBe(false);
  });
});
