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
    this.classList.add('mn-date')
  }

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'date')
    const supportsInputDate = this.input.type === 'date'

    if (supportsInputDate) {
      this.input.setAttribute('type', 'text')
      this.input.setAttribute('maxlength', 10)
      this._setMask()
    }
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    this.validations.min = () => new Date(this.value) < new Date(`${this.getAttribute('min')} 00:00:00`)
    this.validations.max = () => new Date(this.value) > new Date(`${this.getAttribute('max')} 00:00:00`)
    delete this.validations.pattern
  }

  _setMask() {
    this.input.addEventListener('keydown', (event) => {
      const isInputEditing = event.key === 'Backspace'
        || this.input.selectionStart !== this.input.value.length

      this.inputEditing = isInputEditing
    })

    this.input.addEventListener('input', (event) => {
      if (!this.inputEditing) {
        this.updateMask()
      }

      this.inputEditing = undefined
    })

    this.input.addEventListener('blur', () => {
      this.updateMask()
      const dateString = this.input.value.split('/').reverse().join('-')
      const validDate = Date.parse(dateString)

      validDate
        ? this.updateMask()
        : this.value = ''
    })
  }

  updateMask() {
    this.input.value = this.input.value
      .replace(/[^\d\/]/, '') // disallow invalid chars
      .replace(/(^00|\/00)/g, '01') // disallow repeated 0
      .replace(/\/{2}/g, '/') // disallow repeated /
      .replace(/(^\/)/, '') // disallow / as first char
      .replace(/(\d+\/\d+\/)\//, '$1') // disallow third /
      .replace(/^(\d)\//, '0$1/') // leading 0 day
      .replace(/^(\d{2})(\d{1})/, '$1/$2') // add first /
      .replace(/^(\d{2}\/)(\d{1})\//, '$10$2/') // leading 0 month
      .replace(/^(\d{2}\/\d{2})(\d{1})/, '$1/$2') // add second /
  }

  get value() {
    let date
    try {
      const value = this.input.value
      const isDateFormat = this.input.type === 'date'
      const format = isDateFormat
        ? /^\d{4,}-\d{2}-\d{2}$/
        : /^\d{2}\/\d{2}\/\d{4,}$/

      const year = +value.split(/-|\//)[isDateFormat ? 0 : 2]
      const month = value.split(/-|\//)[1] - 1
      const day = +value.split(/-|\//)[isDateFormat ? 2 : 0]

      date = value.match(format)
        ? new Date(year, month, day).toISOString()
        : undefined
    } catch (e) {console.log(e)}

    return date
      ? date
      : undefined
  }

  set value(value = '') {
    value = value instanceof Date
      ? value.toISOString().substring(0, 10)
      : typeof value === 'string' && value.match(/^\d{4,}-\d{2}-\d{2}$/)
        ? new Date(value)
          .toISOString()
          .substring(0, 10)
        : ''

    const supportsInputDate = this.input.type === 'date'

    if (!supportsInputDate) {
      const date = new Date(`${value} 00:00:00`)
      const day = leadingZero(date.getDate())
      const month = leadingZero(date.getMonth() + 1)
      const year = date.getFullYear()

      value = date.getTime()
        ? `${day}/${month}/${year}`
        : ''

      function leadingZero(num) {
        const str = `00${num}`
        return str.substr(str.length - 2)
      }
    }

    this.input.value = value
    this.input.dispatchEvent(new Event('change'))
  }
}
