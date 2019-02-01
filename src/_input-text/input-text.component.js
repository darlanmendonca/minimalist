import Minimalist, {setAttribute} from '../minimalist/minimalist.class.js'

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

  beforeRender() {
    this.classList.add('mn-input-text')
  }

  afterRender() {
    const input = this.querySelector('input')

    input.addEventListener('focus', () => {
      this.classList.add('focus')
    })

    input.addEventListener('blur', (event) => {
      this.classList.remove('focus')
      this.classList.toggle('has-value', event.target.value)
    })
  }

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

window.customElements.define('mn-input-text', InputText)

export default InputText
