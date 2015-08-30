angular.module('app').factory 'ContactsService', [
    '$http', '$q', 'appSettings', ($http, $q, appSettings) ->
        create: (contact) ->
            deferred = $q.defer()
            $http.post appSettings.apiServiceBaseUri + '/contact/create', contact
            .success (data) ->
                deferred.resolve data
                return
            .error (data, status) ->
                deferred.reject data
                return

            return deferred.promise

        read: ->
            deferred = $q.defer()
            $http.get appSettings.apiServiceBaseUri + '/contact/read'
            .success (data) ->
                deferred.resolve data
                return
            .error (data, status) ->
                deferred.reject data
                return

            return deferred.promise

        update: (contact) ->
            deferred = $q.defer()
            $http.put appSettings.apiServiceBaseUri + '/contact/update', contact
            .success (data) ->
                deferred.resolve data
                return
            .error (data, status) ->
                deferred.reject data
                return

            return deferred.promise

        remove: (id) ->
            deferred = $q.defer()
            $http.delete appSettings.apiServiceBaseUri + '/contact/remove/' + id
            .success (data) ->
                deferred.resolve data
                return
            .error (data, status) ->
                deferred.reject data
                return

            return deferred.promise


]
