describe("getLastElementOfProperty", function() {
  it("should return the last element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(4);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
});

