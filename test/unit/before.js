const {before} = require('mocha')

before(mockDOM)
before(mockCustomElements)
before(setChaiAssertions)

function mockDOM() {
  const {JSDOM: Dom} = require('jsdom')
  const dom = new Dom('<!doctype html><html><body></body></html>')
  global.document = dom.window.document
  global.window = document.defaultView
  window.Object = Object
  window.Math = Math
  global.NodeList = window.NodeList
  global.HTMLElement = window.HTMLElement
}

function mockCustomElements() {
  require('document-register-element/pony')(window)
}

function setChaiAssertions() {
  require('chai')
    .use(require('chai-dom'))
}
