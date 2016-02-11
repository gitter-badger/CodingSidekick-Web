///<reference path="../../../typings/tsd.d.ts" />

((angular: any): void => {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$routeProvider', '$httpProvider', '$locationProvider', 'cfpLoadingBarProvider'];

    function config(
        $routeProvider: ng.route.IRouteProvider, $httpProvider: ng.IHttpProvider,
        $locationProvider: ng.ILocationProvider, cfpLoadingBarProvider: ng.loadingBar.ILoadingBarProvider): void {

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

        $httpProvider.interceptors.push('AuthInterceptor');
    }
})(angular);