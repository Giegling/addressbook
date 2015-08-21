angular.module('app').controller('SignupController', ['$scope', 'SignupService', function($scope, SignupService) {

	$scope.addUser = function (newUser) {
		
		if (newUser.email == undefined || newUser.email == '') {
			$scope.signupError_1 = true;
		} else {
			$scope.signupError_1 = false;
		}

		if (newUser.password == undefined || newUser.password == '') {
			$scope.signupError_2 = true;
		} else {
			$scope.signupError_2 = false;
		}

		if (newUser.confirmPassword == undefined || newUser.confirmPassword == '') {
			$scope.signupError_3 = true;
		} else {
			$scope.signupError_3 = false;
		}

		if (newUser.password != newUser.confirmPassword) {
			$scope.signupError_4 = true;
		} else {
			$scope.signupError_4 = false;
		}

		if (newUser.email != undefined && newUser.email != '' && newUser.password != undefined && newUser.password != '' && newUser.confirmPassword != undefined && newUser.confirmPassword != '') {

			SignupService.create(newUser).then(function(data) {
				switch (data) {
					case 'email-exists':
						$scope.signupError_5 = true;
						break;
					case 'email-invalid':
						$scope.signupError_1 = true;
						break;
					default:
						$scope.signupError_1 = false;
						$scope.signupError_5 = false;
						$scope.closePopup();
				}
			});

		}
		
	};

	$scope.togglePopup = function() {
		$scope.class = '';
	    $scope.newUser = {};
		$scope.signupError_1 = $scope.signupError_2 = $scope.signupError_3 = $scope.signupError_4 = $scope.signupError_5 = false;
	    $scope.showPopup = true;
  	};

  	$scope.closePopup = function() {
		$scope.showPopup = false;
		$scope.class = 'animated bounceOut';
	};

}]);