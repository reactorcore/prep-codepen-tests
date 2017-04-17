describe('getAllKeys' function() {
  it('should_output_an_array_of_key_names', function(){
    var input = {
      foo: 'bar',
      level: 1,
      red: 'green',
      number: true
    }
    var expected = Object.keys(input);
    var actual = getAllKeys(input);

    expect(actual).not.toBeUndefined();
    expect(actual[0]).toBe(expected[0]);
    expect(actual[1]).toBe(expected[1]);
    expect(actual[2]).toBe(expected[2]);
    expect(actual[3]).toBe(expected[3]);
  });

  it ('should_not_use_restricted_methods', function() {
    var body = getAllKeys.toString();

    expect(/Object\.keys/.test(body)).toBe(false);
  });

});