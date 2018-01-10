module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-search')) {
    window.customElements.define('mn-search', require('./search.class.js'))
  }

  return window.customElements.get('mn-search')
}
