app = angular.module 'app', ['ngRoute', 'ngCookies']

app.config ($routeProvider) ->
    $routeProvider

        .when "/", {
            controller: 'HomeController'
            templateUrl: '/components/home/home.html'
        }

        .when "/profile", {
            controller: 'ProfileController'
            templateUrl: '/components/profile/profile.html'
        }

        .when "/contacts", {
            controller: 'ContactsController'
            templateUrl: '/components/contacts/contacts.html'
        }

    return

app.constant 'appSettings', {
    apiServiceBaseUri: 'http://localhost:3001/api'
}
