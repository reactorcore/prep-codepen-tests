describe("sumOfArray", function() {
  it("should return a number", function() {
    expect(typeof sumOfArray([1,2,3])).toEqual("number");
  });
  it("should sum all elements of array", function() {
    expect(sumOfArray([1,2,3])).toEqual(6);
  });
});
