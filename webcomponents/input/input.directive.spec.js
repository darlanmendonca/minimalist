/* global describe, it, before, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))

const angular = require('angular')
require('angular-mocks')

let component
let scope

describe('mn-input (directive)', () => {
  before(loadComponent)
  beforeEach(angular.mock.module('minimalist'))
  beforeEach(createElement)

  describe('component', () => {
    it('should have a ngModel attribute', () => {
      expect(component).to.have.attribute('ng-model')
    })

    it('should have the .mn-input class', () => {
      expect(component).to.have.class('mn-input')
    })

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a input child', () => {
      expect(component.querySelectorAll('input')).to.have.length(1)
    })
  })

  describe('ngModel', () => {
    it('should be undefined if it doesn\'t exist', () => {
      expect(scope.username).to.be.undefined
      expect(component).to.have.value('')
    })

    it('should be undefined if applied undefined', () => {
      scope.username = undefined
      scope.$digest()
      expect(scope.username).to.be.undefined
      expect(component).to.have.value('')
    })

    it('should be a string if applied a string to ngModel', () => {
      scope.username = 'test'
      scope.$digest()
      expect(scope.username).to.be.equal('test')
      expect(component).to.have.value('test')
    })

    it('should be a string if applied a string to property value', () => {
      component.value = 'test2'
      expect(scope.username).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })
  })
})

function loadComponent() {
  // require('minimalist').input
  require('./input.directive.js')
}

function createElement() {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-input')
    component.setAttribute('ng-model', 'username')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()
  })
}
