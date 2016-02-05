///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controller;
    (function (controller) {
        'use strict';
        var SignupController = (function () {
            function SignupController(DataServices, $location) {
                var _this = this;
                _this.DataServices = DataServices;
                _this.$location = $location;
                _this.user = {};
            }
            SignupController.prototype.signup = function (user) {
                var _this = this;
                _this.DataServices.signup(user).then(function (res) {
                    if (res.succes)
                        _this.$location.path('/');
                    else
                        console.error('%s', res.message);
                });
            };
            SignupController.$inject = ['DataServices', '$location'];
            return SignupController;
        })();
        angular.module('app.controllers').controller('SignupController', SignupController);
    })(controller = app.controller || (app.controller = {}));
})(app || (app = {}));
