app.factory 'Signup', ['$resource', 'appSettings', ($resource, appSettings) ->
    $resource appSettings.apiServiceBaseUri + '/signup'
]
