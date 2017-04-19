describe('assertEqual', function() {
  it('should handle success case for numbers', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var actual = 5;
    var expected = 5;
    assertEqual(actual, expected, 'my test');

    expect(capturedMessage).toBe('passed');

    console.log = originalLogger;
  });

  it('should use triple equals comparison', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var actual = 5;
    var expected = '5';
    assertEqual(actual, expected, 'my test');

    expect(capturedMessage).toContain('FAILED');

    console.log = originalLogger;
  });

  it('should render proper failure message', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var actual = 5;
    var expected = 4;
    assertEqual(actual, expected, 'my test');

    expect(capturedMessage).toContain('FAILED [my test] Expected "4", but got "5"');

    console.log = originalLogger;
  });

});
