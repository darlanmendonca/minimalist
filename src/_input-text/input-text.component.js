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
    // onfocus="${this.onFocus}"
    // onblur="${this.onBlur}"
    // onclick="${() => console.log('lorem ipsum click', this)}"
  }

  focus() {
    this.querySelector('input').focus()
  }

  @listener('focus', 'input')
  onFocus() {
    this.classList.add('focus')
  }

  blur() {
    this.querySelector('input').blur()
  }

  @listener('blur', 'input')
  onBlur(event) {
    this.classList.remove('focus')
    this.classList.toggle('has-value', event.target.value)
  }
}

window.customElements.define('mn-input-text', InputText)

export default InputText

function listener(event, element) {
  return (target, key, descriptor) => {
    target.events = target.events || []
    // console.log(target)
    target.events.push({
      event,
      element,
      method: key,
    })
    return descriptor
  }
}
