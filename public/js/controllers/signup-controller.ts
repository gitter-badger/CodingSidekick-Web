///<reference path="../../../typings/tsd.d.ts" />

module app.controller {
    'use strict';
    
    import IUserServices = app.services.IUserServices;
    
    class SignupController {
        user: any;
        UserServices: IUserServices;
        $location: ng.ILocationService;
        
        static $inject = ['UserServices', '$location'];
        constructor(UserServices: IUserServices, $location: ng.ILocationService){
            var _this = this;
            _this.UserServices = UserServices;
            _this.$location = $location;
            _this.user = {}; 
        }
        
        signup(user: any): void {
            var _this = this;
            _this.UserServices.signup(user).then(res => {
                if (res.success)
                    _this.$location.path('/');
                else
                    console.error('%s', res.message);
            });
        }
    }
    
    angular.module('app.controllers').controller('SignupController', SignupController);
}