class MnBackdrop {
  static create() {
    document.body.classList.add('mn-backdrop')
  }

  static show() {
    document.body.classList.add('mn-backdrop-visible')
  }

  static hide() {
    document.body.classList.remove('mn-backdrop-visible')
  }
}

export default MnBackdrop
