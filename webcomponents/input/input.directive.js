const angular = require('angular')
require('minimalist').input

angular
  .module('minimalist', [])
  .directive('mnInput', MnInputDirective)

function MnInputDirective($compile, $parse) {
  return {
    restrict: 'E',
    require: 'ngModel',
    link(scope, element, attributes) {
      const input = element.find('input')
      element[0].value = $parse(attributes.ngModel)(scope)
      input.attr('ng-model', attributes.ngModel)
      $compile(input)(scope)
    }
  }
}

module.exports = 'wow'
