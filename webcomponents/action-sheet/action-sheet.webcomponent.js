module.exports = MnActionSheetCustomElement()

function MnActionSheetCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnActionSheet = require('./action-sheet.class.js')
  window.customElements.define('mn-action-sheet', MnActionSheet)
  return window.customElements.get('mn-action-sheet')
}
