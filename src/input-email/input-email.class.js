import MnInputText from '../input-text/input-text.class.js'

class MnInputEmail extends MnInputText {
  connectedCallback() {
    super.empty()
    super.setStyle()
    this.setStyle()
    super.setChildren('label')
    super.setChildren('input')
    this.setInput()
    super.setInputEvents()
    this.setAttributes()
  }

  setStyle() {
    this.classList.add('mn-input-email')
  }

  setInput() {
    this.inputChild.setAttribute('type', 'email')
    const defaultPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*'
    this.setAttribute('pattern', this.getAttribute('pattern') || defaultPattern)
  }
}

window.customElements.define('mn-input-email', MnInputEmail)

export default MnInputEmail
