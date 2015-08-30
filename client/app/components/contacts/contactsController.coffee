angular.module('app').controller 'ContactsController', [
    '$scope', '$location', '$cookies', 'ContactsService',
        ($scope, $location, $cookies, ContactsService) ->

            isLogged = $cookies.get 'isLogged'
            if isLogged == undefined
                $location.path '/'
                return

            $scope.addContact = (newContact) ->
                if newContact.name == undefined && newContact.email == undefined && newContact.number == undefined
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
                        ContactsService.create(contact).then (data) ->
                            $scope.contacts.push data
                            return
                        .then $scope.showContacts
                        $scope.deselect()
                        return

            $scope.showContacts = ->
                ContactsService.read().then (data) ->
                    $scope.savedContacts = data
                    return
                return

            $scope.showEditContact = (contact) ->
                contacts = $scope.savedContacts
                $scope.deselect()

                for i in contacts
                    if contacts[i]._id == contact._id
                        $scope.savedContacts[i].editable = true
                    else if contacts[i].editable
                        $scope.savedContacts[i].editable = false
                return

            $scope.editContact = (newname, newemail, newnumber, contact) ->
                contacts = $scope.savedContacts

                if newname == null || newname == '' || newname.trim().length == 0
                    newname = contact.name

                if newemail == null || newemail == '' || newemail.trim().length == 0
                    newemail = contact.email

                if newnumber == null || newnumber == '' || newnumber.trim().length == 0
                    newnumber = contact.number

                if newname == contact.name && newemail == contact.email && newnumber == contact.number
                    for i in contacts
                        $scope.savedContacts[i].editable = false
                else
                    for i in contacts
                        if contacts[i]._id == contact._id
                            ContactsService.update {
                                _id:    contact._id,
                                name:   newname.trim(),
                                email:  newemail.trim(),
                                number: newnumber.trim()
                            }
                            .then (data) ->
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
                    ContactsService.remove(contact._id).then $scope.showContacts
                    return

                $scope.deselect = ->
                    $scope.contactNew = {
                        name:   '',
                        email:  '',
                        number: ''
                    }
                    $scope.newContact = ''
                    $scope.avatar = './img/noimage.png'
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
                    return

                $scope.order = (predicate) ->
                    $scope.reverse   = ($scope.predicate == predicate)
                    $scope.predicate = predicate
                    return

                return
    ]
