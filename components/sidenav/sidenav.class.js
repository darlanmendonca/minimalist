import MnBackdrop from '../backdrop/backdrop.class.js'

export default class MnSidenav extends window.HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this._setOpenEvents()
    this._setToggleEvents()
    this._setCloseEvents()
  }

  setStyle() {
    this.classList.add('mn-sidenav')
    this.classList.add('mn-card')
    document.body.classList.add('mn-backdrop')
  }

  _setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[open-sidenav="${this.id}"]`)) {
        this.open()
        event.stopPropagation()
      }
    })
  }

  _setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-sidenav="${this.id}"]`)) {
        this.toggle()
        event.stopPropagation()
      }
    })
  }

  _setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[close-sidenav]')) {
        this.close()
        event.stopPropagation()
      }
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.matches('[open-sidenav]')
        && !event.target.matches('[close-sidenav]')
        && !event.target.matches('[toggle-sidenav]')
        && !event.target.closest('mn-sidenav')
      const sidebarVisible = this.classList.contains('visible')

      if (clickOutside && sidebarVisible) {
        this.close()
      }
    })

    document.addEventListener('keyup', event => {
      const esc = event.key === 'Escape'
      const isOpened = this.classList.contains('visible')

      if (esc && isOpened) {
        this.close()
      }
    })
  }

  open() {
    const fontSizeHTML = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'))
    const activeElement = this.querySelector('.active')
    this.scrollTop = activeElement
      ? activeElement.offsetTop - fontSizeHTML * 1.5
      : 0
    this.classList.add('visible')
    document.body.classList.add('mn-sidenav-visible')
    MnBackdrop.show()
  }

  close() {
    document.body.classList.remove('mn-sidenav-visible')
    this.classList.remove('visible')
    MnBackdrop.hide()
  }

  toggle() {
    this.classList.toggle('visible')
      ? this.open()
      : this.close()
  }
}

window.customElements.define('mn-sidenav', MnSidenav)
