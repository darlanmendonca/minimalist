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
  this.accept = true

  this.change = () => {
    // console.log('>', !this.accept)
    this.accept = !this.accept
  }
}
