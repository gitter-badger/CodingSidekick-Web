///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.$inject = [];
            return HomeController;
        })();
        angular.module('app.controllers')
            .controller('HomeController', HomeController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
