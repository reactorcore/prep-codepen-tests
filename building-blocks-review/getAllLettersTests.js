describe("getAllLetters", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllLetters("something like this here"))).toBe(true);
  });
  it("should return an array containing all the letters in the word", function() {
    expect(getAllLetters("Eowin")).toEqual(["E", "o", "w", "i", "n"]);
  });
  it("should return an empty array when given an empty string", function() {
    expect(getAllLetters("")).toEqual([]);
  });
});
