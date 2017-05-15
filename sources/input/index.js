module.exports = MnInputCustomElement()

function MnInputCustomElement() {
  const MnInput = require('./input.class.js')
  const supportsCustomElements = 'customElements' in window

  if (supportsCustomElements) {
    window.customElements.define('mn-input', MnInput)
    window.MnInput = MnInput
    return window.customElements.get('mn-input')
  } else {
    console.error('your browser dont support Custom Elements v1, use a polyfill')
  }
}
