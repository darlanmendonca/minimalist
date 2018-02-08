module.exports = class MnBackdrop {
  static show() {
    document.body.classList.add('mn-backdrop-visible')
  }

  static hide() {
    document.body.classList.remove('mn-backdrop-visible')
  }
}
