describe("getElementOfArrayProperty", function() {

  it("should return the element at the index of the array at the key of the passed in object", function() {
    var obj = {
      numbers: [4, 0, 1]
    };
    expect(getElementOfArrayProperty(obj, "numbers", 1)).toBe(0);
  });
  it("should return undefined if the index is out of range", function() {
    var obj = {
      numbers: [4, 0, 1]
    };
    expect(getElementOfArrayProperty(obj, "numbers", 5)).toBe(undefined);
  });
  it("should return undefined if the property at the key is not an array", function() {
    var obj = {
      name: "you"
    };
    expect(getElementOfArrayProperty(obj, "name", 0)).toBe(undefined);
  });
  it("should return undefined if there is no property at the key", function() {
    var obj = {
      name: "you"
    };
    expect(getElementOfArrayProperty(obj, "what", 0)).toBe(undefined);
  });
});

