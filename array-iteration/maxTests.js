describe("max", function() {
  it("should return a number", function() {
    expect(typeof max([1,2,3])).toEqual("number");
  });
  it("should return maximum number of the array", function() {
    expect(max([1,2,3])).toEqual(3);
  });
});
