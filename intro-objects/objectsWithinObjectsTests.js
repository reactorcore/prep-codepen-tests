describe('you', function() {
  it('has an object as the value of name', function() {
    expect(typeof you.name).toBe('object');
  });
  describe('name', function() {
    it('has a first, middle, and last property', function() {
      expect(you.name.first).toBeDefined();
      expect(you.name.middle).toBeDefined();
      expect(you.name.last).toBeDefined();
    });
  });
});

