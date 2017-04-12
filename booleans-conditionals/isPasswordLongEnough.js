describe("isPasswordLongEnough", function() {
  it("should return a boolean", function() {
    expect(typeof isPasswordLongEnough('status', 23)).toEqual("boolean");
  });
  it("should return true when password is greater than or equal to minimum length", function() {
    expect(isPasswordLongEnough('javascripter', 10)).toBe(true);
  });
  it("should return false when password is not long enough", function() {
    expect(isPasswordLongEnough('actuarial', 18)).toBe(false);
  });
});
