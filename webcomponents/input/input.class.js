const {HTMLElement} = window

module.exports = class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setCssClasses()
    this._setLabel()
    this._setInput()
    this._setAttributeValue()
    this._setAttributeAutocomplete()
    this._setAttributeSpellcheck()
  }

  _setCssClasses() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.classList.add('input')
    this.insertBefore(this.input, this.firstChild)

    this.input.addEventListener('change', () => {
      this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })
  }

  _setLabel() {
    this.label = document.createElement('label')
    this.label.classList.add('label')
    this.label.textContent = this.getAttribute('placeholder')
    this.insertBefore(this.label, this.firstChild)
  }

  _setAttributeValue() {
    const value = this.getAttribute('value') || ''
    this.setAttribute('value', value)
  }

  _setAttributeAutocomplete() {
    this.setAttribute('autocomplete', 'off')
  }

  _setAttributeSpellcheck() {
    this.setAttribute('spellcheck', 'off')
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  get value() {
    return this.input.value
  }

  set value(value = '') {
    const differentValue = this.input && this.input.value !== value

    if (this.input && differentValue) {
      this.input.value = value
      this.input.dispatchEvent(new Event('change'))
    }
  }

  set name(value) {
    const form = this.closest('form')
    const name = this.getAttribute('name')
    const element = this

    if (form) {
      Object.defineProperty(form, name, {
        get: () => {
          return element.getAttribute('name')
            ? element
            : undefined
        },
      })
    }
  }
}
