describe("modulo", function() {
  it("should return a number", function() {
    expect(typeof modulo(8, 2)).toBe("number");
  });
  it("should not use the modulo operator", function() {
    var body = modulo.toString();
    expect(/%/.test(body)).toBe(false);
  });
  it("should return 0 when there is no remainder", function() {
    expect(modulo(4, 4)).toBe(0);
  });
  it("should return a negative number when the first number is negative", function() {
    expect(modulo(-4, 3)).toBe(-1);
  });
  it("should return a positive number when the second number is negative", function() {
    expect(modulo(4, -3)).toBe(1);
  });
  it("should return 0 when the first number is 0", function() {
    expect(modulo(0, 4)).toBe(0);
  });
  it("should return NaN when the first number is NaN", function() {
    expect(isNaN(modulo(NaN, 2))).toBe(true);
  });
  it("should return NaN when the second number is NaN", function() {
    expect(isNaN(modulo(2, NaN))).toBe(true);
  });
  it("should return NaN when the second number is 0", function() {
    expect(isNaN(modulo(4, 0))).toBe(true);
  });
  it("should return 2 when given 12 and 5", function() {
    expect(modulo(12, 5)).toBe(2);
  });
  it("should return minus_1 when given minus_1 and 2", function() {
    expect(modulo(-1, 2)).toBe(-1);
  });
  it("should return 2 when given 12 and 5", function() {
    expect(modulo(12, 5)).toBe(2);
  });
  it("should return 1 when given 1 and 2", function() {
    expect(modulo(1, 2)).toBe(1);
  });
  it("should return 2 when given 2 and 3", function() {
    expect(modulo(2, 3)).toBe(2);
  });
  it("should return 0 when given minus 4 and 2", function() {
    expect(modulo(-4, 2)).toBe(0);
  });
  it("should return 1 point 5 when given 5 point 5 and 2", function() {
    expect(modulo(5.5, 2)).toBe(1.5);
  });

});

