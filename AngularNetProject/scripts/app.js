'use strict';
var app = angular.module('toDoApp', ['ngRoute', 'ngResource']);


app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', { templateUrl: '/scripts/templates/toDoMain.htm', controller: 'toDoCtrl' });
    $routeProvider.when('/directives', { templateUrl: '/scripts/templates/directivesPage.htm', controller: 'directivesCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
});