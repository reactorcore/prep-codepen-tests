describe("isOddWithoutModulo", function() {
  it("should return a boolean", function() {
    expect(typeof isOddWithoutModulo(40)).toEqual("boolean");
  });
  it("should not use the modulo operator", function() {
    var body = isOddWithoutModulo.toString();
    expect(/%/.test(body)).toBe(false);
  });
  it("should return true when a number is odd", function() {
    expect(isOddWithoutModulo(41)).toBe(true);
  });
  it("should return true when a negative number is odd", function() {
    expect(isOddWithoutModulo(-41)).toBe(true);
  });
  it("should return false when a number is even", function() {
    expect(isOddWithoutModulo(40)).toBe(false);
  });
  it("should return false when a negative number is even", function() {
    expect(isOddWithoutModulo(-40)).toBe(false);
  });
  it("should return false when a passed 0", function() {
    expect(isOddWithoutModulo(0)).toBe(false);
  });
});

