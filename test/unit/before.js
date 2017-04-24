const {before} = require('mocha')
const jsdom = require('jsdom')

before(function () {
  global.document = jsdom('<!doctype html><html><body></body></html>')
  global.window = document.defaultView
})
