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
    super.setChangeEvents()
    super._setPlaceholder()
    super._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
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

    if (!supportsInputDate) {
      this.input.setAttribute('type', 'text')
      this.input.setAttribute('maxlength', 10)
      this._setMask()
    }
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    this.validations.min = () => newDate(this.value) < newDate(this.getAttribute('min'))
    this.validations.max = () => newDate(this.value) > newDate(this.getAttribute('max'))
    delete this.validations.pattern
  }

  _setMask() {
    this.input.addEventListener('keydown', (event) => {
      const isInputEditing = event.key === 'Backspace'
        || this.input.selectionStart !== this.input.value.length

      this.inputEditing = isInputEditing
    })

    this.input.addEventListener('input', () => {
      if (!this.inputEditing) {
        this.updateMask()
      }

      this.inputEditing = undefined
    })

    this.input.addEventListener('blur', () => {
      this.updateMask()
      const dateString = this.input.value
        .split('/')
        .reverse()
        .join('-')

      isValidDate(dateString)
        ? this.updateMask()
        : this.value = ''
    })
  }

  updateMask() {
    this.input.value = this.input.value
      .replace(/[^\d\/]/, '') // disallow invalid chars
      .replace(/[a-z]/ig, '') // disallow letters
      .replace(/(?:^00|^(\d{2})\/00)/g, '$101') // disallow repeated 0
      .replace(/000(\d)$/g, '190$1') // disallow year 0
      .replace(/00(\d{2})$/g, '19$1') // disallow year 0
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
      const isDateString = this.input.type === 'date'
      const value = isDateString
        ? this.input.value
        : this.input.value
          .split('/')
          .reverse()
          .join('-')

      date = isValidDate(value)
        ? newDate(value).toISOString()
        : undefined
    } catch (e) {}

    return date
      ? date
      : undefined
  }

  set value(value = '') {
    const validDate = typeof value === 'string'
      && isValidDate(value)

    value = value instanceof Date
      ? value.toISOString().substring(0, 10)
      : validDate
        ? newDate(value)
          .toISOString()
          .substring(0, 10)
        : ''

    const supportsInputDate = this.input.type === 'date'

    if (!supportsInputDate && validDate) {
      const dateString = value.split('-')
      value = new Date(dateString[0], dateString[1] - 1, dateString[2], 0, 0)
        .toLocaleString('pt-BR')
        .substring(0, 10)
    }

    this.input.value = value
    this.input.dispatchEvent(new Event('change'))
  }
}

function isValidDate(dateString) {
  const year = +dateString.split('-')[0]
  const month = +dateString.split('-')[1]
  const date = newDate(dateString)

  return date.getFullYear() >= 1900
    && date.getFullYear() === year
    && date.getMonth() + 1 === month
}

function newDate(dateString) {
  dateString = dateString || ''
  const isString = typeof dateString === 'string'
  dateString = dateString.replace(/T.+/, '')
  dateString = isString && dateString.includes('/')
    ? dateString
      .split('/')
      .reverse()
      .join('-')
    : dateString

  dateString = dateString.split('-')

  const date = new Date(dateString[0], dateString[1] - 1, dateString[2])
  return date
}
