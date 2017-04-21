describe("findShortestOfOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof(findShortestOfOfThreeWords("a", "be", "see"))).toBe("string");
  });
  it("should return the shortest of three words", function() {
    expect(findShortestOfOfThreeWords("a", "be", "see")).toBe("a");
  });
  it("should return the first occurence of a shortest word when there is a tie", function() {
    expect(findShortestOfOfThreeWords("these", "three", "words")).toBe("these");
  });
});

