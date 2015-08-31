app.factory 'Profile', ['$resource', 'appSettings', ($resource, appSettings) ->
    $resource appSettings.apiServiceBaseUri + '/profile'
]
