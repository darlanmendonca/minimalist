import MnComponent from '../component/component.class.js'

class MnForm extends MnComponent {
  connectedCallback() {
    this.setStyle()
    super.setAttributes()
  }

  static get observedAttributes() {
    return [
      'disabled',
      'readonly',
    ]
  }

  setStyle() {
    this.classList.add('mn-form')
  }

  validate() {
    this.dispatchEvent(new Event('validate'))
    this.inputs
      .filter(input => !input.disabled && !input.readonly)
      .forEach(input => input.validate())

    const isInvalid = !this.querySelector('.invalid')
    return isInvalid
  }

  get disabled() {
    return this.is('disabled')
  }

  set disabled(value) {
    if (value !== this.disabled) {
      this.setAttribute('disabled', value)
    }

    this.inputs.forEach(input => input.disabled = value)
  }

  get readonly() {
    return this.is('readonly')
  }

  set readonly(value) {
    if (value !== this.readonly) {
      this.setAttribute('readonly', value)
    }

    this.inputs.forEach(input => input.readonly = value)
  }

  get inputs() {
    return Array.from(this.querySelectorAll('.mn-input'))
  }

  get data() {
    return this
      .inputs
      .reduce((object, element) => Object.assign(object, {[element.name]: element.value}), {})
  }
}

window.customElements.define('mn-form', MnForm)

export default MnForm
