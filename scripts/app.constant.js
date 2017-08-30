(function (app) {
    'use strict';

    var config = {
    	apiURL : "http://127.0.0.1:3000/",
    	noImageFound : "http://www.jordans.com/~/media/jordans%20redesign/no-image-found.ashx?h=275&la=en&w=275&hash=F87BC23F17E37D57E2A0B1CC6E2E3EEE312AAD5B"
    }

    window.temp = config;
    app.constant('config', config);

})(angular.module('myApp'));