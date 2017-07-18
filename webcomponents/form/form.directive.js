/* global angular */

angular
  .module('minimalist')
  .directive('mnForm', MnFormDirective)

function MnFormDirective() {
  return {
    restrict: 'C',
    link(scope, element, attributes) {
      const form = element[0]

      form.addEventListener('submit', () => {
        if (form.validate()) {
          scope.$eval(attributes.submit)
        }
      })
    }
  }
}
