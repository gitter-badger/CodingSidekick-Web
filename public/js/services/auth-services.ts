///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    export interface IAuthInterceptor {
        request(config:ng.IRequestConfig): ng.IRequestConfig;
    }

    class HttpInterceptor {
        constructor() {
            ['request', 'requestError', 'response', 'responseError']
                .forEach((method: string) => {
                    if (this[method]) {
                        this[method] = this[method].bind(this);
                    }
                });
        }
    }

    class AuthInterceptor extends HttpInterceptor implements IAuthInterceptor {

        static $inject = ['$window'];

        constructor(private $window:ng.IWindowService) {
            super();
        }

        request(config:ng.IRequestConfig):ng.IRequestConfig {
            var _this = this;

            config.headers = config.headers || {};

            if (_this.$window.sessionStorage.getItem('csk-tk')) {
                config.headers['x-access-token'] = _this.$window.sessionStorage.getItem('csk-tk');
            }

            return config;
        }
    }

    angular.module('app.services').service('AuthInterceptor', AuthInterceptor);
}