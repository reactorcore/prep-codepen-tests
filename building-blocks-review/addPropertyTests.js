describe("addProperty", function() {
  var testObj;
  beforeEach(function() {
    testObj = {};
  });
  it("should add a property to the passed in object at the passed in key", function() {
    addProperty(testObj, "testKey");
    expect(testObj.testKey).toBeDefined();
  });
  it("should set the value at the passed in key to true on the passed in object", function() {
    addProperty(testObj, "testKey");
    expect(testObj.testKey).toBe(true);
  });
});