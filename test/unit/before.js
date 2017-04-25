const {before} = require('mocha')
const {JSDOM: Dom} = require('jsdom')

before(mockDOM)

function mockDOM() {
  const dom = new Dom('<!doctype html><html><body></body></html>')
  global.document = dom.window.document
  global.window = document.defaultView
}
