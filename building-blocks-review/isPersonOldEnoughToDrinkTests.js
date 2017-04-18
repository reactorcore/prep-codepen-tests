describe("isPersonOldEnoughToDrink", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToDrink(person)).toBe("boolean");
  });
  it("should return true if a person has an age of over 21", function() {
    var person = {
      age: 55
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(true);
  });
  it("should return true if a person has an age of 21", function() {
    var person = {
      age: 21
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(true);
  });
  it("should return false if a person has an age under 21", function() {
    var person = {
      age: 20
    };
    expect(isPersonOldEnoughToDrink(person)).toBe(false);
  });
});