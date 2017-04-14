describe("stringReverse", function() {
  it("should return a string", function() {
    expect(typeof stringReverse("Hello, from the other side.")).toEqual("string");
  });
  it("should return reversed string", function() {
    expect(stringReverse("backwards")).toEqual("sdrawkcab");
  });
  it("length of outputted string should be the same as input", function() {
    expect(stringReverse("backwards").length).toEqual(9);
  });
});
