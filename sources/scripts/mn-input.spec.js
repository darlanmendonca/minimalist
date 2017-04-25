const {describe, it, before} = require('mocha')
const {expect} = require('chai')

before(() => {
  require('./mn-input.class.js')
})

describe('lorem ipsum', () => {
  it('a simple unit test', () => {
    expect(true).to.be.true
    // expect(window).to.have.property('MnInput')
  })
})
