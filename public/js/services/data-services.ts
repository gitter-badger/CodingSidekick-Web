///<reference path="../../../typings/tsd.d.ts" />

module app.services {
    'use strict';
    
    export interface IDataServices {
        signup(user: any): ng.IPromise<any>;
    }
    
    class DataServices implements IDataServices {
        
        static $inject = ['$q', '$http'];
        constructor(private $q:ng.IQService, private $http:ng.IHttpService){}
        
        /**
         * Sign up user
         */
        signup(user: any):ng.IPromise<any> {
            var _this = this;
            var q = _this.$q.defer();
            
            _this.$http.post('/api/signup', user).then(res => {
                q.resolve(res.data);
            }).catch(err => {
                q.reject(err);
            });
            
            return q.promise;
        }
    }
    
    angular.module('app.services').service('DataServices', DataServices);
}