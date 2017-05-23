const MnInput = require('../input/input.class.js')

module.exports = class MnPassword extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setType()
    this._setCssClasses()
    this._setInput()
    this._setType()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeDisabled()
    this._setAttributeMaxlength()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'maxlength',
    ]
  }

  _setType() {
    this.input
      ? this.input.setAttribute('type', 'password')
      : null
  }
}
