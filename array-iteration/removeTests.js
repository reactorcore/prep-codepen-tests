describe("remove", function() {
  it("should return an array", function() {
    expect(Array.isArray(remove([1,2,3], 2))).toEqual(true);
  });
  it("should return an array that does not contain the specified element ", function() {
    expect(JSON.stringify(remove([1,2,3], 3))).toEqual(JSON.stringify([1,2]));
  });
  it("should return an array that does not contain the specified element ", function() {
    expect(JSON.stringify(remove([1,2,3,3], 3))).toEqual(JSON.stringify([1,2]));
  });
});
