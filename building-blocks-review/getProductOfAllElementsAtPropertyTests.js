describe("getProductOfAllElementsAtProperty", function() {
  it("should return the product of all the elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(8);
  });
  it("should return 0 if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
  it("should return 0 if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getProductOfAllElementsAtProperty(obj, "array")).toBe(0);
  });
});

