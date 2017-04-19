describe("joinThreeArrays", function() {
  it("should return an array", function() {
    expect(Array.isArray(joinThreeArrays(['a', 'b'], [1, 3], [true, false]))).toBe(true);
  });
  it("should return an array with the elements from the first and then the second array", function() {
    expect(joinThreeArrays(['a', 'b'], [1, 3], [true, false])).toEqual(['a', 'b', 1, 3, true, false]);
  });
  it("should handle empty arrays in the first position", function() {
    expect(joinThreeArrays([], [1, 3], [true, false])).toEqual([1, 3, true, false]);
  });
  it("should handle empty arrays in the second position", function() {
    expect(joinThreeArrays(['a', 'b'], [], [true, false])).toEqual(['a', 'b', true, false]);
  });
  it("should handle empty arrays in the third position", function() {
    expect(joinThreeArrays(['a', 'b'], [1, 3], [])).toEqual(['a', 'b', 1, 3]);
  });
  it("should handle empty arrays in all positions", function() {
    expect(joinThreeArrays([], [], [])).toEqual([]);
  });
});
