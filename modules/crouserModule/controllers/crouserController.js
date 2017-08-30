(function(app) {
    'use strict';

    app.controller('crouserController', crouserController);

    crouserController.$inject = ['$scope', 'crouserService', 'config', '$sce'];

    function crouserController($scope, crouserService, config, $sce) {


        $scope.getCrouserData = getCrouserData;
        $scope.imageName = imageName ;
        $scope.changeCurrentImg = changeCurrentImg;

        $scope.crouserObj = {};

        function getCrouserData() {
            crouserService.getCrouserData(null, null, function(Success) {
               $scope.crouserObj.imgData = Success.data ;      
               $scope.crouserObj.currentImg = Success.data[0] ? imageName(Success.data[0].name) : config.noImageFound;
               $scope.crouserObj.is3dImage =  Success.data[0] ? Success.data[0].is3dImage : false;

            }, function(err) {
            	console.log(err);
            })
        }

        
        function imageName(img){
        	
        	return $sce.trustAsResourceUrl(config.apiURL + 'images/' + img);
        }

        function changeCurrentImg(img){
        	
        	$scope.crouserObj.currentImg =angular.copy(imageName(img.name));
        	$scope.crouserObj.is3dImage  =angular.copy(img.is3dImage);
        	
        }

    }
})(angular.module('myApp'));