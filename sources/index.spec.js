const {describe, it, beforeEach} = require('mocha')
const {expect} = require('chai')

let npmModule
beforeEach(loadModule)

function loadModule() {
  npmModule = require('./index.js')
}

describe('module', () => {
  it('should have a package.json, with a main file', () => {
    const packageJSON = require('../package.json')
    expect(packageJSON).to.have.property('main', 'sources/index.js')
  })

  it('should export input component', () => {
    expect(npmModule).to.have.property('input')
  })
})
