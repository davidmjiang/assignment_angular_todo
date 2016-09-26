"use strict";
app.controller('TodoCtrl', ['$scope', 'todoService', function($scope, todoService){

	$scope.toDo = todoService.toDo;

	$scope.showingCompleted = true;

	$scope.createToDo = function() {
		todoService.create();
	};

	$scope.changeCompleted = function(item) {
		todoService.changeCompleted(item);
	};

	$scope.deleteItem = function(item) {
		todoService.deleteItem(item);
	};

	$scope.clearCompleted = function() {
		todoService.clearCompleted();
	};

	$scope.showCompleted = function(){
		$scope.showingCompleted = true;
	};

	$scope.hideCompleted = function(){
		$scope.showingCompleted = false;
	};

}]);
