angular.module('randomNumberGenerator', [])
	.controller('MainCtrl', function($scope) {
		$scope.data = {};
		$scope.data.min = 0;
		$scope.data.max = 10;
		$scope.data.integers = true;
	});