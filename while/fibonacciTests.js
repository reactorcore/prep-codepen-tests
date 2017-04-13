describe("fib", function() {
  it("should return a number", function() {
    expect(typeof fib(2)).toEqual("number");
  });
  it("should output correct result for 0", function() {
    expect(fib(0)).toBe(1);
  });
  it("should output correct result for 1", function() {
    expect(fib(1)).toBe(1);
  });
  it("should output correct result for 2", function() {
    expect(fib(2)).toBe(2);
  });
  it("should output correct result for 4", function() {
    expect(fib(4)).toBe(5);
  });
  it("should output correct result for 7", function() {
    expect(fib(7)).toBe(21);
  });
  it("should work for big numbers", function() {
    expect(fib(50)).toBe(20365011074);
  });
});
