/* global describe, it, before, beforeEach, afterEach, angular */
const {expect} = require('chai')
  .use(require('chai-dom'))

require('angular-mocks')

let component
let scope

describe('mn-input (directive)', () => {
  before(loadComponent)
  beforeEach(angular.mock.module('minimalist'))
  beforeEach(createMnInput)

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
    it('should define a name', () => {
      expect(component).to.have.attribute('name', 'username')
    })

    it('should be empty string if it doesn\'t exist', () => {
      expect(scope.username).to.be.equal('')
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

    it('should be update if input dispatch event change', () => {
      component.input.value = 'test'
      component.input.dispatchEvent(new Event('change'))
      expect(scope.username).to.be.equal('test')
      expect(component).to.have.value('test')
    })

    it('should be update if input dispatch event input', () => {
      component.input.value = 'test2'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.username).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })

    it('should be update if input dispatch event blur', () => {
      component.input.value = 'test2'
      component.input.dispatchEvent(new Event('blur'))
      expect(scope.username).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })
  })

  describe('mn-password ngModel', () => {
    beforeEach(createMnPassword)

    it('should define a name', () => {
      expect(component).to.have.attribute('name', 'password')
    })

    it('should be empty string if it doesn\'t exist', () => {
      expect(scope.password).to.be.equal('')
      expect(component).to.have.value('')
    })

    it('should be undefined if applied undefined', () => {
      scope.password = undefined
      scope.$digest()
      expect(scope.password).to.be.undefined
      expect(component).to.have.value('')
    })

    it('should be a string if applied a string to ngModel', () => {
      scope.password = 'test'
      scope.$digest()
      expect(scope.password).to.be.equal('test')
      expect(component).to.have.value('test')
    })

    it('should be a string if applied a string to property value', () => {
      component.value = 'test2'
      expect(scope.password).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })

    it('should be update if input dispatch event change', () => {
      component.input.value = 'test'
      component.input.dispatchEvent(new Event('change'))
      expect(scope.password).to.be.equal('test')
      expect(component).to.have.value('test')
    })

    it('should be update if input dispatch event input', () => {
      component.input.value = 'test2'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.password).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })

    it('should be update if input dispatch event blur', () => {
      component.input.value = 'test2'
      component.input.dispatchEvent(new Event('blur'))
      expect(scope.password).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })
  })

  describe('mn-date ngModel', () => {
    beforeEach(createMnDate)
    afterEach(fixAngularErrorWithFocus)
    const timezone = new Date().getTimezoneOffset() / 60

    it('should define a name', () => {
      expect(component).to.have.attribute('name', 'date')
    })

    it('should be undefined if it doesn\'t exist', () => {
      expect(scope.date).to.be.undefined
      expect(component).to.have.value(undefined)
    })

    it('should be undefined if applied undefined', () => {
      scope.date = undefined
      scope.$digest()
      expect(scope.date).to.be.undefined
      expect(component).to.have.value(undefined)
    })

    it('should be a dateISOString if applied a date to ngModel', () => {
      scope.date = new Date(2017, 3, 1, 18, 0)
      scope.$digest()
      expect(scope.date).to.be.equal(`2017-04-01T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
    })

    it('should be a dateISOString if applied a dateISOString to property value', () => {
      component.value = `2017-04-01T0${timezone}:00:00.000Z`
      expect(scope.date).to.be.equal(`2017-04-01T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
    })

    it('should update if input dispatch event change', () => {
      component.input.value = '2017-04-01'
      component.input.dispatchEvent(new Event('change'))
      expect(scope.date).to.be.equal(`2017-04-01T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
    })

    it('should not update if input dispatch event change while focused', () => {
      component.input.focus()
      component.input.value = '2017-04-01'
      component.input.dispatchEvent(new Event('change'))

      if (component.input.type === 'date') {
        expect(scope.date).to.be.undefined
        expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
      } else {
        expect(scope.date).to.be.equal(`2017-04-01T0${timezone}:00:00.000Z`)
        expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
      }
    })

    it('should update if input dispatch event input', () => {
      component.input.value = component.input.type === 'date'
        ? '2017-04-01'
        : '01/04/2017'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.date).to.be.equal(`2017-04-01T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
    })

    it('should not update if input dispatch event input while focused', () => {
      component.input.focus()
      component.input.value = component.input.type === 'date'
        ? '2017-04-01'
        : '01/04/2017'

      component.input.dispatchEvent(new Event('input'))

      if (component.input.type === 'date') {
        expect(scope.date).to.be.undefined
        expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
      } else {
        expect(scope.date).to.be.equal(`2017-04-01T0${timezone}:00:00.000Z`)
        expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
      }
    })

    it('should update if input dispatch event blur', () => {
      component.input.focus()
      component.input.value = component.input.type === 'date'
        ? '2017-04-01'
        : '01/04/2017'
      component.input.dispatchEvent(new Event('blur'))
      expect(scope.date).to.be.equal(`2017-04-01T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-01T0${timezone}:00:00.000Z`)
    })
  })

  describe('mn-number ngModel', () => {
    beforeEach(createMnNumber)
    afterEach(fixAngularErrorWithFocus)

    it('should define a name', () => {
      expect(component).to.have.attribute('name', 'number')
    })

    it('should be undefined if it doesn\'t exist', () => {
      expect(scope.number).to.be.undefined
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.value('')
    })

    it('should be undefined if applied undefined', () => {
      scope.number = undefined
      scope.$digest()
      expect(scope.number).to.be.undefined
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.value('')
    })

    it('should be a number if applied a number to ngModel', () => {
      scope.number = 0
      scope.$digest()
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0')
    })

    it('should be a number if applied a float number to ngModel', () => {
      scope.number = 0.5
      scope.$digest()
      expect(scope.number).to.be.equal(0.5)
      expect(component).to.have.value(0.5)
      expect(component.input).to.have.value('0,5')
    })

    it('should be a number if applied a number to property value', () => {
      component.value = 0
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0')
    })

    it('should be update if input dispatch event change', () => {
      component.input.value = '0'
      component.input.dispatchEvent(new Event('change'))
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0')
    })

    it('should not update if input dispatch event change while focused', () => {
      component.input.focus()
      component.input.value = '0'
      component.input.dispatchEvent(new Event('change'))

      expect(scope.date).to.be.undefined
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0')
    })

    it('should be update if input dispatch event input', () => {
      component.input.value = '0'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0')
    })

    it('should not update if input dispatch event input while focused', () => {
      component.input.focus()
      component.input.value = '0'
      component.input.dispatchEvent(new Event('input'))

      expect(scope.date).to.be.undefined
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0')
    })

    it('should be update if input dispatch event blur', () => {
      component.input.value = '0'
      component.input.dispatchEvent(new Event('blur'))
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0')
    })

    it('should work with attribute precision if applied a number to ngModel', () => {
      component.setAttribute('precision', 2)
      scope.number = 0
      scope.$digest()
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0,00')
    })

    it('should work with attribute precision if applied a number to property value', () => {
      component.setAttribute('precision', 2)
      component.value = 0
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0,00')
    })

    it('should work with attribute currency if applied a number to ngModel', () => {
      component.setAttribute('currency', '')
      scope.number = 0
      scope.$digest()
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0,00')
    })

    it('should work with attribute currency if applied a number to property value', () => {
      component.setAttribute('currency', '')
      component.value = 0
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0,00')
    })

    it('should work with attributes currency and precision if applied a number to ngModel', () => {
      component.setAttribute('currency', '')
      component.setAttribute('precision', '3')
      scope.number = 0
      scope.$digest()
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0,000')
    })

    it('should work with attributes currency and precision if applied a number to property value', () => {
      component.setAttribute('currency', '')
      component.setAttribute('precision', '3')
      component.value = 0
      expect(scope.number).to.be.equal(0)
      expect(component).to.have.value(0)
      expect(component.input).to.have.value('0,000')
    })

    it('should work with attribute percentage if applied a number to ngModel', () => {
      component.setAttribute('percentage', '')
      scope.number = 1
      scope.$digest()
      expect(scope.number).to.be.equal(1)
      expect(component).to.have.value(1)
      expect(component.input).to.have.value('100')
    })

    it('should work with attribute percentage if applied a number to property value', () => {
      component.setAttribute('percentage', '')
      component.value = 1
      expect(scope.number).to.be.equal(1)
      expect(component).to.have.value(1)
      expect(component.input).to.have.value('100')
    })

    it('should work with attribute percentage if write a number', () => {
      component.setAttribute('percentage', '')
      component.input.value = '1'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.number).to.be.equal(0.01)
      expect(component).to.have.value(0.01)
      expect(component.input).to.have.value('1')
    })

    it('should work with attributes percentage and precision if applied a number to ngModel', () => {
      component.setAttribute('percentage', '')
      component.setAttribute('precision', '3')
      scope.number = 1
      scope.$digest()
      expect(scope.number).to.be.equal(1)
      expect(component).to.have.value(1)
      expect(component.input).to.have.value('100,000')
    })

    it('should work with attributes percentage and precision if applied a number to property value', () => {
      component.setAttribute('percentage', '')
      component.setAttribute('precision', '3')
      component.value = 1
      expect(scope.number).to.be.equal(1)
      expect(component).to.have.value(1)
      expect(component.input).to.have.value('100,000')
    })

    it('should work with attributes percentage and precision if write a number', () => {
      component.setAttribute('percentage', '')
      component.setAttribute('precision', '3')
      component.input.value = '1'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.number).to.be.equal(0.01)
      expect(component).to.have.value(0.01)
      expect(component.input).to.have.value('1,000')
    })
  })

  describe('mn-select ngModel', () => {
    beforeEach(createMnSelect)
    afterEach(fixAngularErrorWithFocus)

    it('should define a name', () => {
      expect(component).to.have.attribute('name', 'house')
    })

    it('should be undefined if it doesn\'t exist', () => {
      expect(scope.houses).to.be.undefined
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.value('')
    })

    it('should be undefined if applied undefined', () => {
      scope.house = undefined
      scope.$digest()
      expect(scope.house).to.be.undefined
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.value('')
    })

    it('should be undefined if applied an invalid option to ngModel', () => {
      scope.house = 'test'
      scope.$digest()
      expect(scope.house).to.be.equal(undefined)
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.value('')
    })

    it('should be undefined if applied an invalid option to property value', () => {
      component.value = 'test'
      expect(scope.house).to.be.equal(undefined)
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.value('')
    })

    it('should be a string if applied a valid string to ngModel', () => {
      scope.house = 'lannister'
      scope.$digest()
      expect(scope.house).to.be.equal('lannister')
      expect(component).to.have.value('lannister')
      expect(component.input).to.have.value('Lannister')
    })

    it('should be a string if applied a valid string to property value', () => {
      component.value = 'lannister'
      expect(scope.house).to.be.equal('lannister')
      expect(component).to.have.value('lannister')
      expect(component.input).to.have.value('Lannister')
    })

    it('should be a boolean true if applied a valid boolean to ngModel', () => {
      scope.house = true
      scope.$digest()
      expect(scope.house).to.be.true
      expect(component).to.have.value(true)
      expect(component.input).to.have.value('Positive')
    })

    it('should be a boolean true if applied a valid boolean to property value', () => {
      component.value = true
      expect(scope.house).to.be.true
      expect(component).to.have.value(true)
      expect(component.input).to.have.value('Positive')
    })

    it('should be a boolean false if applied a valid boolean to ngModel', () => {
      scope.house = false
      scope.$digest()
      expect(scope.house).to.be.false
      expect(component).to.have.value(false)
      expect(component.input).to.have.value('Negative')
    })

    it('should be a boolean false if applied a valid boolean to property value', () => {
      component.value = false
      expect(scope.house).to.be.false
      expect(component).to.have.value(false)
      expect(component.input).to.have.value('Negative')
    })

    it('should be a object if applied a valid object to ngModel', () => {
      scope.house = 'Object'
      scope.$digest()
      expect(scope.house).to.deep.equal({name: 'john snow'})
      expect(component.value).to.deep.equal({name: 'john snow'})
      expect(component.input).to.have.value('Object')
    })

    it('should be a object if applied a valid object to property value', () => {
      component.value = 'Object'
      expect(scope.house).to.deep.equal({name: 'john snow'})
      expect(component.value).to.deep.equal({name: 'john snow'})
      expect(component.input).to.have.value('Object')
    })

    it('should be a array if applied a valid array to ngModel', () => {
      scope.house = 'Array'
      scope.$digest()
      expect(scope.house).to.deep.equal(['john', 'ygrid'])
      expect(component.value).to.deep.equal(['john', 'ygrid'])
      expect(component.input).to.have.value('Array')
    })

    it('should be a array if applied a valid array to property value', () => {
      component.value = 'Array'
      expect(scope.house).to.deep.equal(['john', 'ygrid'])
      expect(component.value).to.deep.equal(['john', 'ygrid'])
      expect(component.input).to.have.value('Array')
    })
  })
})

function loadComponent() {
  // require('minimalist').input
  require('./input.directive.js')
  require('../select/select.directive.js')
}

function createMnInput(done) {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-input')
    component.setAttribute('ng-model', 'username')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()

    angular.element(component).ready(() => {
      done()
    })
  })
}

function createMnPassword(done) {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-password')
    component.setAttribute('ng-model', 'password')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()

    angular.element(component).ready(() => {
      done()
    })
  })
}

function createMnDate(done) {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-date')
    component.setAttribute('ng-model', 'date')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()

    angular.element(component).ready(() => {
      done()
    })
  })
}

function createMnNumber(done) {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-number')
    component.setAttribute('ng-model', 'number')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()

    angular.element(component).ready(() => {
      done()
    })
  })
}

function createMnSelect(done) {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-select')

    const options = [
      {name: 'Stark', value: 'stark'},
      {name: 'Lannister', value: 'lannister'},
      {name: 'Targaryen', value: 'targaryen'},
      {name: 'Negative', value: 'false'},
      {name: 'Positive', value: 'true'},
      {name: 'Object', value: '{name: "john snow"}'},
      {name: 'Array', value: '["john", "ygrid"]'},
    ]

    options.forEach(item => {
      const {name, value} = item
      const option = document.createElement('option')
      option.setAttribute('value', value)
      option.textContent = name
      component.appendChild(option)
    })

    component.setAttribute('ng-model', 'house')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()

    angular.element(component).ready(() => {
      done()
    })
  })
}

function fixAngularErrorWithFocus() {
  component.input.blur()
}
