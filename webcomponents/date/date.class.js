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
    this._setAttributeMax()
    this._setAttributeMin()
    this._setValidations()
    this._overrideValidations()
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

  _setAttributeMax() {
    this.max = this.getAttribute('max')
  }

  _setAttributeMin() {
    this.min = this.getAttribute('min')
  }

  _overrideValidations() {
    this.validations.required = () => this.value === undefined,
    // this.validations.min = () => this.value < this.getAttribute('min')
    // this.validations.max = () => this.value > this.getAttribute('max')
    delete this.validations.pattern
  }

  get value() {
    return 'value'
  }

  set value(value) {
    console.log('setting value')
  }

  set max(value) {
    this.hasAttribute('max')
      ? this.label.setAttribute('max', value)
      : this.label.removeAttribute('max')
  }

  set min(value) {
    this.hasAttribute('min')
      ? this.label.setAttribute('min', value)
      : this.label.removeAttribute('min')
  }
}
