module.exports = MnDateCustomElement()

function MnDateCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnDate = require('./date.class.js')
  window.customElements.define('mn-date', MnDate)
  return window.customElements.get('mn-date')
}
