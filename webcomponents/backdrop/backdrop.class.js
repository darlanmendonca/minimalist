class MnBackdrop {
  static assign(element) {
    element.classList.add('mn-backdrop')
    element.addEventListener('keyup', escape)

    function escape(event) {
      const esc = event.key === 'Escape'

      if (esc && MnBackdrop.isVisible) {
        MnBackdrop.target = undefined
        MnBackdrop.hide()
      }
    }
  }

  static show(options = {}) {
    if (options.hasOwnProperty('target')) {
      const {target} = options
      this.target = target
    }
    document.body.classList.add('mn-backdrop-visible')
  }

  static hide(options = {}) {
    const {target} = options
    if (target === this.target) {
      this.target = undefined
      document.body.classList.remove('mn-backdrop-visible')
    }
  }

  static get isVisible() {
    return document.body.classList.contains('mn-backdrop-visible')
  }
}

window.MnBackdrop = MnBackdrop
module.exports = MnBackdrop
