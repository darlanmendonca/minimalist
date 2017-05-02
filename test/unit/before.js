const {before} = require('mocha')

before(mockDOM)
before(mockCustomElements)
before(mockConnectedCallback)

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

function mockConnectedCallback() {
  // jsdom dont call connectedCallback on appendChild, native customElements call connectedCallback
  const {Element} = window
  const appendChild = Element.prototype.appendChild
  Element.prototype.appendChild = function(element){
    appendChild.apply(this, arguments)
    if (element && element.connectedCallback) {
      element.connectedCallback()
    }
  }
}
