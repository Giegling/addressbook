app.controller('MainCtrl', function ($scope) {
  $scope.showPopup = false;
	$scope.buttonClicked = "";
  $scope.togglePopup = function(btnClicked, path) {
		$scope.buttonClicked = btnClicked;
		$scope.showPopup = !$scope.showPopup;
    $scope.filePath = '/views/' + path;

    return btnClicked;
  };
});