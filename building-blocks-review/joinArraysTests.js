describe("joinArrays", function() {
  it("should return an array", function() {
    expect(Array.isArray(joinArrays(['a', 'b'], [1, 3]))).toBe(true);
  });
  it("should return an array with the elements from the first and then the second array", function() {
    expect(joinArrays(['a', 'b'], [1, 3])).toEqual(['a', 'b', 1, 3]);
  });
  it("should handle empty arrays in the first position", function() {
    expect(joinArrays([], [1, 3])).toEqual([1, 3]);
  });
  it("should handle empty arrays in the second position", function() {
    expect(joinArrays(['a', 'b'], [])).toEqual(['a', 'b']);
  });
});