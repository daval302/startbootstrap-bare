var app = angular.module('bare', []);

app.controller('main', function($scope){
	
	$scope.navigator = {
		'Home': 'active', 
		'About': null, 
		'Services': null, 
		'Contact': null
	};

	$scope.content = {
		title: 'A Bootstrap 4 Starter Template',
		description: 'Complete with pre-defined file paths and responsive navigation!',
		dependencies: ['Bootstrap 4.0.0', 'jQuery 3.3.0', 'Angular 1.6.10']
	}

	$scope.select = function(key_item){
		for (key in $scope.navigator)
			if ($scope.navigator[key] == 'active')
				$scope.navigator[key] = null;
		// select the element
		$scope.navigator[key_item] = 'active';
	}


}).directive('navigator',function(){
	return {templateUrl: 'pages/navigator.html'}
}).directive('content',function(){
	return {templateUrl: 'pages/content.html'}
});