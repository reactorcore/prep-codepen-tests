describe("getIndexOf", function() {
  it("should not use indexOf", function() {
    var body = getIndexOf.toString();
    expect(/indexOf/.test(body)).toBe(false);
    expect(getIndexOf("a", "I am a hacker")).toBe(2);
  });
  it("should return a number", function() {
    expect(typeof getIndexOf("a", "I am a hacker")).toBe("number");
  });
  it("should return the index of the first occurence of a string", function() {
    expect(getIndexOf("a", "I am a hacker")).toBe(2);
  });
  it("should return -1 when the character does not occur in the string", function() {
    expect(getIndexOf("x", "I am a hacker")).toBe(-1);
  });
});
