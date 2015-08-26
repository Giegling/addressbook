'use strict';

app.factory('Signup', ['$resource', 'appSettings', function ($resource, appSettings) {
	return $resource(appSettings.apiServiceBaseUri + "/signup");
}])