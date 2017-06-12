module.exports = MnBackdropCustomElement()

function MnBackdropCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnBackdrop = require('./backdrop.class.js')
  window.customElements.define('mn-backdrop', MnBackdrop)
  return window.customElements.get('mn-backdrop')
}
