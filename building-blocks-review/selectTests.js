describe("select", function() {
  it("should return an object", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    expect(typeof select(keys, obj)).toBe("object");
  });
  it("should return an object with properties in from the passed in object whose keys are present in the given function", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    var result = {
      a: 1,
      c: 3
    };
    expect(select(keys, obj)).toEqual(result);
  });
  it("should not modify the passed in object", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    select(keys, obj)
    expect(Object.keys(obj).length).toEqual(4);
  });
});
