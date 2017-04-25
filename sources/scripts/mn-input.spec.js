const {describe, it, before} = require('mocha')
const {expect} = require('chai')

before(() => {
  require('./mn-input.class.js')
})

describe('MnInput', () => {
  it('class defined on window', () => {
    expect(window).to.have.property('MnInput')
  })
})
