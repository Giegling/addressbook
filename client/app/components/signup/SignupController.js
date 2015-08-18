angular.module('app').controller('SignupController', ['$scope', 'SignupService', function($scope, SignupService) {

	$scope.addUser = function (newUser) {
		
		if (newUser.email == undefined) {
			$scope.signupError_1 = true;
		} else {
			$scope.signupError_1 = false;
		}

		if (newUser.password == undefined) {
			$scope.signupError_2 = true;
		} else {
			$scope.signupError_2 = false;
		}

		if (newUser.confirmPassword == undefined) {
			$scope.signupError_3 = true;
		} else {
			$scope.signupError_3 = false;
		}

		if (newUser.password != newUser.confirmPassword) {
			$scope.signupError_4 = true;
		} else {
			$scope.signupError_4 = false;
		}

		if (newUser.email != undefined && newUser.password != undefined && newUser.confirmPassword != undefined) {

			if(newUser.email.trim().length != 0 && newUser.password.trim().length != 0 && newUser.confirmPassword.trim().length != 0 && newUser.password == newUser.confirmPassword) {
				var user = {email: newUser.email.trim(), password: newUser.password.trim()};
				$scope.users = [];

				if (user.email.length != 0 && user.password.length != 0) {
					SignupService.create(user).then(function(data) {
						$scope.users.push(data);
					});
				}
			}

		}
		
	};

	$scope.clearSignup = function() {
		$scope.newUser = {};
		$scope.signupError_1 = $scope.signupError_2 = $scope.signupError_3 = $scope.signupError_4 = false;
	};

	$scope.togglePopup = function() {
	    $scope.clearSignup();
	    $scope.showPopup = true;
  	};

}]);