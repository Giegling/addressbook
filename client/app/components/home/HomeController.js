angular.module('app').controller('HomeController', ['$scope', '$cookies', 'HomeService', function($scope, $cookies, HomeService) {
	
	$scope.isLogged = $cookies.get('isLogged');

	$scope.checkLogged = function() {
		$scope.isLogged = $cookies.get('isLogged');
	};

}]);