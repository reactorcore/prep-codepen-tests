describe("getMax", function() {
  it("should return a number", function() {
    expect(typeof getMax(43, 99)).toEqual("number");
  });
  it("should return the larger number", function() {
    expect(getMax(931, -46.2)).toBe(931);
  });
  it("should return correctly when numbers are the same", function() {
    expect(getMax(15.8, 15.8)).toBe(15.8);
  });
});
