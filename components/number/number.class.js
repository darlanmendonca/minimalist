const MnInput = require('../input/input.class.js')
const evaluate = require('evaluate-string')

module.exports = class MnNumber extends MnInput {
  constructor(self) {
    self = super(self)
    this.delimeterKeys = ['Enter', 'Space']
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    super._setInput()
    this.setChangeEvents()
    this._setMask()
    this._setMobileKeyboard()
    this._setInputTransforms()
    this._setInputKeys()
    super._setPlaceholder()
    super._setAttributeValue()
    super._setAttributeName()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    this._setAttributeMax()
    this._setAttributeMin()
    this._setValidations()
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
    this.classList.add('mn-number')
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
      const commaOrDot = !this.input.value.endsWith(',')
        && !this.input.value.endsWith('.')

      if (commaOrDot) {
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
          this.input.value = ''
        }

        this.hasAttribute('percentage')
          ? this.updateMask()
          : null
      }
    })
  }

  setChangeEvents() {
    this.input.addEventListener('blur', this.dispatchChangeEvent)
  }

  _setInputKeys() {
    this.input.addEventListener('keydown', (event) => {
      if (!this.hasAttribute('readonly')) {
        const step = this.hasAttribute('percentage')
          ? ((+this.getAttribute('step') * 100) / 10000) || 0.01
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
      }
    })
  }

  _setAttributeMax() {
    this.max = this.getAttribute('max')
  }

  _setAttributeMin() {
    this.min = this.getAttribute('min')
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.hasAttribute('multiple')
      ? this.value.length === 0
      : this.value === undefined
    this.validations.min = () => this.value < this.getAttribute('min')
    this.validations.max = () => this.value > this.getAttribute('max')
    delete this.validations.pattern
  }

  get value() {
    const isUndefined = this.input.value === '' && !this.hasAttribute('value')
    const value = this.hasAttribute('value')
      ? this.getAttribute('value')
      : this.input.value
    const numberString = value.replace(/,/g, '.')

    const val = isUndefined
      ? undefined
      : this.hasAttribute('percentage')
        ? (numberString * 100) / 10000
        : parseFloat(numberString)

    if (isUndefined) {
      return undefined
    } else {
      if (this.hasAttribute('multiple')) {
        return evaluate(this.getAttribute('value'))
          ? evaluate(this.getAttribute('value')).map(item => +String(item).replace(',', '.'))
          : []
      } else {
        return this.hasAttribute('percentage')
          ? (numberString * 100) / 10000
          : parseFloat(numberString)
      }
    }

    return val
  }

  set value(value) {
    const valueIsMultiple = this.hasAttribute('multiple')
    const differentValue = this.getAttribute('value') !== value
    const hasValue = value !== ''

    if (this.input && hasValue && differentValue) {
      if (valueIsMultiple) {
        Array
          .from(this.querySelectorAll('.value'))
          .forEach(item => item.parentNode.removeChild(item))

        const values = Array.isArray(value)
          ? value.map(item => String(item))
          : [value].filter(item => item !== undefined)

        if (!values.length) {
          this.removeAttribute('value')
        }

        values
          .filter(item => item)
          .forEach(val => {
            // val = eval(String(val).replace(/,/g, '.'))

            // if (val !== undefined && differentValue) {
            //   val = this.hasAttribute('percentage')
            //     ? +(val * 100).toFixed(this.getAttribute('precision') || 2)
            //     : val
            // }
            this.push(val)
          })
      } else {
        try {
          value = eval(String(value).replace(/,/g, '.'))

          if (value !== undefined && differentValue) {
            value = this.hasAttribute('percentage')
              ? +(value * 100).toFixed(this.getAttribute('precision') || 2)
              : value
            this.input.value = value
          } else {
            this.input.value = ''
          }
        } catch (e) {
          this.input.value = ''
        }
      }

      this.input.dispatchEvent(new Event('change'))
      this.input.dispatchEvent(new Event('input'))
    }
  }

  set max(value) {
    if (this.label) {
      this.hasAttribute('max')
        ? this.label.setAttribute('max', value)
        : this.label.removeAttribute('max')
    }
  }

  set min(value) {
    if (this.label) {
      this.hasAttribute('min')
        ? this.label.setAttribute('min', value)
        : this.label.removeAttribute('min')
    }
  }

  updateMask() {
    const hasValue = this.input.value !== '' && !/^\s+$/.test(this.input.value)

    if (this.mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${this.input.value} %`
        : ''

      this.mask.textContent = text
    }
  }
}
