describe("onlyEvenElements", function() {
  it("should return an array", function() {
    expect(Array.isArray(onlyEvenElements([1,2,3]))).toEqual(true);
  });
  it("should only pass even numbers into results array", function() {
    var output = onlyEvenElements([1,2,3,4]);
    var first = output[0];
    var second = output[1];
    expect(first).toEqual(2);
    expect(second).toEqual(4);
  });
});
