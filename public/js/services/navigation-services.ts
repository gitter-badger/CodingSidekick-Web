///<reference path="../../../typings/tsd.d.ts" />

module app.services {

    export interface INavigationServices {
        toggleSideBar(): void;
        getSideBarState(): boolean;
        closeSideBar(): void;
        openSideBar(): void;
    }

    class NavigationServices implements INavigationServices {
        private isSideBarOpen: boolean;

        static $inject = ['$rootScope'];

        constructor(private $rootScope: ng.IRootScopeService) {
            this.isSideBarOpen = false;
        }

        toggleSideBar(): void {
            this.isSideBarOpen = !this.isSideBarOpen;
            this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
        }

        getSideBarState(): boolean {
            return this.isSideBarOpen;
        }

        closeSideBar(): void {
            this.isSideBarOpen = false;
            this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
        }

        openSideBar(): void {
            this.isSideBarOpen = true;
            this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
        }
    }

    angular.module('app.services')
        .service('NavigationServices', NavigationServices);
}