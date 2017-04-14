describe("countChar", function() {
  it("should return a string", function() {
    expect(typeof countChar("Hello, from the other side.", "a")).toEqual("number");
  });
  it("should return number of times the character appears in the string", function() {
    expect(countChar("Maidens in Mississippi peel shrimp.", "a")).toEqual(1);
  });
  it("should return number of times the character appears in the string", function() {
    expect(countChar("Maidens in Mississippi peel shrimp.", "m")).toEqual(3);
  });
});
