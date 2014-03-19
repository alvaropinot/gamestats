
angular.module('gamestats', [
  'ngRoute',
  'gamestats.todo',
  'restangular','gamestatsTemplates'
])
.config(function ($routeProvider, RestangularProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/gamestats/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });

  RestangularProvider.setBaseUrl('/api');
  RestangularProvider.setRestangularFields({
    id: '_id'
  });
});
