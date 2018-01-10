const InputPageObject = require('../input/input.po.js')

module.exports = class SelectPageObject extends InputPageObject {
  constructor(component) {
    super(component)
    return this
  }

  addOption(text, value) {
    const option = document.createElement('option')
    option.textContent = text

    if (value) {
      option.setAttribute('value', value)
    }

    this.component.menu.appendChild(option)
  }

  clickOn(value) {
    const option = Array
      .from(this.component.querySelectorAll('.option'))
      .filter(option => option.textContent === value)[0]

    if (option) {
      option.click()
    }
  }
}
