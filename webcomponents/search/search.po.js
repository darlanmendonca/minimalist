const InputPageObject = require('../input/input.po.js')

module.exports = class SearchPageObject extends InputPageObject {
  constructor(component) {
    super(component)
    return this
  }

  writeText(string) {
    this.component.input.value = string
    this.component.input.dispatchEvent(new Event('input'))
  }
}
