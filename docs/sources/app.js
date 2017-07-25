require('minimalist')
require('../../angular.js')


angular.module('app', [
  'minimalist',
  'ngResource',
])

angular
  .module('app')
  .run(run)

angular
  .module('app')
  .controller('HomeController', HomeController)

angular
  .module('app')
  .service('Houses', HousesService)

function run(MnAutocomplete, Houses) {
  MnAutocomplete.addService('house', Houses.list)
}

function HomeController() {
  this.test = 'test string'
}

function HousesService($resource) {
  const service =  $resource('http://localhost:4000/houses')

  this.list = list

  function list(params = {}) {
    return service.query(params).$promise
  }
}
