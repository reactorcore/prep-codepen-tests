describe('fullName', function() {
  it('outputs the first, middle, and last names for a person with a middle name', function() {
    var testPersonWithMiddleName = {
      name: {
        first: 'John',
        middle: 'A.',
        last: 'Doe'
      }
    };
    expect(fullName(testPersonWithMiddleName)).toBe('John A. Doe');
  });
  it('outputs just the first and last names for objects without a middle name', function() {
    var testPersonWithoutMiddleName = {
      name: {
        first: 'John',
        last: 'Doe',
      }
    };
    expect(fullName(testPersonWithoutMiddleName)).toBe('John Doe');
  });
});
