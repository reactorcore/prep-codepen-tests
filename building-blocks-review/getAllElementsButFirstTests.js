describe("getAllElementsButFirst", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllElementsButFirst([4, 5, 6]))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array, except for the first", function() {
    expect(getAllElementsButFirst([4, 5, 6])).toEqual([5, 6]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getAllElementsButFirst([4])).toEqual([]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getAllElementsButFirst([])).toEqual([]);
  });
});
