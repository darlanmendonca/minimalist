/* global angular */

angular
  .module('minimalist')
  .directive('mnRadio', MnRadioDirective)

module.exports = MnRadioDirective

function MnRadioDirective() {
  const MnCheckboxDirective = require('../checkbox/checkbox.directive.js')
  return MnCheckboxDirective()
}
