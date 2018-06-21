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

  get disabled() {
    return Boolean(this.getAttribute('disabled'))
  }

  set disabled(value) {
    if (value !== this.disabled) {
      this.setAttribute('disabled', value)
    }
  }
}

window.customElements.define('mn-form', MnForm)

export default MnForm
