'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'restangular',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
  ]).
  config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', { 
        controller: 'RootCtrl', 
        templateUrl: 'partials/root.html'
      });
      $routeProvider.when('/list/:domain', {
        controller: 'ListCtrl', 
        templateUrl: 'partials/list.html',
        resolve: {
          items: function(Restangular, $route) {
            if ($route.current.params.page != null) {
              return Restangular.all($route.current.params.domain).getList({page: $route.current.params.page});
            } else {
              return Restangular.all($route.current.params.domain).getList();
            }
          }
        }
      });
      $routeProvider.otherwise({redirectTo:'/'});
  }]).
  config(['RestangularProvider', function(RestangularProvider) {
    // point RestangularProvider.setBaseUrl to your API's URL_PREFIX
    RestangularProvider.setBaseUrl('/api');
    
    RestangularProvider.setListTypeIsArray(false);
    RestangularProvider.setRestangularFields({
      id: "_id"
    });
  }]);
