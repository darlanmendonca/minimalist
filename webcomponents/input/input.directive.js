const angular = require('angular')

angular
  .module('minimalist')
  .directive('mnInput', MnInputDirective)

function MnInputDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes, ngModel) {
      const input = element[0].querySelector('input')

      input.addEventListener('change', () => {
        ngModel.$setViewValue(input.value)
      })

      scope.$watch(attributes.ngModel, value => {
        element[0].value = value
      })
    }
  }
}

module.exports = 'wow'
