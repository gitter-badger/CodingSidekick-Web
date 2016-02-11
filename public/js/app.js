(function (angular) {
    'use strict';
    angular.module('app.services', []);
    angular.module('app.controllers', []);
    angular.module('app.filters', []);
    angular.module('app.directives', []);
    var modules = ['app.services', 'app.controllers', 'app.filters', 'app.directives', 'ngRoute', 'angular-loading-bar'];
    angular.module('app', modules);
})(angular);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var HttpInterceptor = (function () {
            function HttpInterceptor() {
                var _this = this;
                ['request', 'requestError', 'response', 'responseError']
                    .forEach(function (method) {
                    if (_this[method]) {
                        _this[method] = _this[method].bind(_this);
                    }
                });
            }
            return HttpInterceptor;
        })();
        var AuthInterceptor = (function (_super) {
            __extends(AuthInterceptor, _super);
            function AuthInterceptor($window) {
                _super.call(this);
                this.$window = $window;
            }
            AuthInterceptor.prototype.request = function (config) {
                var _this = this;
                config.headers = config.headers || {};
                if (_this.$window.sessionStorage.getItem('csk-tk')) {
                    config.headers['x-access-token'] = _this.$window.sessionStorage.getItem('csk-tk');
                }
                return config;
            };
            AuthInterceptor.$inject = ['$window'];
            return AuthInterceptor;
        })(HttpInterceptor);
        angular.module('app.services').service('AuthInterceptor', AuthInterceptor);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
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
(function (angular) {
    'use strict';
    angular.module('app').config(config);
    config.$inject = ['$routeProvider', '$httpProvider', '$locationProvider', 'cfpLoadingBarProvider'];
    function config($routeProvider, $httpProvider, $locationProvider, cfpLoadingBarProvider) {
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
        $httpProvider.interceptors.push('AuthInterceptor');
    }
})(angular);
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
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var GlobalController = (function () {
            function GlobalController() {
                var _this = this;
            }
            return GlobalController;
        })();
        angular.module('app.controllers')
            .controller('GlobalController', GlobalController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        })();
        angular.module('app.controllers')
            .controller('HomeController', HomeController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
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
                    if (res.success)
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
