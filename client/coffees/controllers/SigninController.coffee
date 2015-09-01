angular.module('app').controller 'SigninController',
['$scope', '$cookies', 'SigninService', ($scope, $cookies, SigninService) ->
    $scope.sendUser = (User) ->
        $scope.User = User;

        if typeof User.email == 'undefined' || User.email == ''
            $scope.signinError_1 = true
        else
            $scope.signinError_1 = false

        if typeof User.password == 'undefined' || User.password == ''
            $scope.signinError_2 = true
        else
            $scope.signinError_2 = false

        if typeof User.email != 'undefined' && User.email != '' && typeof User.password != 'undefined' && User.password != ''
            SigninService.read User
            .then (data) ->
                switch data
                    when 'email'
                        $scope.signinError_3 = true
                        return
                    when 'password'
                        $scope.signinError_4 = true
                        return
                    else
                        $scope.signinError_3 = false
                        $scope.signinError_4 = false
                        $scope.closePopup()
                        $cookies.put 'isLogged', 'true'
                        $cookies.put 'user_id', data
                        $scope.checkLogged()
                        return

            return

    $scope.togglePopup = ->
        $scope.class = ''
        $scope.User = {}
        $scope.signinError_1 = $scope.signinError_2 = $scope.signinError_3 = $scope.signinError_4 = false
        $scope.showPopup = true
        return

    $scope.closePopup = ->
        $scope.showPopup = false
        $scope.class = 'animated bounceOut'
        return

    $scope.logout = ->
        $cookies.remove 'isLogged'
        $cookise.remove 'user_id'
        $scope.checkLogged()
        return

    return
]
