app.factory 'Contact', ['$resource', 'appSettings', ($resource, appSettings) ->
    $resource appSettings.apiServiceBaseUri + '/contact'
]
