describe("joinArrayOfArrays", function() {
  it("should return an array", function() {
    expect(Array.isArray(joinArrayOfArrays([['a', 'b'], [1, 3], [true, false]]))).toBe(true);
  });
  it("should return an array with the elements from all the nested arrays", function() {
    expect(joinArrayOfArrays([['a', 'b'], [1, 3], [true, false]])).toEqual(['a', 'b', 1, 3, true, false]);
  });
  it("should handle empty arrays in the first position", function() {
    expect(joinArrayOfArrays([[], [1, 3], [true, false]])).toEqual([1, 3, true, false]);
  });
  it("should handle empty arrays in the second position", function() {
    expect(joinArrayOfArrays([['a', 'b'], [], [true, false]])).toEqual(['a', 'b', true, false]);
  });
  it("should handle empty arrays in the third position", function() {
    expect(joinArrayOfArrays([['a', 'b'], [1, 3], []])).toEqual(['a', 'b', 1, 3]);
  });
  it("should handle empty arrays in all positions", function() {
    expect(joinArrayOfArrays([[], [], []])).toEqual([]);
  });
});

