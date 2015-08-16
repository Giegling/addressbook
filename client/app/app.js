var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	
	$routeProvider

		.when("/", {
			controller: '',
			templateUrl: "/components/home/home.html"
		})
		.when("/profile", {
			controller: '',
			templateUrl: "/components/profile/profile.html"
		})
		.when("/contacts", {
			controller: 'ContactsController',
			templateUrl: "/components/contacts/contacts.html",
		})
});

app.constant('appSettings', {
	apiServiceBaseUri: "http://localhost:3001/api"
});