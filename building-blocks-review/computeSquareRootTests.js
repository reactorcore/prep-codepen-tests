describe("computeSquareRoot", function() {
  it("should return a number", function() {
    expect(typeof computeSquareRoot(4)).toBe("number");
  });
  it("should return the square root of a number", function() {
    expect(computeSquareRoot(4)).toBe(2);
  });
});