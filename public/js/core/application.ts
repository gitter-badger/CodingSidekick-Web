///<reference path="../../../typings/tsd.d.ts" />

((angular): void => {
    'use strict';

    angular.module('app.services', []);
    angular.module('app.controllers', []);
    angular.module('app.filters', []);
    angular.module('app.directives', []);

    let modules = ['app.services', 'app.controllers', 'app.filters', 'app.directives', 'ngRoute', 'angular-loading-bar', 'ngMaterial'];

    angular.module('app', modules);
})(angular); 