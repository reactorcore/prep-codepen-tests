describe("or", function() {
  it("should not use the logical OR operator", function() {
    var body = or.toString()
    expect(/\|\|/.test(body)).toBe(false);
  });
  it("should return a boolean", function() {
    expect(typeof or(true, true)).toEqual("boolean");
  });
  it("should return true if the first value is true", function() {
    expect(or(true, false)).toBe(true);
  });
  it("should return true if the second value is true", function() {
    expect(or(false, true)).toBe(true);
  });
  it("should return true both values are true", function() {
    expect(or(true, true)).toBe(true);
  });
  it("should return false both values are false", function() {
    expect(or(false, false)).toBe(false);
  });
});
