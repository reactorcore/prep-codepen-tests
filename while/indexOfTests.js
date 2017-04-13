describe("indexOf", function() {
  it("returns a number", function() {
    expect(typeof indexOf("doggie", "g")).toBe("number");
  });
  it("returns correct result for doggie and g", function() {
    expect(indexOf("doggie", "g")).toBe(2);
  });
  it("returns correct result for puppy and y", function() {
    expect(indexOf("puppy", "y")).toBe(4);
  });
});
