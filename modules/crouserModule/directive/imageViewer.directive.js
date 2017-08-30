(function(app) {
    app.directive('imageViewer', function() {
        return {
            restrict: 'E',
            scope: {
                src: '=?',
                is3dImage: "=?"
            },
            replace: true,
            templateUrl: './modules/crouserModule/views/imageViewerTemplate.html',
            link: function(scope, element, attrs) {
            	
            }

        }
    })
})(angular.module('myApp'));






