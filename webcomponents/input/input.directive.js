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
      const input = component.input
      const isSelect = component.classList.contains('mn-select')

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}
      input.addEventListener('change', setViewValue)
      input.addEventListener('blur', setViewValue)
      input.addEventListener('input', setViewValue)

      element.ready(() => {
        component.value = ngModel.$modelValue
        ngModel.$setViewValue(component.value)
        scope.$watch(attributes.ngModel, setComponentValue)
      })

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value) {
        const differentValue = component.getAttribute('value') !== value && component.value !== value
        const isObjectValue = angular.isObject(value)

        if (!isSelect || differentValue && !isObjectValue) {
          component.value = value
        }
      }

      function setViewValue(event) {
        const activeElement = event.currentTarget === document.activeElement
        const isDate = component.input.type === 'date'
        const isNumber = component.classList.contains('mn-number')
        const isBlur = event.type === 'blur'

        if (isBlur || !activeElement || !isDate && !isNumber && !isSelect) {
          ngModel.$setViewValue(component.value)
        }
      }
    }
  }
}
