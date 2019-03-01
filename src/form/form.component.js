import Minimalist, {component} from '../minimalist/minimalist.class.js'

@component('mn-form')
class Form extends Minimalist {
  static observedAttributes = [
    'disabled',
    'readonly',
  ]

  beforeRender() {
    this.classList.add('mn-form')
  }

  render() {
    return this.innerHTML
  }

  get inputs() {
    return Array.from(this.querySelectorAll('.mn-input-text'))
  }

  get data() {
    return this.inputs
      .reduce((object, element) =>
        Object
        .assign(object,
          // {[element.props.name]: element.props.value}
          {[element.getAttribute('name')]: element.getAttribute('value') || undefined}
        ), {})
  }

  validate() {
    this.dispatchEvent(new Event('validate'))
    this.inputs
      .filter(input => !input.disabled && !input.readonly)
      .forEach(input => input.isValid())

    const isInvalid = !this.querySelector('.invalid')
    return isInvalid
  }

  set disabled(value) {
    if (value && !this.hasAttribute('disabled')) {
      this.setAttribute('disabled', value)
    }

    this.inputs.forEach(input => input.disabled = value)
  }

  set readonly(value) {
    if (value && !this.hasAttribute('readonly')) {
      this.setAttribute('readonly', value)
    }

    this.inputs.forEach(input => input.readonly = value)
  }
}

export default Form
