module.exports = MnImageCustomElement()

function MnImageCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-image')) {
    window.customElements.define('mn-image', require('./image.class.js'))
  }

  return window.customElements.get('mn-image')
}
