describe("bouncer", function() {
  it("should return a string", function() {
    expect(typeof bouncer('Jenny', 99)).toEqual("string");
  });
  it("should return welcome message when age is over 20", function() {
    expect(bouncer('Rufus', 46)).toBe("Welcome, Rufus!");
  });
  it("should return refusal message when age is under 21", function() {
    expect(bouncer('Muhammad', 14)).toBe("Go home, Muhammad.");
  });
});
