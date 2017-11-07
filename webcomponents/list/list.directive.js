/* global angular */

angular
  .module('minimalist')
  .directive('mnList', MnListDirective)

function MnListDirective($parse) {
  return {
    restrict: 'C',
    link(scope, element) {
      let model
      element.ready(() => {
        const item = element[0].querySelector('.mn-item[ng-repeat]')
        const expressionModel = item
          .getAttribute('ng-repeat')
          .match(/\sin\s([\w|\d|\.]+)/)[1]

        model = $parse(expressionModel)(scope)
        // console.log(model)
        // scope.$apply(() => {
        //   model.push('test')
        // })
        // console.log(model)
      //   scope.$watch(attributes.ngModel, setComponentValue)
      //   component.value = component.hasAttribute('value')
      //     ? component.getAttribute('value')
      //     : ngModel.$modelValue
      //   component.default = component.value
      //   component.addEventListener('change', setModelValue)
      //   setModelValue()
      })

      element.on('moveItem', (event) => {
        const {originIndex, targetIndex} = event
        scope.$apply(reorderItems)

        function reorderItems() {
          const value = angular.copy(model[originIndex])
          model[originIndex] = model[targetIndex]
          model[targetIndex] = value
          console.log(model)
        }
      })



      // scope.$on('$destroy', () => {
      //   const keys = attributes.ngModel.split('.')
      //   const prop = keys.pop()
      //   if (scope.$parent[keys[0]]) {
      //     const model = keys.reduce((obj, key) => obj[key], scope.$parent)
      //     delete model[prop]
      //   }
      //   element.remove()
      // })
    }
  }
}
