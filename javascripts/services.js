"use strict";
app.factory("todoService", function(){
	var toDos = {};
	toDos.item = {text: "Get groceries from the store",
				   dueDate: new Date(),
				   completed: false};
	toDos.items = [];

	toDos.items.push(toDos.item);

	toDos.items.push({text: "Cut the lawn",
						dueDate: new Date(),
						completed: false});

	toDos.items.push({text: "Pick up library book",
						dueDate: new Date(),
						completed: false});

	toDos.toDo = {};

	toDos.showingCompleted = true;

	toDos.create = function(){
		toDos.toDo.completed = false;
		toDos.items.push(toDos.toDo);
		toDos.toDo = {};
	};

	toDos.changeCompleted = function(item){
		item.completed = !item.completed;
	};

	toDos.deleteItem = function(item){
		var i = toDos.items.indexOf(item);
		toDos.items.splice(i, 1);
	};

	toDos.clearCompleted = function(){
		var filteredItems = toDos.items.filter(function(item) {
			return item.completed === false;
		});
		toDos.items = filteredItems;
	};

	return toDos;
});