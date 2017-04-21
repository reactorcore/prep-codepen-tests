describe("isEvenWithoutModulo", function() {
  it("should return a boolean", function() {
    expect(typeof isEvenWithoutModulo(40)).toEqual("boolean");
  });
  it("should not use the modulo operator", function() {
    var body = isEvenWithoutModulo.toString();
    expect(/%/.test(body)).toBe(false);
  });
  it("should return true when a number is even", function() {
    expect(isEvenWithoutModulo(40)).toBe(true);
  });
  it("should return true when a negative number is even", function() {
    expect(isEvenWithoutModulo(-40)).toBe(true);
  });
  it("should return false when a number is odd", function() {
    expect(isEvenWithoutModulo(41)).toBe(false);
  });
  it("should return false when a negative number is odd", function() {
    expect(isEvenWithoutModulo(-41)).toBe(false);
  });
  it("should return true when a passed 0", function() {
    expect(isEvenWithoutModulo(0)).toBe(true);
  });
});

