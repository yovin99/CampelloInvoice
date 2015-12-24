/**
 * Configure the Routes
 */
"use strict";
angular.module('compello').config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", { templateUrl: "app/adminPortal/AdminPortal.html", controller: "adminPortalCtlr" })
}]);



