angular.module('app').controller('ProfileController', ['$scope', '$cookies', 'ProfileService', function($scope, $cookies, ProfileService) {

	var isLogged = $cookies.get('isLogged');

	if (isLogged == undefined) {
			$location.path("/");
	}

	$scope.checkUser = function () {
		user_id = $cookies.get('user_id');

		ProfileService.read(user_id).then(function (data) {
			$scope.User = {email: data.email, number: data.number, editable: data.editable, nick: data.nick, name: data.name};
		});
	};

	$scope.showEdit = function () {
		$scope.User.editable = true;
	};

}]);