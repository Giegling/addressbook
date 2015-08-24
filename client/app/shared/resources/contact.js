'use strict';

app.factory('Contact', ['$resource', 'appSettings', function ($resource, appSettings) {
	return $resource(appSettings.apiServiceBaseUri + "/contact");
}]);