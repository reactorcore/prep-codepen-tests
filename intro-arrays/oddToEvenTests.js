describe("oddToEven", function() {
  it("should return an array", function() {
    expect(Array.isArray(oddToEven([1,2,3]))).toEqual(true);
  });
  it("each element in array should be divisible by 2", function() {
    expect(oddToEven([1,2,3]).every(function(value){ 
      return value % 2 === 0;
    })).toBe(true);
  });
  it("if orignial array element is odd, should be doubled", function() {
    expect(oddToEven([1,2,3])[0]).toEqual(2);
  });
});
