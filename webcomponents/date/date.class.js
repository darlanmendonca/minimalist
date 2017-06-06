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
    super._setValidations()
    // this._overrideValidations()
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

  _setMask() {
    this.input.addEventListener('input', () => {
      this.updateMask()
    })
  }

  updateMask() {
    const value = this.input.value
    const reg = /(\d{1,2})(?:\/)?(\d{1,2})?(?:\/)?(\d{1,4})?/
    const pattern = /^\d{1,2}\/\d{1,2}\/\d{1,}/
    const match = value.match(reg)
    const day = match && match[1]
    const month = match && match[2]
    const year = match && match[3]

    !value.match(pattern)
      ? this.input.value = [day, month, year].filter(item => Boolean(item)).join('/')
      : null
  }

  get value() {
    let date
    try {
      const value = this.input.value
      const format = this.input.type === 'date'
        ? /^\d{4}-\d{2}-\d{2}$/
        : /^\d{2}\/\d{2}\/\d{4}$/

      date = value.match(format)
        ? new Date(`${value} 00:00:00`)
        : undefined
    } catch (e) {}

    return date
      ? date.toISOString()
      : undefined
  }

  set value(value = '') {
    value = value instanceof Date
      ? value.toISOString().substring(0, 10)
      : typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}$/)
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
