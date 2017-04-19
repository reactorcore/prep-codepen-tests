describe("removeFromBackOfNew", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromBackOfNew([1, 2], 3))).toBe(true);
  });
  it("should return an array with the last element of the passed in array removed", function() {
    expect(removeFromBackOfNew([1, 2])).toEqual([1]);
  });
  it("should handle an empty array", function() {
    expect(removeFromBackOfNew([])).toEqual([]);
  });
  it("should leave arr unmodified", function() {
    var originalArray = [1, 2];
    var newArray = removeFromBackOfNew(originalArray);
    expect(originalArray).toEqual([1, 2]);
  });
});
