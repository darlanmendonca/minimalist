class MnBackdrop {
  constructor() {
    document.body.classList.add('mn-backdrop')

    document.addEventListener('keyup', () => {
      const esc = event.key === 'Escape'

      if (esc && this.isVisible) {
        this.hide()
      }
    })
  }

  show() {
    document.body.classList.add('mn-backdrop-visible')
  }

  hide() {
    document.body.classList.remove('mn-backdrop-visible')
  }

  get isVisible() {
    return document.body.classList.contains('mn-backdrop-visible')
  }
}

window.MnBackdrop = MnBackdrop
module.exports = MnBackdrop
