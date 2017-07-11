const {HTMLElement} = window
const evaluate = require('evaluate-string')

module.exports = class MnCheckbox extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.ready = false
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setLabel()
    this._setInput()
    this._setCustomInput()
    this._setForm()
    this.checked = this.hasAttribute('checked')
    this.disabled = this.hasAttribute('disabled')
    this.readonly = this.hasAttribute('readonly')
    this.name = this.hasAttribute('name')
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode && this.input && this.ready) {
      this[name] = value || this.hasAttribute(name)
    }
  }

  _setStyle() {
    this.classList.add('mn-checkbox')
    this.classList.add('mn-option')
  }

  _setLabel() {
    this.label = document.createElement('label')
    this.appendChild(this.label)

    this.label.addEventListener('mouseleave', () => {
      this.input.blur()
    })

    document.addEventListener('click', event => {
      const isLabel = event.target.tagName === 'LABEL'
        && event.target.getAttribute('for') === this.id

      if (isLabel && this.id) {
        this.input.checked = !this.input.checked
        this.input.dispatchEvent(new Event('change'))
      }
    })
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.setAttribute('type', 'checkbox')
    this.label.appendChild(this.input)

    this.addEventListener('click', () => {
      setTimeout(() => {
        this.input.blur()
      }, 0)
    })

    this.input.addEventListener('change', () => {
      this.checked
        ? this.setAttribute('checked', '')
        : this.removeAttribute('checked')

      this.form && this.form.classList && this.form.classList.contains('submitted')
        ? this.validate()
        : null
    })
  }

  _setCustomInput() {
    const input = document.createElement('div')
    input.classList.add('input')

    const vector = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    vector.innerHTML = `
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round">
          <g
            x="50%" y="50%"
            transform="translate(5, 5)"
            stroke-width="2">
              <polyline
                points="12.3825 0.581533333 3.653 10.3935333 0.273722222 6.7386"></polyline>
          </g>
      </g>
    `
    input.appendChild(vector)
    this.label.appendChild(input)
  }

  _setForm() {
    this.form = this.closest('form') || this.closest('mn-form') || document
  }

  _setValidations() {
    this.validations = {
      required: () => {
        return Array.isArray(this.value)
          ? !this.value.some(value =>
            value === evaluate(this.getAttribute('value')) || value === this.getAttribute('placeholder')
          )
          : !this.value
      },
    }
  }

  get checked() {
    return this.input.checked
  }

  set checked(value) {
    this.input.checked = value
    this.input.dispatchEvent(new Event('change'))
  }

  set disabled(value) {
    this.input.disabled = value
  }

  set readonly(value) {
    this.input.readOnly = value
  }

  set name(value) {
    const name = this.getAttribute('name')

    if (name) {
      const element = this
      this.input.setAttribute('name', name)

      if (this.form && !this.form[name]) {
        Object.defineProperty(this.form, name, {
          get: () => {
            return element.getAttribute('name')
              ? element
              : undefined
          },
        })
      }
    }
  }

  get value() {
    const values = this
      .options
      .filter(option => option.checked)
      .map(option => !option.hasAttribute('value') && !option.hasAttribute('placeholder')
        ? this.checked
        : option.hasAttribute('value')
          ? evaluate(option.getAttribute('value'))
          : option.getAttribute('placeholder')
      )

    const isSingleOption = this.options.length === 1
    const isBoolean = typeof evaluate(this.options[0].getAttribute('value')) === 'boolean'
      || !this.options[0].hasAttribute('value') && !this.options[0].hasAttribute('placeholder')

    return isSingleOption && isBoolean
      ? Boolean(values[0])
      : values
  }

  set value(value) {
    const values = Array.isArray(value)
      ? value
      : [value]

    this.options
    .forEach(option => {
      const check = values.some(value => value === option.getAttribute('value'))
      check
        ? option.setAttribute('checked', '')
        : option.removeAttribute('checked')
      option.checked = check
    })
  }

  get options() {
    const name = this.getAttribute('name')
      ? `[name="${this.getAttribute('name')}"]`
      : ':not([name])'

    return Array.from(this.form.querySelectorAll(`.mn-checkbox${name}`))
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
