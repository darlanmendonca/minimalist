module.exports = MnDateCustomElement()

function MnDateCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-date')) {
    window.customElements.define('mn-date', require('./date.class.js'))
  }

  return window.customElements.get('mn-date')
}
