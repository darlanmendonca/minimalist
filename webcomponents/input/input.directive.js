const angular = require('angular')

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

      input.addEventListener('change', setViewValue)
      input.addEventListener('blur', setViewValue)
      input.addEventListener('input', setViewValue)

      scope.$watch(attributes.ngModel, (value) => {
        const isSelect = component.classList.contains('mn-select')

        if (!isSelect || component.getAttribute('value') !== value && !angular.isObject(value)) {
          component.value = value
        }
      })

      function setViewValue(event) {
        const activeElement = event.currentTarget === document.activeElement
        const isDate = component.input.type === 'date'//component.classList.contains('mn-date')
        const isNumber = component.classList.contains('mn-number')
        const isBlur = event.type === 'blur'

        if (isBlur || !activeElement || !isDate && !isNumber) {
          ngModel.$setViewValue(component.value)
        }
      }
    }
  }
}

module.exports = 'wow'
