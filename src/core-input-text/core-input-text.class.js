import MnCore from '../core/core.class.js'

class MnCoreInputText extends MnCore {
  static observedAttributes = [
    'label',
    'value',
    'name',
    'placeholder',
    'disabled',
    'readonly',
    'maxlength',
    'autocapitalize',
    'autofocus',
    'pattern',
  ]

  render(props) {
    return `
      <label>${props.label}</label>
      <input
        value="${props.value}"
        name="${props.name}"
        placeholder="${props.placeholder}"
        ${props.disabled ? 'disabled' : ''}
      />
    `
  }
}

window.customElements.define('mn-core-input-text', MnCoreInputText)

export default MnCoreInputText
