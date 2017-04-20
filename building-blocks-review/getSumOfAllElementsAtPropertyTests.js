describe("getSumOfAllElementsAtProperty", function() {
  it("should return the sum of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(7);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getSumOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
});

