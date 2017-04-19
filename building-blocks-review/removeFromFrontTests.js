describe("removeFromFront", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromFront([1, 2, 3]))).toBe(true);
  });
  it("should return the array with the first element removed", function() {
    expect(removeFromFront([1, 2])).toEqual([2]);
  });
  it("should handle an empty array", function() {
    expect(removeFromFront([])).toEqual([]);
  });
});
