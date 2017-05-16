module.exports = MnInputCustomElement()

function MnInputCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnInput = require('./input.class.js')
  window.customElements.define('mn-input', MnInput)
  return window.customElements.get('mn-input')
}
