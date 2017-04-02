'use strict';

var express = require('express');
var proxy = require('./proxy.js');
var app = express();

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    var response = proxy.getAgencies(function(data) {
        res.json({ message: data });   
    });

});

router.route('/route').get(function(req, res) {
    res.json({ message: 'data' });
});
    



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(8080);
console.log('Magic happens on port ' + 8080);