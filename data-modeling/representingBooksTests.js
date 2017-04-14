describe('displayBooks', function() {
  var testBookArray = [
    {
      title: 'testTitle',
      author: 'testAuthor'
    },
    {
      title: 'testTitle2',
      author: 'testAuthor2'
    },
    {
      title: 'testTitle3',
      author: 'testAuthor3'
    },
  ];
  var resultString;

  beforeEach(function() {
    resultString = displayBooks(testBookArray);
  })

  it('should return a string', function() {
    expect(typeof resultString).toBe('string');
  });
  it('should return books that are numbered', function() {
    expect(resultString).toContain('1.');
  });
  it('should separate books with newline characters', function() {
    expect(resultString).toContain('\n');
  });
  it('should return titles of books', function() {
    expect(resultString).toContain(testBookArray[0].title);
    expect(resultString).toContain(testBookArray[1].title);
    expect(resultString).toContain(testBookArray[2].title);
  });
  it('should use displayBook', function() {
    displayBook = jasmine.createSpy('displayBook spy');
    var resultString = displayBooks(testBookArray);
    expect(displayBook).toHaveBeenCalled();
  });
});

describe('searchBooks', function() {
  it('should be a function', function() {
    expect(typeof searchBooks).toBe('function');
  });
});
