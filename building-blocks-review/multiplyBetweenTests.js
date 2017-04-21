describe("multiplyBetween", function() {
  it("should return a number", function() {
    expect(typeof multiplyBetween(4, 8)).toBe("number");
  });
  it("should multiply between the first and second number exclusive", function() {
    expect(multiplyBetween(4, 6)).toBe(20);
  });
  it("should multiply between the first and second number when they are one number apart", function() {
    expect(multiplyBetween(4, 5)).toBe(4);
  });
  it("should multiply between the first and second number exclusive with negatives", function() {
    expect(multiplyBetween(-5, -3)).toBe(20);
  });
  it("should return 0 if the second number is less than the first", function() {
    expect(multiplyBetween(1, -3)).toBe(0);
  });
  it("should return 0 if the 2 numbers are equal", function() {
    expect(multiplyBetween(1, 1)).toBe(0);
  });
});

