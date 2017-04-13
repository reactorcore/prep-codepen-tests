describe("oddToEven", function() {
  it("should return an array", function() {
    expect(Array.isArray(oddToEven([1,2,3]))).toBe(true);
  });
  it("each element in new array should be divisible by 2", function() {
    expect(oddToEven([1,2,3]).every(function(value){ 
      return value % 2 === 0;
    }).toBe(true);
  });
  it("it should double the elements of the array", function() {
    expect(oddToEven([1,2,3])[0]).toEqual(2);
  });
});
