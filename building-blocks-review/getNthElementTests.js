describe("getNthElement", function() {
  it("should return the nth element of an array", function() {
    expect(getNthElement([1, 3, 5], 1)).toBe(3);
  });
  it("should return undefined if the array is empty", function() {
    expect(getNthElement([], 1)).toBe(undefined);
  });
});