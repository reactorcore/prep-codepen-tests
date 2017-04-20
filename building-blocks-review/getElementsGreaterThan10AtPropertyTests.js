describe("getElementsGreaterThan10AtProperty", function() {
  it("should return an array containing all the elements greater than 10 in the array located at key", function() {
    var obj = {
      array: [10, 20, 40]
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([20, 40]);
  });
  it("should return an empty array if the array has no elements greater than 10", function() {
    var obj = {
      array: [1, 3]
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsGreaterThan10AtProperty(obj, "array")).toEqual([]);
  });
});

