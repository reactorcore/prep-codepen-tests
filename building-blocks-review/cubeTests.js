describe("cube", function() {
  it("should_cube_a_positive_number", function() {
    expect(cube(2)).toBe(8);
  });

  it("should_cube_0", function() {
    expect(cube(0)).toBe(0);
  });

  it("should_cube_a_number_greater_than_10", function() {
    expect(cube(12)).toBe(1728);
  });

  it("should_cube_a_negative_number", function() {
    expect(cube(-5)).toBe(-125);
  });
})