describe("getSmallerString", function() {
  it("should return a string", function() {
    expect(typeof getSmallerString('status', 'icon')).toEqual("string");
  });
  it("should return larger string when strings are not of equal length", function() {
    expect(getSmallerString('javascripter', 'benign')).toBe('benign');
  });
  it("should return first parameter when strings are of equal length", function() {
    expect(getSmallerString('actuarial', 'mercurial')).toBe('actuarial');
  });
});
