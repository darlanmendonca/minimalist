/* global angular */

angular
  .module('minimalist')
  .directive('mnList', MnListDirective)
  .directive('ngCollapse', NgCollapseDirective)
  .directive('ngDraggable', NgCollapseDirective)

MnListDirective.$inject = ['$parse']
NgCollapseDirective.$inject = ['$parse']
NgDraggableDirective.$inject = ['$parse']

function MnListDirective($parse) {
  return {
    restrict: 'C',
    link(scope, element, attributes) {
      let model
      scope.$mnListModel =  $parse(attributes.ngModel)(scope)

      element.ready(() => {
        const item = element[0].querySelector('.mn-item[ng-repeat][draggable]')
        let expressionModel
        if (item) {
          expressionModel = item
            .getAttribute('ng-repeat')
            .match(/\sin\s(.+)/)[1].split(' ')[0]

          model = $parse(expressionModel)(scope)
        }

        element.on('reorder', (event) => {
          const {originIndex, targetIndex} = event
          scope.$apply(reorderItems)

          function reorderItems() {
            const value = angular.copy(model[originIndex])
            model[originIndex] = model[targetIndex]
            model[targetIndex] = value
          }
        })

        element.on('rearrange', (event) => {
          const {originIndex, targetList, targetIndex, element} = event

          setTimeout(() => {
            scope.$apply(rearrangeItems)
          }, 0)

          function rearrangeItems() {
            const value = angular.copy(model[originIndex])
            const newNgRepeat = Array
              .from(targetList.children)
              .filter(item => {
                return item.classList.contains('mn-item')
                  && item !== element
                  && item.hasAttribute('ng-repeat') && element.hasAttribute('ng-repeat')
                  // && item.getAttribute('ng-repeat') !== element.getAttribute('ng-repeat')
              })[0].getAttribute('ng-repeat')

            if (newNgRepeat) {
              element.setAttribute('ng-repeat', newNgRepeat)
              const newModel = $parse(newNgRepeat.match(/\sin\s(.+)/)[1].split(' ')[0])(angular.element(element.parentNode).scope())

              if (newModel) {
                newModel.splice(targetIndex, 0, value)
              }
              model.splice(originIndex, 1)
            }
          }
        })
      })

    }
  }
}

function NgCollapseDirective($parse) {
  return {
    restrict: 'A',
    link(scope, element, attributes) {
      const conditional = $parse(attributes.ngCollapse)(scope)

      conditional
        ? element.attr('collapse', '')
        : element.removeAttr('collapse')
    }
  }
}

function NgDraggableDirective($parse) {
  return {
    restrict: 'A',
    link(scope, element, attributes) {
      const conditional = $parse(attributes.ngCollapse)(scope)

      conditional
        ? element.attr('draggable', '')
        : element.removeAttr('draggable')
    }
  }
}
