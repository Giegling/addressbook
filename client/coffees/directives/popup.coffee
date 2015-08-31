app.directive 'modal', ->
    templateUrl: 'components/popup/popup.html'
    restrict: 'E'
    transclude: true
    replace: true
    scope: true
    link: postLink = (scope, element, attrs) ->
        scope.$watch attrs.visible, (value) ->
            if value == true
                $(element).modal 'show'
            else
                $(element).modal 'hide'
        return

    $(element).on 'shown.bs.modal', ->
        scope.$apply ->
            scope.$parent[attrs.visible] = true
            return
        return

    $(element).on 'hidden.bs.modal', ->
        scope.$apply ->
            scope.$parent[attrs.visible] = false
            return
        return
    return
