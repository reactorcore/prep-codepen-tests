describe("getLongestElement", function() {
  it("should return a string", function() {
    expect(typeof(getLongestElement(["one", "two", "three"]))).toBe("string");
  });
  it("should return the longest element in an array", function() {
    expect(getLongestElement(["one", "two", "three"])).toBe("three");
  });
  it("should return the first longest element in an array when there are ties", function() {
    expect(getLongestElement(["one", "two", "one"])).toBe("one");
  });
});

