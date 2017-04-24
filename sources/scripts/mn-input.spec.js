const {describe, it} = require('mocha')
const {expect} = require('chai')
const MnInput = require('./mn-input.class.js')

describe('lorem ipsum', () => {
  it('a unit test simple', () => {
    const input = new MnInput()
    expect(input).to.have.property('name')
  })
})
