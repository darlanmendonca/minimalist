/* global angular */

angular
  .module('minimalist')
  .directive('mnInput', MnInputDirective)

function MnInputDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes, ngModel) {
      const component = element[0]
      const isSearch = element.hasClass('mn-search')

      element.bind('ready', () => {
        component.value = ngModel.$modelValue
      })

      element.ready(() => {
        scope.$watch(attributes.ngModel, setComponentValue)

        if (!isSearch) {
          component.input.addEventListener('change', setModelValue)
          component.input.addEventListener('input', setModelValue)
          component.input.addEventListener('blur', setModelValue)

          setTimeout(setModelValue)
        }

        if (isSearch) {
          const search = new Event('search')
          search.query = ngModel.$modelValue
          component.dispatchEvent(search)
        }

        component.value = ngModel.$modelValue
      })

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value) {
        component.value = value
      }

      function setModelValue() {
        ngModel.$setViewValue(component.value)
      }

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}
    }
  }
}
