// const {describe, it} = require('mocha')
const {expect} = require('chai')

// in development, will be used require('minimalist/angular')
// instead relative require below
const angular = require('./angular.js')

describe('minimalist/angular', () => {
  it('should export input directive', () => {
    expect(angular).to.have.property('input')
  })
})
