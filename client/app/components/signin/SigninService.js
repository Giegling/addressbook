angular.module('app').factory('SigninService', ['$http', '$q', 'appSettings', function($http, $q, appSettings) {
	return {
		read: function(user) {
			var deferred = $q.defer();

			$http.post(appSettings.apiServiceBaseUri + '/signin', user).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	}
}]);