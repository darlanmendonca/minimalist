module.exports = MnFormCustomElement()

function MnFormCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-form')) {
    window.customElements.define('mn-form', require('./form.class.js'))
  }

  return window.customElements.get('mn-form')
}
