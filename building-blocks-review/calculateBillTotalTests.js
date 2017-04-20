describe("calculateBillTotal", function() {
  it("should return a number", function() {
    expect(typeof calculateBillTotal(20)).toBe("number");
  });
  it("should return the bill total, incuding tax and tip", function() {
    expect(calculateBillTotal(20)).toBe(24.9);
  });
});

