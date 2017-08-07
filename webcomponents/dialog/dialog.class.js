const {HTMLElement} = window

module.exports = class MnDialog extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setCard()
    this.setButtonClose()
    this.setOpenEvents()
    this.setToggleEvents()
    this.setCloseEvents()
  }

  setStyle() {
    this.classList.add('mn-dialog')
    document.body.classList.add('mn-backdrop')
  }

  setCard() {
    const card = document.createElement('div')
    card.classList.add('mn-card')
    card.innerHTML = this.innerHTML
    this.innerHTML = ''
    this.appendChild(card)
    this.card = card
  }

  setButtonClose() {
    const button = document.createElement('button')
    button.classList.add('mn-button')
    button.classList.add('action')
    button.setAttribute('close-dialog', '')
    const dialog = this.querySelector('.mn-card')
    dialog.insertBefore(button, dialog.firstChild)
  }

  setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[open-dialog="${this.id}"]`)) {
        this.open()
        event.stopPropagation()
      }
    })
  }

  setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-dialog="${this.id}"]`)) {
        this.toggle()
        event.stopPropagation()
      }
    })
  }

  setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[close-dialog]')) {
        this.close()
        event.stopPropagation()
      }
    })

    document.addEventListener('mousedown', event => {
      const dialogVisible = this.classList.contains('visible')
      const clickOutside = event.target.matches('.mn-dialog')

      if (dialogVisible && clickOutside) {
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
    const previousDialog = document.querySelector('.mn-dialog.visible')
    if (previousDialog) {
      previousDialog.classList.remove('visible')
    }

    this.classList.add('visible')
    this.scrollTop = 0
    document.body.classList.add('mn-dialog-visible')
    document.body.classList.add('mn-backdrop-visible')
  }

  close() {
    document.body.classList.remove('mn-dialog-visible')
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop-visible')
  }

  toggle() {
    this.classList.toggle('visible')
      ? this.open()
      : this.close()
  }
}
