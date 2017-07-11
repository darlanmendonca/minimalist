module.exports = class CheckboxPageObject {
  constructor(component) {
    this.component = component
  }

  setProperty(property, value) {
    this.component[property] = value
  }
}
