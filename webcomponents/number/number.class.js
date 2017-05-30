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
    this._setInputType()
    this._setInputTransforms()
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

  _setInputType() {
    // display numeric keyboard in mobile
    this.input.setAttribute('pattern', '\\d*')
  }

  _setInputTransforms() {
    this.input.addEventListener('change', () => {
      try {
        const value = eval(this.input.value.replace(',', '.'))
        value !== undefined
          ? this.input.value = String(value).replace('.', ',')
          : null
        const valueIsDefined = value !== undefined

        if (valueIsDefined) {
          const isDecimal = this.hasAttribute('decimal')
          const isCurrency = this.hasAttribute('currency')
          const isPercentage = this.hasAttribute('percentage')

          switch (true) {
            case isDecimal:
            case isCurrency:
              const precision = this.getAttribute('decimal') || this.getAttribute('currency')
              this.input.value = String(value.toFixed(precision || 2)).replace('.', ',')
              break

            case isPercentage:
              this.input.value = String(value).replace('.', ',')
              break

            default:
              this.input.value = parseInt(value)
              break
          }
        }
      } catch (e) {
        this.value = undefined
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
    const numberString = this.input.value.replace(',', '.')

    return isUndefined
      ? undefined
      : this.hasAttribute('percentage')
        ? (numberString * 100) / 10000
        : parseFloat(numberString)
  }

  set value(value) {
    if (this.input) {
      try {
        value = eval(value.replace(',', '.'))
        const differentValue = this.input && this.input.value !== value

        if (value !== undefined && differentValue) {
          value = this.hasAttribute('percentage')
            ? value * 100
            : value
          this.input.value = value
        } else {
          this.input.value = ''
        }

        this.input.dispatchEvent(new Event('change'))
      } catch (e) {
        this.input.value = ''
      }
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
