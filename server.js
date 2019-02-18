var appzip = require('appmetrics-zipkin')
var express = require('express')
var app = express()
var dash = require('appmetrics-dash').attach()
var bodyParser = require('body-parser')
var log = require('./app/config/log4js')
app.use(bodyParser.json())
 
const db = require('./app/config/db.config.js')
  
// force: true will drop the table if it already exists
const isForce =  false
db.sequelize.sync({force: isForce}).then(() => {
  log.debug('Drop and Resync with { force: '+isForce+' }')
});
 
app.get('/api',(req,res)=>{
    res.status(200).send({
        message: 'Api is Up'
    })
    log.debug('Api is Up')
})
require('./app/route/customer.route.js')(app);
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})