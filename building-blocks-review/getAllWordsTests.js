describe("getAllWords", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllWords("something like this here"))).toBe(true);
  });
  it("should return an array containing all the words in the sentence", function() {
    expect(getAllWords("Something like this here")).toEqual(["Something", "like", "this", "here"]);
  });
  it("should return an empty array when given an empty string", function() {
    expect(getAllWords("")).toEqual([]);
  });
});
