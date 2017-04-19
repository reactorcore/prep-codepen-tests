describe("removeFromFrontOfNew", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromFrontOfNew([1, 2]))).toBe(true);
  });
  it("should remove an element from the front of an array", function() {
    expect(removeFromFrontOfNew([1, 2])).toEqual([2]);
  });
  it("should handle an empty array", function() {
    expect(removeFromFrontOfNew([])).toEqual([]);
  });
  it("should leave arr unmodified", function() {
    var originalArray = [1, 2];
    var newArray = removeFromFrontOfNew(originalArray);
    expect(originalArray).toEqual([1, 2]);
  });
});
