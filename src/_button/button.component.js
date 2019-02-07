import Minimalist, {component, listen} from '../minimalist/minimalist.class.js'

@component('mn-button')
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

export default Button
