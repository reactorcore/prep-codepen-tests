describe("min", function() {
  it("should return a number", function() {
    expect(typeof min([1,2,3])).toEqual("number");
  });
  it("should return the smallest number", function() {
    expect(min([1,2,3])).toEqual(1);
  });
});
