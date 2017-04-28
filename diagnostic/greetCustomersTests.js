describe('greetCustomer', function() {
  it('handles 1st time visitor from sample data', function() {
    var output = greetCustomer('Voldemort');
    var expected = 'Welcome! Is this your first time?';
    expect(output).toEqual(expected);
  });

  it('handles 2nd time visitor from sample data', function() {
    var output = greetCustomer('Joe');
    var expected = "Welcome back, Joe! We're glad you liked us the first time!";
    expect(output).toEqual(expected);
  });

  it('handles 2nd time visitor from new nonsample data', function() {
    var oldCustomerDataJSON = JSON.stringify(customerData);

    customerData['Ben'] = {
      visits: 1
    };

    var output = greetCustomer('Ben');
    var expected = "Welcome back, Ben! We're glad you liked us the first time!";
    expect(output).toEqual(expected);

    customerData = JSON.parse(oldCustomerDataJSON);
  });

  it('handles 3rd time visitor from sample data', function() {
    var output = greetCustomer('Howard');
    var expected = 'Welcome back, Howard! So glad to see you again!';
    expect(output).toEqual(expected);
  });

  it('handles 4th time visitor from new nonsample data', function() {
    var oldCustomerDataJSON = JSON.stringify(customerData);

    customerData['Macklemore'] = {
      visits: 3
    };

    var output = greetCustomer('Macklemore');
    var expected = 'Welcome back, Macklemore! So glad to see you again!';
    expect(output).toEqual(expected);

    customerData = JSON.parse(oldCustomerDataJSON);
  });

});
