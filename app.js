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
}]);