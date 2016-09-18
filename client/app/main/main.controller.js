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

    $scope.globals = {
    	loops: {
    		name: 'loops',
    		value: 0
    	},
    	currentDay: {
    		name: 'currentDay',
    		value: 0
    	},
    	currentMonth: {
    		name: 'currentMonth',
    		value: 0
    	},
    	totalDays: {
    		name: 'totalDays',
    		value: 0
    	}
    };

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

    function updateGlobals() {
    	$scope.globals.loops.value++;
    	if ($scope.globals.loops.value > 10) {
    		$scope.globals.loops.value = 0;
    		$scope.globals.totalDays.value++;
    		$scope.globals.currentDay.value++;
    		if ($scope.globals.currentDay.value > 30) {
    			$scope.globals.currentDay.value = 0;
    			$scope.globals.currentMonth.value++;
    		}
    	}
    }

    var gameLoop = function() {
    	updateGlobals();
    	humanWork();
    	
    };

    $interval(function() {
    	gameLoop();
    }, 100);

    
  }
}

angular.module('telaganApp')
  .controller('MainController', MainController);

})();
