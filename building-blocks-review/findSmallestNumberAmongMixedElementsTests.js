describe("findSmallestNumberAmongMixedElements", function() {
  it("should return a number", function() {
    expect(typeof findSmallestNumberAmongMixedElements([3, 5, 3, 1])).toBe("number");
  });
  it("should return the smallest element in an array", function() {
    expect(findSmallestNumberAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe(1);
  });
  it("should return the smallest element in an array when there are ties", function() {
    expect(findSmallestNumberAmongMixedElements(["word", 3, 1, 3, "wordy", "up", 1, 5])).toBe(1);
  });
  it("should return the smallest element in an array when they are all negative", function() {
    expect(findSmallestNumberAmongMixedElements([-1, -5, "word", -3])).toBe(-5);
  });
  it("should return 0 when the array is empty", function() {
    expect(findSmallestNumberAmongMixedElements([])).toBe(0);
  });
  it("should return 0 when there are no numbers", function() {
    expect(findSmallestNumberAmongMixedElements(["word", "up"])).toBe(0);
  });
});

