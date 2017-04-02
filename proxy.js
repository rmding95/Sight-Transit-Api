'use strict';

var request = require('request');
var key = 'ed53d6fe-60fc-4fa1-9731-22bea8a64bd0';
var baseUrl = 'http://api.pugetsound.onebusaway.org/api/where/';

var proxy = module.exports = {};

proxy.getAgencies = function(callback) {

    var call = request(baseUrl + 'agencies-with-coverage.json?key=' + key, function(error, response, body) {
        callback(response);
    });

};

proxy.getStopsByAgency = function(agencyId, callback) {
    var call = request(baseUrl + 'stop-ids-for-agency/' + agencyId + '.json?key=' + key, function(error, response, body) {
        // need to add error handling
        callback(response);
    });
};