///<reference path="../../../typings/tsd.d.ts" />

module app.controllers {
    'use strict';
    
    class GlobalController {
        
        static $inject = [];
        constructor() {
            var _this = this;
        }
    }

    angular.module('app.controllers')
        .controller('GlobalController', GlobalController);
}