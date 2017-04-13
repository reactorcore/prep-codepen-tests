describe("repeatString", function() {
  it("should return a string", function() {
    expect(typeof repeatString("dog")).toEqual("string");
  });
  it("should return an empty string for 0", function() {
    expect(repeatString("dog", 0)).toBe("");
  });
  it("should repeat once for 1", function() {
    expect(repeatString("dog", 1)).toBe("dog");
  });
  it("sould repeat twice for 2", function() {
    expect(repeatString("dog", 2)).toBe("dogdog");
  });
  it("should repeat three times for 3", function() {
    expect(repeatString("dog", 3)).toBe("dogdogdog");
  });
});
