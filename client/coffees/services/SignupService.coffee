angular.module('app').factory 'SignupService',
['$http', '$q', 'appSettings', ($http, $q, appSettings) ->
    create: (user) ->
        deferred = $q.defer()
        $http.post appSettings.apiServiceBaseUri + '/signup', user
        .success (data) ->
            deferred.resolve data
            return
        .error (data, status) ->
            deferred.reject data
            return
        return
]
