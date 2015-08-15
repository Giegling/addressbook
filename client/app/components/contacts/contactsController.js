angular.module('app').controller('ContactsController', ['$scope', 'ContactsService', function($scope, ContactsService) {
		var data = {};
		
		$scope.contacts = [];

		$scope.addContact = function(newContact) {
			var contact = {name: newContact.name.trim(), email: newContact.email.trim(), number: newContact.number.trim()};
			var promise = $scope.showContacts();
			
			if (contact.name != "" && contact.email != "" && contact.number != "") {

				ContactsService.create(contact).then(function(data) {
					$scope.contacts.push(data);
				}).then($scope.showContacts);
			}
		};

		$scope.showContacts = function() {

			ContactsService.read().then(function(data) {
				$scope.savedContacts = data;
			})

		};


		$scope.deleteContact = function(contact) {
			var promise = $scope.showContacts();

			ContactsService.remove(contact._id).then($scope.showContacts);
		};

}]);