describe("findMaxLengthOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof findMaxLengthOfThreeWords("a", "be", "see")).toBe("number");
  });
  it("should return the maximimum length of three words", function() {
    expect(findMaxLengthOfThreeWords("a", "be", "see")).toBe(3);
  });
  it("should return the maximimum length of three words when there is a tie", function() {
    expect(findMaxLengthOfThreeWords("these", "three", "words")).toBe(5);
  });
});
