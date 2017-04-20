describe("computeSumOfAllElements", function() {
  it("should return a number", function() {
    expect(typeof computeSumOfAllElements([1, 2, 4])).toBe("number");
  });
  it("return the sum of all elements", function() {
    expect(computeSumOfAllElements([1, 2, 4])).toBe(7);
  });
  it("return 0 if the passed in array is empty", function() {
    expect(computeSumOfAllElements([])).toBe(0);
  });
});

