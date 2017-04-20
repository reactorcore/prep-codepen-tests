describe("getLargestElement", function() {
  it("should return a number", function() {
    expect(typeof getLargestElement([3, 5, 3, 1])).toBe("number");
  });
  it("should return the largest element in an array", function() {
    expect(getLargestElement([3, 5, 3, 1])).toBe(5);
  });
  it("should return the largest element in an array when there are ties", function() {
    expect(getLargestElement([3, 5, 3, 1, 5])).toBe(5);
  });
  it("should return the largest element in an array when they are all negative", function() {
    expect(getLargestElement([-1, -5, -3])).toBe(-1);
  });
});

