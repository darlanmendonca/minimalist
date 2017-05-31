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
    this._setInputKeys()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeDisabled()
    this._setAttributeAutofocus()
    this._setAttributeMax()
    this._setAttributeMin()
    this._setValidations()
    this._overrideValidations()
  }

  _setInputType() {
    // display numeric keyboard in mobile
    this.input.setAttribute('pattern', '\\d*')
  }

  _setInputPercentageMask() {
    const value = this.input.value !== ''
      ? `'${this.input.value} %'`
      : ''

    this.style.setProperty('--percentage', value)
  }

  _setInputTransforms() {
    if (this.hasAttribute('percentage')) {
      this.input.addEventListener('input', () => {
        this._setInputPercentageMask()
      })
    }

    this.input.addEventListener('change', () => {
      try {
        const value = eval(this.input.value.replace(/,/g, '.'))
        value !== undefined
          ? this.input.value = String(value).replace(/\./g, ',')
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
              this.input.value = String(value.toFixed(precision || 2)).replace(/\./g, ',')
              break

            case isPercentage:
              this.input.value = String(value).replace(/\./g, ',')
              break

            default:
              this.input.value = parseInt(value)
              break
          }
        }
      } catch (e) {
        this.value = undefined
      }

      this._setInputPercentageMask()
    })
  }

  _setInputKeys() {
    this.input.addEventListener('keydown', (event) => {
      const step = +this.getAttribute('step') || 1
      const value = this.value || 0

      switch (event.key) {
        case 'ArrowUp':
          this.value = value + step
          break
        case 'ArrowDown':
          this.value = value - step
          break
      }

      event.key === 'ArrowUp' || event.key === 'ArrowDown'
        ? event.preventDefault()
        : null
    })
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
      'max',
      'min',
    ]
  }

  get value() {
    const isUndefined = this.input.value === ''
    const numberString = this.input.value.replace(/,/g, '.')

    const val = isUndefined
      ? undefined
      : this.hasAttribute('percentage')
        ? (numberString * 100) / 10000
        : parseFloat(numberString)

    return val
  }

  set value(value) {
    if (this.input) {
      try {
        value = eval(String(value).replace(/,/g, '.'))
        const differentValue = this.input && this.input.value !== value

        if (value !== undefined && differentValue) {
          value = this.hasAttribute('percentage')
            ? value * 100
            : value
          this.input.value = value
        } else {
          this.input.value = ''
        }

      } catch (e) {
        this.input.value = ''
      }

      this.input.dispatchEvent(new Event('change'))
      this.input.dispatchEvent(new Event('input'))
    }
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
