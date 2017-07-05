/* global describe, it */
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

  it('should export email component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('email')
  })

  it('should export password component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('password')
  })

  it('should export number component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('number')
  })

  it('should export date component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('date')
  })

  it('should export select component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('select')
  })

  it('should export actionSheet component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('actionSheet')
  })

  it('should export form component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('form')
  })

  it('should export sidenav component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('sidenav')
  })

  it('should export checkbox component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('checkbox')
  })

  it('should export radio component', () => {
    const npmModule = require('minimalist')
    expect(npmModule).to.have.property('radio')
  })
})
