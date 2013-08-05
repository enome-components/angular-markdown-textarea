require('angular-markdown-editor');

var module = window.angular.module('markdown-textarea', ['markdown-editor']);

module.directive('markdownTextarea', function () {

  return {
    restrict: 'E',
    template: require('./template'),
    replace: true,
    scope: { data: '=' },
    link: function (scope, el, attr) {
      scope.fileserver = attr.fileserver;
    },
    controller: function ($scope) {
      $scope.show_editor = false;

      $scope.toggle = function () {
        $scope.show_editor = !$scope.show_editor;
      };
    }

  };

});
