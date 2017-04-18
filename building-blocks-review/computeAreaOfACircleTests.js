describe("computeAreaOfACircle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfACircle(4)).toBe("number");
  });
  it("should return the area of a circle", function() {
    expect(computeAreaOfACircle(4)).toBe(50.26548245743669);
  });
});