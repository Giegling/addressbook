angular.module('app').controller('ProfileController', [
  '$scope', '$location', '$cookies', 'ProfileService', function($scope, $location, $cookies, ProfileService) {
    var isLogged, user_id;
    isLogged = $cookies.get('isLogged');
    user_id = $cookies.get('user_id');
    if (!isLogged) {
      $location.path('/');
    }
    $scope.checkUser = function() {
      ProfileService.read(user_id).then(function(data) {
        $scope.User = {
          _id: user_id,
          email: data.email,
          number: data.number,
          editable: data.editable,
          nick: data.nick,
          name: data.name
        };
      });
    };
    $scope.showEdit = function() {
      $scope.User.editable = true;
    };
    $scope.updateUser = function(fullname, username, number) {
      var updatedUser;
      updatedUser = {
        _id: user_id,
        name: fullname,
        nick: username,
        number: number
      };
      if (updatedUser.name === '' || typeof updatedUser.name === 'undefined' || updatedUser.nick === '' || typeof updatedUser.nick === 'undefined' || updatedUser.number === '' || typeof updatedUser.number === 'undefined') {
        $scope.User.editable = false;
      } else {
        ProfileService.update(updatedUser).then(function(data) {
          $scope.User.editable = false;
        });
      }
    };
    $scope.logout = function() {
      $cookies.remove('isLogged');
      $cookies.remove('user_id');
    };
  }
]);
