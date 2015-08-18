angular.module('app').factory('SignupService', ['$http', '$q', 'appSettings', function($http, $q, appSettings) {
	return {
		create: function(user) {
			var deferred = $q.defer();
			
			$http.post(appSettings.apiServiceBaseUri + '/signup', user).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	}
}]);