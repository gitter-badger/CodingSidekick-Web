///<reference path="../../../typings/tsd.d.ts" />

module app.controller {
    'use strict';
    
    import IDataServices = app.services.IDataServices;
    
    class SignupController {
        user: any;
        DataServices: IDataServices;
        $location: ng.ILocationService;
        
        static $inject = ['DataServices', '$location'];
        constructor(DataServices: IDataServices, $location: ng.ILocationService){
            var _this = this;
            _this.DataServices = DataServices;
            _this.$location = $location;
            _this.user = {}; 
        }
        
        signup(user: any): void {
            var _this = this;
            _this.DataServices.signup(user).then(res => {
                if (res.success)
                    _this.$location.path('/');
                else
                    console.error('%s', res.message);
            });
        }
    }
    
    angular.module('app.controllers').controller('SignupController', SignupController);
}