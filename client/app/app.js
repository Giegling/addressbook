var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {


	$routeProvider

		.when("/", {
			templateUrl: "/components/home/home.html"
		})
		.when("/profile", {
			templateUrl: "/components/profile/profile.html"
		})
		.when("/contacts", {
			templateUrl: "/components/contacts/contacts.html"
		})
});

app.constant('appSettings', {
	apiServiceBaseUri: "http://localhost:3001/api/v1"
});
