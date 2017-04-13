describe("isPersonOldEnoughToDrinkAndDrive", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToDrinkAndDrive(person)).toBe("boolean");
  });
  it("should return false", function() {
    expect(isPersonOldEnoughToDrinkAndDrive()).toBe(false);
  });
});