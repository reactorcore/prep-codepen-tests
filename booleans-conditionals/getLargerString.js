describe("getLargerString", function() {
  it("should return a string", function() {
    expect(typeof getLargerString('status', 'icon')).toEqual("string");
  });
  it("should return larger string when strings are not of equal length", function() {
    expect(getLargerString('javascripter', 'benign')).toBe('javascripter');
  });
  it("should return first parameter when strings are of equal length", function() {
    expect(getLargerString('actuarial', 'mercurial')).toBe('actuarial');
  });
});
