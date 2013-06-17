'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

  controller('RootCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    $scope.domains = Restangular.all("/").getList();
  }]).

  controller('ListCtrl', ['$scope', 'items', function ($scope, items) {
    if (items._links.next != null) {
      $scope.nextpage = items._links.next.href.replace(items._links.parent.href,'');
    }
    if (items._links.prev != null) {
      $scope.prevpage = items._links.prev.href.replace(items._links.parent.href,'');
    }
    $scope.items = items;
    $scope.domain = items._links.self.title;
  }]);
