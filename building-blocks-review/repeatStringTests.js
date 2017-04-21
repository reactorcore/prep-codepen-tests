describe("repeatString", function() {
  it("should return a string", function() {
    expect(typeof(repeatString("what", 3))).toBe("string");
  });
  it("should repeat a string a given number of times", function() {
    expect(repeatString("what", 3)).toBe("whatwhatwhat");
  });
  it("should repeat a string 0 number of times", function() {
    expect(repeatString("what", 0)).toBe("");
  });
});

