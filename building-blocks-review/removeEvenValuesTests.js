describe("removeEvenValues", function() {
  it("should remove any properties with values that are even numbers", function() {
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
    removeEvenValues(obj);
    expect(obj).toEqual(result);
  });
});
