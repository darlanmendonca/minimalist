const MnInput = require('../input/input.class.js')

module.exports = class MnSelect extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    super._setInput()
    super._setPlaceholder()
    // super._setAttributeValue()
    // super._setAttributeDisabled()
    // super._setAttributeReadonly()
    // super._setAttributeAutofocus()
    // this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-select')
  }
}
