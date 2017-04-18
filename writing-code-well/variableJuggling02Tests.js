describe('variable juggling with objects', function() {
  it('should_evaluate_X_correctly', function() {
    var actual = JSON.stringify(answer.finalValueOfX);
    var expected = JSON.stringify([4, 6, 1]);
    // Note: intentionally hiding the expected value.
    expect(actual === expected).toBe(true);
  });

  it('should_evaluate_Y_correctly', function() {
    var actual = JSON.stringify(answer.finalValueOfY);
    var expected = JSON.stringify([4, 6, 6]);
    // Note: intentionally hiding the expected value.
    expect(actual === expected).toBe(true);
  });

  it('should_evaluate_Z_correctly', function() {
    var actual = JSON.stringify(answer.finalValueOfZ);
    var expected = JSON.stringify([4, 6, 1]);
    // Note: intentionally hiding the expected value.
    expect(actual === expected).toBe(true);
  });
});
