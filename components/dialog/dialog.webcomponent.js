module.exports = MnDialogCustomElement()

function MnDialogCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-dialog')) {
    window.customElements.define('mn-dialog', require('./dialog.class.js'))
  }

  return window.customElements.get('mn-dialog')
}
