describe("convertScoreToGradeWithPlusAndMinus", function() {
  it("should return a string", function() {
    expect(typeof convertScoreToGradeWithPlusAndMinus(95)).toEqual("string");
  });
  it("should return the correct letter grade", function() {
    expect(convertScoreToGradeWithPlusAndMinus(65)).toBe('D');
    expect(convertScoreToGradeWithPlusAndMinus(75)).toBe('C');
    expect(convertScoreToGradeWithPlusAndMinus(85)).toBe('B');
    expect(convertScoreToGradeWithPlusAndMinus(95)).toBe('A');
  });
  it("should properly assign 'minus' grades", function() {
    expect(convertScoreToGradeWithPlusAndMinus(60)).toBe('D-');
    expect(convertScoreToGradeWithPlusAndMinus(71)).toBe('C-');
    expect(convertScoreToGradeWithPlusAndMinus(82)).toBe('B-');
    expect(convertScoreToGradeWithPlusAndMinus(91)).toBe('A-');
  });
  it("should properly assign 'plus' grades", function() {
    expect(convertScoreToGradeWithPlusAndMinus(68)).toBe('D+');
    expect(convertScoreToGradeWithPlusAndMinus(79)).toBe('C+');
    expect(convertScoreToGradeWithPlusAndMinus(89)).toBe('B+');
    expect(convertScoreToGradeWithPlusAndMinus(100)).toBe('A+');
  });
});
