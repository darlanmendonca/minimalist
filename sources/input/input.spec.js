const {describe, it, before, beforeEach} = require('mocha')
const {expect} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))

let element
let MnInput

before(fallbackCustomElements)
before(loadMnInput)
beforeEach(instanciateElement)

function fallbackCustomElements() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }
}

function loadMnInput() {
  require('./index.js') // require('minimalist/input')
  MnInput = window.customElements.get('mn-input')
}

function instanciateElement() {
  element = document.createElement('mn-input')
  document.body.appendChild(element)
}

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

describe('css style', () => {
  it('should have a inline-block display', () => {
    expect(element).to.have.style('display', 'inline-block')
  })

  it('should have a relative position', () => {
    expect(element).to.have.style('position', 'relative')
  })

  it('should have a border using box-shadow', () => {
    expect(element).to.have.style('box-shadow', '0 1px 0 #ced4da')
  })

  it('should have a margin', () => {
    expect(element).to.have.style('margin', '1.5em 0px 1em')
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
