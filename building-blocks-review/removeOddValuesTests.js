describe("removeOddValues", function() {
  it("should remove any properties with values that are odd numbers", function() {
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    var result = {
      b: 2,
      d: 4
    };
    removeOddValues(obj);
    expect(obj).toEqual(result);
  });
});
