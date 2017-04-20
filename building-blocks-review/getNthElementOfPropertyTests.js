describe("getNthElementOfProperty", function() {
  it("should return the nth element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getNthElementOfProperty(obj, "array", 2)).toBe(4);
  });
  it("should return undefined if the n is out of range", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getNthElementOfProperty(obj, "array", 8)).toBe(undefined);
  });
});

