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

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}

      element.ready(() => {
        scope.$watch(attributes.ngModel, setComponentValue)
        component.value = component.hasAttribute('value')
          ? component.getAttribute('value')
          : ngModel.$modelValue
        component.default = component.value
        component.addEventListener('change', setModelValue)
        setModelValue()
      })

      scope.$on('$destroy', () => {
        const keys = attributes.ngModel.split('.')
        const prop = keys.pop()
        const model = keys.reduce((obj, key) => obj[key], scope.$parent)
        delete model[prop]
        element.remove()
      })

      function setComponentValue(value, oldValue) {
        if (component.hasAttribute('multiple')) {
          if (!angular.equals(value, oldValue) && !angular.isArray(value)) {
            component.value = value
          }
        } else if (angular.isDefined(value)) {
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
