/* global angular */

angular
  .module('minimalist')
  .directive('mnCheckbox', MnCheckboxDirective)

module.exports = MnCheckboxDirective

function MnCheckboxDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes, ngModel) {
      const component = element[0]

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}

      element.ready(() => {
        component.ready = true
        scope.$watch(attributes.ngModel, setComponentValue)
        component.value = ngModel.$modelValue
        component.input.addEventListener('change', setModelValue)
        ngModel.$setViewValue(component.value)
      })

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value, oldValue) {
        if (!angular.equals(value, oldValue)) {
          component.value = value
        }
      }

      function setModelValue() {
        const modelApplied = angular.equals(ngModel.$modelValue, component.value)
        if (!modelApplied) {
          ngModel.$setViewValue(component.value)
        }
      }
    }
  }
}
