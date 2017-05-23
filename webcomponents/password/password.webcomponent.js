module.exports = MnPasswordCustomElement()

function MnPasswordCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnPassword = require('./password.class.js')
  window.customElements.define('mn-password', MnPassword)
  return window.customElements.get('mn-password')
}
