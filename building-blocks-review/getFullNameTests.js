describe("getFullName", function() {
  it("should return a string", function() {
    expect(typeof(getFullName("Rebecca", "Solnit"))).toBe("string");
  });
  it("should return a full name using firstName and lastName", function() {
    expect(getFullName("Rebecca", "Solnit")).toBe("Rebecca Solnit");
  });
});