describe("extend", function() {
  it("should extend the first object with unrepresented properties from the second object", function() {
    var obj1 = {
      a: 1,
      b: 2
    };
    var obj2 = {
      b: 4,
      c: 3
    };
    var result = {
      a: 1,
      b: 2,
      c: 3
    };

    extend(obj1, obj2);
    expect(obj1).toEqual(result);
  });
  it("should extend the first object with unrepresented properties from the second object", function() {
    var obj1 = {
      a: 1,
      b: 2
    };
    var obj2 = {
      b: 4,
      c: 3
    };

    extend(obj1, obj2);
    expect(obj2).toEqual({b: 4, c: 3});
  });
});
