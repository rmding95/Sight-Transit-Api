'use strict';

var express = require('express');
var proxy = require('./proxy.js');
var user = require('./user.js');

var app = express();

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    var response = proxy.getAgencies(function(data) {
        res.json({ message: data });   
    });

});

// for api/stop
router.route('/stop/agency/:agency_id').get(function(req, res) {
    var response = proxy.getStopsByAgency(req.params.agency_id, function(data) {
        res.json({message: data});
    });

});
    
router.route('/stop/uuid')
    .get(function(req, res) {
        res.json({message: "get uuid"});
    })
    .post(function(req, res) {
        res.json({message: "post uuid"});
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api/user', user);

// START THE SERVER
// =============================================================================
app.listen(8080);
console.log('Magic happens on port ' + 8080);