import Minimalist, {component, listen, setAttribute} from '../minimalist/minimalist.class.js'
import InputText from '../_input-text/input-text.component.js'

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
      <button></button>
    `
  }

  @listen('click', 'button')
  toggleVisibility() {
    const input = this.querySelector('input')
    const isPassword = input.getAttribute('type') === 'password'
    const type = isPassword
      ? 'text'
      : 'password'

    this.classList.toggle('show-password', isPassword)
    input.setAttribute('type', type)
  }
}

export default InputPassword
