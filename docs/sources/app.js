const {input, password, number, actionSheet, form} = require('minimalist')
const angular = require('angular')

require('../../angular.js')
angular
  .module('app', ['minimalist'])
  .controller('HomeController', HomeController)


function HomeController() {
  this.username = 'darlanmendonca'
  this.password = '123123123'
  this.date = new Date() //'1990-09-04T03:00:00.000Z'
  this.number = 10
  this.precision = 10
  this.currency = 10
  this.percentage = 1

  this.options = [
    'Stark',
    'Lannister',
    'Targaryen',
    'Tyrell',
    'Martell',
  ]
}
