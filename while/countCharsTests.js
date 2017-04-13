describe("countChars", function() {
  it("returns a number", function() {
    expect(typeof countChars("doggie", "g")).toBe("number");
  });
  it("returns correct result for doggie and g", function() {
    expect(countChars("doggie", "g")).toBe(2);
  });
  it("returns correct result for terrarium and r", function() {
    expect(countChars("terrarium", "r")).toBe(3);
  });
});
