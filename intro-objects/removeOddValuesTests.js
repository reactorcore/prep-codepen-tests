describe('removeOddValues', function() {
  // baz should be kept since it is a string
  var testObject = { a: 1, b: 2, c: 3, foo: 'bar', baz: '5' };
  var resultObject;
  beforeEach(function() {
    resultObject = removeOddValues(testObject);
  });

  it('returns an object', function() {
    expect(typeof resultObject).toBe('object');
  });
  it('keeps the keys with values that are not odd numbers', function() {
    var resultKeys = Object.keys(resultObject);
    expect(resultKeys.length).toBe(3);
    expect
  });
  it('keeps the keys with values that are not odd numbers', function() {
    var resultKeys = Object.keys(resultObject);
    expect(resultKeys.length).toBe(3);
    expect(resultKeys).toContain('b');
    expect(resultKeys).toContain('foo');
    expect(resultKeys).toContain('baz');
  });
  it('returns the original values associated with keys', function() {
    for (var key in resultObject) {
      expect(resultObject[key]).toEqual(testObject[key]);
    }
  });
});

