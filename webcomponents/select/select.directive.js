const angular = require('angular')

angular
  .module('minimalist')
  .directive('mnSelect', MnSelectDirective)

function MnSelectDirective() {
  return {
    restrict: 'C',
    link(scope, element) {
      element.ready(() => {
        const component = element[0]
        component._setOptions()
      })
    }
  }
}
