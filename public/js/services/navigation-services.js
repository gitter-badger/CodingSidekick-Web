///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        var NavigationServices = (function () {
            function NavigationServices($rootScope) {
                this.$rootScope = $rootScope;
                this.isSideBarOpen = false;
            }
            NavigationServices.prototype.toggleSideBar = function () {
                this.isSideBarOpen = !this.isSideBarOpen;
                this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
            };
            NavigationServices.prototype.getSideBarState = function () {
                return this.isSideBarOpen;
            };
            NavigationServices.prototype.closeSideBar = function () {
                this.isSideBarOpen = false;
                this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
            };
            NavigationServices.prototype.openSideBar = function () {
                this.isSideBarOpen = true;
                this.$rootScope.$broadcast('navigation:sidebar', this.isSideBarOpen);
            };
            NavigationServices.$inject = ['$rootScope'];
            return NavigationServices;
        })();
        angular.module('app.services')
            .service('NavigationServices', NavigationServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
