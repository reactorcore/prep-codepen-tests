describe("modulo", function() {
  it("should not use native %", function() {
    var fnString = modulo.toString();
    expect(/%/.test(fnString)).toBe(false);
  });
  it("should return a number", function() {
    expect(typeof modulo(3,2)).toBe('number');
  });
  it("should return first number if less then second number", function() {
    expect(modulo(8,10)).toBe(8);
  });
  it("should return 1 for 3 and 2", function() {
    expect(modulo(3,2)).toBe(1);
  });
  it("should return 2 for 7 and 5", function() {
    expect(modulo(7,5)).toBe(2);
  });
});
