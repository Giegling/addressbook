angular.module('app').controller('ContactsController', ['$scope', 'ContactsService', function($scope, ContactsService) {
		$scope.contacts = [];

		$scope.addContact = function(contact) {
			var contact = {name: contact.name.trim(), email: contact.email.trim(), number: contact.number.trim()};
			
			if (contact.name != "" && contact.email != "" && contact.number != "") {

				ContactsService.create(contact).then(function(data) {
					$scope.contacts.push(data);
				})

			}
		};

		$scope.deleteContact = function(contact) {
			
			ContactsService.remove(contact._id);
		};
}]);