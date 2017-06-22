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

      scope.$watch(attributes.ngModel, value => {
        component.value = value
      })

      function setViewValue(event) {
        const activeElement = event.currentTarget === document.activeElement
        const isDate = component.classList.contains('mn-date')

        if (!activeElement || !isDate || event.type === 'blur') {
          ngModel.$setViewValue(component.value)
        }
      }
    }
  }
}

module.exports = 'wow'
