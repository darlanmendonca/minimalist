const {HTMLElement} = window
const evaluate = require('evaluate-string')

module.exports = class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)
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
      'readonly',
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

    this.input.addEventListener('input', () => {
      this.hasAttribute('value')
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    this.input.addEventListener('change', () => { // set class .has-value
      if (this.trimValue) {
        this.input.value = this.input.value.replace(/\s{2,}/g, ' ').trim()
      }

      this.dispatchChangeEvent()

      this.hasAttribute('value')
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    this.input.addEventListener('blur', () => {
      this.hasAttribute('value') || this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
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
      required: () => this.value === '',
      pattern: () => {
        const reg = new RegExp(this.getAttribute('pattern'))

        return this.value
          ? !reg.test(this.value)
          : false
      },
    }
  }

  get value() {
    return this.input.value
  }

  set value(value = '') {
    if (this.input) {
      const differentValue = this.input.value !== value

      if (differentValue) {
        this.input.value = this.trimValue && value
          ? value.replace(/\s{2,}/g, ' ').trim()
          : value
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
}
