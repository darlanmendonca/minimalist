const {describe, it} = require('mocha')
const {expect} = require('chai')

describe('es6 class', () => {
  it('should be defined in window', () => {
    expect(window).to.have.property('MnInput')
  })
})

describe('instance', () => {
  it('should work with a constructor', () => {
    const {MnInput} = window
    const element = new MnInput()
    expect(element).to.be.instanceof(MnInput)
  })

  it('should work with document.createElement()', () => {
    const {MnInput} = window
    const element = document.createElement('mn-input')
    expect(element).to.be.instanceof(MnInput)
  })
})

describe('element', () => {
  it('should have the .mn-input class', () => {
    const {MnInput} = window
    const element = new MnInput()
    expect(element).to.have.class('mn-input')
  })

  it('should contain a input child', () => {
    const {MnInput} = window
    const element = new MnInput()
    expect(element).to.contain('input').with.length(1)
  })
})
