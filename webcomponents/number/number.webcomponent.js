module.exports = MnPasswordCustomElement()

function MnPasswordCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnNumber = require('./number.class.js')
  window.customElements.define('mn-number', MnNumber)
  return window.customElements.get('mn-number')
}
