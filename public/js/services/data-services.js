///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var DataServices = (function () {
            function DataServices($q, $http) {
                this.$q = $q;
                this.$http = $http;
            }
            /**
             * Sign up user
             */
            DataServices.prototype.signup = function (user) {
                var _this = this;
                var q = _this.$q.defer();
                _this.$http.post('/api/signup', user).then(function (res) {
                    q.resolve(res.data);
                }).catch(function (err) {
                    q.reject(err);
                });
                return q.promise;
            };
            DataServices.$inject = ['$q', '$http'];
            return DataServices;
        })();
        angular.module('app.services').service('DataServices', DataServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
