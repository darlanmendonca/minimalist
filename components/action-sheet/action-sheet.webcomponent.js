module.exports = MnActionSheetCustomElement()

function MnActionSheetCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-action-sheet')) {
    window.customElements.define('mn-action-sheet', require('./action-sheet.class.js'))
  }

  return window.customElements.get('mn-action-sheet')
}
