import MnComponent from '../component/component.class.js'

class MnForm extends MnComponent {
  connectedCallback() {
    this.setStyle()
    super.setAttributes()
  }

  static get observedAttributes() {
    return [
      'name',
      'disabled',
      'readonly',
    ]
  }

  setStyle() {
    this.classList.add('mn-form')
  }

  get name() {
    return this.getAttribute('name') || undefined
  }

  set name(value) {
    value && value !== this.name
      ? this.setAttribute('name', value)
      : !value
        ? this.removeAttribute('name')
        : null
  }
}

window.customElements.define('mn-form', MnForm)

export default MnForm
