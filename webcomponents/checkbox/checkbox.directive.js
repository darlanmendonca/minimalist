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
      const input = component.input

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}
      input.addEventListener('change', setModelValue)

      element.ready(() => {
        component.ready = true
        component.value = ngModel.$modelValue
        ngModel.$setViewValue(component.value)
        scope.$watch(attributes.ngModel, setComponentValue)
      })

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value) {
        if (angular.isDefined(value)) {
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
