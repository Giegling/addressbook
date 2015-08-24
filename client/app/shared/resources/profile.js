'use strict';

app.factory('Profile', ['$resource', 'appSettings', function ($resource, appSettings) {
	return $resource(appSettings.apiServiceBaseUri + "/profile");
}]);