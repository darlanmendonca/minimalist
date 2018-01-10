module.exports = MnPasswordCustomElement()

function MnPasswordCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-password')) {
    window.customElements.define('mn-password', require('./password.class.js'))
  }

  return window.customElements.get('mn-password')
}
