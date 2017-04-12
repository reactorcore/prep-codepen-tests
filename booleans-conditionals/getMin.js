describe("getMin", function() {
  it("should return a number", function() {
    expect(typeof getMin(43, 99)).toEqual("number");
  });
  it("should return the larger number", function() {
    expect(getMin(931, -46.2)).toBe(-46.2);
  });
  it("should return correctly when numbers are the same", function() {
    expect(getMin(15.8, 15.8)).toBe(15.8);
  });
});
