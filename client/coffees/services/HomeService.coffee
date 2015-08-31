angular.module('app').factory 'SignupService',
['$http', '$q', 'appSettings', ($http, $q, appSettings) ->
    logged = false

    signin: (isLogged) ->
        logged = isLogged
        return logged
    check: ->
        return logged
]
