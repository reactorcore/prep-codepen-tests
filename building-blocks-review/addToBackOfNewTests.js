describe("addToBackOfNew", function() {
  it("should return an array", function() {
    expect(Array.isArray(addToBackOfNew([1, 2], 3))).toBe(true);
  });
  it("should add an element to the end of an array", function() {
    expect(addToBackOfNew([1, 2], 3)).toEqual([1, 2, 3]);
  });
  it("should add an element to the end of an empty array", function() {
    expect(addToBackOfNew([], 3)).toEqual([3]);
  });
  it("should leave arr unmodified", function() {
    var originalArray = [1, 2];
    var newArray = addToBackOfNew(originalArray, 3);
    expect(originalArray).toEqual([1, 2]);
  });
});
