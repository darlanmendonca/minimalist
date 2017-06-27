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

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      input.addEventListener('change', setViewValue)
      input.addEventListener('blur', setViewValue)
      input.addEventListener('input', setViewValue)

      element.ready(() => {
        component.value = ngModel.$modelValue
        ngModel.$setViewValue(component.value)
        scope.$watch(attributes.ngModel, setComponentValue)
      })

      function setComponentValue(value) {
        const isSelect = component.classList.contains('mn-select')

        if (!isSelect || component.getAttribute('value') !== value && !angular.isObject(value)) {
          component.value = value
        }
      }

      function setViewValue(event) {
        const activeElement = event.currentTarget === document.activeElement
        const isDate = component.input.type === 'date'
        const isNumber = component.classList.contains('mn-number')
        const isBlur = event.type === 'blur'
        const isSelect = component.classList.contains('mn-select')

        if (isBlur || !activeElement || !isDate && !isNumber && !isSelect) {
          ngModel.$setViewValue(component.value)
        }
      }
    }
  }
}
