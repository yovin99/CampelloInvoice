
/**
 * Main AngularJS Web Application
 */
var app = angular.module('compello', [
  'ngRoute'
]);

///**
// * Configure the Routes
// */
//app.config(['$routeProvider', function ($routeProvider) {
//  $routeProvider
//    // Home
//    .when("/", { templateUrl: "app/adminPortal/AdminPortal.html", controller: "adminPortalCtlr" })
//}]);


///**
// * Controls all other Pages
// */
//app.controller('adminPortalCtlr', function ($scope) {
//    //console.log("Page Controller reporting for duty.");
//        $scope.myNumber = 5;
//        $scope.myOtherNumber = 10;
//        $scope.getNumber = function (num) {
//            return new Array(num);
//        }


//});