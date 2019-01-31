import MnCore, {setAttribute} from '../core/core.class.js'

class MnCoreInputText extends MnCore {
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

  render(props) {
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
}

window.customElements.define('mn-core-input-text', MnCoreInputText)

export default MnCoreInputText
