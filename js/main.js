var app = angular.module('bare', []);

app.controller('main', function($scope){
	$scope.me = "daval302";
}).directive('navigator',function(){
	return {templateUrl: 'pages/navigator.html'}
});