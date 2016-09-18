'use strict';

(function() {

class MainController {

  constructor($scope, $interval) {
    
    $scope.resources = {
    	energy: {
    		name: 'energy',
    		current: 0,
    		max: 10
    	},
    	money: {
    		name: 'money',
    		current: 0,
    		max: 10
    	},
    	food: {
    		name: 'food',
    		current: 0,
    		max: 10
    	},
    };

    $scope.human = {
    	workingAt: null
    };

    $scope.world = {};

    $scope.generateResource = function(name) {
    	$scope.human.workingAt = name;
    	if($scope.resources[name].current < $scope.resources[name].max) {
	    	$scope.resources[name].current += 1;
    	}
    };
    
    function humanWork() {
    	if($scope.human.workingAt) {
    		if($scope.resources[$scope.human.workingAt].current < $scope.resources[$scope.human.workingAt].max) {
	    		$scope.resources[$scope.human.workingAt].current += 1;
	    	}
    	}
    }

    var gameLoop = function() {
    	humanWork();
    	
    };

    // Run UI update code every 10ms
    $interval(function() {
    	gameLoop();
      
    }, 100);

    
  }
}

angular.module('telaganApp')
  .controller('MainController', MainController);

})();
