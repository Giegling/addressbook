angular.module('app').controller('ContactsController', ['$scope', 'ContactsService', function($scope, ContactsService) {
		var data = {};
		
		$scope.contacts = [];

		$scope.addContact = function(newContact) {
			var contact = {name: newContact.name.trim(), email: newContact.email.trim(), number: newContact.number.trim(), avatar: $scope.avatar};
			var promise = $scope.showContacts();
			
			if (contact.name != "" && contact.email != "" && contact.number != "") {

				ContactsService.create(contact).then(function(data) {
					$scope.contacts.push(data);
				}).then($scope.showContacts);
				$scope.deselect();
			}
		};

		$scope.showContacts = function() {

			ContactsService.read().then(function(data) {
				$scope.savedContacts = data;
			});

		};

		$scope.showEditContact = function(contact) {
			var contacts = $scope.savedContacts;

			for (var i in contacts) {
				if (contacts[i]._id == contact._id) {
					$scope.savedContacts[i].editable = true;
				} else {
					if (contacts[i].editable) {
						$scope.savedContacts[i].editable = false;
					}
				}
			}
		};

		$scope.editContact = function(newname, newemail, newnumber, contact) {
			var contacts = $scope.savedContacts;

			if (newname == null || newemail == null || newnumber == null) {
				for (var i in contacts) {
					$scope.savedContacts[i].editable = false;
				}
				return ;
			} else {

					for (var i in contacts) {

					if (contacts[i]._id == contact._id) {

						ContactsService.update({_id: contact._id, name: newname.trim(), email: newemail.trim(), number: newnumber.trim()})
						.then(function(data) {
							var newContact = {name: newname.trim(), email: newemail.trim(), number: newnumber.trim()};
							$scope.savedContacts[i].name = newContact.name;
							$scope.savedContacts[i].email = newContact.email;
							$scope.savedContacts[i].number = newContact.number;
							$scope.savedContacts[i].editable = false;
						});
					}
				}

			}
		};

		$scope.deleteContact = function(contact) {
			var promise = $scope.showContacts();

			ContactsService.remove(contact._id).then($scope.showContacts);
		};

		$scope.deselect = function() {
			$scope.newContact = '';
			$scope.avatar = './img/noimage.png';
		};

		$scope.readImage = function(element) {
			var reader = new FileReader();

			reader.onload = function(e) {
				$scope.avatar = e.target.result;
			}

			reader.readAsDataURL(element.files[0]);
		};
}]);