/* global describe, it, before, beforeEach */
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
      // expect(element).to.contain('input').with.length(1)
      // the length above count childrens of elements, not amount of inputs
      // need to be refactor, chai-dom dont offer a counter yet
      expect(element).to.contain('input')
      expect(element.querySelectorAll('input')).to.have.length(1)
    })
  })

  describe('ngModel', () => {
    it('should be undefined if it doesn\'t exist', () => {
      expect(scope.username).to.be.undefined
      expect(element).to.have.value('')
    })

    it('should be undefined if applied undefined', () => {
      scope.username = undefined
      scope.$digest()
      expect(scope.username).to.be.undefined
      expect(element).to.have.value('')
    })

    it('should be a string if applied a string to ngModel', () => {
      scope.username = 'test'
      scope.$digest()
      expect(scope.username).to.be.equal('test')
      expect(element).to.have.value('test')
    })

    it('should be a string if applied a string to property value', () => {
      element.value = 'test2'
      expect(scope.username).to.be.equal('test2')
      expect(element).to.have.value('test2')
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
    element = document.createElement('mn-input')
    element.setAttribute('ng-model', 'username')
    document.body.appendChild(element)
    $compile(element)(scope)
    scope.$digest()
  })
}
