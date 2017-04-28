describe('fromListToObject', function() {
  var input;
  beforeEach(function(){
    input = [
      ['some', 'like'],
      ['first', 'second'],
      ['mike', 'ike'],
      ['Falco', 'Fox'],
      ['melee', 'brawl']
    ];
  })
  it('should return an object', function () {
    var output = fromListToObject(input);
    expect(typeof output).toBe("object");
    expect(Array.isArray(output)).toBe(false);
  })
  it('converts a list to an object', function() {
    var output = fromListToObject(input);
    var stringifiedOutput = JSON.stringify(output);
    var expected = JSON.stringify({
      'some': 'like',
      'first': 'second',
      'mike': 'ike',
      'Falco': 'Fox',
      'melee': 'brawl'
    });
    expect(stringifiedOutput).toEqual(expected);
  })
})
