import Minimalist, {listen} from '../minimalist/minimalist.class.js'

class Button extends Minimalist {
  beforeRender() {
    this.classList.add('mn-button')
    this.setAttribute('tabindex', '0')
  }

  render() {
    return this.innerHTML
  }

  @listen('click')
  onClick() {
    this.blur()
  }
}

window.customElements.define('mn-button', Button)

export default Button
