describe('listAllValues', function() {
  var input;
  beforeEach(function() {
    input = {
      name : 'Krysten',
      age : 33,
      hasPets : false,
      nose: 'yes',
      ears: 'something'
    };
  });
  it('should return an array', function() {
    var output = listAllValues(input);
    expect(Array.isArray(output)).toBe(true);
  });
  it('should format the array properly', function() {
    var output = listAllValues(input);
    expect(output[0]).toBe('Krysten');
    expect(output[1]).toBe(33);
    expect(output[2]).toBe(false);
    expect(output[3]).toBe('yes');
    expect(output[4]).toBe('something');
  })
})
