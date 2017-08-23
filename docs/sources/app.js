require('minimalist')
require('../../angular.js')


angular.module('app', [
  'minimalist',
])

angular
  .module('app')
  .controller('HomeController', HomeController)

function HomeController() {
  this.houses = ['stark', 'lannister', 'targaryen']
  this.options = ['targaryen']

  this.change = () => this.options = ['stark', 'lannister']
}
