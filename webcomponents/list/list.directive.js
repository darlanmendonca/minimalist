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

        element[0].addEventListener('moveItem', (event) => {
          const {originIndex, targetIndex, targetElement} = event

          const sameList = angular.equals(targetElement.closest('.mn-list'), element[0])

          if (sameList) {
            scope.$apply(reorderItems)
          }

          function reorderItems() {
            const value = angular.copy(model[originIndex])
            model[originIndex] = model[targetIndex]
            model[targetIndex] = value
          }
        })
      })

    }
  }
}
