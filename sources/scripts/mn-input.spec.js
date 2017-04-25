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
    const input = new MnInput()
    expect(input).to.be.instanceof(MnInput)
  })

  it('should work with document.createElement()', () => {
    const {MnInput} = window
    const input = document.createElement('mn-input')
    expect(input).to.be.instanceof(MnInput)
  })
})

describe('element', () => {
  it('should have the .mn-input class', () => {
    const {MnInput} = window
    const input = new MnInput()
    expect(input).to.have.class('mn-input')
  })
})
