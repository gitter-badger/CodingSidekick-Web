///<reference path="../../../../typings/tsd.d.ts" />

module app.directives {
    'use strict';

    import INavigationServices = app.services.INavigationServices;

    export class NavigationBarDirective {
        user: any;
        isSideBarOpen: boolean;

        static $inject = ['$scope', 'NavigationServices', '$uibModal', '$uibModalStack'];

        constructor(private $scope: ng.IScope, private NavigationServices: INavigationServices, private $uibModal: any, private $uibModalStack: any) {
            var _this = this;

            _this.isSideBarOpen = _this.NavigationServices.getSideBarState();

            $scope.$on('navigation:sidebar', (event: ng.IAngularEvent, data: boolean) => {
                _this.isSideBarOpen = data;
            });
        }

        toggleMenu(): void {
            this.NavigationServices.toggleSideBar();
        }

        openLoginModal(): void {
            var _this = this;

            _this.$uibModal.open({
                templateUrl: '/partials/login-modal.html',
                controller: NavigationBarDirective,
                controllerAs: 'vm'
            });

            _this.NavigationServices.closeSideBar();
        }

        openRegisterModal(): void {
            var _this = this;

            _this.$uibModal.open({
                templateUrl: '/partials/register-modal.html',
                controller: NavigationBarDirective,
                controllerAs: 'vm'
            });

            _this.NavigationServices.closeSideBar();
        }

        closeModal(): void {
            this.$uibModalStack.dismissAll();
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