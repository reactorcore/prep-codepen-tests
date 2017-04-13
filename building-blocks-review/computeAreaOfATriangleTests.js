describe("computeAreaOfATriangle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfATriangle(6, 4)).toBe("number");
  });
  it("should return the area of a triangle", function() {
    expect(computeAreaOfATriangle(6, 4)).toBe(12);
  });
});