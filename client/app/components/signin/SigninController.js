angular.module('app').controller('SigninController', ['$scope', '$cookies', 'SigninService', 'HomeService', function($scope, $cookies, SigninService, HomeService) {

	$scope.sendUser = function (User) {
		$scope.User = User;

		if (User.email == undefined || User.email == '') {
			$scope.signinError_1 = true;
		} else {
			$scope.signinError_1 = false;
		}

		if (User.password == undefined || User.password == '') {
			$scope.signinError_2 = true;
		} else {
			$scope.signinError_2 = false;
		}

		if (User.email != undefined && User.email != '' && User.password != undefined && User.password != '') {
			SigninService.read(User).then(function(data) {
				switch (data) {
					case 'email':
						$scope.signinError_3 = true;
						break;
					case 'password':
						$scope.signinError_4 = true;
						break;
					default:
						$scope.signinError_3 = false;
						$scope.signinError_4 = false;
						$scope.closePopup();
						$cookies.put('isLogged', 'true');
						$scope.checkLogged();
				}
			});
		}

	};

	$scope.togglePopup = function() {
		$scope.class = '';
		$scope.User = {};
		$scope.signinError_1 = $scope.signinError_2 = $scope.signinError_3 = $scope.signinError_4 = false;
		$scope.showPopup = true;
	};

	$scope.closePopup = function() {
		$scope.showPopup = false;
		$scope.class = 'animated bounceOut';
	};

	$scope.logout = function() {
		$cookies.remove('isLogged');
		$scope.checkLogged();
	}

}]);