describe('transformFirstAndLast', function() {
  it('should_properly_assign_key_and_value_pair', function (){

    var input = ['Marie', 'Kayla', 'Jackson', 'Richard', 'Kyle', 'Sarah', 'Mars', 'Wayne', 'Mary'];

    var output = transformFirstAndLast(input);

    expect(output).not.toBeUndefined();
    expect(typeof output).toBe('object');
    expect(output.Marie).toBe('Mary');
  });

  it('should_not_modify_input_array', function() {
    var input = ['Mars', 'Wayne', 'Mary'];
    var copy = input.slice(0);
    var output = transformFirstAndLast(input);

    expect(input.length).toBe(copy.length);
    expect(copy[0]).toBe(input[0]);
    expect(copy[1]).toBe(input[1]);
    expect(copy[2]).toBe(input[2]);

  });
});