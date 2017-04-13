describe("counter", function() {
  it("should return a number", function() {
    expect(typeof counter()).toEqual("number");
  });
  it("should return 1 the first time it's invoked", function() {
    count = 0;
    expect(counter()).toBe(1);
  });
  it("should return 2 the second time it's invoked", function() {
    expect(counter()).toBe(2);
  });
});
