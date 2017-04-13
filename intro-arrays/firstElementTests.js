describe("firstElement", function() {
  it("should return the first element of the array", function() {
    expect(firstElement([1,2,3])).toEqual(1);
  });
  it("should return null if the array is empty", function() {
    expect(JSON.stringify(firstElement([]))).toBe(JSON.stringify(null));
  });
});
