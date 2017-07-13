module.exports = MnSidenavCustomElement()

function MnSidenavCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-button')) {
    window.customElements.define('mn-button', require('./button.class.js'))
  }

  return window.customElements.get('mn-button')
}
