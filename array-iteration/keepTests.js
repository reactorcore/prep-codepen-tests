describe("keep", function() {
  it("should return an array", function() {
    expect(Array.isArray(keep([1,33,4,55,45,20], function(num){
      if(num%2===0){
        return true;
      } else {
        return false
      }
    }))).toBe(true);
  });
  it("should only keep elements in array that meet condition", function() {
    expect(JSON.stringify(keep([1,33,4,55,45,20], function(num){
      if(num%2===0){
        return true;
      } else {
        return false
      }
    }))).toEqual(JSON.stringify([4,20]));
  });
});
