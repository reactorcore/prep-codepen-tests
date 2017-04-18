describe("addArrayProperty", function() {
  var testObj;
  var testArray;
  beforeEach(function() {
    testObj = {};
    testArray = [1, 4];
  });
  it("should add a property to the passed in object at the passed in key", function() {
    addArrayProperty(testObj, "testKey", testArray);
    expect(testObj.testKey).toBeDefined();
  });
  it("should set the value at the passed in key on the passed in object to be the passed in array", function() {
    addArrayProperty(testObj, "testKey", testArray);
    expect(testObj.testKey).toEqual(testArray);
  });
});