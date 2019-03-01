import {component, setAttribute} from '../minimalist/minimalist.class.js'
import InputText from '../input-text/input-text.component.js'

@component('mn-input-password')
class InputPassword extends InputText {
  static observedAttributes = [
    'label',
    'placeholder',
    'value',
    'name',
    'disabled',
    'readonly',
    'maxlength',
    'autofocus',
    'pattern',
  ]

  get validations() {
    return {
      required: super.validations.required,
      pattern: super.validations.pattern,
      match: () => {
        const targetElement = this.parentNode && this.parentNode.querySelector(`[name="${this.props.match}"]`)
        return targetElement && this.hasValue
          ? this.props.value > targetElement.props.value
          : false
      },
    }
  }

  beforeRender() {
    super.beforeRender()
    this.classList.add('mn-input-password')
  }

  render(props = {}) {
    return `
      <label>${props.label || ''}</label>
      <input
        ${setAttribute('type', 'password')}
        ${setAttribute('placeholder', props.placeholder)}
        ${setAttribute('value', props.value)}
        ${setAttribute('name', props.name)}
        ${setAttribute('disabled', props.disabled)}
        ${setAttribute('readonly', props.readonly)}
        ${setAttribute('maxlength', props.maxlength)}
        ${setAttribute('autofocus', props.autofocus)}
        ${setAttribute('pattern', props.pattern)}
      />
    `
  }
}

export default InputPassword
