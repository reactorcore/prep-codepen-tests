describe("findMinLengthOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof findMinLengthOfThreeWords("a", "be", "see")).toBe("number");
  });
  it("should return the minimimum length of three words", function() {
    expect(findMinLengthOfThreeWords("a", "be", "see")).toBe(1);
  });
  it("should return the minimimum length of three words when there is a tie", function() {
    expect(findMinLengthOfThreeWords("these", "three", "words")).toBe(5);
  });
});
