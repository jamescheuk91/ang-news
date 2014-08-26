'use strict';

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize'
]);


app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
