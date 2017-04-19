describe('assertObjectsEqual', function() {
  it('should handle success case', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var expected = {foo: 5, bar: 6};
    var actual = {foo: 5, bar: 6}
    assertObjectsEqual(actual, expected, 'my test');

    expect(capturedMessage).toBe('passed');

    console.log = originalLogger;
  });


  it('should render proper failure message', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var expected = {foo: 6, bar: 5};
    var actual = {foo: 5, bar: 6}
    assertObjectsEqual(actual, expected, 'my test');

    expect(capturedMessage).toContain('FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}');

    console.log = originalLogger;
  });

  it('should fail if objects not same size', function() {
    var originalLogger = console.log;
    var capturedMessage = '';
    console.log = function(message) {
      capturedMessage = message;
    }

    var expected = {foo: 5, bar: 6};
    var actual = {foo: 5, bar: 6, baz: 7}
    assertObjectsEqual(actual, expected, 'my test');

    expect(capturedMessage).toContain('FAILED [my test] Expected {"foo":5,"bar":6}, but got {"foo":5,"bar":6,"baz":7}');

    console.log = originalLogger;
  });
});
