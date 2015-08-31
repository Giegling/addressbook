angular.module('app').factory 'ProfileService',
['$http', '$q', 'appSettings', ($http, $q, appSettings) ->
    read: (user_id) ->
        deferred = $q.defer()
        $http.get appSettings.apiServiceBaseUri + '/profile/check', user_id
        .success (data) ->
            deferred.resolve data
            return
        .error (data, status) ->
            deferred.reject data
            return

        return deferred.promise
]
