describe("computePerimeterOfATriangle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfATriangle(6, 4, 10)).toBe("number");
  });
  it("should return the perimeter of a triangle", function() {
    expect(computePerimeterOfATriangle(6, 4, 10)).toBe(20);
  });
});