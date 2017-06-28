module.exports = MnEmailCustomElement()

function MnEmailCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-email')) {
    window.customElements.define('mn-email', require('./email.class.js'))
  }

  return window.customElements.get('mn-email')
}
