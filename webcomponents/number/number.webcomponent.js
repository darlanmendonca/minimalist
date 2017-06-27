module.exports = MnNumberCustomElement()

function MnNumberCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-number')) {
    window.customElements.define('mn-number', require('./number.class.js'))
  }

  return window.customElements.get('mn-number')
}
