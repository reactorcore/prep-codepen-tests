describe("countWords", function() {
  it("should return an object", function() {
    expect(typeof countWords("ask a bunch try a bunch get a bunch")).toBe("object");
  });
  it("should return an object where each property gives a word in the string, with its number of appearances", function() {
    var result = {
      ask: 1,
      a: 2,
      bunch: 2,
      get: 1
    };
    expect(countWords("ask a bunch get a bunch")).toEqual(result);
  });
  it("should return an object empty object if passed an empty string", function() {
    expect(countWords("")).toEqual({});
  });
});
