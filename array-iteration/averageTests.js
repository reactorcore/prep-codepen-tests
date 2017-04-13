describe("average", function() {
  it("should return a number", function() {
    expect(typeof average([1,2,3])).toEqual("number");
  });
  it("should return average", function() {
    expect(average([1,2,3])).toEqual(2);
  });
});
