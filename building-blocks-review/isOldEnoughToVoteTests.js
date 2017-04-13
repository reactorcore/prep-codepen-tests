describe("isOldEnoughToVote", function() {
  it("should return a boolean", function() {
    expect(typeof isOldEnoughToVote(40)).toEqual("boolean");
  });
  it("should return whether the age is greater than 18", function() {
    expect(isOldEnoughToVote(40)).toBe(true);
  });
  it("should return true if the age is 18", function() {
    expect(isOldEnoughToVote(18)).toBe(true);
  });
});