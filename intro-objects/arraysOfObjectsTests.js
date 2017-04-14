describe('arraysOfObjects functions', function() {
  var people = [
    {name: {first: 'Alyssa', middle: 'P.', last: 'Hacker'}, age: 26},
    {name: {first: 'Ben', last: 'Bitdiddle'}, age: 34},
    {name: {first: 'Eva', middle: 'Lu', last: 'Ator'}, age: 40},
    {name: {first: 'Lem', middle: 'E.', last: 'Tweakit'}, age: 45},
    {name: {first: 'Louis', last: 'Reasoner'}, age: 21}
  ];

  describe('getFullNames', function() {
    it('should return an array', function() {
      expect(Array.isArray(getFullNames(people))).toBe(true);
    });
    it('should return all of the people\'s full names', function() {
      expect(getFullNames(people)).toEqual(['Alyssa P. Hacker', 'Ben Bitdiddle', 'Eva Lu Ator', 'Lem E. Tweakit', 'Louis Reasoner']);
    });
  });

  describe('averageAge', function() {
    it('should return a number', function() {
      expect(typeof averageAge(people)).toBe('number');
    });
    it('should return the average age correctly', function() {
      expect(averageAge(people)).toBe(33.2);
    });
  });

  describe('filterMinimumAge', function() {
    it('should return an array', function() {
      expect(Array.isArray(filterMinimumAge(people, 39))).toBe(true);
    });
    it('should return people that are older than provided age', function() {
      var result = filterMinimumAge(people, 39);

      expect(result.length).toBe(2);
      expect(result[0]).toEqual({name: {first: 'Eva', middle: 'Lu', last: 'Ator'}, age: 40});
      expect(result[1]).toEqual({name: {first: 'Lem', middle: 'E.', last: 'Tweakit'}, age: 45});
    });
  });
});
