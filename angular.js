/* global angular */

angular.module('minimalist', [])

module.exports = {
  input: require('./components/input/input.directive.js'),
  form: require('./components/form/form.directive.js'),
  checkbox: require('./components/checkbox/checkbox.directive.js'),
  radio: require('./components/radio/radio.directive.js'),
  list: require('./components/list/list.directive.js'),
}
