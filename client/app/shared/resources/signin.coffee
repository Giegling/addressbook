app.factory 'Signin', ['$resource', 'appSettings', ($resource, appSettings) ->
    $resource appSettings.apiServiceBaseUri + '/signin'
]
