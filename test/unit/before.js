const {before} = require('mocha')

before(mockDOM)
before(mockCustomElements)
before(defineCustomElement)
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

function defineCustomElement() {
  const MnInput = require('../../sources/scripts/mn-input.class.js')
  window.customElements.define('mn-input', MnInput)
}

function setChaiAssertions() {
  require('chai')
    .use(require('chai-dom'))
}
