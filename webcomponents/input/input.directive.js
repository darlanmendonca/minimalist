/* global angular */

angular
  .module('minimalist')
  .directive('mnInput', MnInputDirective)

function MnInputDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes, ngModel) {
      const component = element[0]

      ngModel.$validators = {}

      // element.bind('ready', () => {
      //   console.log('ready dispatched')
      //   component.value = ngModel.$modelValue
      // })

      element.ready(() => {
        scope.$watch(attributes.ngModel, setComponentValue)
        component.value = ngModel.$modelValue
        component.addEventListener('change', setModelValue)
        setModelValue()
      })

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value) {
        component.value = value
      }

      function setModelValue() {
        const modelApplied = angular.equals(ngModel.$modelValue, component.value)

        if (!modelApplied) {
          ngModel.$setViewValue(component.value)
        }
      }

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

    }
  }
}
