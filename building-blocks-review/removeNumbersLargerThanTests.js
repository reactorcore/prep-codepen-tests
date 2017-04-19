describe("removeNumbersLargerThan", function() {
  it("should remove any properties with values that are numbers greater than num", function() {
    var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };
    var result = {
      a: "hello",
      b: 2,
      c: "montana"
    };
    removeNumbersLargerThan(3, obj);
    expect(obj).toEqual(result);
  });
});
