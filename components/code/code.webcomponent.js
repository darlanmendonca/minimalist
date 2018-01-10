module.exports = MnDialogCustomElement()

function MnDialogCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-code')) {
    window.customElements.define('mn-code', require('./code.class.js'))
  }

  return window.customElements.get('mn-code')
}
