describe("findSmallestElement", function() {
  it("should return a number", function() {
    expect(typeof findSmallestElement([3, 5, 3, 1])).toBe("number");
  });
  it("should return the smallest element in an array", function() {
    expect(findSmallestElement([3, 5, 3, 1])).toBe(1);
  });
  it("should return the smallest element in an array when there are ties", function() {
    expect(findSmallestElement([3, 1, 3, 1, 5])).toBe(1);
  });
  it("should return the smallest element in an array when they are all negative", function() {
    expect(findSmallestElement([-1, -5, -3])).toBe(-5);
  });
});

