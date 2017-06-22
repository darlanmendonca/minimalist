const {input, password, number, actionSheet, form} = require('minimalist')
const angular = require('angular')

require('../../angular.js')
angular
  .module('app', ['minimalist'])
  .controller('HomeController', HomeController)


function HomeController() {
  this.username = 'darlanmendonca'
  this.password = '123123123'
  this.date = new Date()//'2017-06-22T13:43:44.940Z'
  this.number = 10
  this.precision = 10
  this.currency = 10
  // this.percentage = 1
}
