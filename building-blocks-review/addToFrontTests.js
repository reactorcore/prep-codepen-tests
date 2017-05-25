describe("addToFront", function() {
  it("should return an array", function() {
    expect(Array.isArray(addToFront([1, 2], 3))).toBe(true);
  });

  it("should add an element to the front of an array", function() {
    expect(addToFront([1, 2], 3)).toEqual([3, 1, 2]);
  });

  it("should add an element to the end of an empty array", function() {
    expect(addToFront([], 3)).toEqual([3]);
  });

  it("should be the same array instance that was passed in", function() {
    var input = [1, 2, 3];
    expect(addToFront(input, 4)).toBe(input);
  });
});
