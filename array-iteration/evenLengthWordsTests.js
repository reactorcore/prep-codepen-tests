describe("evenLengthWords", function() {
  it("should return a array", function() {
    expect(Array.isArray(evenLengthWords(["Hello", "From", "The", "Other", "Side"]))).toBe(true);
  });
  it("should return an array with only even length words", function() {
    expect(JSON.stringify(evenLengthWords(["a", "bb", "ccc", "dddd"]))).toEqual(JSON.stringify(["bb","dddd"]));
  });
});
