describe("getEvenLengthWordsAtProperty", function() {
  it("should return an array containing all the even length elements of the array located at key", function() {
    var obj = {
      array: ["a", "long", "game"]
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual(["long", "game"]);
  });
  it("should return an empty array if the array has only no even length elements", function() {
    var obj = {
      array: ["I", "may", "say"]
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getEvenLengthWordsAtProperty(obj, "array")).toEqual([]);
  });
});

