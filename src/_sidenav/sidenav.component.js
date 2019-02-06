import Minimalist, {listen, keydown} from '../minimalist/minimalist.class.js'
import MnBackdrop from '../_backdrop/backdrop.class.js'

class Sidenav extends Minimalist {
  beforeRender() {
    this.classList.add('mn-sidenav')
    this.classList.add('mn-section')
    MnBackdrop.create()
  }

  render() {
    return this.innerHTML
  }

  @listen('click', `[show-sidenav]`, false)
  show(event) {
    let id

    if (event) {
      event.stopPropagation()
      id = event.target.getAttribute('show-sidenav')
    }

    if (id && window[id]) {
      this.classList.add('visible')
      this.scrollTop = 0
      document.body.classList.add('mn-sidenav-visible')
      MnBackdrop.show()
      this.dispatchEvent(new Event('show'))
    }
  }

  @keydown('Escape')
  @listen('click', `[hide-sidenav]`, false)
  hide() {
    document.body.classList.remove('mn-sidenav-visible')
    this.classList.remove('visible')
    MnBackdrop.hide()
    this.dispatchEvent(new Event('hide'))
  }
}

window.customElements.define('mn-sidenav', Sidenav)

export default Sidenav

