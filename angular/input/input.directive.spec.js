const {describe, it, beforeEach} = require('mocha')
const {expect} = require('chai')
  .use(require('chai-dom'))

const angular = require('angular')
require('angular-mocks')
require('./input.directive.js')


describe('mn-input (directive)', () => {
  let element
  let scope

  beforeEach(angular.mock.module('minimalist'))

  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    scope = $rootScope.$new()
    element = '<mn-input ng-model="username" placeholder="{{ placeholder }}"></mn-input>'
    scope.placeholder = 'Username'

    element = $compile(element)(scope)
    // console.log(element)
    scope.$digest()
    element = document.querySelector('mn-input')
    angular
      .element(document.body)
      .append(element)
  }))

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
})
