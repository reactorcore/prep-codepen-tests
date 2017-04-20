describe("getAverageOfElementsAtProperty", function() {
  it("should return the average of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 3, 5]
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(3);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getAverageOfElementsAtProperty(obj, "array")).toBe(0);
  });
});

