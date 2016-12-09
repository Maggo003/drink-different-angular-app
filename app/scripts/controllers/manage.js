'use strict';

/**
 * @ngdoc function
 * @name angularWebAppApp.controller:ManageCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWebAppApp
 */
angular.module('angularWebAppApp')
  .controller('ManageCtrl', function ($scope) {

      $scope.allDrinks = [];



      $scope.allDrinks.push({id: 'ottakringer', title: 'Ottakrinker Dose', counter: 0, price: 2.00, image: "ottakringer_bier.png"});
      $scope.allDrinks.push({id: 'vodkaBull', title: 'Vodka RedBull', counter: 0, price: 2.50, image: "vodkaBull.png"});

      $scope.open = function() {
          $scope.showModal = true;
      };

      $scope.ok = function() {
          $scope.showModal = false;
      };

      $scope.cancel = function() {
          $scope.showModal = false;
      };


  });
