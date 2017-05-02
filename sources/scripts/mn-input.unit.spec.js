const {describe, it, before, beforeEach} = require('mocha')
const {expect} = require('chai').use(require('chai-dom'))

let element
let MnInput

before(loadMnInput)
beforeEach(instanciateElement)

function loadMnInput() {
  MnInput = require('./mn-input.class.js')
  window.customElements.define('mn-input', MnInput)
  window.MnInput = MnInput
}

function instanciateElement() {
  element = document.createElement('mn-input')
  document.body.appendChild(element)
}

describe('css style', () => {
  it('background should be orange', () => {
    const {backgroundColor} = window.getComputedStyle(document.body)
    expect(backgroundColor).to.be.equal('orange')
  })
})

describe('es6 class', () => {
  it('should be defined in window', () => {
    expect(window).to.have.property('MnInput')
  })
})

describe('instance', () => {
  it('should work with a constructor', () => {
    element = new MnInput()
    expect(element).to.be.instanceof(MnInput)
  })

  it('should work with document.createElement()', () => {
    element = document.createElement('mn-input')
    expect(element).to.be.instanceof(MnInput)
  })
})

describe('element', () => {
  it('should have the .mn-input class', () => {
    expect(element).to.have.class('mn-input')
  })

  it('should contain a input child', () => {
    expect(element).to.contain('input').with.length(1)
  })
})

describe('property value', () => {
  it('should return empty string when it is undefined', () => {
    expect(element).to.be.value('')
  })

  it('should get empty string when it is setted with undefined', () => {
    element.value = undefined
    expect(element).to.have.value('')
  })

  it('should get empty string when it is setted with null', () => {
    element.value = null
    expect(element).to.have.value('')
  })

  it('should setter and getter as string', () => {
    element.value = 'test'
    expect(element).to.have.value('test')
  })
})

describe('attribute value', () => {
  it('should set property value when attribute changed', () => {
    element.setAttribute('value', 'test')
    expect(element).to.have.value('test')
  })

  it('should set property value when attribute is removed', () => {
    element.removeAttribute('value')
    expect(element).to.have.value('')
  })
})

describe('attribute autocomplete', () => {
  it('should be "off" by default', () => {
    expect(element).to.have.attribute('autocomplete', 'off')
  })
})
