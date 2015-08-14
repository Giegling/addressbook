app.controller('PopupCtrl', function ($scope) {
  $scope.showPopup = false;
  $scope.buttonClicked = "";
  $scope.togglePopup = function(btnClicked, path) {
    $scope.buttonClicked = btnClicked;
    $scope.showPopup = !$scope.showPopup;
    $scope.filePath = '/components/' + path + '/' + path + '.html';

    return btnClicked;
  };
});

app.directive('modal', function () {
    return {
      templateUrl: 'components/popup/popup.html',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });