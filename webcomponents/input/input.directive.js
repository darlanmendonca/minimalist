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
      const input = component.input
      const isSelect = component.classList.contains('mn-select')
      const isSearch = component.classList.contains('mn-search')

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}

      if (!isSearch) {
        input.addEventListener('change', setViewValue)
        input.addEventListener('input', setViewValue)
      }
      input.addEventListener('blur', setViewValue)

      if (!isSearch) {
        element.ready(() => {
          component.value = ngModel.$modelValue
          ngModel.$setViewValue(component.value)
          scope.$watch(attributes.ngModel, setComponentValue)
        })
      }

      if (isSearch) {
        scope.$watch(attributes.ngModel, (value) => {
          const search = new Event('search')
          search.query = value
          component.dispatchEvent(search)
          component.addEventListener('loading', applyValue)

          function applyValue() {
            component.removeEventListener('loading', applyValue)
            setTimeout(() => component.value = value, 0)
          }
        })
      }

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value) {
        const differentValue = component.getAttribute('value') !== value && component.value !== value
        const isObjectValue = angular.isObject(value)

        if (!isSelect || differentValue && !isObjectValue) {
          component.value = value
        }
      }

      function setViewValue(event) {
        const activeElement = event.currentTarget === document.activeElement
        const isDate = component.input.type === 'date'
        const isNumber = component.classList.contains('mn-number')
        const isBlur = event.type === 'blur'

        if (isBlur || !activeElement || !isDate && !isNumber && !isSelect) {
          ngModel.$setViewValue(component.value)
        }
      }
    }
  }
}
