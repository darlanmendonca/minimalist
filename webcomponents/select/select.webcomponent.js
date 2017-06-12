module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnSelect = require('./select.class.js')
  window.customElements.define('mn-select', MnSelect)
  return window.customElements.get('mn-select')
}
