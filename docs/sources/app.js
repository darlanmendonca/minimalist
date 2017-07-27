require('minimalist')
require('../../angular.js')


angular.module('app', [
  'minimalist',
  'ngResource',
])

angular
  .module('app')
  .controller('HomeController', HomeController)

angular
  .module('app')
  .service('Houses', HousesService)

function HomeController() {
  this.test = 'test string'
  this.house = 'stark'

  this.change = () => {
    this.house = 'lannister'
  }
}

function HousesService($resource) {
  const service =  $resource('http://localhost:4000/houses')

  this.list = list

  function list(params = {}) {
    return service.query(params).$promise
  }
}

angular
  .module('app')
  .directive('houses', HousesAutocompleteDirective)

function HousesAutocompleteDirective(Houses) {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes) {

      scope.$watch(attributes.ngModel, setComponentValue)

      function setComponentValue(value) {
        const search = new Event('search')
        search.query = value
        element[0].dispatchEvent(search)
      }

      element.bind('search', (event) => {
        const {query} = event
        event.target
          .fetch(() => Houses.list({query}))
          .then(setOptions)

        function setOptions(houses) {
          houses.forEach(house => {
            const option = document.createElement('option')
            option.textContent = house
            option.setAttribute('value', house.toLowerCase())

            event.target.appendChild(option)
          })
        }
      })
    }
  }

}
