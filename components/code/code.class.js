module.exports = class MnCode extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setMarkup()
  }

  setStyle() {
    this.classList.add('mn-code')
  }

  setMarkup() {
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    code.classList = this.classList
    code.textContent = this.textContent
      .replace('&lt;', '<')
      .replace('&gt;', '>')

    pre.appendChild(code)
    this.textContent = ''
    this.insertBefore(pre, this.firstChild)
  }
}
