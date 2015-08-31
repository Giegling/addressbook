angular.module('app').controller 'HomeController',
['$scope', '$cookies', 'HomeService', ($scope, $cookies, HomeService) ->
    $scope.isLogged = $cookies.get 'isLogged'
    $scope.checkLogged = ->
        $scope.isLogged = $cookies.get 'isLogged'
        return

    return
]
