/* global describe, it */
const {expect} = require('chai')

const packageJSON = require('./package.json')
const npmModule = require('./index.js')

describe('minimalist', () => {
  it('should have a package.json, with a main file', () => {
    expect(packageJSON).to.have.property('main', 'docs/index.js')
  })

  it('should have components in package.json files', () => {
    expect(packageJSON.files).to.have.members([
      'components',
      'angular.js'
    ])
  })

  it('should export input component', () => {
    expect(npmModule).to.have.property('input')
  })

  it('should export email component', () => {
    expect(npmModule).to.have.property('email')
  })

  it('should export password component', () => {
    expect(npmModule).to.have.property('password')
  })

  it('should export number component', () => {
    expect(npmModule).to.have.property('number')
  })

  it('should export date component', () => {
    expect(npmModule).to.have.property('date')
  })

  it('should export select component', () => {
    expect(npmModule).to.have.property('select')
  })

  it('should export actionSheet component', () => {
    expect(npmModule).to.have.property('actionSheet')
  })

  it('should export form component', () => {
    expect(npmModule).to.have.property('form')
  })

  it('should export sidenav component', () => {
    expect(npmModule).to.have.property('sidenav')
  })

  it('should export checkbox component', () => {
    expect(npmModule).to.have.property('checkbox')
  })

  it('should export radio component', () => {
    expect(npmModule).to.have.property('radio')
  })

  it('should export dialog component', () => {
    expect(npmModule).to.have.property('dialog')
  })
})
