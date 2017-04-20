describe("getElementsThatEqual10AtProperty", function() {
  it("should return an array containing all the elements that equal 10 in the array located at key", function() {
    var obj = {
      array: [10, 20, 40]
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([10]);
  });
  it("should return an empty array if the array has no elements that equal 10", function() {
    var obj = {
      array: [1, 3]
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsThatEqual10AtProperty(obj, "array")).toEqual([]);
  });
});
