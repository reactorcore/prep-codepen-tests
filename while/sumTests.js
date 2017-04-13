describe("sum", function() {
  it("should return a number", function() {
    expect(typeof sum(2)).toEqual("number");
  });
  it("should sum up to three", function() {
    expect(sum(3)).toBe(6);
  });
  it("should sum up to four", function() {
    expect(sum(4)).toBe(10);
  });
});

