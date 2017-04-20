describe("countAllCharacters", function() {
  it("should return an object", function() {
    expect(typeof countAllCharacters("banana")).toBe("object");
  });
  it("should return an object where each property gives a character in the string, with its number of appearances", function() {
    var result = {
      s: 1,
      a: 3,
      m: 1,
      n: 1,
      t: 1,
      h: 1
    };
    expect(countAllCharacters("samantha")).toEqual(result);
  });
  it("should return an object empty object if passed an empty string", function() {
    expect(countAllCharacters("")).toEqual({});
  });
});
