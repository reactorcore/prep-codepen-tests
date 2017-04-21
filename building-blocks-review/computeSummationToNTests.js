describe("computeSummationToN", function() {
  it("should return a number", function() {
    expect(typeof computeSummationToN(7)).toBe("number");
  });
  it("should return the summation of numbers up to and including 'n'", function() {
    expect(computeSummationToN(4)).toBe(10);
  });
  it("should return the summation of 0", function() {
    expect(computeSummationToN(0)).toBe(0);
  });
});

