describe("rest", function() {
  it("should return an array", function() {
    expect(Array.isArray(rest([1,2,3]))).toEqual(true);
  });
  it("should return all array elements except first", function() {
    expect(rest(["hi","hello","goodbye"])[0]).toEqual("hello");
  });
});
