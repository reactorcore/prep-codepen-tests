describe("getElementsLessThan100AtProperty", function() {
  it("should return an array containing all the elements less than 100 in the array located at key", function() {
    var obj = {
      array: [100, 20, 40]
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([20, 40]);
  });
  it("should return an empty array if the array has no elements less than 100", function() {
    var obj = {
      array: [1000, 3000]
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getElementsLessThan100AtProperty(obj, "array")).toEqual([]);
  });
});

