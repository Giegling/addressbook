angular.module('app').factory('HomeService', function() {
	var logged = false;
	return {
		signin: function(isLogged) {
			logged = isLogged;
			return logged;
		},
		check: function() {
			return logged;
		}
	};
});