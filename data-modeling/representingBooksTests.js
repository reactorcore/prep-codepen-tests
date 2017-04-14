describe('makeBook', function() {
  var resultObject;
  var resultKeys;

  beforeEach(function() {
    resultObject = makeBook('testTitle', 'testAuthor');
    resultKeys = resultObject ? Object.keys(resultObject) : null;
  });

  it('accepts at least 2 attributes as arguments', function() {
    expect(makeBook.length).not.toBeLessThan(2);
  });
  it('returns an object', function() {
    expect(typeof resultObject).toBe('object');
  });
  it('returns an object with at least two book attributes', function() {
    expect(resultKeys.length).not.toBeLessThan(2);
  });
  it('includes a title', function() {
    expect(resultKeys).toContain('title');
  });
  it('includes an author', function() {
    expect(resultKeys).toContain('author');
  });
});

describe('displayBook', function() {
  var testBook = {
    title: 'testTitle',
    author: 'testAuthor'
  };

  var resultString; 
  beforeEach(function() {
    resultString = displayBook(testBook);
  })

  it('accepts a book as an argument', function() {
    expect(displayBook.length).toBe(1);
  });
  it('returns a string', function() {
    expect(typeof resultString).toBe('string');
  });
  it('includes the title in the string', function() {
    expect(resultString).toContain(testBook.title);
  });
});

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
