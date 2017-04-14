describe('clean', function() {
  var dirtyObject = {
    _fht: 192492,
    name: 'Alyssa P. Hacker',
    age: 26,
    _byz: 939205,
    _ttrs: 510852
  }

  var resultObject;
  beforeEach(function() {
    resultObject = clean(dirtyObject);  
  });

  it('returns an object', function() {
    expect(typeof resultObject).toBe('object');
  });
  it('returns an object with only keys starting with _', function() {
    for (var key in resultObject) {
      expect(key[0]).toBe('_');
    }
  });
  it('returns the correct keys', function() {
    var resultKeys = Object.keys(resultObject);
    expect(resultKeys.length).toBe(3);
    expect(resultKeys).toContain('_fht');
    expect(resultKeys).toContain('_byz');
    expect(resultKeys).toContain('_ttrs');
  });
  it('returns the original values associated with keys', function() {
    for (var key in resultObject) {
      expect(resultObject[key]).toEqual(dirtyObject[key]);
    }
  });
});
