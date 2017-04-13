describe("nth", function() {
  it("should return the nth element of the array", function() {
    expect(nth([1,2,3], 2)).toEqual([1,2,3][2]);
  });
  it("should return the nth element of the array", function() {
    expect(nth(["hi","hello","goodbye"], 1)).toEqual("hello");
  });
});
