angular.module('app').controller 'ContactsController', [
    '$scope', '$location', '$cookies', 'ContactsService',
        ($scope, $location, $cookies, ContactsService) ->

            isLogged = $cookies.get 'isLogged'
            if typeof isLogged == 'undefined'
                $location.path '/'

            $scope.deselect = ->
                $scope.contactNew = {
                    name:   '',
                    email:  '',
                    number: ''
                }
                $scope.newContact = ''
                $scope.avatar = './img/noimage.png'
                return

            $scope.addContact = (newContact) ->
                if typeof newContact.name == 'undefined' && typeof newContact.email == 'undefined' && typeof newContact.number == 'undefined'
                    return
                else
                    contact = {
                        name:   newContact.name.trim(),
                        email:  newContact.email.trim(),
                        number: newContact.number.trim(),
                        avatar: $scope.avatar
                    }
                    $scope.contacts = []

                    if contact.name.length != 0 && contact.email.length != 0 && contact.length != 0
                        ContactsService.create contact
                        .then (data) ->
                            $scope.contacts.push data
                            return
                        .then $scope.showContacts
                        $scope.deselect()
                        return

            $scope.showContacts = ->
                ContactsService.read()
                .then (data) ->
                    $scope.savedContacts = data
                    return
                return

            $scope.showEditContact = (contact) ->
                contacts = $scope.savedContacts
                $scope.deselect()

                for i of contacts
                    if contacts[i]._id == contact._id
                        $scope.savedContacts[i].editable = true
                    else if contacts[i].editable
                        $scope.savedContacts[i].editable = false
                return

            $scope.editContact = (newname, newemail, newnumber, contact) ->
                contacts = $scope.savedContacts

                if newname == null || newname == ''
                    newname = contact.name

                if newemail == null || newemail == ''
                    newemail = contact.email

                if newnumber == null || newnumber == ''
                    newnumber = contact.number

                if newname == contact.name && newemail == contact.email && newnumber == contact.number
                    for b of contacts
                        $scope.savedContacts[b].editable = false
                else
                    for i of contacts
                        if contacts[i]._id == contact._id
                            ContactsService.update {
                                _id:    contact._id,
                                name:   newname.trim(),
                                email:  newemail.trim(),
                                number: newnumber.trim()
                            }
                            newContact = {
                                name:   newname.trim(),
                                email:  newemail.trim(),
                                number: newnumber.trim()
                            }
                            $scope.savedContacts[i].name        = newContact.name
                            $scope.savedContacts[i].email       = newContact.email
                            $scope.savedContacts[i].number      = newContact.number
                            $scope.savedContacts[i].editable    = false;
                return

            $scope.deleteContact = (contact) ->
                promise = $scope.showContacts()
                ContactsService.remove(contact._id).then $scope.showContacts()
                return

            $scope.readImage = (element) ->
                reader = new FileReader()
                reader.onload = (e) ->
                    $scope.avatar = e.target.result
                    return
                reader.readAsDataURL element.files[0]
                return

            $scope.logout = ->
                $cookies.remove 'isLogged'
                $cookies.remove 'user_id'
                return

            $scope.order = (predicate) ->
                $scope.reverse   = ($scope.predicate == predicate)
                $scope.predicate = predicate
                return

            return
    ]
