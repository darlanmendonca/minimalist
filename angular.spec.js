/* global describe, it */
const {expect} = require('chai')

// in development, will be used require('minimalist/angular')
// instead relative require below
const angular = require('./angular.js')

describe('minimalist/angular', () => {
  it('should export input directive', () => {
    expect(angular).to.have.property('input')
  })

  it('should export select directive', () => {
    expect(angular).to.have.property('select')
  })

  it('should export form directive', () => {
    expect(angular).to.have.property('form')
  })

  it('should export checkbox directive', () => {
    expect(angular).to.have.property('checkbox')
  })

  it('should export radio directive', () => {
    expect(angular).to.have.property('radio')
  })
})
