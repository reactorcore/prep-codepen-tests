describe("sum", function() {
  it("should return a number", function() {
    expect(typeof sum(2, 7)).toEqual("number");
  });
  it("should swap values if start is greater than end", function() {
    expect(sum(7,2)).toEqual(27);
  });
  it("should work for 2 through 7", function() {
    expect(sum(2,7)).toBe(27);
  });
  it("should work for 3 through 5", function() {
    expect(sum(3,5)).toBe(12);
  });
});
