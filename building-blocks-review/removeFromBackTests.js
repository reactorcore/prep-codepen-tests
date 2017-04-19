describe("removeFromBack", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromBack([1, 2, 3]))).toBe(true);
  });
  it("should remove the last element from a 3-element array", function() {
    expect(removeFromBack([1, 2, 3])).toEqual([1, 2]);
  });
  it("should remove the last element from a 2-element array", function() {
    expect(removeFromBack([1, 2])).toEqual([1]);
  });
  it("should handle an empty array", function() {
    expect(removeFromBack([])).toEqual([]);
  });
});
