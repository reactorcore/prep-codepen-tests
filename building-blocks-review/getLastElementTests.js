describe("getLastElement", function() {
  it("should return the last element of an array", function() {
    expect(getLastElement([1, 3, 5])).toBe(5);
  });
  it("should return undefined if the array is empty", function() {
    expect(getLastElement([])).toBe(undefined);
  });
});