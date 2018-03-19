export default class MnBackdrop {
  static show() {
    document.body.classList.add('mn-backdrop-visible')
  }

  static hide() {
    document.body.classList.remove('mn-backdrop-visible')
  }
}

window.customElements.define('mn-backdrop', MnBackdrop)
