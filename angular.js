/* global angular */

angular.module('minimalist', [])

module.exports = {
  input: require('./webcomponents/input/input.directive.js'),
  form: require('./webcomponents/form/form.directive.js'),
  checkbox: require('./webcomponents/checkbox/checkbox.directive.js'),
  radio: require('./webcomponents/radio/radio.directive.js'),
  list: require('./webcomponents/list/list.directive.js'),
}
