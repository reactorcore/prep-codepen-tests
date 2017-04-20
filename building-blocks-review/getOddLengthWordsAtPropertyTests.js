describe("getOddLengthWordsAtProperty", function() {
  it("should return an array containing all the odd length elements of the array located at key", function() {
    var obj = {
      array: ["a", "long", "night"]
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual(["a", "night"]);
  });
  it("should return an empty array if the array has only no odd length elements", function() {
    var obj = {
      array: ["It", "is", "gone"]
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getOddLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
});

