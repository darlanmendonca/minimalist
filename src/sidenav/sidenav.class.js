import MnComponent from '../component/component.class.js'
import MnBackdrop from '../_backdrop/backdrop.class.js'

export default class MnSidenav extends MnComponent {
  connectedCallback() {
    this.setStyle()
    this.setShowEvents()
    this.setHideEvents()
    this.setToggleEvents()
  }

  setStyle() {
    this.classList.add('mn-sidenav')
    this.classList.add('mn-section')
    document.body.classList.add('mn-backdrop')
  }

  setShowEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[show-sidenav="${this.id}"]`)) {
        event.stopPropagation()
        this.show()
      }
    })

    this.addEventListener('show', () => this.autofocus())
  }

  setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-sidenav="${this.id}"]`)) {
        event.stopPropagation()
        this.toggle()
      }
    })
  }

  setHideEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[hide-sidenav]')) {
        event.stopPropagation()
        this.hide()
      }
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.matches('[show-sidenav]')
        && !event.target.matches('[hide-sidenav]')
        && !event.target.matches('[toggle-sidenav]')
        && !event.target.closest('mn-sidenav')
      const sidebarVisible = this.classList.contains('visible')

      if (clickOutside && sidebarVisible) {
        this.hide()
      }
    })

    document.addEventListener('keyup', event => {
      const esc = event.key === 'Escape'
      const isVisible = this.classList.contains('visible')

      if (esc && isVisible) {
        this.hide()
      }
    })
  }

  show() {
    this.classList.add('visible')
    this.scrollTop = 0
    document.body.classList.add('mn-sidenav-visible')
    MnBackdrop.show()
    this.dispatchEvent(new Event('show'))
  }

  hide() {
    document.body.classList.remove('mn-sidenav-visible')
    this.classList.remove('visible')
    MnBackdrop.hide()
    this.dispatchEvent(new Event('hide'))
  }

  toggle() {
    this.classList.toggle('visible')
      ? this.show()
      : this.hide()
  }
}

window.customElements.define('mn-sidenav', MnSidenav)
