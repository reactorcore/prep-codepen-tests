describe("getAllButLastElementOfProperty", function() {
  it("should return an array containing all but the last element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([1, 2]);
  });
  it("should return an empty array if the array has only 1 element", function() {
    var obj = {
      array: [1]
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getAllButLastElementOfProperty(obj, "array")).toEqual([]);
  });
});

