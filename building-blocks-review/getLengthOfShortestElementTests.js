describe("getLengthOfShortestElement", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfShortestElement(["one", "two", "three"])).toBe("number");
  });
  it("should return the length of the shortest element in an array", function() {
    expect(getLengthOfShortestElement(["one", "four", "three"])).toBe(3);
  });
  it("it should handle ties", function() {
    expect(getLengthOfShortestElement(["one", "to", "no"])).toBe(2);
  });
  it("it should return 0 when given an empty array", function() {
    expect(getLengthOfShortestElement([])).toBe(0);
  });
});

