describe("butLast", function() {
  it("should return an array", function() {
    expect(Array.isArray(butLast([1,2,3]))).toEqual(true);
  });
  it("should return all array elements except last", function() {
    expect(butLast(["hi","hello","goodbye"]).length).toEqual(["hi", "hello", "goodbye"].length - 1);
  });
});
