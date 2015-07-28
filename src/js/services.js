/**
 * Created by wayneaustin on 27/07/2015.
 */
(function () {
    "use strict";

    angular.module("services")
        .service("myService", ["$http", function ($http) {
            return {
                getMyThing: function (successFn, errorFn) {
                    $http.get("get/mything/fromthis/url")
                        .success(function (response) {
                            successFn(response);
                        })
                        .error(function (response) {
                            errorFn(response);
                        });
                }
            }
        }]);

}());