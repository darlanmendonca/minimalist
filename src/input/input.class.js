import MnComponent from '../component/component.class.js'

class Input extends MnComponent {
  connectedCallback() {
    super.empty()
    this.setStyle()
    super.setChildren('label')
    super.setChildren('input')
    this.setInputEvents()
    super.setAttributes()
  }

  static get observedAttributes() {
    return [
      'label',
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

  setStyle() {
    this.classList.add('mn-input')
  }

  setInputEvents() {
    this.inputChild.addEventListener('focus', () => {
      this.classList.add('focus')
    })

    this.inputChild.addEventListener('blur', () => {
      this.classList.remove('focus')
      this.classList.toggle('has-value', this.hasValue)
    })
  }

  get validations() {
    return {
      required: () => !this.hasValue,
    }
  }

  validate() {
    const validations = {}

    for (const attribute of Object.keys(this.validations)) {
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

  get label() {
    return this.labelChild.textContent
  }

  set label(value = '') {
    this.labelChild.textContent = value
  }

  get hasValue() {
    return !(this.value === undefined
      || this.value === null
      || this.value === ''
      || Array.isArray(this.value) && this.value.length === 0)
  }
  
  get value() {
    return this.inputChild.value
  }

  set value(value = '') {
    this.inputChild.value = value
    this.inputChild.dispatchEvent(new Event('change'))
    this.classList.toggle('has-value', this.hasValue)
  }

  get name() {
    return this.inputChild.getAttribute('name')
  }

  set name(value) {
    value
      ? this.inputChild.setAttribute('name', value)
      : this.inputChild.removeAttribute('name')
  }

  get placeholder() {
    return this.inputChild.getAttribute('placeholder')
  }

  set placeholder(value) {
    this.inputChild.setAttribute('placeholder', value)
  }

  get disabled() {
    return this.inputChild.disabled
  }

  set disabled(value) {
    this.inputChild.disabled = JSON.parse(value)
  }

  get readonly() {
    return this.inputChild.readOnly
  }

  set readonly(value) {
    this.inputChild.readOnly = JSON.parse(value)
  }

  get maxlength() {
    return this.inputChild.getAttribute('maxlength')
  }

  set maxlength(value) {
    this.inputChild.setAttribute('maxlength', value)
  }

  get autocapitalize() {
    return this.inputChild.getAttribute('autocapitalize')
  }

  set autocapitalize(value) {
    this.inputChild.setAttribute('autocapitalize', value)
  }

  get autofocus() {
    return this.inputChild.getAttribute('autofocus')
  }

  set autofocus(value) {
    value
      ? this.inputChild.setAttribute('autofocus', value)
      : this.inputChild.removeAttribute('autofocus')
  }
}

window.customElements.define('mn-input', Input)

export default Input
