const angular = require('angular')
require('minimalist').input

angular
  .module('minimalist', [])
  .directive('mnInput', MnInputDirective)

function MnInputDirective() {
  return {
    restrict: 'E',
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
