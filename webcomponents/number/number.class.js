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
    this._setPrecision()
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
    this.input.setAttribute('pattern', '\\d*')
  }

  _setPrecision() {
    if (this.hasAttribute('percentage')) {
      this.input.addEventListener('input', () => {
        const value = this.input.value !== ''
          ? `'${this.input.value} %'`
          : ''

        this.style.setProperty('--percentage', value)
      })
    }

    this.input.addEventListener('change', () => {
      const value = this.input.value
      const isDecimal = this.hasAttribute('decimal')
      const isCurrency = this.hasAttribute('currency')
      const isPercentage = this.hasAttribute('percentage')

      let precision

      switch (true) {
        case isDecimal:
        case isCurrency:
          precision = this.getAttribute('decimal') || this.getAttribute('currency')
          this.input.value = parseFloat(value).toFixed(precision || 2)
          break

        case isPercentage:
          if (isNaN(value)) {
            precision = this.getAttribute('percentage')
            precision
              ? this.input.value = parseFloat(value).toFixed(precision)
              : this.input.value = parseFloat(value)
          }
          break

        default:
          this.input.value = parseInt(value)
          break
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
    const isUndefined = this.input.value === ''

    return isUndefined
      ? undefined
      : this.hasAttribute('percentage')
        ? this.input.value / 100
        : parseFloat(this.input.value)
  }

  set value(value = '') {
    const differentValue = this.input && this.input.value !== value

    if (this.input && differentValue) {
      value = parseFloat(value)
      value = this.hasAttribute('percentage')
        ? value * 100
        : value
      this.input.value = value
      this.input.dispatchEvent(new Event('change'))
      this.input.dispatchEvent(new Event('input'))
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
