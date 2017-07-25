const MnSelect = require('../select/select.class.js')

module.exports = class MnPassword extends MnSelect {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
    this.setLoading()
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-autocomplete')
  }

  setLoading() {
    const loading = document.createElement('div')
    loading.classList.add('loading')
    this.appendChild(loading)
  }

  _setInput() {
    super._setInput()

    this.input.addEventListener('input', () => {
      const event = new Event('search')
      event.query = this.input.value
      this.dispatchEvent(event)
    })
  }

  cleanOptions() {
    const options = this.querySelectorAll('option')
    Array
      .from(options)
      .forEach(option => this.removeChild(option))
  }

  fetch(request) {
    const requestType = typeof request

    this.cleanOptions()
    this.classList.add('loading')

    if (requestType === 'function') {
      return request()
        .then(res => {
          this.classList.remove('loading')
          return res
        })
    } else {
      return fetch(request)
        .then(res => {
          this.classList.remove('loading')
          return res.json()
        })
    }
  }
}
