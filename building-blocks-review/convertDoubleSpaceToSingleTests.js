describe("convertDoubleSpaceToSingle", function() {
  it("should return a string", function() {
    expect(typeof convertDoubleSpaceToSingle("This  here sentence")).toBe("string");
  });
  it("should return the passed in string, with any double spaces converted to single spaces", function() {
    expect(convertDoubleSpaceToSingle("this  here  string")).toBe("this here string");
  });
  it("should return the passed in string when there are no double spaces", function() {
    expect(convertDoubleSpaceToSingle("this here string")).toBe("this here string");
  });
  it("should return an empty string when passed an empty string", function() {
    expect(convertDoubleSpaceToSingle("")).toBe("");
  });
});

