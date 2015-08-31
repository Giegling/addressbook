angular.module('app').factory 'SigninService',
['$http', '$q', 'appSettings', ($http, $q, appSettings) ->
    read: (user) ->
        deferred = $q.defer()
        $http.post appSettings.apiServiceBaseUri + '/signin', user
        .success (data) ->
            deferred.resolve data
            return
        .error (data, status) ->
            deferred.reject data
            return

        return deferred.promise
]
