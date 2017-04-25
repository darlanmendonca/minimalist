const {describe, it, beforeEach} = require('mocha')
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

let element

beforeEach(() => {
  const {MnInput} = window
  element = new MnInput()
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
  it('should get empty string when value is undefined', () => {
    expect(element).to.have.value('')
  })

  it('should get empty string when value is setted with undefined', () => {
    element.value = undefined
    expect(element).to.have.value('')
  })

  it('should get empty string when value is setted with null', () => {
    element.value = null
    expect(element).to.have.value('')
  })

  it('should get/set value as string', () => {
    element.value = 'test'
    expect(element).to.have.value('test')
  })
})
