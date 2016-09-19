'use strict';

(function() {

class MainController {

  constructor($scope, $interval) {
    
    $scope.resources = {
    	energy: {
    		name: 'energy',
    		current: 0,
        storage: {
          capacity: 5,
          slots: 2
        }
    	},
    	money: {
    		name: 'money',
    		current: 0,
    		storage: {
          capacity: 5,
          slots: 2
        }
    	},
    	food: {
    		name: 'food',
    		current: 0,
    		storage: {
          capacity: 5,
          slots: 2
        }
    	},
    };

    $scope.human = {
    	workingAt: null
    };

    $scope.world = {
      rotationPeriod: 24,
      translationPeriod: 365,
    };

    $scope.items = {
    	energySlot: {
    		name: 'energySlot',
        showName: 'Energy Slot',
    		cost: [
          {
      			resource: 'money',
      			value: 2
	        },
          {
            resource: 'food',
            value: 3
          }
        ],
        effect: {
          description: 'Add a new slot of energy',
          update: {
            resource: 'energy',
            parameter: 'slots',
            amount: 1
          }
        }
    	},
      energyCapacity: {
        name: 'energyCapacity',
        showName: 'Energy Capacity',
        cost: [
          {
            resource: 'money',
            value: 2
          },
          {
            resource: 'food',
            value: 3
          }
        ],
        effect: {
          description: 'Add 5 units more of capacity',
          update: {
            resource: 'energy',
            parameter: 'capacity',
            amount: 5
          }
        }
      }
    };

    $scope.globals = {
    	loops: {
    		name: 'loops',
    		value: 0
    	},
      currentHour: {
        name: 'currentHour',
        value: 0
      },
    	currentDay: {
    		name: 'currentDay',
    		value: 0
    	},
    	totalDays: {
    		name: 'totalDays',
    		value: 0
    	}
    };

    $scope.getMaxStorage = function(resource) {
      return $scope.resources[resource].storage.capacity * $scope.resources[resource].storage.slots;
    }

    $scope.canBuy = function(item) {
      return item.cost.every(elem => $scope.resources[elem.resource].current >= elem.value);
    };

    $scope.buyItem = function(item) {
      if ($scope.canBuy(item)) { // Double check
        item.cost.forEach(elem => $scope.resources[elem.resource].current -= elem.value);
        console.log('purchase complete');
        $scope.resources[item.effect.update.resource].storage[item.effect.update.parameter] += item.effect.update.amount;
      }
    };

    $scope.generateResource = function(name) {
    	if($scope.resources[name].current < $scope.getMaxStorage(name)) {
	    	$scope.resources[name].current += 1;
    	}
    };
    
    $scope.isHumanWorkingAt = function(name) {
      return $scope.human.workingAt === name;
    };

    $scope.assignHumanWork = function(name) {
      $scope.human.workingAt = name;
    };

    function humanWork() {
    	if($scope.human.workingAt) {
    		if($scope.resources[$scope.human.workingAt].current < $scope.getMaxStorage($scope.human.workingAt)) {
	    		$scope.resources[$scope.human.workingAt].current += 1;
	    	}
    	}
    }

    function updateGlobals() {
    	$scope.globals.loops.value++;
    	if ($scope.globals.loops.value > 10) {
    		$scope.globals.loops.value = 0;
        $scope.globals.currentHour.value++;
        if ($scope.globals.currentHour.value >= $scope.world.rotationPeriod) {
          $scope.globals.totalDays.value++;
          $scope.globals.currentDay.value++;
          if ($scope.globals.currentDay.value > 30) {
            $scope.globals.currentDay.value = 0;
            $scope.globals.currentMonth.value++;
          }  
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
