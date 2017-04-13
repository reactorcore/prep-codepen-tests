describe("longestWord", function() {
  it("should return a string", function() {
    expect(typeof longestWord("Hello, from the other side.")).toEqual("string");
  });
  it("should return longest word in the string", function() {
    expect(longestWord("Maidens in Mississippi peel shrimp.")).toEqual("Mississippi");
  });
});
