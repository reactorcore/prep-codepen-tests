describe("cons", function() {
  it("should return an array", function() {
    expect(Array.isArray(cons(0,[1,2,3]))).toEqual(true);
  });
  it("should add element to the front of the array", function() {
    expect(cons("greetings",["hi","hello","goodbye"])[0]).toEqual("greetings");
  });
});
