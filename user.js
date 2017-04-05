'use strict';

var express = require('express');
var router = express.Router();

// for user id
router.route('/id')
    .get(function(req, res) {
        res.json({message: "get all user ID"})
    });

// for user saved locations
router.route('/saved_locs')
    .get(function(req, res) {
        res.json({message: "get all user saved locations"})
    })
    .post(function(req, res) {
        res.json({message: "post new location"})
    })
    .put(function(req, res) {
        res.json({message: "update a location"})
    });

module.exports = router