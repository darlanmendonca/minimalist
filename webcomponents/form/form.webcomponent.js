module.exports = MnFormCustomElement()

function MnFormCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnForm = require('./form.class.js')
  window.customElements.define('mn-form', MnForm)
  return window.customElements.get('mn-form')
}
