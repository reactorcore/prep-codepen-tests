describe('favoriteMovie', function() {
  it('is an object', function() {
    expect(typeof favoriteMovie).toBe('object');
  });
  it('has a title', function() {
    expect(favoriteMovie.title).toBeDefined();
  });
  it('has a director', function() {
    expect(favoriteMovie.director).toBeDefined();
  });

  describe('year/yearReleased', function() {
    it('exists', function() {
      var yearOrYearReleasedExists = !!favoriteMovie.year || !!favoriteMovie.yearReleased;
      expect(yearOrYearReleasedExists).toBe(true);
    });
    it('is a number', function() {
      if (favoriteMovie.year) {
        expect(typeof favoriteMovie.year).toBe('number');
      } else if (favoriteMovie.yearReleased) {
        expect(typeof favoriteMovie.yearReleased).toBe('number');
      }
    });
  });

  it('has a rating', function() {
    expect(favoriteMovie.rating).toBeDefined();
    expect(typeof favoriteMovie.rating).toBe('number');
  });
  it('has an array of actors', function() {
    expect(Array.isArray(favoriteMovie.actors)).toBe(true);
  });
});
