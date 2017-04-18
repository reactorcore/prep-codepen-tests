describe("getLengthOfThreeWords", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfThreeWords("three", "random", "words")).toBe("number");
  });
  it("should return the sum length of three words", function() {
    expect(getLengthOfThreeWords("some", "other", "words")).toBe(14)
  });
});