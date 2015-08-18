angular.module('app').controller('SigninController', ['$scope', 'SigninService', function($scope, SigninService) {

	$scope.sendUser = function (User) {

		if (User.email == undefined) {
			$scope.signinError_1 = true;
		} else {
			$scope.signinError_1 = false;
		}

		if (User.password == undefined) {
			$scope.signinError_2 = true;
		} else {
			$scope.signinError_2 = false;
		}

		if (User.email != undefined && User.password != undefined) {

			if (User.email.trim().length != 0 && User.password.trim().length != 0) {
				SigninService.read(User);
			}

		}

		$scope.showPopup = false;

	};

	$scope.togglePopup = function() {
		$scope.showPopup = true;
	}
}])