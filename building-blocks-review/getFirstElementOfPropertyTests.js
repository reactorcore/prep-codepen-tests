describe("getFirstElementOfProperty", function() {
  it("should return the first element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getFirstElementOfProperty(obj, "array")).toBe(1);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getFirstElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getFirstElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getFirstElementOfProperty(obj, "array")).toBe(undefined);
  });
});
 
