angular.module('app').controller 'SignupController',
['$scope', 'SignupService', ($scope, SignupService) ->
    $scope.addUser = (newUser) ->
        if newUser.email == undefined || newUser.email == ''
            $scope.signinError_1 = true
        else
            $scope.signupError_1 = false

        if newUser.password == undefined || newUser.password == ''
             $scope.signupError_2 = true
        else
            $scope.signupError_2 = false

        if newUser.confirmPassword == undefined || newUser.confirmPassword == ''
            $scope.signupError_3 = true
        else
            $scope.signupError_3 = false

        if newUser.password != newUser.confirmPassword
            $scope.signupError_4 = true
        else
            $scope.signupError_4 = false

        SignupService.create(newUser).then (data) ->
            switch data
                when 'email-exists'
                    $scope.signupError_5 = true
                when 'email-invalid'
                    $scope.signupError_1 = true
                else
                    $scope.signupError_5 = false
                    $scope.signupError_1 = false
                    $scope.closePopup()
            return
        return

    $scope.togglePopup = ->
        $scope.class            = ''
        $scope.newUser          = {}
        $scope.signupError_1    = $scope.signupError_2 = $scope.signupError_3 = $scope.signupError_4 = $scope.signupError_5 = false
        $scope.showPopup        = true
        return

    $scope.closePopup = ->
        $scope.showPopup    = false
        $scope.class        = 'animated bounceOut'
        return

    return
]
