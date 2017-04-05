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

proxy.getStopsByAgency = function(agency_id, callback) {
    var call = request(baseUrl + 'stop-ids-for-agency/' + agency_id + '.json?key=' + key, function(error, response, body) {
        // need to add error handling
        callback(response);
    });
};

proxy.getStopInfo = function(stop_id, callback) {
    var call = request(baseUrl + 'stop/' + stop_id + '.json?key=' + key, function(error, response, body) {
        callback(response);
    });
};

proxy.getBusArrivalInfo = function(params, callback) {
    var url = baseUrl + 'arrival-and-departure-for-stop/' + params.stop_id + '.json?key=' + key + '&tripId=' + params.trip_id + '&serviceDate=' 
            + params.service_date + '&vehicleId=' + params.vehicle_id + '&stopSequence=' + params.stop_sequence;
    console.log(url);
    var call = request(url, function(error, response, body) {
        callback(response);
    });
};