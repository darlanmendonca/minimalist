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

    if (supportsInputDate) { // temp
      this.input.setAttribute('type', 'text') // temp
      this.input.setAttribute('maxlength', 10)
      this._setMask()
    }
  }

  _setMask() {
    this.input.addEventListener('input', () => {
      this.updateMask()
    })

    // this.input.addEventListener('change', () => {
      // console.log(this.input.value)
      // this.updateMask()
    // })
  }

  updateMask() {
    // const value = this.input.value
    // const reg = /(\d{1,2})(?:\/)?(\d{1,2})?(?:\/)?(\d{1,})?/
    // const pattern = /^\d{1,2}\/\d{1,2}\/\d{1,}/
    // const match = value.match(reg)
    // const day = match && match[1]
    // const month = match && match[2]
    // const year = match && match[3]

    // !value.match(pattern)
    //   ? this.input.value = [day, month, year].filter(item => Boolean(item)).join('/')
    //   : null
  }

  get value() {
    let date
    try {
      date = new Date(`${this.input.value} 00:00:00`)
    } catch (e) {}

    return date && date.getTime()
      ? date.toISOString()
      : undefined
  }

  set value(value = '') {
    value = value instanceof Date
      ? value.toISOString().substring(0, 10)
      : typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}$/)
        ? new Date(value).toISOString().substring(0, 10)
        : ''

    const supportsInputDate = this.input.type === 'date'

    if (!supportsInputDate) {
      const date = new Date(`${value} 00:00:00`)
      function leadingZero(num) {
        const s = '00' + num
        return s.substr(s.length-2)
      }

      value = date.getTime()
        ? `${leadingZero(date.getDate())}/${leadingZero(date.getMonth() + 1)}/${date.getFullYear()}`
        : ''
    }

    this.input.value = value
    this.input.dispatchEvent(new Event('change'))
  }
}
