const {describe, it, before, beforeEach} = require('mocha')
const {expect} = require('chai')
  .use(require('chai-dom'))

const angular = require('angular')
require('angular-mocks')

let element
let scope

describe('mn-input (directive)', () => {
  before(loadComponent)
  beforeEach(angular.mock.module('minimalist'))
  beforeEach(createElement)

  describe('element', () => {
    it('should have a ngModel attribute', () => {
      expect(element).to.have.attribute('ng-model')
    })

    it('should have the .mn-input class', () => {
      expect(element).to.have.class('mn-input')
    })

    it('should contain a input child', () => {
      expect(element).to.contain('input').with.length(1)
    })
  })

  describe('ngModel', () => {
    it('should return empty string when it is undefined', () => {
      expect(element).to.be.value('')
    })

    it('should get empty string when it is setted with undefined', () => {
      scope.username = undefined
      scope.$digest()
      expect(element).to.have.value('')
    })

    it('should get empty string when it is setted with null', () => {
      scope.username = null
      scope.$digest()
      expect(element).to.have.value('')
    })

    it('should setter and getter as string changing the ngModel', () => {
      scope.username = 'test'
      scope.$digest()
      expect(element).to.have.value('test')
    })

    it('should setter and getter as string changing property value', () => {
      element.value = 'test2'
      expect(scope.username).to.be.equal('test2')
    })
  })

  describe('attribute value', () => {
    it('should set property value when scope change', () => {
      scope.username = 'Clara'
      scope.$digest()
      expect(element).to.have.value('Clara')
    })
  })
})

function loadComponent() {
  // const {input} = require('minimalist/angular')
  // require('minimalist/angular').input
  require('./input.directive.js')
}

function createElement() {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    element = document.createElement('mn-input')
    element.setAttribute('ng-model', 'username')
    document.body.appendChild(element)
    $compile(element)(scope)
    scope.$digest()
  })
}
