describe("isOldEnoughToDrinkAndDrive", function() {
  it("should return a boolean", function() {
    expect(typeof isOldEnoughToDrinkAndDrive(19)).toEqual("boolean");
  });
  it("should return false", function() {
    expect(isOldEnoughToDrinkAndDrive(99999)).toBe(false);
  });
});