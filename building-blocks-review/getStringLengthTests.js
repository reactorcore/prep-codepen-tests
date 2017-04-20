describe("getStringLength", function() {
  it("should return a number", function() {
    expect(typeof getStringLength("heyo")).toBe("number");
  });
  it("should not use the native length operator", function() {
    var body = getStringLength.toString();
    expect(/length/.test(body)).toBe(false);
  });
  it("should return the length of a string", function() {
    expect(getStringLength("heyo")).toBe(4);
  });
  it("should return the length of an empty string", function() {
    expect(getStringLength("")).toBe(0);
  });
});

