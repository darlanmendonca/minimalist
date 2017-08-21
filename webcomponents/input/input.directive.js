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

      ngModel.$validators = {}

      // element.bind('ready', () => {
      //   console.log('ready dispatched')
      //   component.value = ngModel.$modelValue
      // })

      element.ready(() => {
        scope.$watch(attributes.ngModel, setComponentValue)

        // if (!isSearch) {
          component.value = ngModel.$modelValue
          // component.input.addEventListener('change', setModelValue)
          // component.input.addEventListener('input', setModelValue)
          // component.input.addEventListener('blur', setModelValue)
          // component.addEventListener('change', setModelValue)
          setModelValue()
        // }

        // if (isSearch) {
        //   component.input.addEventListener('change', setModelValue)
        //   component.input.addEventListener('input', setModelValue)
        //   component.input.addEventListener('blur', setModelValue)
        //   setModelValue()
        //   // const search = new Event('search')
        //   // search.query = ngModel.$modelValue
        //   // component.dispatchEvent(search)
        // }
      })

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value) {
        component.value = value
      }

      function setModelValue() {
        const modelApplied = angular.equals(ngModel.$modelValue, component.value)

        if (!modelApplied) {
          ngModel.$setViewValue(component.value)
          console.log('set model as', component.value, ngModel.$modelValue)
        }
      }

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

    }
  }
}
