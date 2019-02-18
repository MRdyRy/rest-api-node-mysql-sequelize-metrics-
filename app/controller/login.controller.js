const db = require('../config/db.config.js')
const Customer = db.customers
const log = require('../config/log4js')

// Login Controller
exports.findById = (req, res) => {
	Customer.findById(req.params.customerId).then(customer => {
        res.status(200).send({
                        responseCode : 00,
                        message : "OK",
                        data : customer
                    })
        log.debug("log : find Customer By Id api called : ID-> "+JSON.stringify(req.params.customerId))
	})
}