module.exports = MnHiddenCustomElement()

function MnHiddenCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-hidden')) {
    window.customElements.define('mn-hidden', require('./hidden.class.js'))
  }

  return window.customElements.get('mn-hidden')
}
