/* global angular */

angular.module('minimalist', [])

module.exports = {
  input: require('./webcomponents/input/input.directive.js'),
  select: require('./webcomponents/select/select.directive.js'),
  form: require('./webcomponents/form/form.directive.js'),
}
