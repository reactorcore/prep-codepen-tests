describe('you', function() {
  it('should have a firstName', function() {
    expect(you.firstName).toBeDefined();
  });
  it('should have a lastName', function() {
    expect(you.lastName).toBeDefined();
  });
  it('should have an age', function() {
    expect(you.age).toBeDefined();
  });
  it('should have a hometown', function() {
    expect(you.hometown).toBeDefined();
  });
  it('should have at least 7 properties', function() {
    expect(Object.keys(you).length).not.toBeLessThan(7);
  });
});

