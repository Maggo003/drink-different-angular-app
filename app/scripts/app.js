'use strict';

/**
 * @ngdoc overview
 * @name angularWebAppApp
 * @description
 * # angularWebAppApp
 *
 * Main module of the application.
 */
var mainModule = angular.module('angularWebAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ui.router',
    'timer',
    'ui.bootstrap.modal'
  ]);

mainModule.config(function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/main/dashboard');

  $stateProvider
      .state('main', {
          url: '/main',
          controller: 'MainCtrl',
          templateUrl: '/views/menu.html',
          controllerAs: 'main'
      })
      .state('main.dashboard', {
          url: '/dashboard',
          views: {
              'menuContent': {
                  controller: 'DashboardCtrl',
                  templateUrl: '/views/dashboard.html'
              }
          }
      })
      .state('main.manage', {
      url: '/manage',
      views: {
          'menuContent': {
              controller: 'ManageCtrl',
              templateUrl: '/views/manage.html'
          }
      }
  })
});
