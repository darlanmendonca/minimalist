const angular = require('angular')

angular
  .module('minimalist')
  .directive('mnSelect', MnSelectDirective)

function MnSelectDirective() {
  return {
    restrict: 'C',
    link(scope, element) {
      element.ready(() => {
        const component = element[0]
        component._setOptions()
        component._setActionSheet()

        Array
          .from(component.menu.querySelectorAll('.option'))
          .forEach(option => {
            option.innerHTML = option.textContent
              .split('')
              .map(char => `<span class="char" data-char="${char.toLowerCase()}">${char}</span>`)
              .join('')
          })
      })
    }
  }
}
