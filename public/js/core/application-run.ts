///<reference path="../../../typings/tsd.d.ts" />

import INavigationServices = app.services.INavigationServices;

((angular: any): void => {
    'use strict';


    angular.module('app').run(run);

    run.$inject = ['$rootScope', 'NavigationServices'];

    function run($rootScope: ng.IRootScopeService, NavigationServices: INavigationServices): void {

        $rootScope.$on('$routeChangeStart', (event, next, current): void => {
            if (NavigationServices.getSideBarState()) {
                NavigationServices.closeSideBar();
            }
        });
    }
})(angular);