angular.module('myApp').factory('crouserService', crouserService);

crouserService.$inject = ['config', '$resource', '$http'];

function crouserService(config, $resource, $http) {

    $http.defaults.headers.common['Content-type'] = 'application/json';

    return $resource(null, null, {
        // Retrieve CBSV requests
        getCrouserData: {
            isArray: false,
            method: 'GET',
            url: config.apiURL + 'home/crouser'
        },
    });
};