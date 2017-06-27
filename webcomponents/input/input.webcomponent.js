module.exports = MnInputCustomElement()

function MnInputCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-input')) {
    window.customElements.define('mn-input', require('./input.class.js'))
  }

  return window.customElements.get('mn-input')
}
