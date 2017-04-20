describe("computeAverageOfNumbers", function() {
  it("should return a number", function() {
    expect(typeof(computeAverageOfNumbers([6, 8, 10]))).toBe("number");
  });
  it("should return the average of the numbers in the given array", function() {
    expect(computeAverageOfNumbers([6, 8, 10])).toBe(8);
  });
  it("should return the average of negative numbers in the given array", function() {
    expect(computeAverageOfNumbers([-6, -8, -10])).toBe(-8);
  });
  it("should return 0 if given an empty array", function() {
    expect(computeAverageOfNumbers([])).toBe(0);
  });
});

