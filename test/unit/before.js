const {before} = require('mocha')

before(mockDOM)
before(mockCustomElements)
before(requireClass)

function mockDOM() {
  const {JSDOM: Dom} = require('jsdom')
  const dom = new Dom('<!doctype html><html><body></body></html>')
  global.document = dom.window.document
  global.window = document.defaultView
  window.Object = Object
  window.Math = Math
}

function mockCustomElements() {
  require('document-register-element/pony')(window)
}

function requireClass() {
  require('../../sources/scripts/mn-input.class.js')
}
