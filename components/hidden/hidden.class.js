import MnInput from '../input/input.class.js'

export default class MnHidden extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.setStyle()
    this.setInput()
    super.setChangeEvents()
    super.setAttributeValue()
    super.setAttributeName()
    super.setAttributeDisabled()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'disabled',
    ]
  }

  setStyle() {
    super.setStyle()
    this.classList.add('mn-hidden')
  }

  setInput() {
    super.setInput()
    this.input.setAttribute('type', 'hidden')
  }
}

window.customElements.define('mn-hidden', MnHidden)
