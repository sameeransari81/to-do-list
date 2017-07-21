var ngTodo = angular.module('ngTodo',[]);

ngTodo.controller('mainController', function($scope) {
	$scope.Todos=[{
		'title' :'Do my Homework',
		'details':'I must do my homework'
	},
	{
		'title':'Acadview',
		'details':'Acadview is damn awesome'
	},
	{
		'title':'assignment',
		'details':'i must do my assignment'
	}]
	$scope.addwork = function(title, detail){
		$scope.Todos.push({
			title: title,
			details: detail
		});
		
	}
	$scope.deletework = function(work){
		var index = $scope.Todos.indexOf(work);
		$scope.Todos.splice(index , 1);
	}
	
});