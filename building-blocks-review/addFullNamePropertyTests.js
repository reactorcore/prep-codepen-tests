describe("addFullNameProperty", function() {
  it("should create a fullName property with the firstName and lastName separated by a space", function() {
    var tim = {
      firstName: "Tim",
      lastName: "Goldfish"
    };
    addFullNameProperty(tim);
    expect(tim.fullName).toBe("Tim Goldfish");
  });
});