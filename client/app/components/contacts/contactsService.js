angular.module('app').factory('ContactsService', ['$http', '$q', 'appSettings', function($http, $q, appSettings) {
	return {
		create: function(contact) {
			var deferred = $q.defer();

			$http.post(appSettings.apiServiceBaseUri + '/contact', contact).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	}
}]);