describe("addObjectProperty", function() {
  var obj1;
  var obj2;
  beforeEach(function() {
    obj1 = {};
    obj2 = {
      name: "Dude"
    };
  });
  it('should add a property to the passed in object at the passed in key', function() {
    addObjectProperty(obj1, 'testKey', obj2);
    expect(obj1.testKey).toBeDefined();
  });
  it('should set the value at the passed in key on the passed in object to be the second passed in object', function() {
    addObjectProperty(obj1, 'testKey', obj2);
    expect(obj1.testKey).toEqual(obj2);
  });
});