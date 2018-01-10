const InputPageObject = require('../input/input.po.js')

module.exports = class EmailPageObject extends InputPageObject {
  constructor(component) {
    super(component)
    return this
  }
}
