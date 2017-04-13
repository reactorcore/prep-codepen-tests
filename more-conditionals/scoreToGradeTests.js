describe("scoreToGrade", function() {
  it("should return a string", function() {
    expect(typeof scoreToGrade(95)).toEqual("string");
  });
  it("should return the correct letter grade", function() {
    expect(scoreToGrade(55)).toBe('F');
    expect(scoreToGrade(60)).toBe('D');
    expect(scoreToGrade(65)).toBe('D');
    expect(scoreToGrade(70)).toBe('C');
    expect(scoreToGrade(75)).toBe('C');
    expect(scoreToGrade(80)).toBe('B');
    expect(scoreToGrade(81)).toBe('B');
    expect(scoreToGrade(90)).toBe('A');
    expect(scoreToGrade(95)).toBe('A');
  });
});
