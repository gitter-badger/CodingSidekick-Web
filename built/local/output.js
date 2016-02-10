///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var GlobalController = (function () {
            function GlobalController() {
                var _this = this;
            }
            GlobalController.$inject = [];
            return GlobalController;
        })();
        angular.module('app.controllers')
            .controller('GlobalController', GlobalController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.$inject = [];
            return HomeController;
        })();
        angular.module('app.controllers')
            .controller('HomeController', HomeController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var controller;
    (function (controller) {
        'use strict';
        var SignupController = (function () {
            function SignupController(DataServices, $location) {
                var _this = this;
                _this.DataServices = DataServices;
                _this.$location = $location;
                _this.user = {};
            }
            SignupController.prototype.signup = function (user) {
                var _this = this;
                _this.DataServices.signup(user).then(function (res) {
                    if (res.succes)
                        _this.$location.path('/');
                    else
                        console.error('%s', res.message);
                });
            };
            SignupController.$inject = ['DataServices', '$location'];
            return SignupController;
        })();
        angular.module('app.controllers').controller('SignupController', SignupController);
    })(controller = app.controller || (app.controller = {}));
})(app || (app = {}));
///<reference path="../../../typings/tsd.d.ts" />
(function (angular) {
    'use strict';
    angular.module('app').config(config);
    config.$inject = ['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider'];
    function config($routeProvider, $locationProvider, cfpLoadingBarProvider) {
        $routeProvider.when('/', {
            templateUrl: '/partials/home.html',
            caseInsensitiveMatch: true,
            controller: 'HomeController',
            controllerAs: 'vm'
        }).when('/signup', {
            templateUrl: '/partials/signup.html',
            caseInsensitiveMatch: true,
            controller: 'SignupController',
            controllerAs: 'vm'
        }).otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
        cfpLoadingBarProvider.includeSpinner = false;
    }
})(angular);
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
///<reference path="../../../typings/tsd.d.ts" />
(function (angular) {
    'use strict';
    angular.module('app.services', []);
    angular.module('app.controllers', []);
    angular.module('app.filters', []);
    angular.module('app.directives', []);
    var modules = ['app.services', 'app.controllers', 'app.filters', 'app.directives', 'ngRoute', 'angular-loading-bar'];
    angular.module('app', modules);
})(angular);
///<reference path="../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var DataServices = (function () {
            function DataServices($q, $http) {
                this.$q = $q;
                this.$http = $http;
            }
            /**
             * Sign up user
             */
            DataServices.prototype.signup = function (user) {
                var _this = this;
                var q = _this.$q.defer();
                _this.$http.post('/api/signup', user).then(function (res) {
                    q.resolve(res.data);
                }).catch(function (err) {
                    q.reject(err);
                });
                return q.promise;
            };
            DataServices.$inject = ['$q', '$http'];
            return DataServices;
        })();
        angular.module('app.services').service('DataServices', DataServices);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
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
///<reference path="../../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var directives;
    (function (directives) {
        'use strict';
        var NavigationBarDirective = (function () {
            function NavigationBarDirective($scope, NavigationServices) {
                this.$scope = $scope;
                this.NavigationServices = NavigationServices;
                var _this = this;
                _this.isSideBarOpen = _this.NavigationServices.getSideBarState();
                $scope.$on('navigation:sidebar', function (event, data) {
                    _this.isSideBarOpen = data;
                });
            }
            NavigationBarDirective.prototype.toggleMenu = function () {
                this.NavigationServices.toggleSideBar();
            };
            NavigationBarDirective.$inject = ['$scope', 'NavigationServices'];
            return NavigationBarDirective;
        })();
        directives.NavigationBarDirective = NavigationBarDirective;
        angular.module('app.directives').directive('navigationBar', function () {
            return {
                scope: true,
                restrict: 'E',
                templateUrl: '/js/directives/navigation-bar/navigation-directive.html',
                controller: NavigationBarDirective,
                controllerAs: 'vm'
            };
        });
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
