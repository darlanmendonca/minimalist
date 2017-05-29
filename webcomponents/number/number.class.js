const MnInput = require('../input/input.class.js')

module.exports = class MnNumber extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.classList.add('mn-number')
    this._setCssClasses()
    this._setInput()
    this._setType()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeDisabled()
    this._setAttributeAutofocus()
    this._setAttributeStep()
    this._setAttributeMax()
    this._setAttributeMin()
    this._setValidations()
    this._overrideValidations()
  }

  _setType() {
    this.input.setAttribute('type', 'number')
    this.input.addEventListener('change', () => {
      const value = this.input.value
      const isFloat = Number(value) === value && value % 1 !== 0
      if (isFloat) {
        this.input.value = parseInt(value)
      }
    })
  }

  _setAttributeStep() {
    this.step = this.getAttribute('step')
  }

  _setAttributeMax() {
    this.max = this.getAttribute('max')
  }

  _setAttributeMin() {
    this.min = this.getAttribute('min')
  }

  _overrideValidations() {
    this.validations.required = () => this.value === undefined,
    this.validations.min = () => this.value < this.getAttribute('min')
    this.validations.max = () => this.value > this.getAttribute('max')
    delete this.validations.pattern
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
      'step',
      'max',
      'min',
    ]
  }

  get value() {
    return this.input.value
      ? +this.input.value
      : undefined
  }

  set value(value = '') {
    const differentValue = this.input && this.input.value !== value

    if (this.input && differentValue) {
      this.input.value = value
      this.input.dispatchEvent(new Event('change'))
    }
  }

  set step(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('step', value)
        : this.input.removeAttribute('step')
    }
  }

  set max(value) {
    if (this.input) {
      this.hasAttribute('max')
        ? this.label.setAttribute('max', value)
        : this.label.removeAttribute('max')
    }
  }

  set min(value) {
    if (this.input) {
      this.hasAttribute('min')
        ? this.label.setAttribute('min', value)
        : this.label.removeAttribute('min')
    }
  }
}
