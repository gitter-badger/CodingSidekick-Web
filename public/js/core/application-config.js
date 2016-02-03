///<reference path="../../../typings/tsd.d.ts" />
(function (angular) {
    'use strict';
    angular.module('app').config(config);
    config.$inject = ['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider'];
    function config($routeProvider, $locationProvider, cfpLoadingBarProvider) {
        $routeProvider.when('/', {
            templateUrl: '/partials/home.html',
            caseInsensitiveMatch: true,
            controller: 'HomeController',
            controllerAs: 'vm'
        }).otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
        cfpLoadingBarProvider.includeSpinner = false;
    }
})(angular);
