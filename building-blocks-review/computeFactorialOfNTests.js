describe("computeFactorialOfN", function() {
  it("should return a number", function() {
    expect(typeof computeFactorialOfN(7)).toBe("number");
  });
  it("should return the factorial of 'n'", function() {
    expect(computeFactorialOfN(4)).toBe(24);
  });
  it("should return the factorial of 1", function() {
    expect(computeFactorialOfN(1)).toBe(1);
  });
});

