describe('transformEmployeeData', function() {
  var input;
  
  beforeEach(function() {
    input = [
      [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
      ],
      [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
      ],
      [
        ['firstName', 'Extra'], ['lastName', 'Spicy'], ['age', 234], ['role', 'hard code spoiler']
      ]
    ];
  })
  it('should return an Array containing objects', function() {
    var output = transformEmployeeData(input);
    expect(typeof output[0]).toBe("object");
    expect(Array.isArray(output)).toBe(true);
  });
  it('should transform the employee data', function() {
    var output = transformEmployeeData(input);
    var expected = [
      {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
      {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'},
      {firstName: 'Extra', lastName: 'Spicy', age: 234, role: 'hard code spoiler'}
    ];
    expect(JSON.stringify(expected)).toBe(JSON.stringify(output));
  })
})
