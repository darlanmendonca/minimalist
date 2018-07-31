import MnInputText from '../input-text/input-text.class.js'

class MnInputPassword extends MnInputText {
  connectedCallback() {
    super.empty()
    super.setStyle()
    this.setStyle()
    super.setChildren('label')
    super.setChildren('input')
    super.setChildren('button')
    this.setInput()
    super.setInputEvents()
    this.setVisibility()
    this.setAttributes()
  }

  setStyle() {
    this.classList.add('mn-input-password')
  }

  setInput() {
    this.inputChild.setAttribute('type', 'password')
  }

  setVisibility() {
    this.buttonChild.addEventListener('click', () => this.toggleVisibility())
  }

  toggleVisibility() {
    const isPassword = this.inputChild.getAttribute('type') === 'password'
    const type = isPassword
      ? 'text'
      : 'password'

    this.classList.toggle('show-password', isPassword)
    this.inputChild.setAttribute('type', type)
  }
}

window.customElements.define('mn-input-password', MnInputPassword)

export default MnInputPassword
