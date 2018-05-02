var app = angular.module('bare', []);

app.controller('main', function($scope){
	
	$scope.navigator = {'Home': 'active', 'About': null, 'Services': null, 'Contact': null};

}).directive('navigator',function(){
	return {templateUrl: 'pages/navigator.html'}
}).directive('content',function(){
	return {templateUrl: 'pages/content.html'}
});