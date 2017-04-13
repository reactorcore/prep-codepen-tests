describe("letterGrade", function(){
  it("should not add +/- when score's 1's digit > 2 or < 8", function(){
    expect(letterGrade('A', 95)).toBe('A');
    expect(letterGrade('B', 83)).toBe('B');
    expect(letterGrade('C', 77)).toBe('C');
  });
  it("should add '-' when score's 1's digit is 0 to 2 inclusive", function(){
    expect(letterGrade('A', 90)).toBe('A-');
    expect(letterGrade('B', 81)).toBe('B-');
    expect(letterGrade('C', 72)).toBe('C-');
  });
  it("should add '+' when score's 1's digit is >= 8", function(){
    expect(letterGrade('A', 98)).toBe('A+');
    expect(letterGrade('B', 89)).toBe('B+');
    expect(letterGrade('C', 79)).toBe('C+');
  });
  it("should always make 160 monkeys minus :D", function(){
    expect(letterGrade('monkey', 160)).toBe('monkey-');
  });
});
