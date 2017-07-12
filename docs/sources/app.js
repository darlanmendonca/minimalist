require('minimalist')

// const angular = require('angular')
require('../../angular.js')
angular
  .module('app', ['minimalist'])
  .controller('HomeController', HomeController)


function HomeController() {
  this.houses = [
    'Stark',
    'Lannister',
    'Targaryen'
  ]
  this.house = ['stark']

  this.genders = [
    'male',
    'female',
  ]
  this.gender = 'male'
}
