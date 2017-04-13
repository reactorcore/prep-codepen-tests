describe("lastElement", function() {
  it("should return the first element of the array", function() {
    expect(lastElement([1,2,3])).toEqual(3);
  });
  it("should return null if the array is empty", function() {
    expect(JSON.stringify(lastElement([]))).toBe(JSON.stringify(null));
  });
});
