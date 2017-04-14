describe('select', function() {
  it('selects one key correctly', function() {
    var resultObject = select({ a: 1, b: 2, c: 3 }, ['a']);
    expect(resultObject).toEqual({ a: 1 });
  });
  it('selects two keys correctly', function() {
    var resultObject = select({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    expect(resultObject).toEqual({ a: 1, c: 3 });
  });
  it('ignores keys that aren\'t in the object', function() {
    var resultObject = select({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd']);
    expect(resultObject).toEqual({ a: 1, c: 3 });
  });
});
