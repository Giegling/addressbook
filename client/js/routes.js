app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/default.html',
    })

    .when('/contacts', {
      templateUrl: 'views/contacts.html',
    })

    .when('/profile', {
    	templateUrl: 'views/profile.html',
    })

    .when('/recover_password', {
      templateUrl: 'views/recover-password.html',
    })
})