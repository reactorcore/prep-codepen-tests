describe("stringLength", function() {
  it("should not use .length", function() {
    var fnString = stringLength.toString();
    expect(/\.length/.test(fnString)).toBe(false);
  });
  it("should return a number", function() {
    expect(typeof stringLength('dog')).toBe('number');
  });
  it("should return 3 for dog", function() {
    expect(stringLength('dog')).toBe(3);
  });
  it("should return 5 for puppy", function() {
    expect(stringLength('puppy')).toBe(5);
  });
});
