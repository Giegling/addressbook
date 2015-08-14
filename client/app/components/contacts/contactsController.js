app.controller('contactsController', function($scope) {
		$scope.friends = [];
		$scope.addContact = function(name, email, number) {
			if (name != null && name.trim().length > 0 && email != null) {
				var contact = {name: name, email: email, number: number};

				contactsService.create(contact).then(function(data) {
					$scope.friends.push(data);
				})
			}
		};
});