///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var GlobalController = (function () {
            function GlobalController($mdSidenav) {
                var _this = this;
                _this.$mdSidenav = $mdSidenav;
            }
            GlobalController.prototype.toggleSidebar = function () {
                this.$mdSidenav('left').toggle();
            };
            GlobalController.$inject = ['$mdSidenav'];
            return GlobalController;
        })();
        angular.module('app.controllers')
            .controller('GlobalController', GlobalController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
