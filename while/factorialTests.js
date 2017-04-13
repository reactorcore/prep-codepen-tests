describe("factorial", function() {
  it("should return a number", function() {
    expect(typeof factorial(2)).toEqual("number");
  });
  it("should calculate factorial of zero", function() {
    expect(factorial(0)).toBe(1);
  });
  it("should calculate factorial of four", function() {
    expect(factorial(4)).toBe(24);
  });
  it("should calculate factorial of five", function() {
    expect(factorial(5)).toBe(120);
  });
});
