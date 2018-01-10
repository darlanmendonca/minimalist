module.exports = class CheckboxPageObject {
  constructor(component) {
    this.component = component
  }

  setProperty(property, value) {
    this.component[property] = value
  }

  setAttribute(attribute, value = '') {
    this.component.setAttribute(attribute, value)
  }

  removeAttribute(attribute) {
    this.component.removeAttribute(attribute)
  }
}
