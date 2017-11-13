/* global angular */

angular
  .module('minimalist')
  .directive('mnList', MnListDirective)

MnListDirective.$inject = ['$parse']

function MnListDirective($parse) {
  return {
    restrict: 'C',
    link(scope, element) {
      let model
      element.ready(() => {
        const item = element[0].querySelector('.mn-item[ng-repeat][draggable]')
        if (item) {
          const expressionModel = item
            .getAttribute('ng-repeat')
            .match(/\sin\s([\w|\d|\.]+)/)[1]

          model = $parse(expressionModel)(scope)
        }
      })

      element.on('moveItem', (event) => {
        const {originIndex, targetIndex} = event
        scope.$apply(reorderItems)

        function reorderItems() {
          const value = angular.copy(model[originIndex])
          model[originIndex] = model[targetIndex]
          model[targetIndex] = value
        }
      })
    }
  }
}
