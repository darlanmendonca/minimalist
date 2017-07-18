/* global angular */

angular
  .module('minimalist')
  .directive('mnForm', MnFormDirective)

function MnFormDirective() {
  return {
    restrict: 'C',
    link(scope, element, attributes) {
      element.bind('submit', () => {
        scope.$eval(attributes.submit)
      })
    }
  }
}
