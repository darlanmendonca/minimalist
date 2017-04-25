const {describe, it, before} = require('mocha')
const {expect} = require('chai')

let MnInput

before(() => {
  MnInput = require('./mn-input.class.js')
})

describe('lorem ipsum', () => {
  it('a simple unit test', () => {
    const input = new MnInput()
    expect(input).to.have.property('test')
  })
})
