describe("areSameLength", function() {
  it("should return a boolean", function() {
    expect(typeof areSameLength('status', 'window')).toEqual("boolean");
  });
  it("should return true when strings are of equal length", function() {
    expect(areSameLength('status', 'window')).toBe(true);
  });
  it("should return false when strings are not of equal length", function() {
    expect(areSameLength('financial', 'caliber')).toBe(false);
  });
});
