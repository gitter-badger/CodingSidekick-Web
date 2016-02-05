///<reference path="../../../../typings/tsd.d.ts" />

module app.directives {
    'use strict';

    import INavigationServices = app.services.INavigationServices;

    export class NavigationBarDirective {
        isSideBarOpen: boolean;

        static $inject = ['$scope', 'NavigationServices'];

        constructor(private $scope: ng.IScope, private NavigationServices: INavigationServices){
            var _this = this;

            _this.isSideBarOpen = _this.NavigationServices.getSideBarState();

            $scope.$on('navigation:sidebar', (event: ng.IAngularEvent, data: boolean) => {
                _this.isSideBarOpen = data;
            });
        }

        toggleMenu(): void {
            this.NavigationServices.toggleSideBar();
        }
    }

    angular.module('app.directives').directive('navigationBar', (): ng.IDirective => {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: '/js/directives/navigation-bar/navigation-directive.html',
            controller: NavigationBarDirective,
            controllerAs: 'vm'
        }
    });
}