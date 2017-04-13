describe("conj", function() {
  it("should return an array", function() {
    expect(Array.isArray(conj([1,2,3]))).toEqual(true);
  });
  it("should add element to end of array", function() {
    expect(conj(["hi","hello","goodbye"],"seeya")[["hi","hello","goodbye"].length]).toEqual("seeya");
  });
});
