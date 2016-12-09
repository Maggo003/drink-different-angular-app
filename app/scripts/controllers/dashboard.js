'use strict';

/**
 * @ngdoc function
 * @name angularWebAppApp.controller:DashboardCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebAppApp
 */
angular.module('angularWebAppApp')
  .controller('DashboardCtrl', function ($scope) {

      $scope.allDrinks = [];
      $scope.bookingCounter = 1;
      $scope.allDrinks.push({id: 'ottakringer', title: 'Ottakrinker Dose', counter: 0, price: parseFloat(2.0), newPrice: parseFloat(0), percentage: 0, difference: 0, totalAmount: 0, differenceInEuro: 0, image: "../images/ottakringer_bier.png", showModal: false});
      $scope.allDrinks.push({id: 'vodkaBull', title: 'Vodka RedBull', counter: 0, price: parseFloat(2.5), newPrice: parseFloat(0), percentage: 0, difference: 0, totalAmount: 0, differenceInEuro: 0, image: "../images/vodkaBull.png", showModal: false});


    var drinkvariety = $scope.allDrinks.length;
    var basePercentage = (100/drinkvariety);
    var differenceFaktorInCent = 0.03;

    $scope.countAdd = function(){
        $scope.bookingCounter++;
    };
    $scope.countWithdraw = function(){
      if($scope.bookingCounter >= 1) {
          $scope.bookingCounter--;
      }
    };

    $scope.bookIt = function(drink) {
        drink.counter += $scope.bookingCounter;
        $scope.bookingCounter = 1;
        drink.showModal = false;
    };

    $scope.modalHide = function(drink) {
        drink.showModal = false;
        $scope.bookingCounter = 1;
    };

    $scope.calculate = function() {
        var wholeCount = _.sumBy($scope.allDrinks, "counter");
        if(wholeCount == 0){
            return;
        }
        $scope.allDrinks.forEach(function (drink) {
            drink.percentage = (drink.counter/wholeCount*100);
            drink.difference = drink.percentage - basePercentage;
            drink.differenceInEuro = (drink.difference * differenceFaktorInCent);
            drink.newPrice = drink.price + drink.differenceInEuro;
            drink.price = drink.newPrice;
            drink.totalAmount += drink.counter;
            drink.counter = 0;
        });
    };

    $scope.finished = function(){
      $scope.calculate();
      $scope.$apply();
      $scope.$broadcast('timer-reset');
      $scope.$broadcast('timer-start');
    };


  });
