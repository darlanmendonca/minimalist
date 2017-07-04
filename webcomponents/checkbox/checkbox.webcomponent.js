module.exports = MnCheckboxCustomElement()

function MnCheckboxCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-checkbox')) {
    window.customElements.define('mn-checkbox', require('./checkbox.class.js'))
  }

  return window.customElements.get('mn-checkbox')
}
