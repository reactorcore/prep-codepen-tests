describe("computePerimeterOfARectangle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfARectangle(5, 2)).toBe("number");
  });
  it("should return the perimeter of a rectangle", function() {
    expect(computePerimeterOfARectangle(5, 2)).toBe(14);
  });
})