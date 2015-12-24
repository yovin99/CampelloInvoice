(function () {
    'use strict';

    angular
        .module('compello')
        .controller('adminPortalCtlr', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope'];

    function DashboardCtrl($scope) {
        $scope.myNumber = 5;
        $scope.myOtherNumber = 10;
        $scope.getNumber = function (num) {
            return new Array(num);
        }
          
    }

})();
