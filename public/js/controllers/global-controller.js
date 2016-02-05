///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var GlobalController = (function () {
            function GlobalController() {
                var _this = this;
            }
            GlobalController.$inject = [];
            return GlobalController;
        })();
        angular.module('app.controllers')
            .controller('GlobalController', GlobalController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
