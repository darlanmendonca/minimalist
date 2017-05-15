const {describe, it} = require('mocha')
const {expect} = require('chai')

const packageJSON = require('../package.json')
const npmModule = require('./index.js')

describe('module', () => {
  it('should have a package.json, with a main file', () => {
    expect(packageJSON).to.have.property('main', 'sources/index.js')
  })

  it('should have sources in package.json files', () => {
    expect(packageJSON.files).to.have.members(['sources'])
  })

  it('should export input component', () => {
    expect(npmModule).to.have.property('input')
  })
})
