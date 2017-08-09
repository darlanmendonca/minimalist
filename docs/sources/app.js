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
  this.name = 'test'
  this.date = new Date()
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
  .directive('houses', HousesSearchDirective)

function HousesSearchDirective(Houses) {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes) {
      element.bind('search', search)

      function search(event) {
        const {query} = event
        event.target
          .fetch(() => Houses.list({query}))
          .then(setOptions)

        function setOptions(options) {
          options.forEach(item => {
            const option = document.createElement('option')
            option.textContent = item
            option.setAttribute('value', item.toLowerCase())
            event.target.appendChild(option)
          })
        }
      }
    }
  }
}
