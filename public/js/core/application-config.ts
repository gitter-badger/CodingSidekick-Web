///<reference path="../../../typings/tsd.d.ts" />

((angular): void => {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider', '$mdIconProvider', '$mdThemingProvider'];

    function config(
        $routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider,
        cfpLoadingBarProvider: ng.loadingBar.ILoadingBarProvider, $mdIconProvider: ng.material.IIconProvider,
        $mdThemingProvider: ng.material.IThemingProvider): void {

        $routeProvider.when('/', {
            templateUrl: '/partials/home.html',
            caseInsensitiveMatch: true,
            controller: 'HomeController',
            controllerAs: 'vm'
        }).when('/signup', {
            templateUrl: '/partials/signup.html',
            caseInsensitiveMatch: true,
            controller: 'SignupController',
            controllerAs: 'vm'
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);

        cfpLoadingBarProvider.includeSpinner = false;

        $mdIconProvider.icon("menu", 'https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default').primaryPalette('grey', {
            'default': '100',
            'hue-1': '100', 
            'hue-2': '600', 
            'hue-3': 'A100'
        }).accentPalette('blue');
    }
})(angular);