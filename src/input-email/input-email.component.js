import {component, setAttribute} from '../minimalist/minimalist.class.js'
import InputText from '../input-text/input-text.component.js'

@component('mn-input-email')
class InputEmail extends InputText {
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
    this.classList.add('mn-input-email')
  }

  render(props = {}) {
    return `
      <label>${props.label || ''}</label>
      <input
        ${setAttribute('type', 'email')}
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

export default InputEmail
