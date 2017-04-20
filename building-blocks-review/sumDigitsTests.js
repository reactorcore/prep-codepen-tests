describe("sumDigits", function() {
  it("should return a number", function() {
    expect(typeof sumDigits(2002)).toBe("number");
  });
  it("should sum the digits of a positive number", function() {
    expect(sumDigits(2002)).toBe(4);
  });
  it("should sum the digits of a negative number", function() {
    expect(sumDigits(-2004)).toBe(2);
  });
  it("should sum return 0 if the number is 0", function() {
    expect(sumDigits(0)).toBe(0);
  });
});

