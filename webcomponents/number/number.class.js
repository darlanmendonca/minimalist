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
    this._setMask()
    this._setMobileKeyboard()
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

  _setMask() {
    this.mask = document.createElement('div')
    this.mask.classList.add('mask')
    this.appendChild(this.mask)

    this.input.addEventListener('input', () => {
      this.updateMask()
    })
  }

  _setMobileKeyboard() {
    this.input.setAttribute('pattern', '\\d*')
  }

  _setInputTransforms() {
    this.input.addEventListener('change', () => {
      try {
        const value = eval(this.input.value.replace(/,/g, '.'))
        value !== undefined
          ? this.input.value = String(value).replace(/\./g, ',')
          : null
        const valueIsDefined = value !== undefined

        if (valueIsDefined) {
          const isCurrency = this.hasAttribute('currency')
          const precision = this.getAttribute('precision') || 0

          switch (true) {
            case isCurrency:
              this.input.value = value.toFixed(precision || 2).replace(/\./g, ',')
              break

            default:
              this.input.value = precision
                ? value.toFixed(precision).replace(/\./g, ',')
                : String(value).replace(/\./g, ',')
              break
          }
        }
      } catch (e) {
        this.value = undefined
      }

      this.hasAttribute('percentage')
        ? this.updateMask()
        : null
    })
  }

  _setInputKeys() {
    this.input.addEventListener('keydown', (event) => {
      const step = this.hasAttribute('percentage')
        ? +this.getAttribute('step') || 0.01
        : +this.getAttribute('step') || 1
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

  set value(value = '') {
    if (this.input) {
      try {
        value = eval(String(value).replace(/,/g, '.'))
        const differentValue = this.input.value !== value

        if (value !== undefined && differentValue) {
          value = this.hasAttribute('percentage')
            ? +(value * 100).toFixed(this.getAttribute('precision') || 2)//value * 100
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

  updateMask() {
    const hasValue = this.input.value !== '' && !/^\s+$/.test(this.input.value)

    if (this.mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${this.input.value} %`
        : ''

      this.mask.textContent = text
    }

    if (this.mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${this.input.value} %`
        : ''

      this.mask.textContent = text
    }
  }
}
