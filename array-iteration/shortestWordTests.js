describe("shortestWord", function() {
  it("should return a string", function() {
    expect(typeof shortestWord("Hello, from the other side.")).toEqual("string");
  });
  it("should return longest word in the string", function() {
    expect(shortestWord("Maidens in Mississippi peel shrimp.")).toEqual("in");
  });
});
