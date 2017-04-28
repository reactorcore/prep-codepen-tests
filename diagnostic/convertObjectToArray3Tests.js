describe('convertObjectToList', function() {
  var input;
  beforeEach(function() {
    input = {
      name: 'Holly',
      age: 35,
      role: 'producer',
      extra: 'Uh Oh'
    }
  });
  it('should return an array', function() {
    var output = convertObjectToList(input);
    expect(Array.isArray(output)).toBe(true);
  });
  it('should convert the input object to an array', function() {
    var output = convertObjectToList(input);
    var expected = [['name', 'Holly'], ['age', 35], ['role', 'producer'], ['extra', 'Uh Oh']];
    expect(JSON.stringify(output)).toBe(JSON.stringify(expected));
  })
})
