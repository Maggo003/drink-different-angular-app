'use strict';

/**
 * @ngdoc function
 * @name angularWebAppApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the angularWebAppApp
 */
angular.module('angularWebAppApp')
  .controller('ModalCtrl', function ($scope) {

    if($scope.actualDrink == 'beer'){

    }

    $scope.count = 1;
    $scope.minus = function(){
      if($scope.count > 1){
        $scope.count --;
      }
    };

    $scope.plus = function(){
      $scope.count ++;
    };

    $scope.bookIt = function(drink){
      if(drink == 'beer'){
        $scope.beerCount = $scope.count;
      } else if(drink == 'vodka'){
        $scope.vodkaCount = $scope.count;
      } else {
        $scope.whiskeyCount = $scope.count;
      }

      console.log("BEER: "+$scope.beerCount);
      console.log("VODKA: "+$scope.vodkaCount);
      console.log("WHISKEY: "+$scope.whiskeyCount);

    }

  });
