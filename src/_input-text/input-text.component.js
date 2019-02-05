import Minimalist, {setAttribute, listen} from '../minimalist/minimalist.class.js'

class InputText extends Minimalist {
  static observedAttributes = [
    'label',
    'placeholder',
    'value',
    'name',
    'disabled',
    'readonly',
    'maxlength',
    'autocapitalize',
    'autofocus',
    'pattern',
  ]

  validations = {
    required: () => !this.props.value,
    pattern: () => {
      const reg = new RegExp(this.getAttribute('pattern'))

      return this.props.value
        ? !reg.test(this.props.value)
        : false
    },
  }

  beforeRender() {
    this.classList.add('mn-input-text')
  }

  render(props = {}) {
    return `
      <label>${props.label || ''}</label>
      <input
        ${setAttribute('placeholder', props.placeholder)}
        ${setAttribute('value', props.value)}
        ${setAttribute('name', props.name)}
        ${setAttribute('disabled', props.disabled)}
        ${setAttribute('readonly', props.readonly)}
        ${setAttribute('maxlength', props.maxlength)}
        ${setAttribute('autocapitalize', props.autocapitalize)}
        ${setAttribute('autofocus', props.autofocus)}
        ${setAttribute('pattern', props.pattern)}
      />
    `
  }

  focus() {
    this.querySelector('input').focus()
  }

  @listen('focus', 'input')
  onFocus() {
    this.classList.add('focus')
  }

  blur() {
    this.querySelector('input').blur()
  }

  @listen('blur', 'input')
  onBlur(event) {
    this.classList.remove('focus')
    this.classList.toggle('has-value', event.target.value)
  }

  @listen('change', 'input')
  onChange(event) {
    this.setAttribute('value', event.target.value)
  }

  @listen('input', 'input')
  validate() {
    const validations = {}

    // const parentForm = this.closest('mn-form')
    // const formSubmitted = parentForm && parentForm.classList.contains('submitted')

    // if (!formSubmitted) {
    //   return
    // }

    Object
      .keys(this.validations)
      .forEach(attribute => {
        const hasAttribute = this.hasAttribute(attribute)
        const attributeIsInvalid = this.validations[attribute]()

        if (hasAttribute && attributeIsInvalid) {
          this.classList.add(attribute)
          validations[attribute] = true
        } else {
          this.classList.remove(attribute)
        }
      })

    const isInvalid = Object.values(validations).some(item => item === true)

    isInvalid
      ? this.classList.add('invalid')
      : this.classList.remove('invalid')

    return !isInvalid
  }
}

window.customElements.define('mn-input-text', InputText)

export default InputText
