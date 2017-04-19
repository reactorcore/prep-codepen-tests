describe('assertWithinRange', function() {
  it('should handle success case', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    assertWithinRange(5, 10, 8, 'my test');

    expect(capturedMessage).toBe('passed');

    console.log = originalLogger;
  });


  it('should handle failure case', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    assertWithinRange(5, 10, 20, 'my test');

    expect(capturedMessage).toBe('FAIL [my test] "20" not within range 5 to 10');

    console.log = originalLogger;
  });
});
