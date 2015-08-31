angular.module('app').controller 'ProfileController',
['$scope', '$cookies', 'ProfileService', ($scope, $cookies, ProfileService) ->
    isLogged = $cookies.get 'isLogged'

    if isLogged
        $location.path '/'

    $scope.checkUser = ->
        user_id = $cookies.get 'user_id'

        ProfileService.read user_id
        .then (data) ->
            $scope.User = {
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

    return
]
