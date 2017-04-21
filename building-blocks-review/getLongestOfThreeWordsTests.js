describe("getLongestOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof(getLongestOfThreeWords("a", "be", "see"))).toBe("string");
  });
  it("should return the longest of three words", function() {
    expect(getLongestOfThreeWords("a", "be", "see")).toBe("see");
  });
  it("should return the first occurence of a longest word when there is a tie", function() {
    expect(getLongestOfThreeWords("these", "three", "words")).toBe("these");
  });
});

