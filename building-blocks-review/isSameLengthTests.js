describe("isSameLength", function() {
  it("should return a boolean", function() {
    expect(typeof isSameLength("hi", "there")).toEqual("boolean");
  });
  it("should return true if the two words are the same length", function() {
    expect(isSameLength("yes", "you")).toBe(true);
  });
  it("should return false if the two words are not the same length", function() {
    expect(isSameLength("hi", "there")).toBe(false);
  });
});