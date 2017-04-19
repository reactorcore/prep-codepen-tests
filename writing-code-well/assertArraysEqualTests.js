describe('assertArraysEqual', function() {
  it('should handle success case for numbers', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var expected = [-5, 0, 5];
    var actual = [-5, 0, 5];
    assertArraysEqual(actual, expected, 'my test');

    expect(capturedMessage).toBe('passed');

    console.log = originalLogger;
  });

  it('should use triple equals comparison', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var expected = [-5, '0', 5];
    var actual = [-5, 0, 5];
    assertArraysEqual(actual, expected, 'my test');

    expect(capturedMessage).toContain('FAILED');

    console.log = originalLogger;
  });

  it('should render proper failure message', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var expected = [1, 2, 3];
    var actual = [1, 2, 4];
    assertArraysEqual(actual, expected, 'my test');

    expect(capturedMessage).toContain('FAILED [my test] Expected "1,2,3", but got "1,2,4"');

    console.log = originalLogger;
  });

  it('should fail if arrays are not same size', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var expected = [1, 2, 3];
    var actual = [1, 2, 3, 4];
    assertArraysEqual(actual, expected, 'my test');

    expect(capturedMessage).toContain('FAILED [my test] Expected "1,2,3", but got "1,2,3,4"');

    console.log = originalLogger;
  });

  it('should not use JSON stringify', function() {
    var body = assertArraysEqual.toString();
    expect(/stringify/.test(body)).toBe(false);
  });

});

