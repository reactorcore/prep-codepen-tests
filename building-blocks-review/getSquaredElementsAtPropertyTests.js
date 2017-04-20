describe("getSquaredElementsAtProperty", function() {
  it("should return an array containing all the squared elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 7]
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([1, 4, 49]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getSquaredElementsAtProperty(obj, "array")).toEqual([]);
  });
});

