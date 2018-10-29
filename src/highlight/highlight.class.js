import MnComponent from '../component/component.class.js'

class MnHighlight extends MnComponent {
  connectedCallback() {
    this.setStyle()
    this.setCharacters()
    super.setAttributes()
  }

  static get observedAttributes() {
    return [
      'query',
    ]
  }

  setStyle() {
    this.classList.add('mn-highlight')
  }

  setCharacters() {
    const text = this.textContent
    this.empty()
    const chars = text
      .split('')
      .map(char => `<span class="char" data-char="${char.toLowerCase()}">${char}</span>`)
      .join('')

    this.insertAdjacentHTML('beforeend', chars)
  }

  set query(value) {
    this.classList.toggle('has-query', this.has('query'))
    const match = RegExp(value.split('').join('.*'), 'i').test(this.textContent)

    Array
      .from(this.querySelectorAll('.match'))
      .forEach(char => char.classList.remove('match'))

    if (match) {
      value
        .split('')
        .forEach(char => {
          const selector = `span[data-char="${char.toLowerCase()}"]:not(.match)`
          const letter = this.querySelector(`.match ~ ${selector}`) || this.querySelector(selector)
          letter
            ? letter.classList.add('match')
            : null
        })
    }
  }
}

window.customElements.define('mn-highlight', MnHighlight)

export default MnHighlight
