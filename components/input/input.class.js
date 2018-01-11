const {HTMLElement} = window
const evaluate = require('evaluate-string')

module.exports = class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.delimeterKeys = ['Comma', 'Enter', 'Space']
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.trimValue = true
    this._setStyle()
    this._setInput()
    this.setChangeEvents()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeName()
    this._setAttributeDisabled()
    this._setAttributeReadonly()
    this._setAttributeMaxlength()
    this._setAttributeAutocapitalize()
    this._setAttributeAutocomplete()
    this._setAttributeSpellcheck()
    this._setAttributeAutofocus()
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      // 'readonly',
      'maxlength',
      'autocapitalize',
      'autofocus',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  _setStyle() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.classList.add('input')

    this.appendChild(this.input)

    this.input.addEventListener('input', () => this.setValue)

    this.input.addEventListener('change', () => { // set class .has-value
      if (this.trimValue && document.activeElement !== this.input) {
        this.input.value = this.input.value.replace(/\s{2,}/g, ' ').trim()
      }

      this.dispatchChangeEvent()
      this.setValue()
    })

    this.input.addEventListener('keydown', (event) => {
      const isDelimeterKey = this.delimeterKeys.find(key => key === event.code)
      if (this.hasAttribute('multiple') && isDelimeterKey) {
        this.input.dispatchEvent(new Event('blur'))
        event.preventDefault()
      }
    })

    this.input.addEventListener('blur', () => {
      if (this.input.value && this.hasAttribute('multiple')) {
        if (this.delimeterKeys.length) {
          this.push(this.input.value)
        }
        this.input.value = ''
      }

      this.setValue()
    })

    const validate = () => { // validate
      const closestForm = this.closest('form') || this.closest('mn-form')
      closestForm && closestForm.classList.contains('submitted')
        ? this.validate()
        : null
    }

    this.input.addEventListener('keyup', validate)
    this.input.addEventListener('change', validate)
    this.input.addEventListener('input', validate)

    this.input.addEventListener('focus', () => {
      if (!this.hasAttribute('readonly') && !this.hasAttribute('disabled')) {
        this.classList.add('focus')
      }
    })

    this.input.addEventListener('blur', () => this.classList.remove('focus'))
    if (this.hasAttribute('value')) {
      this.input.value = this.getAttribute('value')
    }
    this.setValue()
  }

  setValue() {
    this.input.value || this.hasAttribute('value')
      ? this.classList.add('has-value')
      : this.classList.remove('has-value')
  }

  setChangeEvents() {
    this.input.addEventListener('input', this.dispatchChangeEvent)
    this.input.addEventListener('blur', this.dispatchChangeEvent)
  }

  dispatchChangeEvent() {
    this.dispatchEvent(new Event('change'))
  }

  _setPlaceholder() {
    this.label = document.createElement('label')
    this.label.classList.add('placeholder')
    this.appendChild(this.label)
    this.placeholder = this.getAttribute('placeholder')
  }

  _setAttributeValue() {
    this.value = evaluate(this.getAttribute('value') || '')
    this.default = this.value
  }

  _setAttributeName() {
    const name = this.getAttribute('name')
    if (name) {
      this.name = name
    }
  }

  _setAttributeDisabled() {
    this.disabled = this.hasAttribute('disabled')
  }

  _setAttributeReadonly() {
    this.readonly = this.hasAttribute('readonly')
  }

  _setAttributeMaxlength() {
    this.maxlength = this.getAttribute('maxlength')
  }

  _setAttributeAutocapitalize() {
    this.autocapitalize = this.getAttribute('autocapitalize') || 'off'
  }

  _setAttributeAutocomplete() {
    this.input.setAttribute('autocomplete', 'off')
  }

  _setAttributeSpellcheck() {
    this.input.setAttribute('spellcheck', 'off')
  }

  _setAttributeAutofocus() {
    this.autofocus = this.hasAttribute('autofocus')
  }

  _setValidations() {
    this.validations = {
      required: () => this.hasAttribute('multiple')
        ? this.value.length === 0
        : this.value === undefined,
      pattern: () => {
        const reg = new RegExp(this.getAttribute('pattern'))

        return this.value
          ? !reg.test(this.value)
          : false
      },
    }
  }

  get value() {
    return this.hasAttribute('multiple')
      ? evaluate(this.getAttribute('value'))
        ? evaluate(this.getAttribute('value')).map(item => String(item))
        : []
      : this.input.value || undefined
  }

  set value(value = '') {
    if (this.input) {
      const differentValue = this.getAttribute('value') !== value
      const valueIsMultiple = this.hasAttribute('multiple')

      if (!valueIsMultiple) {
        this.input.value = value
      }

      if (differentValue) {
        if (valueIsMultiple) {
          Array
            .from(this.querySelectorAll('.value'))
            .forEach(item => item.parentNode.removeChild(item))

          const values = Array.isArray(value)
            ? value.map(item => String(item))
            : [value]

          values
            .filter(item => item)
            .forEach(val => this.push(val))
        } else {
          this.input.value = value

          if (document.activeElement !== this.input) {
            this.input.value = this.trimValue && value
              ? value.replace(/\s{2,}/g, ' ').trim()
              : value
          }
        }

        this.input.dispatchEvent(new Event('change'))
      }
    }
  }

  set name(value) {
    const form = this.closest('form') || this.closest('mn-form')
    const name = this.getAttribute('name')
    const element = this

    if (form && !form[name]) {
      Object.defineProperty(form, name, {
        get: () => {
          return element.getAttribute('name')
            ? element
            : undefined
        },
      })
    }
  }

  set placeholder(value) {
    if (this.label) {
      this.label.textContent = value
    }
  }

  set disabled(value) {
    if (this.input) {
      this.input.disabled = value || this.hasAttribute('disabled')
    }
  }

  set readonly(value) {
    this.input.readOnly = value || this.hasAttribute('readonly')
  }

  set maxlength(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('maxlength', value)
        : this.input.removeAttribute('maxlength')
    }
  }

  set autocapitalize(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('autocapitalize', value)
        : this.input.removeAttribute('autocapitalize')
    }
  }

  set autofocus(value) {
    if (this.input) {
      this.input.autofocus = value || this.hasAttribute('autofocus')
    }
  }

  blur() {
    this.input.blur()
  }

  focus() {
    // this.input.dispatchEvent(new Event('touchstart'))
    // this.input.dispatchEvent(new Event('touchsend'))
    this.input.focus()
  }

  validate() {
    const validations = {}

    for (const attribute of Object.keys(this.validations || {})) {
      const hasAttribute = this.hasAttribute(attribute)
      const attributeIsInvalid = this.validations[attribute]()

      if (hasAttribute && attributeIsInvalid) {
        this.classList.add(attribute)
        validations[attribute] = true
      } else {
        this.classList.remove(attribute)
      }
    }

    const isInvalid = Object.values(validations).some(item => item === true)

    isInvalid
      ? this.classList.add('invalid')
      : this.classList.remove('invalid')
  }

  push(value, text) {
    const values = Array
      .from(this.querySelectorAll('.value'))
      .map(item =>
        item.hasAttribute('value')
          ? item.getAttribute('value')
          : item.textContent
      )

    const attributeValue = this.getAttribute('value')

    const itemUsed = values.find(item => item === value)
    this.classList.add('has-value')

    if (!itemUsed) {
      const item = document.createElement('div')
      const buttonClose = document.createElement('button')
      buttonClose.addEventListener('click', event => this.remove(event.target.parentNode))
      item.classList.add('value')
      item.textContent = text || value[this.keyValue] || value
      item.appendChild(buttonClose)
      value = typeof value === 'string'
        ? evaluate(value)
        : value

      item.setAttribute('value', typeof value === 'object' ? JSON.stringify(value) : value)
      this.insertBefore(item, this.input)

      const values = Array
        .from(this.querySelectorAll('.value'))
        .map(item => evaluate(item.getAttribute('value')) || item.textContent)

      if (this.hasAttribute('multiple')) {
        this.setAttribute('value', JSON.stringify(values))
      }
    }

    const changeAttributeValue = attributeValue !== this.getAttribute('value')

    if (changeAttributeValue) {
      this.dispatchEvent(new Event('change'))
    }
  }

  remove(item) {
    item.parentNode.removeChild(item)

    const values = Array
      .from(this.querySelectorAll('.value'))
      .map(item => {
        return item.hasAttribute('value')
          ? evaluate(item.getAttribute('value'))
          : item.textContent
      })

    values.length
        ? this.setAttribute('value', JSON.stringify(values))
        : this.removeAttribute('value')

    this.input.dispatchEvent(new Event('change'))
    this.dispatchEvent(new Event('change'))
    this.input.value = ''
  }
}
