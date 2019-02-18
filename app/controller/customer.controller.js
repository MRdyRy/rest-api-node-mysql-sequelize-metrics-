const db = require('../config/db.config.js')
const Customer = db.customers
const log = require('../config/log4js')

// Post a Customer
exports.create = (req, res) => {	
	
    // Save to MySQL database
	Customer.create({  
        firstname: req.body.firstname,
        lastname: req.body.lastname,
	age: req.body.age,
	password: req.body.password
	}).then(customer => {		
	
	res.status(200).send({
            responseCode : 00,
            message : "OK",
            data : customer
        })
            
        log.debug("log : create-customer api called : created-> "+JSON.stringify(customer))
	})
}
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
	  // Send all customers to Client
      res.send(customers)
      log.debug("log : FindAll Customer api called")
	})
}

// Find a Customer by Id
exports.findById = (req, res) => {	
	Customer.findById(req.params.customerId).then(customer => {
        res.send(customer)
        log.debug("log : find Customer By Id api called : ID-> "+JSON.stringify(req.params.customerId))
	})
}
 
// Update a Customer
exports.update = (req, res) => {
	const id = req.params.customerId
	Customer.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
					 { where: {id: req.params.customerId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a customer with id = " + id)
				   })
}
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a customer with id = ' + id)
	})
}