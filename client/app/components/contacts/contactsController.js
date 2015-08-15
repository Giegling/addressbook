angular.module('app').controller('ContactsController', ['$scope', 'ContactsService', function($scope, ContactsService) {
		$scope.contacts = [];
		$scope.addContact = function(contact) {
			$scope.contact = contact;
			console.log(contact);
			if (contact.name != null && contact.email != null) {

				ContactsService.create(contact).then(function(data) {
					$scope.contacts.push(data);
				})

			}
		};
}]);