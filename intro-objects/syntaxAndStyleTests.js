describe('syntaxAndStyle object 1', function() {
  it('should have correct syntax, properties, and values', function() {
    expect(obj1).toEqual({ firstName: 'Josh', lastName: 'Lehman' });
  });
});

describe('syntaxAndStyle object 2', function() {
  it('should have correct syntax, properties, and values', function() {
    expect(obj2).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});

describe('syntaxAndStyle object 3', function() {
  it('should have correct syntax, properties, and values', function() {
    expect(obj3).toEqual({
                           animal: 'dog',
                           noise: 'bark',
                           age: 3,
                           type: 'Labrador',
                           color: 'Yellow'
                         });
  });
});
