describe("isEvenLength", function() {
  it("should return a boolean", function() {
    expect(typeof isEvenLength("wow")).toEqual("boolean");
  });
  it("should return if the length of the word is even", function() {
    expect(isEvenLength("specials")).toBe(true);
  });
  it("should return true if the string is empty", function() {
    expect(isEvenLength("")).toBe(true);
  });
});