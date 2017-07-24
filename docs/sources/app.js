require('minimalist')
require('../../angular.js')

angular
  .module('app', ['minimalist'])

angular
  .module('app')
  .controller('HomeController', HomeController)

angular
  .module('app')
  .directive('test', TestTranscludeDirective)

function HomeController() {
  this.house = 'Stark'

  this.houses = [
    'Stark',
    'Lannister',
    'Targaryen',
  ]

  this.remove = () => {
    this.houses.pop()
    console.log('removed house', this.houses)
  }

  this.add = () => {
    this.houses.push('test')
    console.log('added house', this.houses)
  }
}

function TestTranscludeDirective() {
  return {
    restrict: 'E',
    transclude: true,
    template: `
      <div>1 - wow</div>
      <ng-transclude></ng-transclude>
    `,
    // controller: 'SearchController',
    // controllerAs: 'searchController',
  }
}
