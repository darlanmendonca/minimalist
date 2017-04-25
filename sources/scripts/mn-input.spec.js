const {describe, it} = require('mocha')
const {expect} = require('chai')

describe('MnInput', () => {
  it('class is defined on window', () => {
    expect(window).to.have.property('MnInput')
  })

  it('instanciate using a constructor', () => {
    const {MnInput} = window
    const input = new MnInput()
    expect(input).to.be.instanceof(MnInput)
  })
})
