'use strict';

/**
 * @ngdoc function
 * @name angularWebAppApp.controller:DashboardCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebAppApp
 */
angular.module('angularWebAppApp')
  .controller('DashboardCtrl', function ($scope, $fancyModal) {

    /*$scope.beer = {};
    $scope.vodka = {};
    $scope.whiskey = {};

    $scope.beer.name = "Bier";
    $scope.vodka.name = "Vodka";
    $scope.whiskey.name = "Whiskey";

    $scope.drinks = [$scope.beer, $scope.vodka, $scope.whiskey];*/
    $scope.drinks = ["Bier", "Vodka", "Whiskey"];
    $scope.drinkvariety = $scope.drinks.length;
    $scope.basePercentage = (100/$scope.drinkvariety);

    $scope.beerCount = 0;
    $scope.vodkaCount = 0;
    $scope.whiskeyColaCount = 0;
    $scope.spritzerCount = 0;

    $scope.beerPrice = 2.0.toFixed(2);
    $scope.vodkaPrice = 3.0.toFixed(2);
    $scope.whiskeyColaPrice = 4.0.toFixed(2);
    $scope.spritzerPrice = 2.0.toFixed(2);

    $scope.differenceFaktorInCent = 0.03;
    $scope.priceMin = 0.5;
    $scope.priceMax = 5;

    $scope.beerPercentage = 0;
    $scope.vodkaPercentage = 0;
    $scope.whiskeyPercentage = 0;
    $scope.beerDifference = 0;
    $scope.vodkaDifference = 0;
    $scope.whiskeyDifference = 0;

    $scope.countAdd = function(drink){
      if(drink === 'beer'){
        $scope.beerCount += 1;
        console.log("BeerCount: "+$scope.beerCount);
      }
      if(drink === 'vodkaBull'){
        $scope.vodkaCount += 1;
        console.log("VodkaCount: "+$scope.vodkaCount);
      }
      if(drink === 'whiskeyCola'){
        $scope.whiskeyColaCount += 1;
        console.log("WhiskeyColaCount: "+$scope.whiskeyCount);
      }
        if(drink === 'spritzer'){
            $scope.spritzerCount += 1;
            console.log("spritzer: "+$scope.whiskeyCount);
        }

    };
      $scope.countWithdraw = function(drink){
          if(drink === 'beer'){
              $scope.beerCount -= 1;
              console.log("BeerCount: "+$scope.beerCount);
          }
          if(drink === 'vodkaBull'){
              $scope.vodkaCount -= 1;
              console.log("VodkaCount: "+$scope.vodkaCount);
          }
          if(drink === 'whiskeyCola'){
              $scope.whiskeyColaCount -= 1;
              console.log("WhiskeyCount: "+$scope.whiskeyCount);
          }
          if(drink === 'spritzer'){
              $scope.spritzerCount -= 1;
              console.log("Spritzer: "+$scope.whiskeyCount);
          }
      };


      $scope.calculate = function() {
        $scope.wholeCount = $scope.beerCount + $scope.vodkaCount + $scope.whiskeyColaCount;

        if($scope.wholeCount == 0){
        return;
        }

        $scope.beerPercentage = ($scope.beerCount/$scope.wholeCount*100);
        $scope.vodkaPercentage = ($scope.vodkaCount/$scope.wholeCount*100);
        $scope.whiskeyPercentage = ($scope.whiskeyColaCount/$scope.wholeCount*100);

        $scope.beerDifference = ($scope.beerPercentage - $scope.basePercentage).toFixed(2);
        $scope.vodkaDifference = ($scope.vodkaPercentage - $scope.basePercentage).toFixed(2);
        $scope.whiskeyDifference = ($scope.whiskeyPercentage - $scope.basePercentage).toFixed(2);

        $scope.beerDifferenceInEuro = ($scope.beerDifference * $scope.differenceFaktorInCent).toFixed(2);
        $scope.vodkaDifferenceInEuro = ($scope.vodkaDifference * $scope.differenceFaktorInCent).toFixed(2);
        $scope.whiskeyDifferenceInEuro = ($scope.whiskeyDifference * $scope.differenceFaktorInCent).toFixed(2);

        $scope.newBeerPrice = (parseInt($scope.beerPrice) + parseInt($scope.beerDifferenceInEuro)).toFixed(2);
        $scope.newVodkaPrice = (parseInt($scope.vodkaPrice) + parseInt($scope.vodkaDifferenceInEuro)).toFixed(2);
        $scope.newWhiskeyPrice = (parseInt($scope.whiskeyPrice) + parseInt($scope.whiskeyDifferenceInEuro)).toFixed(2);

        $scope.log();
    };

    $scope.log = function() {

        console.log("WholeCount: "+$scope.wholeColaCount);
        console.log("Basisprozentsatz: "+$scope.basePercentage);

        console.log("Bieranteil: "+$scope.beerPercentage);
        console.log("Bierabweichung: "+ $scope.beerDifference);
        console.log("Alter Bierpreis: "+ $scope.beerPrice);
        console.log("Bierabweichung in Cent: "+$scope.beerDifferenceInEuro);
        console.log("Neuer Bierpreis: "+ $scope.newBeerPrice);

        console.log("Vodkaanteil: "+$scope.vodkaPercentage);
        console.log("Vodkaabweichung: "+ $scope.beerDifference);
        console.log("Alter Vodkapreis: "+ $scope.vodkaPrice);
        console.log("Vodkaabweichung in Cent: "+$scope.vodkaDifferenceInEuro);
        console.log("Neuer Vodkapreis: "+ $scope.newVodkaPrice);

        console.log("Whiskeyanteil: "+$scope.whiskeyPercentage);
        console.log("Whiskeyabweichung: "+ $scope.whiskeyDifference);
        console.log("Alter Whiskeypreis: "+ $scope.whiskeyPrice);
        console.log("Whiskeyabweichung in Cent: "+$scope.whiskeyDifferenceInEuro);
        console.log("Neuer Whiskeypreis: "+ $scope.newWhiskeyPrice);

    };

    $scope.finished = function(){
      console.log("FINISHED");

      $scope.calculate();
      $scope.$apply();

      $scope.$broadcast('timer-reset');
      $scope.$broadcast('timer-start');
      console.log("RESTARTED");
    };

    /*$scope.$on('timer-stopped', function (event, data){
      $scope.$broadcast('timer-reset');
      $scope.$broadcast('timer-start');
    });*/

    $scope.open = function (drink) {
      $scope.actualDrink = drink;
      $fancyModal.open({
        templateUrl: '../views/modalTemplate.html',
        scope: $scope,
        controller: 'ModalCtrl',
        themeClass: 'fancymodal-theme-classic'
      });
    };

  });
