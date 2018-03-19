import MnInput from '../input/input.class.js'

export default class MnEmail extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
    this.classList.add('mn-email')
    this.input.setAttribute('type', 'email')
    const regex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*'
    this.setAttribute('pattern', this.getAttribute('pattern') || regex)
  }
}

window.customElements.define('mn-email', MnEmail)
