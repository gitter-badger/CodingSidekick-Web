///<reference path="../../../typings/tsd.d.ts" />
(function (angular) {
    'use strict';
    angular.module('app').run(run);
    run.$inject = ['$rootScope', 'NavigationServices'];
    function run($rootScope, NavigationServices) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (NavigationServices.getSideBarState()) {
                NavigationServices.closeSideBar();
            }
        });
    }
})(angular);
