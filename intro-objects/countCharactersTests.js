describe('countCharacters', function() {
  it('counts the number of characters for the example correctly', function() {
    var resultObject = countCharacters('hello');
    expect(resultObject).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });
  it('counts the number of characters for another string correctly', function() {
    var resultObject = countCharacters('aaabbc');
    expect(resultObject).toEqual({ a: 3, b: 2, c: 1 });
  });
});
