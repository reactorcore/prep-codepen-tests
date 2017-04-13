describe("generateRandomInteger", function() {
  function isWithinRange(random, limit) {
    return 0 <= random && random <= limit;
  }
  it("should return false when number is negative", function() {
    expect(generateRandomInteger(-45)).toEqual(false);
  });
  it("should return 0 when the input is 0", function() {
    expect(generateRandomInteger(0)).toBe(0);
  });
  it("should return an integer and within the range of 0 to the inputted number", function() {
    var result = generateRandomInteger(78);
    var inCorrectRange = isWithinRange(result, 78)
    var isInteger = Math.floor(result) === result;
    expect(inCorrectRange).toEqual(true);
    expect(isInteger).toEqual(true);
  });
});
