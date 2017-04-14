describe('countWords', function() {
  var resultObject1;
  var resultObject2;
  beforeEach(function() {
    resultObject1 = countWords('The quick brown');
    resultObject2 = countWords('hello hello world hello world');
  });

  it('returns an object', function() {
    expect(typeof resultObject1).toBe('object');
  });
  it('counts all of the words', function() {
    expect(Object.keys(resultObject1).length).toBe(3);
    expect(resultObject1).toEqual({ The: 1, quick: 1, brown: 1 });
  });
  it('handles duplicate words correctly', function() {
    expect(resultObject2).toEqual({ hello: 3, world: 2 });
  });
});

describe('countWordsCaseInsensitive', function() {
  var resultObject; 
  beforeEach(function() {
    resultObject = countWordsCaseInsensitive('hello Hello hElLo HELlo');
  });

  it('is case insensitive', function() {
    expect(resultObject).toEqual({ hello: 4 });
  });
});
