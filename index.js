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

      scope.$watch('show_editor', function (v) {
        if (v) {
          window.document.body.style.overflow = 'hidden';
          return;
        }

        window.document.body.style.overflow = 'inherit';
      });
    },
    controller: function ($scope) {
      $scope.show_editor = false;

      $scope.toggle = function () {
        $scope.show_editor = !$scope.show_editor;
      };
    }

  };

});
