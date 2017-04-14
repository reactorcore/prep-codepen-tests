describe('extend', function() {
  it('should return an object with all the keys from both objects', function() {
    var resultObject = extend({ a: 1 }, { b: 2 });
    expect(resultObject).toEqual({ a: 1, b: 2 });
  });
  it('should overwrite keys in the first object with keys from the second', function() {
    var resultObject = extend({ a: 1, c: 3 }, { b: 2, c: 4 });
    expect(resultObject).toEqual({ a: 1, b: 2, c: 4 });
  });
});
