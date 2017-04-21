describe("computeSumBetween", function() {
  it("should return a number", function() {
    expect(typeof computeSumBetween(4, 8)).toBe("number");
  });
  it("should sum between the first and second number exclusive", function() {
    expect(computeSumBetween(4, 6)).toBe(9);
  });
  it("should sum between the first and second number exclusive with negatives", function() {
    expect(computeSumBetween(-1, 3)).toBe(2);
  });
  it("should return 0 if the second number is less than the first", function() {
    expect(computeSumBetween(1, -3)).toBe(0);
  });
  it("should return 0 if the 2 numbers are equal", function() {
    expect(computeSumBetween(1, 1)).toBe(0);
  });
});

