describe("removeNumberValues", function() {
  it("should remove any properties with values that are numbers", function() {
    var obj = {
      a: [true, false],
      b: 2,
      c: [8, 0],
      d: 4
    };
    var result = {
      a: [true, false],
      c: [8, 0]
    };
    removeNumberValues(obj);
    expect(obj).toEqual(result);
  });
});
