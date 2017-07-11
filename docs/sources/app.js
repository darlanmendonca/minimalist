require('minimalist')

const angular = require('angular')
require('../../angular.js')
angular
  .module('app', ['minimalist'])
  .controller('HomeController', HomeController)


function HomeController() {
  this.house = ['stark']
  this.gender = 'male'
}
