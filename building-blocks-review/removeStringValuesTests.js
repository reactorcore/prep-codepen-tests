describe("removeStringValues", function() {
  it("should remove any properties with values that are strings", function() {
    var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };
    var result = {
      b: 2,
      d: 4
    };
    removeStringValues(obj);
    expect(obj).toEqual(result);
  });
});
