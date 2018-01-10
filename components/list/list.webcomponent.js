module.exports = MnDialogCustomElement()

function MnDialogCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-list')) {
    window.customElements.define('mn-list', require('./list.class.js'))
  }

  return window.customElements.get('mn-list')
}
