describe("computeProductOfAllElements", function() {
  it("should return a number", function() {
    expect(typeof computeProductOfAllElements([1, 2, 4])).toBe("number");
  });
  it("return the product of all elements", function() {
    expect(computeProductOfAllElements([1, 2, 4])).toBe(8);
  });
  it("return 0 if the passed in array is empty", function() {
    expect(computeProductOfAllElements([])).toBe(0);
  });
});

