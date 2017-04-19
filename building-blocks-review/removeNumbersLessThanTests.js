describe("removeNumbersLessThan", function() {
  it("should remove any properties with values that are numbers less than num", function() {
    var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };
    var result = {
      a: "hello",
      c: "montana",
      d: 4
    };
    removeNumbersLessThan(3, obj);
    expect(obj).toEqual(result);
  });
});
