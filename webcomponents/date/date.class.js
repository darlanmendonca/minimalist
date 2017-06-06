const MnInput = require('../input/input.class.js')

module.exports = class MnDate extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    super._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    // this._setAttributeMax()
    // this._setAttributeMin()
    super._setValidations()
    // this._overrideValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
      'max',
      'min',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-date')
  }

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'date')
  }

  get value() {
    return this.input.value
      ? new Date(this.input.value).toISOString()
      : undefined
  }

  set value(value) {
    this.input.value = value
    this.input.dispatchEvent(new Event('change'))
  }
}
