(function () {
    'use strict';

    angular
        .module('compello')
        .controller('adminPortalCtlr', adminPortalCtrl);

    adminPortalCtrl.$inject = ['$scope'];

    function adminPortalCtrl($scope) {
     
               
        $scope.companies = [{
            "_id": "567cd800180ed68ecc83e941",
            "company_name": "Zisisi",
            "employees": [{
                "id": 0,
                "name": "Sharlene Hutchinson",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document Import"
                ]
            }, {
                "id": 1,
                "name": "Carolina Bauer",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Admin"
                ]
            }, {
                "id": 2,
                "name": "Jillian Kerr",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }]
        }, {
            "_id": "567cd800cf62678898d1fbd5",
            "company_name": "Voratak",
            "employees": [{
                "id": 0,
                "name": "Sharlene Hutchinson",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }, {
                "id": 1,
                "name": "Carolina Bauer",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }, {
                "id": 2,
                "name": "Jillian Kerr",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }]
        }, {
            "_id": "567cd80076bf50cef71255a1",
            "company_name": "Deepeens",
            "employees": [{
                "id": 0,
                "name": "Sharlene Hutchinson",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }, {
                "id": 1,
                "name": "Carolina Bauer",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }, {
                "id": 2,
                "name": "Jillian Kerr",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }]
        }, {
            "_id": "567cd80046403f32b6b69322",
            "company_name": "Menbain",
            "employees": [{
                "id": 0,
                "name": "Sharlene Hutchinson",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }, {
                "id": 1,
                "name": "Carolina Bauer",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }, {
                "id": 2,
                "name": "Jillian Kerr",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }]
        }, {
            "_id": "567cd8004d31fe563820da36",
            "company_name": "Uni World",
            "employees": [{
                "id": 0,
                "name": "Sharlene Hutchinson",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }, {
                "id": 1,
                "name": "Carolina Bauer",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }, {
                "id": 2,
                "name": "Jillian Kerr",
                "roles": [
                    "Authorizer",
                    "Distribution",
                    "Document_import"
                ]
            }]
        }];


        $scope.viewEmployees = function (index) {
            $scope.employeeeDetails = [];
            $scope.employeeeDetails.push($scope.companies[index].employees);
        };



    }

})();