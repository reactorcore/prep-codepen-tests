describe("computeCompoundInterest", function() {
  it("should return a number", function() {
    expect(typeof computeCompoundInterest(1500, .043, 4, 6)).toBe("number");
  });
  it("should return the amount of compound interest generated", function() {
    expect(computeCompoundInterest(1500, .043, 4, 6)).toBe(438.8368221341061);
  });
});

