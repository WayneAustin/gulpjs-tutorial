/**
 * Created by wayneaustin on 27/07/2015.
 */
(function() {
    "use strict";

    angular.module("controllers")
        .controller("homeController", ["$scope", "myService", function ($scope, myService) {
            $scope.helloMessage = "Hello there!";

        }]);

}());