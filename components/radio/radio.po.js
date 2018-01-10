const CheckboxPageObject = require('../checkbox/checkbox.po.js')

module.exports = class RadioPageObject extends CheckboxPageObject {
  constructor(component) {
    super(component)
    return this
  }
}
