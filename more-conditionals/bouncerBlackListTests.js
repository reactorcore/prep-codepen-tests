describe("bouncerBlackList", function() {
  it("should return a string", function() {
    expect(typeof bouncerBlackList('Jenny', 99)).toEqual("string");
  });
  it("should return welcome message when age is over 20", function() {
    expect(bouncerBlackList('Rufus', 46)).toBe("Welcome, Rufus!");
  });
  it("should return refusal message when age is under 21", function() {
    expect(bouncerBlackList('Muhammad', 14)).toBe("Go home, Muhammad.");
  });
  it("should return refusal message when name is Joe", function() {
    expect(bouncerBlackList('Joe', 24)).toBe("Go home Joe!");
  });
});
