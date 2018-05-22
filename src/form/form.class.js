import MnComponent from '../component/component.class.js'

class MnForm extends MnComponent {
  connectedCallback() {
    super.empty()
    this.setStyle()
    super.setChildren('form')
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
}

window.customElements.define('mn-form', MnForm)

export default MnForm
