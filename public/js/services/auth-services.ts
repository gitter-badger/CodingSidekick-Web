///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    export interface IAuthInterceptor {}

    class AuthInterceptor implements IAuthInterceptor {

        static $inject = ['$window'];
        constructor(private $window: ng.IWindowService){}

        request(config: any) {
            console.log('interceptor');
            var _this = this;
            config.headers = config.headers || {};

            if (_this.$window.sessionStorage.getItem('csk-tk')) {
                config.headers['x-access-token'] = _this.$window.sessionStorage.getItem('csk-tk');
            }

            return config;
        }
    }

    angular.module('app.services').factory('AuthInterceptor', ($window: ng.IWindowService) => new AuthInterceptor($window));
}