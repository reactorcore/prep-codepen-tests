describe("removeArrayValues", function() {
  it("should remove any properties with values that are arrays", function() {
    var obj = {
      a: [true, false],
      b: 2,
      c: [8, 0],
      d: 4
    };
    var result = {
      b: 2,
      d: 4
    };
    removeArrayValues(obj);
    expect(obj).toEqual(result);
  });
});
