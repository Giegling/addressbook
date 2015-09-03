angular.module('app').controller 'ProfileController',
['$scope', '$location', '$cookies', 'ProfileService', ($scope, $location, $cookies, ProfileService) ->
    isLogged = $cookies.get 'isLogged'
    user_id = $cookies.get 'user_id'

    if !isLogged
        $location.path '/'

    $scope.checkUser = ->
        ProfileService.read user_id
        .then (data) ->
            $scope.User = {
                _id:        user_id,
                email:      data.email,
                number:     data.number,
                editable:   data.editable,
                nick:       data.nick,
                name:       data.name
            }
            return
        return

    $scope.showEdit = ->
        $scope.User.editable = true
        return

    $scope.updateUser = (fullname, username, number) ->
        updatedUser = {
            _id:    user_id,
            name:   fullname,
            nick:   username,
            number: number
        }

        if updatedUser.name == '' || typeof updatedUser.name == 'undefined' || updatedUser.nick == '' || typeof updatedUser.nick == 'undefined' || updatedUser.number == '' || typeof updatedUser.number == 'undefined'
            $scope.User.editable = false
        else
            ProfileService.update updatedUser
            .then (data) ->
                $scope.User.editable = false
                return

        return

    $scope.logout = ->
        $cookies.remove 'isLogged'
        $cookies.remove 'user_id'
        return

    return
]
