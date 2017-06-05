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

  _setInput() {
    const day = document.createElement('input')
    const month = document.createElement('input')
    const year = document.createElement('input')
    day.classList.add('day')
    day.setAttribute('min', '1')
    day.setAttribute('max', '31')
    day.setAttribute('placeholder', 'dd')
    month.classList.add('month')
    month.setAttribute('min', '1')
    month.setAttribute('max', '12')
    month.setAttribute('placeholder', 'mm')
    year.classList.add('year')
    year.setAttribute('min', '1')
    year.setAttribute('placeholder', 'yyyy')

    this.inputs = [day, month, year]

    this.inputs.forEach(input => {
      input.classList.add('input')
      input.setAttribute('type', 'number')
      this.appendChild(input)

      input.addEventListener('change', () => {
        function pad(num) {
          num = num + ''
          const size = input.classList.contains('year')
            ? 4
            : 2
          while (num.length < size) {
            num = '0' + num
          }

          return num
        }
        const formattedValue = pad(input.value)

        if (input.value !== formattedValue && formattedValue !== '0000' && formattedValue !== '00') {
          input.value = formattedValue
        }

        input.value
          ? this.classList.add('has-value')
          : this.classList.remove('has-value')
      })

      input.addEventListener('blur', () => {
        this.value
          ? this.classList.add('has-value')
          : this.classList.remove('has-value')
      })

      input.addEventListener('focus', () => {
        if (!this.hasAttribute('readonly') && !this.hasAttribute('disabled')) {
          this.classList.add('focus')
        }
      })

      input.addEventListener('blur', () => this.classList.remove('focus'))
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
    // this.validations.min = () => this.value < this.getAttribute('min')
    // this.validations.max = () => this.value > this.getAttribute('max')
    delete this.validations.pattern
  }

  get value() {
    const day = +this.inputs[0].value
    const month = +this.inputs[1].value
    const year = +this.inputs[2].value
    const date = new Date(`${year}-${month}-${day}`)

    const validDate = year && month && day && !isNaN(date.valueOf())

    return validDate
      ? date.toISOString()
      : undefined
  }

  set value(value) {
    const date = new Date(value)
    const validDate = !isNaN(date.valueOf())

    if (validDate) {
      this.inputs[0].value = date.getDate() + 1
      this.inputs[1].value = date.getMonth() + 1
      this.inputs[2].value = date.getFullYear()
      this.inputs.forEach(input => {
        input.dispatchEvent(new Event('change'))
      })
    }
  }

  set disabled(value) {
    this.inputs.forEach(input => {
      input.disabled = value || this.hasAttribute('disabled')
    })
  }

  set readonly(value) {
    this.inputs.forEach(input => {
      input.readOnly = value || this.hasAttribute('readonly')
    })
  }

  set autofocus(value) {
    this.inputs[0].autofocus = value || this.hasAttribute('autofocus')
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
