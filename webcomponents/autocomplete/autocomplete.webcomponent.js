module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-autocomplete')) {
    window.customElements.define('mn-autocomplete', require('./autocomplete.class.js'))
  }

  return window.customElements.get('mn-autocomplete')
}
