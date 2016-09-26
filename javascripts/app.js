"use strict";

var app = angular.module('todo', []);

app.controller('TodoCtrl', ['$scope', function($scope){
	$scope.item = {text: "Get groceries from the store",
				   dueDate: new Date(),
				   completed: false};
	$scope.items = [];

	$scope.items.push($scope.item);

	$scope.items.push({text: "Cut the lawn",
						dueDate: new Date(),
						completed: false});

	$scope.items.push({text: "Pick up library book",
						dueDate: new Date(),
						completed: false});

	$scope.toDo = {};

	$scope.showingCompleted = true;

	$scope.createToDo = function() {
		$scope.toDo.completed = false;
		$scope.items.push($scope.toDo);
		$scope.toDo = {};
	};

	$scope.changeCompleted = function(item) {
		item.completed = !item.completed;
	};

	$scope.deleteItem = function(item) {
		var i = $scope.items.indexOf(item);
		$scope.items.splice(i, 1);
	};

	$scope.clearCompleted = function() {
		var filteredItems = $scope.items.filter(function(item) {
			return item.completed === false;
		});
		$scope.items = filteredItems;
	};

	$scope.showCompleted = function(){
		$scope.showingCompleted = true;
	};

	$scope.hideCompleted = function(){
		$scope.showingCompleted = false;
	}; 

}]);
	app.directive = ("toDoItem", function(){
		
	})