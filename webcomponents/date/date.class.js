const MnInput = require('../input/input.class.js')

module.exports = class MnDate extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.classList.add('mn-date')
    this._setCssClasses()
    this._setInput()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeDisabled()
    this._setAttributeReadonly()
    this._setAttributeAutofocus()
    // this._setAttributeMax()
    // this._setAttributeMin()
    this._setValidations()
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

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'date')
  }

  get value() {
    return new Date(this.input.value).toISOString()
  }

  set value(value) {
    this.input.value = value
    this.input.dispatchEvent(new Event('change'))
  }
}
