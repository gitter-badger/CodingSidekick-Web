///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';

    export interface IUserServices {
        signup(user: any): ng.IPromise<any>;
        login(user: any): ng.IPromise<any>;
        getProfile(): ng.IPromise<any>;
        isLoggedIn(): Boolean;
        logout(): void;
    }

    /**
     * User services
     */
    class UserServices implements IUserServices {
        profile: any;

        static $inject = ['$q', '$http', '$window'];

        constructor(private $q: ng.IQService, private $http: ng.IHttpService, private $window: ng.IWindowService) {

        }

        /**
         * Sign up user
         */
        signup(user: any): ng.IPromise<any> {
            var _this = this;
            var q = _this.$q.defer();

            _this.$http.post('/api/signup', user).then(res => {
                q.resolve(res.data);
            }).catch(err => {
                q.reject(err);
            });

            return q.promise;
        }

        /**
         * Login user
         */
        login(user: any): ng.IPromise<any> {
            var _this = this;
            var q = _this.$q.defer();

            _this.$http.post('/api/login', { email: user.email, password: user.password })
                .then((res: any) => {
                    _this.$window.sessionStorage.setItem('csk-tk', res.token);
                    q.resolve();
                });

            return q.promise;
        }

        /**
         * Get user profile
         */
        getProfile(): ng.IPromise<any> {
            var _this = this;
            var q = _this.$q.defer();

            if (_this.profile) {
                q.resolve(_this.profile);
                return q.promise;
            }

            _this.$http.get('/api/me').then((res: any) => {
                _this.profile = res.data;
                q.resolve(_this.profile);
            });

            return q.promise;
        }

        /**
         * Check if user is logged in
         */
        isLoggedIn(): Boolean {
            return (this.$window.sessionStorage.getItem('csk-tk'));
        }

        /**
         * Logout user
         */
        logout(): void {
            this.$window.sessionStorage.removeItem('csk-tk');
        }

    }

    angular.module('app.services').service('UserServices', UserServices);
}