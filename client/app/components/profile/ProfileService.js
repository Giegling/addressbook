angular.module('app').factory('ProfileService', [
  '$http', '$q', 'appSettings', function($http, $q, appSettings) {
    return {
      read: function(user_id) {
        var deferred;
        deferred = $q.defer();
        $http.get(appSettings.apiServiceBaseUri + '/profile/check', user_id).success(function(data) {
          deferred.resolve(data);
        }).error(function(data, status) {
          deferred.reject(data);
        });
        return deferred.promise;
      }
    };
  }
]);
