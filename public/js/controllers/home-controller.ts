///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {
    'use strict';
    
    class HomeController {

        static $inject = [];

        constructor() {}
    }

    angular.module('app.controllers')
        .controller('HomeController', HomeController);
}