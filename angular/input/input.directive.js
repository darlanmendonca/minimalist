const angular = require('angular')
const webcomponent = require('../../webcomponents/input/input.webcomponent.js')

angular
  .module('minimalist', [])
  .directive('mnInput', MnInputDirective)

function MnInputDirective() {
  return {
    restrict: 'E',
    require: 'ngModel',
    link() {

    }
  }
}
