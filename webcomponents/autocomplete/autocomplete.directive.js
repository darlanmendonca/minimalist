/* global angular */

angular
  .module('minimalist')
  .directive('mnAutocomplete', MnAutocompleteDirective)

function MnAutocompleteDirective(MnAutocomplete) {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element) {
      element.bind('search', () => {
        const name = element.attr('name')
        const service = MnAutocomplete.services[name]

        if (name && service) {
          event.target
            .fetch(service)
            .then(options => {console.log(options)})
        }
      })
    }
  }
}
