/* global angular */

angular
  .module('minimalist')
  .directive('mnForm', MnFormDirective)

function MnFormDirective() {
  return {
    restrict: 'C',
    link(scope, element, attributes) {
      element.bind('submit', () => {
        if (form.validate()) {
          scope.$eval(attributes.submit)
        }
      })
    }
  }
}
