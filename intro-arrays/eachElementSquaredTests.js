describe("eachElementSquared", function() {
  it("should return an array", function() {
    expect(Array.isArray(eachElementSquared([1,2,3]))).toEqual(true);
  });
  it("should square all elements of array", function() {
    var output = eachElementSquared([1,2,3]);
    var first = output[0];
    var second = output[1];
    var third = output[2];
    expect(first).toEqual(1);
    expect(second).toEqual(4);
    expect(third).toEqual(9);
  });
});
