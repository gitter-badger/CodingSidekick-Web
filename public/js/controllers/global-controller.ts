///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {
    'use strict';
    
    class GlobalController {
        $mdSidenav: ng.material.ISidenavService;
        
        static $inject = ['$mdSidenav'];
        constructor($mdSidenav: ng.material.ISidenavService) {
            var _this = this;
            _this.$mdSidenav = $mdSidenav;
        }
        
        toggleSidebar(): void {
            this.$mdSidenav('left').toggle();
        }
    }

    angular.module('app.controllers')
        .controller('GlobalController', GlobalController);
}