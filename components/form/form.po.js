module.exports = class FormPageObject {
  constructor(component) {
    this.component = component
  }

  setAttribute(name, value = '') {
    this.component.setAttribute(name, value)
  }

  removeAttribute(name) {
    this.component.removeAttribute(name)
  }

  setProperty(property, value) {
    this.component[property] = value
  }
}
