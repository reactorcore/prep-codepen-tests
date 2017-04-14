describe("computeAreaOfARectangle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfARectangle(7, 6)).toBe("number");
  });
  it("should return the area of a rectangle", function() {
    expect(computeAreaOfARectangle(7, 6)).toBe(42);
  });
})