'use strict';

app.factory('Signin', ['$resource', 'appSettings', function ($resource, appSettings) {
	return $resource(appSettings.apiServiceBaseUri + "/signin");
}])