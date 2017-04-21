describe("findShortestWordAmongMixedElements", function() {
  it("should return a string", function() {
    expect(typeof findShortestWordAmongMixedElements(["these", "are", "strings"])).toBe("string");
  });
  it("should return the shortest string in an array", function() {
    expect(findShortestWordAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe("up");
  });
  it("should return the shortest string in an array that appears first when there are ties", function() {
    expect(findShortestWordAmongMixedElements(["word", 3, 5, 3, "yo", "up", 1, 5])).toBe("yo");
  });
  it("should return an empty string when the array is empty", function() {
    expect(findShortestWordAmongMixedElements([])).toBe("");
  });
  it("should return an empty string there are no strings", function() {
    expect(findShortestWordAmongMixedElements([1, 2, 4])).toBe("");
  });
});

