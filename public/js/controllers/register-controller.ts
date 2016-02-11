///<reference path="../../../typings/tsd.d.ts" />

module app.controller {
    'use strict';
    
    import IUserServices = app.services.IUserServices;
    
    class RegisterController {
        user: any;
        mode: string;
        showLogin: boolean;
        
        static $inject = ['UserServices', '$location'];
        constructor(private UserServices: IUserServices, private $location: ng.ILocationService){
            var _this = this;
            _this.mode = $location.search().mode;
            _this.showLogin = (_this.mode === 'login');
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
    
    angular.module('app.controllers').controller('RegisterController', RegisterController);
}