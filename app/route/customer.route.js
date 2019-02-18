module.exports = function(app) {
 
    const customers = require('../controller/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/create/customers', customers.create);
 
    // Retrieve all Customer
    app.get('/api/inquiry/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/inquiry/customers/:customerId', customers.findById);
 
    // Update a Customer with Id
    app.put('/api/customersbyId/:customerId', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/delete/customers/:customerId', customers.delete);
}