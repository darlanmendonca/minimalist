module.exports = MnRadioCustomElement()

function MnRadioCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-radio')) {
    window.customElements.define('mn-radio', require('./radio.class.js'))
  }

  return window.customElements.get('mn-radio')
}
