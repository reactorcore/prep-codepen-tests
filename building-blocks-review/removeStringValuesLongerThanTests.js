describe("removeStringValuesLongerThan", function() {
  it("should remove any properties with values that are strings longer than num", function() {
    var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };
    var result = {
      a: "hello",
      b: 2,
      d: 4
    };
    removeStringValuesLongerThan(5, obj);
    expect(obj).toEqual(result);
  });
});
