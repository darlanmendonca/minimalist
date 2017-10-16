require('../index.js') // main file of minimalist
require('../angular.js') // directives

angular.module('app', [
  'minimalist',
])

angular
  .module('app')
  .controller('HomeController', HomeController)

function HomeController() {
  this.name = 'darlan'
  this.houses = ['stark', 'lannister', 'targaryen']
  this.number = 10
  this.numbers = [10, 20, 30, .5]
}
