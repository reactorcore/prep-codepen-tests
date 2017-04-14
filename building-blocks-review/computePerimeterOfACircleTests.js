describe("computePerimeterOfACircle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfACircle(4)).toBe("number");
  });
  it("should return the perimeter of a circle", function() {
    expect(computePerimeterOfACircle(4)).toBe(25.132741228718345);
  });
});