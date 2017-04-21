describe("convertScoreToGrade", function() {
  it("should return a string", function() {
    expect(typeof(convertScoreToGrade(95))).toBe("string");
  });
  it("should return 'A' for scores between 90 and 100", function() {
    expect(convertScoreToGrade(95)).toBe("A");
  });
  it("should return 'B' for scores between 80 and 89", function() {
    expect(convertScoreToGrade(80)).toBe("B");
  });
  it("should return 'C' for scores between 70 and 79", function() {
    expect(convertScoreToGrade(79)).toBe("C");
  });
  it("should return 'D' for scores between 60 and 69", function() {
    expect(convertScoreToGrade(60)).toBe("D");
  });
  it("should return 'F' for 59", function() {
    expect(convertScoreToGrade(59)).toBe("F");
  });
  it("should return 'F' for scores between 0 and 59", function() {
    expect(convertScoreToGrade(50)).toBe("F");
  });
  it("should return 'F' for 0", function() {
    expect(convertScoreToGrade(0)).toBe("F");
  });
  it("should return 'INVALID SCORE' for scores less than 0", function() {
    expect(convertScoreToGrade(-1)).toBe("INVALID SCORE");
  });
  it("should return 'INVALID SCORE' for scores greater than 100", function() {
    expect(convertScoreToGrade(101)).toBe("INVALID SCORE");
  });
});

