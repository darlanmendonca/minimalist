const {describe, it} = require('mocha')
const {expect} = require('chai')

const packageJSON = require('./package.json')

describe('minimalist', () => {
  it('should have a package.json, with a main file', () => {
    expect(packageJSON).to.have.property('main', 'index.js')
  })

  it('should have webcomponents in package.json files', () => {
    expect(packageJSON.files).to.have.members([
      'webcomponents',
      'angular.js'
    ])
  })

  it('should export input component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('input')
  })
})
