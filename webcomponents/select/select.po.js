const InputPageObject = require('../input/input.po.js')

module.exports = class SelectPageObject extends InputPageObject {
  constructor(component) {
    super(component)
    return this
  }

  addOption(text, value) {
    const option = document.createElement('div')
    option.classList.add('option')
    option.textContent = text

    if (value) {
      option.setAttribute('value', value)
    }

    this.component.menu.appendChild(option)
  }
}
