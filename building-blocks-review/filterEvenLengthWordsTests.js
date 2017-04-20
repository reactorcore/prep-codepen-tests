describe("filterEvenLengthWords", function() {
  it("should return an array", function() {
    expect(Array.isArray(filterEvenLengthWords(["there", "it", "is", "now"]))).toBe(true);
  });
  it("should return an array with even lengthed words", function() {
    expect(filterEvenLengthWords(["there", "it", "is", "now"])).toEqual(["it", "is"]);
  });
  it("should return an empty array when passed an array with no even lengthed words", function() {
    expect(filterEvenLengthWords(["there", "now"])).toEqual([]);
  });
  it("should return an empty array when passed an empty array", function() {
    expect(filterEvenLengthWords([])).toEqual([]);
  });
});

