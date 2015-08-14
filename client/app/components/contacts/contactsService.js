app.factory('contactsService', function($http, $q, Options) {
	create: function(contact) {
			var deferred = $q.defer();

			$http.post(Options.baseUrl + '/contacts', contact).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
	}
});